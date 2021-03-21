import { observer, useLocalObservable } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Form, { Field } from "libs/ui/Form";
import Avatar from "libs/ui/Avatar";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  const meta = useLocalObservable(() => ({
    name: "" as string,
    email: "" as string,
    address: "" as string,
    phone: "" as string,
  }));

  const submit = async (values: any, change: any) => {
    console.log(values);
  };

  return (
    <>
      <div className="lg:p-8 mb-10 pt-1 flex flex-row self-start">
        <Text className="font-bold text-xl ">Profile</Text>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Form
          className="flex flex-col justify-center items-center"
          initialValues={meta}
          onSubmit={submit}
        >
          <Avatar src="/assets/images/google-icon.png" className="w-20 h-20" />
          <Field
            className="lg:w-96 border-gray border-2 pl-2"
            type="email"
            label="Email"
            placeholder="youremail@mail.com"
            name="email"
          />
          <Field
            className="lg:w-96 border-gray border-2 pl-2"
            type="text"
            label="Name"
            placeholder="Master Lorem"
            name="name"
          />
          <Field
            className="lg:w-96 border-gray border-2 pl-2"
            type="text"
            label="Address"
            name="address"
          />
          <Field
            className="lg:w-96 border-gray border-2 pl-2"
            type="text"
            label="Phone"
            name="phone"
          />
          <Button
            caption="Save"
            type="submit"
            className="w-64 bg-blue-500 text-white"
          />
        </Form>
      </div>
    </>
  );
});
