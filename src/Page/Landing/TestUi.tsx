import Modal from "libs/ui/Modal";
import Text from "libs/ui/Text";
import TextInput from "libs/ui/TextInput";
import { FaBaby } from "react-icons/fa";
import { observer, useLocalObservable } from "mobx-react-lite";

export default observer(() => {
  const meta = useLocalObservable(() => ({
    open: false,
  }));
  return (
    <>
      <div className="max-w-md mx-auto flex place-content-center p-6 bg-gray-100 mt-10 rounded-lg shadow-xl ">
        <div className="ml-6 pt-1">
          <h1 className="text-2xl text-blue-700 leading-tight ">
            CRA With Honeybear
          </h1>
          <p className="text-base text-gray-700 leading-normal ">
            Building apps together
          </p>
        </div>
        <button
          onClick={() => (meta.open = true)}
          type="button"
          className="w-full inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Modal
        </button>
      </div>
      <Modal open={meta.open} onClose={() => (meta.open = false)}>
        <div className="max-w-md mx-auto flex place-content-center  p-6 bg-gray-100 mt-10 rounded-lg shadow-xl ">
          <div className=" pt-1">
            <Text className="text-2xl text-blue-700 leading-tight ">
              CRA Honeybadger
            </Text>
            <TextInput label="Nama" prefix={<FaBaby className="text-2xl" />} />
          </div>
        </div>
      </Modal>
      ;
    </>
  );
});
