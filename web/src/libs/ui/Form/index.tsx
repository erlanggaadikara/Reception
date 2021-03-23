import { Formik, Form } from "formik";
import Field from "./Field";
import * as Yup from "yup";
import { observer } from "mobx-react-lite";

interface propType {
  className?: string;
  onSubmit: any;
  initialValues: {};
  validationSchema?: {};
  children: any;
}

export default observer(
  ({
    children,
    onSubmit,
    initialValues,
    validationSchema,
    className,
  }: propType) => (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      enableReinitialize
      validationSchema={
        !!validationSchema && Yup.object().shape(validationSchema)
      }
    >
      {(props) => <Form className={className}>{children}</Form>}
    </Formik>
  )
);

export { Field };
