import { observer } from "mobx-react-lite";
import Text from "libs/ui/Text";

export default observer(() => {
  const assets = [
    {
      name: "Digital  Invitation Card",
      img: "assets/image/di-icon.png",
    },
    {
      name: "Manage Guest",
      img: "assets/image/mg-icon.png",
    },
    {
      name: "Interactive With Google Maps",
      img: "assets/image/gm-icon.png",
    },
  ];

  return (
    <div
      id="whatis"
      className="bg-white w-screen"
    >
      {/* <div className="lg:w-1/2 w-auto flex flex-col h-96">
        <Text className="text-blue text-4xl">
          An Adaptive management system for wedding event
        </Text>
        <div className="bg-blue h-2 my-6"></div>
        <Text className="text-black text-justify text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </div> */}
      <div className="flex flex-col">
        {/* <div className="bg-blue text-white text-center font-bold py-3 rounded-md">
          Some other features
        </div> */}
        <div className="flex flex-row justify-evenly">
          {assets.map((item) => (
            <div className="flex flex-col my-8 lg:w-auto w-20 items-center">
              <img src={item.img} className="lg:w-40 lg:h-40 w-20 h-20" alt="di" />
              <Text className="text-black my-8 text-center font-semibold lg:text-base text-xs">
                {item.name}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
