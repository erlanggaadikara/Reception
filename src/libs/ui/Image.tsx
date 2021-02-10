import { observer } from "mobx-react-lite";

interface propTypes {
  onClick?: () => {};
  src: any;
  className?: string;
  style?: any;
  width?: any;
  height?: any;
  alt?: string;
}

export default observer((props: propTypes) => {
  return (
    <button className="p-0 m-0 outline-none" onClick={props.onClick}>
      <img {...props} />
    </button>
  );
});
