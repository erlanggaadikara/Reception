/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Button from "libs/ui/Button";
import Card from "libs/ui/Card";
import Image from "libs/ui/Image";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import Text from "libs/ui/Text";
import TextInput from "libs/ui/TextInput";
import { navigate } from "@reach/router";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

const item = [
  { name: "Adinda & Ananda", img: "/assets/images/wpp-2.png" },
  { name: "Adinda & Ananda", img: "/assets/images/wpp-1.png" },
  { name: "Adinda & Ananda", img: "/assets/images/GoogleMap.png" },
];

export default observer((props: propType) => {
  return (
    <div
      className="flex flex-col"
      css={css`
        width: 82vw;
      `}
    >
      <div className="p-8 flex flex-row justify-end">
        <Button
          className="bg-green-500 hover:bg-green-300 text-white"
          caption={
            <div className="flex flex-row text-sm">
              <AddIcon fontSize="small" />
              <Text className="pl-2 text-sm">New Appointment</Text>
            </div>
          }
          onClick={() => navigate("Dashboard/New")}
        />
      </div>
      <div className="flex flex-row justify-between mb-7">
        <Text className="px-6 font-bold text-xl m-2">Recently Added</Text>
        {item.length >= 5 && (
          <form onSubmit={(e) => e.preventDefault()}>
            <TextInput
              className="lg:w-96 border-gray border-2 pl-2 mx-4"
              type="text"
              name="search"
              placeholder="Search..."
              value={null}
              onChange={() => null}
            />
          </form>
        )}
      </div>
      <div className="flex flex-row px-6 overflow-auto">
        {item.map((items: any) => (
          <Card
            className="border-gray-900"
            css={css`
              overflow: hidden;
              &:hover img {
                filter: grayscale(0);
                transform: scale(1.1);
              }
            `}
          >
            <Image
              src={items.img}
              alt="wpp"
              css={css`
                transition: transform 0.5s, filter 1.5s ease-in-out;
                filter: grayscale(100%);
                border-top-right-radius: 0.375rem;
                border-top-left-radius: 0.375rem;
                height: 11rem;
                width: 16rem;
              `}
            />
            <Text className="py-6 px-6">{items.name}</Text>
          </Card>
        ))}
      </div>
    </div>
  );
});
