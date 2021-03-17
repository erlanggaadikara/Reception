import { observer } from "mobx-react-lite";
import Text from "./Text";

export default observer(({label, prefix, suffix, ...rest}: any) => {
  return (
    <div className="flex flex-col place-items-start m-2">
      <Text className="pb-1">{label}</Text>
      <div className={`flex flex-row h-10 `}>
        <div className="self-center">{prefix}</div>
        <input
          className={`${
            !rest.className &&
            "text-xl p-3 border-transparent border-none outline-none"
          } font-montserrat `}
          type={"text"}
          {...rest}
        />
        {suffix}
      </div>
    </div>
  );
});
