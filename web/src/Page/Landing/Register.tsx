import { observer, useLocalObservable } from "mobx-react-lite";
import { runInAction } from "mobx";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";
import Image from "libs/ui/Image";
import { user } from "Page/Landing";
import Form, { Field } from "libs/ui/Form";
import * as Yup from "yup";
import { navigate } from "@reach/router";
import { query } from "libs/utils/Api/graphql";
import { Session } from "libs/utils/Session";

export default observer(() => {
  const meta = useLocalObservable(() => ({
    email: "" as string,
    password: "" as string,
    confirmPass: "" as string,
  }));

  const submit = async (values: any) => {
    console.log(values);
    let checkUser = await query(`query {
      p_user(where: {email: {_eq: "${values.email}"}, password: {_eq: "${values.password}"}}){
        id
      }
    }`);

    if (checkUser.p_user.length > 0) {
      alert("This user already have an account");
    } else {
      let register = await query(`mutation {
        insert_p_user(objects: {email: "${values.email}", password: "${values.password}"}){
          affected_rows
          returning {
            id
            name
            email
          }
        }
      }`);
      if (register.insert_p_user.returning.length > 0) {
        Session.setSession(register.insert_p_user.returning[0]);
        navigate("/Admin");
      }
    }
  };

  return (
    <div
      id="login"
      className="flex flex-col justify-center items-center px-32 py-4  mt-10"
    >
      <Text className="text-blue-300 text-4xl font-bold text-center mt-16">
        Register
      </Text>
      <Text className="text-gray text-xl text-center mt-2 mb-10">
        Let's get in touch!
      </Text>
      <div className="border-2 border-gray lg:w-3/5 px-4">
        <div className="flex flex-col justify-center items-center ">
          <Form
            initialValues={meta}
            onSubmit={submit}
            validationSchema={{
              email: Yup.string().email("Invalid email").required("Required"),
              password: Yup.string().required("Required"),
              confirmPass: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Passwords must match"),
            }}
            className="flex flex-col mt-10 justify-center items-center"
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
            <Field
              className="lg:w-96 border-gray border-2 pl-2"
              type="password"
              label="Confirm Password"
              placeholder="xxxxxx"
              name="confirmPass"
            />

            <Text className="text-gray text-lg text-center py-7">
              Or register with
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
              caption="Register"
              type="submit"
              className="w-64 bg-blue-500 text-white"
            />
          </Form>
          <Text className="text-gray text-lg text-center mb-10">
            Have an account?{" "}
            <a
              href="#login"
              onClick={() => (user.current = "Login")}
              className="text-blue-300"
            >
              Login
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
});
