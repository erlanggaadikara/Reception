import { observer, useLocalObservable } from "mobx-react-lite";
import Dropdown from "libs/ui/Dropdown";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { user } from "Page/Landing";
import Text from "libs/ui/Text";

export default observer(() => {
  const meta = useLocalObservable(() => ({ open: false as any }));

  return (
    <div
      id="navbar"
      className="w-screen absolute top-0 bg-transparent lg:p-10 p-5"
    >
      <div className="flex flex-row items-center md:py-4 md:px-5 font-bold text-black ">
        <div className="w-1/2 flex-col flex">
          <Text className="text-white lg:text-3xl text-xl font-semibold">
            harimadu.id
          </Text>
          <Text className="text-white font-light lg:text-base text-xs">
            Wedding Management System
          </Text>
        </div>
        <div className="w-1/2 invisible lg:visible flex flex-row items-center justify-around rounded-full lg:py-2 lg:px-8 lg:bg-white">
          <a href="#about">FAQ</a>
          <a href="#price">Price</a>
          <a href="#contact">Contact</a>
          <a
            className="px-5 py-1 bg-blue-500 rounded-full text-white"
            href="#login"
          >
            {user.current}
          </a>
        </div>
        <div className="lg:invisible md:visible justify-end">
          <Mobile open={meta.open} onclick={() => (meta.open = !meta.open)} />
        </div>
      </div>
    </div>
  );
});

const Mobile = observer(({ open, onclick }: any) => {
  return (
    <Dropdown caption={<DehazeIcon />} open={open} onClick={onclick}>
      <div className="px-1 pb-2">
        <a
          href="#about"
          className="block px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray"
          role="menuitem"
        >
          About
        </a>
        <a
          href="#price"
          className="block px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray"
          role="menuitem"
        >
          Price
        </a>
        <a
          href="#contact"
          className="block px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray"
          role="menuitem"
        >
          Contact
        </a>
        <a
          className="px-20 py-1 bg-blue-500 rounded-full text-white"
          href="#login"
        >
          {user.current}
        </a>
      </div>
    </Dropdown>
  );
});
