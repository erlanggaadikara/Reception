import { observer } from "mobx-react-lite";

export default observer((props: any) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type ? props.types : "button"}
      className={
        props.className +
        " inline-flex justify-center items-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:ml-3 sm:text-sm my-5"
      }
      style={props.style}
      css={props.css}
    >
      {props.caption}
    </button>
  );
});
