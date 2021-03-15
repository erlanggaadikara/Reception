/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Button from "libs/ui/Button";
import Card from "libs/ui/Card";
import Image from "libs/ui/Image"
import AddIcon from "@material-ui/icons/Add";
import Text from "libs/ui/Text";
import {navigate} from "@reach/router"

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  return (
    <div className="flex flex-col" css={css`width: 82vw`}>
      <div className="p-8 flex flex-row justify-end">
        <Button
          className="bg-green-500 hover:bg-green-300 text-white"
          caption={
            <div className="flex flex-row text-sm">
              <AddIcon fontSize="small"/>
              <Text className="pl-2 text-sm">New Appointment</Text>
            </div>
          }
          onClick={() => navigate("Dashboard/New")}
        />
      </div>
      <Text className="px-6 font-bold text-xl mb-7">Recently Added</Text>
      <div className="flex flex-row px-6 overflow-auto">
          {[1,2,3].map((item: any) => (
              <Card className="border-gray-900">
              <Image src={"assets/image/wpp-1.png"} className="object-cover h-44 w-64" alt="wpp"/>
              <Text className="py-6 px-6">Ananda & Adinda</Text>
            </Card> 
          ))}
      </div>
    </div>
  );
});