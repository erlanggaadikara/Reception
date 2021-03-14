/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";

export default observer(() => {
  return (
    <div
      id="about"
      className="flex flex-col bg-gray-100 w-screen h-screen p-16 justify-between"
    >
      <div
        // className="lg:w-1/2 w-auto flex flex-col h-96 self-end"
        css={css`
          display: flex;
          width: auto;
          flex-direction: column;
          height: 24rem;
          align-self: flex-end;
          @media (min-width: 1024px) {
            width: 50%;
          }
        `}
      >
        <Text className="text-blue text-4xl">We give you quick solution</Text>
        <div
          className="bg-blue h-2 my-2"
          css={css`
            background-color: #5cbaee;
          `}
        ></div>
        <Text className="text-blue text-4xl">
          No paper, make it and share it!
        </Text>
        <Text className="text-black text-justify text-base mt-7">
          Honeyday make it easier to create and share your invitation, you can
          also edit and update information without wasting time and money. Ever
          thought manage guests much easier? Honeyday record every guest with QR
          Code feature.
        </Text>
      </div>
    </div>
  );
});
