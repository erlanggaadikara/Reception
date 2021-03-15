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
      <Text className="text-gray-400 py-4">Choose your theme</Text>
      <form>
        <div className="flex flex-row">
          <Button
            className="lg:w-96 bg-gray-500 hover:bg-gray-300 text-white"
            caption="Previous"
            onClick={() => navigate(-1)}
          />
          <Button
            className="lg:w-96 bg-green-500 hover:bg-green-300 text-white"
            caption="Next"
          />
        </div>
      </form>
    </div>
  );
});
