import { observer } from "mobx-react-lite";
import { InlineInputEdit } from "react-inline-input-edit";

interface propType {
  children: any;
  className?: any;
  onFocus?: (text: string) => {};
  onFocusOut?: (text: string) => {};
}

export default observer((props: propType) => {
  return (
    <InlineInputEdit
      text={props.children}
      inputClassName={`${
        props.className ? props.className : "text-xl"
      } font-montserrat`}
      onFocus={props.onFocus}
      onFocusOut={props.onFocusOut}
    />
  );
});
