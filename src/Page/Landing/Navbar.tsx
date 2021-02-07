import { observer, useLocalObservable } from "mobx-react-lite";

export default observer(() => {
  return (
    <div id="navbar" className="w-full absolute top-0 bg-yellow-400">
      <div className="flex flex-row justify-evenly py-5 px-8 font-bold text-white">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
});
