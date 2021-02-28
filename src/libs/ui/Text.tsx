import { observer } from "mobx-react-lite";

interface propType {
  children: any;
  className?: any;
  onFocus?: () => null;
  onFocusOut?: () => null;
}

export default observer((props: propType) => {
  return (
    <p
      className={`${
        props.className ? props.className : "text-xl"
      } font-montserrat`}
    >
      {props.children}
    </p>
  );
});
