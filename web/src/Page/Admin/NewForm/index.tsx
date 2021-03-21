/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";
import TextInput from "libs/ui/TextInput";
import { navigate } from "@reach/router";
import Form, { Field } from "libs/ui/Form";
import * as Yup from "yup";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  const meta = useLocalObservable(() => ({
    name: "" as string,
    date: new Date() as Date,
  }));

  const submit = async (v: any, a: any) => {
    console.log(v);
    navigate("New/Theme");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      css={css`
        width: 82vw;
      `}
    >
      <Text className="text-3xl">New Appointment</Text>
      <Text className="text-gray-400 py-4">Please fill the form</Text>
      <Form
        initialValues={meta}
        onSubmit={submit}
        validationSchema={{
          date: Yup.date().min(new Date()).required("Date is required"),
        }}
      >
        <Field
          className="lg:w-96 border-gray border-2 pl-2"
          type="text"
          label="Bride's Name"
          name="name"
        />
        <Field
          className="lg:w-96 border-gray border-2 pl-2"
          type="date"
          label="Date event"
          name="date"
        />
        <Button
          className="lg:w-96 bg-green-500 hover:bg-green-300 text-white"
          caption="Next"
          type="submit"
        />
      </Form>
    </div>
  );
});
