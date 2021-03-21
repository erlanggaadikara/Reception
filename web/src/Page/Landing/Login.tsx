import { observer, useLocalObservable } from "mobx-react-lite";
import { action, runInAction } from "mobx";
import TextInput from "libs/ui/TextInput";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";
import Image from "libs/ui/Image";
import { user } from "Page/Landing";
import { navigate } from "@reach/router";
import Form, { Field } from "libs/ui/Form";
import * as Yup from "yup";

export default observer(() => {
  const meta = useLocalObservable(() => ({
    email: "" as string,
    password: "" as string,
  }));

  const submit = (values: any, actions: any) => {
    console.log(values, actions);
    if (values) {
      navigate("/Admin");
    }
  };

  return (
    <div
      id="login"
      className="flex flex-col justify-center items-center px-32 py-4 bg-gray-50"
    >
      <Text className="text-blue-300 text-4xl font-bold text-center mt-5">
        Login
      </Text>
      <Text className="text-gray lg:text-xl text-lg text-center mt-2 mb-10">
        Welcome back!
      </Text>
      <div className="border-2 border-gray lg:w-3/5 px-4">
        <div className="flex flex-col justify-center items-center ">
          <Form
            className="flex flex-col justify-center items-center mt-10"
            initialValues={meta}
            validationSchema={{
              email: Yup.string().email("Invalid email").required("Required"),
              password: Yup.string().required("Required"),
            }}
            onSubmit={submit}
          >
            <Field
              className="lg:w-96 border-gray border-2 pl-2"
              type="email"
              label="Email"
              placeholder="youremail@mail.com"
              name="email"
            />
            <Field
              className="lg:w-96 border-gray border-2 pl-2"
              type="password"
              label="Password"
              placeholder="xxxxxx"
              name="password"
            />
            <Text className="text-gray text-lg text-center py-7">
              Or login with
            </Text>
            <div className="flex flex-row">
              <Image
                src={"assets/images/fb-icon.png"}
                className="w-20 px-5"
                alt="fb"
              />
              <Image
                src={"assets/images/google-icon.png"}
                className="w-20 px-5"
                alt="google"
              />
            </div>
            <Button
              caption="Login"
              type="submit"
              className="w-64 bg-blue-500 text-white"
            />
          </Form>
          <Text className="text-gray text-lg text-center mb-10">
            Don't have an account?{" "}
            <a
              href="#login"
              onClick={() => (user.current = "Register")}
              className="text-blue-300"
            >
              Register
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
});
