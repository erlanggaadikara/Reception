import { observer } from "mobx-react-lite";
import { navigate } from "@reach/router";
import Text from "libs/ui/Text";

export default observer(() => {
  return (
    <div className="md:flex flex-col md:flex-row md:min-h-screen w-auto bg-gray-200 pt-10">
      <div className="flex flex-col w-full md:w-64 text-gray-700  dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
        <div className="lg:invisible bg-red-600 p-2">
          <Text className="italic text-white text-sm">
            We recommend you to access Dashboard in website to get better
            experience!
          </Text>
        </div>
        <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
          <a className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            harimadu.id
          </a>
          <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" />
        </div>
        <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
          <a
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:shadow-outline"
            onClick={() => navigate("/Admin/Dashboard")}
          >
            Dashboard
          </a>
          <a
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:shadow-outline"
            onClick={() => navigate("/Admin/Profile")}
          >
            Profile
          </a>
          <a
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:shadow-outline"
            onClick={() => navigate("/Admin/Setting")}
          >
            Setting
          </a>
          <a
            className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-blue-300 focus:bg-blue-300 focus:outline-none focus:shadow-outline"
            onClick={() => navigate("/")}
          >
            Log out
          </a>
        </nav>
      </div>
    </div>
  );
});
