import { observer } from "mobx-react-lite";

interface propType {
  children: any;
  className?: any;
  onFocus?: () => null;
  onFocusOut?: () => null;
  css?: any;
}

export default observer(({className, children, ...rest}: propType) => {
  return (
    <p
      className={`${
        className ? className : " text-xl"
      } font-montserrat`}
      {...rest}
    >
      {children}
    </p>
  );
});
