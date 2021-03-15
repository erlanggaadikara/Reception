/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";
import TextInput from "libs/ui/TextInput";
import { navigate } from "@reach/router";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      css={css`
        width: 82vw;
      `}
    >
      <Text className="text-3xl">New Appointment</Text>
      <Text className="text-gray-400 py-4">Please fill the form</Text>
      <form>
        <TextInput
          className="lg:w-96 border-gray border-2 pl-2"
          type="text"
          label="Bride's Name"
          name=""
          value={null}
          onChange={() => null}
        />
        <TextInput
          className="lg:w-96 border-gray border-2 pl-2"
          type="date"
          label="Date event"
          name=""
          value={null}
          onChange={() => null}
        />
        <Button
          className="lg:w-96 bg-green-500 hover:bg-green-300 text-white"
          caption="Next"
          onClick={() => navigate("New/Theme")}
        />
      </form>
    </div>
  );
});
