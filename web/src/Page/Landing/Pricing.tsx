/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";
import Button from "libs/ui/Button"

export default observer(() => {
  return (
    <div id="price" className="flex flex-col w-screen">
      <div className="bg-blue-600 flex flex-col p-11">
        <Text className="text-white text-6xl font-bold mb-7">Pricing</Text>
        <Text className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </div>
      <div className="flex flex-row">
        <div className="flex lg:w-1/2 flex-col  bg-white p-11">
          <Text className="text-5xl text-gray-400 self-center font-bold">Basic</Text>
          <div className="flex flex-col justify-around">
            <Text className="text-2xl my-6">Digital Invitation</Text>
            <Text className="text-2xl my-6">Edit & Update</Text>
            <Text className="text-2xl my-6 text-white">QR Code</Text>
            <Text className="text-2xl my-6 text-white">Manage Guess (VIP or general) up to 200++</Text>
          </div>
          <Button 
            className="bg-white hover:bg-blue-300 hover:text-white text-blue-500 border-blue-300" 
            caption={<div className="flex flex-col">
              <Text css={css`
                  text-decoration-line: line-through;
                `}>Rp. 150.000,-</Text>
                <Text className="text-2xl">Rp. 0,-</Text>
            </div>}
            onClick={() => window.location.href = "#login"}
            />
        </div>
        <div className="flex lg:w-1/2 flex-col bg-blue-500 p-11">
          <Text className="text-5xl text-white self-center font-bold">Premium</Text>
          <div className="flex flex-col justify-around text-white">
            <Text className="text-2xl my-6">Digital Invitation</Text>
            <Text className="text-2xl my-6">Edit & Update</Text>
            <Text className="text-2xl my-6">QR Code</Text>
            <Text className="text-2xl my-6">Manage Guess (VIP or general) up to 200++</Text>
          </div>
          <Button 
              className="bg-white hover:bg-blue-300 hover:text-white text-blue-500 py-6" 
              caption="Coming Soon!"
              onClick={() => window.location.href = "#login"}/>
        </div>
      </div>
    </div>
  );
});
