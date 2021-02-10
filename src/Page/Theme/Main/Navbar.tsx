import { observer, useLocalObservable } from "mobx-react-lite";
import Dropdown from "libs/ui/Dropdown";
import DehazeIcon from "@material-ui/icons/Dehaze";

export default observer(() => {
  const meta = useLocalObservable(() => ({ open: false as any }));

  return (
    <div id="navbar" className="w-full bg-transparent p-10 md:p-5">
      <div className="flex flex-row items-center lg:py-2 lg:px-8 md:py-4 md:px-5 font-bold text-black rounded-full lg:bg-yellow-50">
        <div className="w-1/2">
          <label>Reception App</label>
        </div>
        <div className="w-1/2 invisible lg:visible flex flex-row justify-evenly">
          <a href="#">Beranda</a>
          <a href="#">Tentang</a>
          <a href="#">Map</a>
          <a href="#">Kontak</a>
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
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Beranda
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Tentang
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Map
      </a>
      <a
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        role="menuitem"
      >
        Kontak
      </a>
    </Dropdown>
  );
});
