import { observer } from "mobx-react-lite";

export default observer((props: any) => {
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
