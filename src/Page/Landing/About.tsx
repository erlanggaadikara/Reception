/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";

export default observer(() => {
  return (
    <div
      id="about"
      className="flex flex-col bg-white w-screen h-screen p-16 justify-between"
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
            .lg\:w-1\/2 {
              width: 50%;
            }
          }
        `}
      >
        <Text className="text-blue text-4xl">We give you quick solution</Text>
        <div className="bg-blue h-2 my-2"></div>
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
      <div className="flex flex-col items-center  mt-10">
        <Text className="text-blue text-4xl">Lorem Ipsum</Text>
        <div className="bg-blue h-2 my-6 w-full"></div>
        <Text className="text-black text-base text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
        <Text className="text-black text-base text-justify mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
      </div>
    </div>
  );
});
