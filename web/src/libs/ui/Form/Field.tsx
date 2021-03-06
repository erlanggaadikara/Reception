import { observer } from "mobx-react-lite";
import Text from "../Text";
import { useField } from "formik";

export default observer(
  ({ label, prefix, suffix, nodisplay, ref, ...rest }: any) => {
    const [field, meta] = useField(rest);

    if (nodisplay)
      return (
        <input style={{ display: "none" }} ref={ref} {...rest} {...field} />
      );

    return (
      <div className="flex flex-col place-items-start m-2">
        <Text className="pb-1">{label}</Text>
        <div className={`flex flex-row h-10 `}>
          <div className="self-center">{prefix}</div>
          <input
            className={`${
              !rest.className &&
              "text-xl p-3 border-transparent border-none outline-none"
            } font-montserrat `}
            style={{ backgroundColor: rest.disabled && "#e5e7eb" }}
            {...rest}
            {...field}
          />
          {suffix}
        </div>
        {meta.touched && meta.error && (
          <Text className="text-red-500 text-sm font-light">{meta.error}</Text>
        )}
      </div>
    );
  }
);
