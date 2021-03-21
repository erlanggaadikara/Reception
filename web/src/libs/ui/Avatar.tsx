import { observer } from "mobx-react-lite";

export default observer(({ className, ...rest }: any) => {
  return (
    <img
      className={`rounded-full ring-2 ring-white ${className}`}
      alt="ava"
      {...rest}
    />
  );
});
