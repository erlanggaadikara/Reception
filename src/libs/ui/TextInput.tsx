import { observer } from "mobx-react-lite";
import Text from "./Text";

export default observer((props: any) => {
  return (
    <div className="flex flex-col place-items-start m-2">
      <Text className="pb-1">{props.label}</Text>
      <div className={`flex flex-row h-10 `}>
        <div className="self-center p-3">{props.prefix}</div>
        <input
          className={`${
            !props.className && "text-xl"
          } font-montserrat p-3 border-transparent border-none outline-none`}
          type={"text"}
          {...props}
        />
        {props.suffix}
      </div>
    </div>
  );
});
