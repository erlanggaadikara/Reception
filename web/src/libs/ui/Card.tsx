import { observer } from "mobx-react-lite";

export default observer((props: any) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={
        props.className +
        " rounded-md border shadow-sm focus:outline-none m-2"
      }
      style={props.style}
      css={props.css}
    >
      {props.children}
    </button>
  );
});
