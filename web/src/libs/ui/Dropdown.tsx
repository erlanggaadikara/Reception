import { observer } from "mobx-react-lite";

interface propTypes {
  caption: any;
  children?: any;
  open: boolean;
  onClick: () => {};
}

export default observer((props: propTypes) => {
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={props.onClick}
        >
          {props.caption}
        </button>
      </div>
      {props.open && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="w-full"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {props.children}
          </div>
        </div>
      )}
    </div>
  );
});
