import { observer } from "mobx-react-lite";

export default observer((props: any) => {
  return (
    <img
      className={`rounded-full ring-2 ring-white ${props.className}`}
      alt=""
      {...props}
    />
  );
});
