/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Button from "libs/ui/Button";
import Card from "libs/ui/Card";
import Image from "libs/ui/Image";
import AddIcon from "@material-ui/icons/Add";
import Text from "libs/ui/Text";
import TextInput from "libs/ui/TextInput";
import { navigate } from "@reach/router";
import { v4 as uuid } from "uuid";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

const item = [
  { name: "Adinda & Ananda", img: "/assets/images/wpp-2.png", status: 1 },
  { name: "Adinda & Ananda", img: "/assets/images/wpp-1.png", status: 2 },
  { name: "Adinda & Ananda", img: "/assets/images/GoogleMap.png", status: 1 },
  { name: "Adinda & Ananda", img: "/assets/images/GoogleMap.png", status: 3 },
  { name: "Adinda & Ananda", img: "/assets/images/GoogleMap.png", status: 1 },
  { name: "Adinda & Ananda", img: "/assets/images/GoogleMap.png", status: 2 },
];

export default observer((props: propType) => {
  return (
    <div className="flex flex-col w-full">
      <div className="lg:p-8 p-1 flex flex-row justify-between">
        <Text className="font-bold text-xl">Dashboard</Text>
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
      <div className="flex px-6 overflow-scroll">
        {item.map((items: any) => (
          <Card key={uuid()} className="border-gray-400">
            <div className="relative overflow-hidden h-44 w-64">
              <div
                style={{
                  backgroundColor:
                    items.status == 1
                      ? "green"
                      : items.status == 2
                      ? "blue"
                      : "red",
                }}
                className="absolute float-right right-1 top-1 rounded-md px-6 bg-blue-500"
              >
                <Text className="text-white">
                  {items.status == 1
                    ? "ACTIVE"
                    : items.status == 2
                    ? "PENDING"
                    : "OUTDATED"}
                </Text>
              </div>
              <Image
                src={items.img}
                alt="wpp"
                className="object-cover h-44"
                css={css`
                  transition: transform 0.5s, filter 1.5s ease-in-out;
                  border-top-right-radius: 0.375rem;
                  border-top-left-radius: 0.375rem;
                  &:hover {
                    transform: scale(1.1);
                  }
                `}
              />
            </div>
            <Text className="py-6 px-6">{items.name}</Text>
          </Card>
        ))}
      </div>
      <div className="flex self-center py-12 text-center">
        <Text className="italic text-center">
          {`
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          `}
        </Text>
      </div>
    </div>
  );
});
