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
      className="w-full absolute top-0 bg-transparent p-10 md:p-5"
    >
      <div className="flex flex-row items-center md:py-4 md:px-5 font-bold text-black ">
        <div className="w-1/2 flex-col flex">
          <Text className="text-white text-3xl font-semibold">Honeyday</Text>
          <Text className="text-white font-light">
            Wedding Management System
          </Text>
        </div>
        <div className="w-1/2 invisible lg:visible flex flex-row items-center justify-around rounded-full lg:py-2 lg:px-8 lg:bg-white">
          <a href="#">What is Honeyday?</a>
          <a href="#">About</a>
          <a href="#">Price</a>
          <a href="#">Contact</a>
          <a
            className="px-5 py-1 bg-blue rounded-full text-white"
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
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray"
        role="menuitem"
      >
        Beranda
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray"
        role="menuitem"
      >
        Tentang
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray"
        role="menuitem"
      >
        Map
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray hover:bg-gray hover:text-gray"
        role="menuitem"
      >
        Kontak
      </a>
    </Dropdown>
  );
});
