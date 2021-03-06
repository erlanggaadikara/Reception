import { observer, useLocalObservable } from "mobx-react-lite";
import { runInAction } from "mobx";
import TextInput from "libs/ui/TextInput";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";
import Image from "libs/ui/Image";
import { user } from "Page/Landing";

export default observer(() => {
  const meta = useLocalObservable(() => ({
    email: "" as string,
    password: "" as string,
  }));

  const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e?.target?.value;
    const name = e.target.name;

    runInAction(() => (meta.email = value));
  };

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e?.target?.value;

    runInAction(() => (meta.password = value));
  };

  const submit = () => {
    runInAction(() => null);
  };

  return (
    <div
      id="login"
      className="flex flex-col justify-center items-center px-32 py-4 mt-10"
    >
      <Text className="text-blue text-4xl font-bold text-center mt-5">
        Login
      </Text>
      <Text className="text-gray lg:text-xl text-lg text-center mt-2 mb-10">
        Welcome back!
      </Text>
      <div className="border-2 border-gray lg:w-3/5 px-4">
        <div className="flex flex-col justify-center items-center ">
          <form className="flex flex-col mt-10" onSubmit={submit}>
            <TextInput
              className="lg:w-96 border-gray border-2 pl-2"
              type="email"
              label="Email"
              placeholder="youremail@mail.com"
              name="email"
              value={meta.email}
              onChange={handleEmail}
            />
            <TextInput
              className="lg:w-96 border-gray border-2 pl-2"
              type="password"
              label="Password"
              placeholder="xxxxxx"
              name="password"
              value={meta.password}
              onChange={handlePassword}
            />
          </form>
          <Text className="text-gray text-lg text-center py-7">
            Or login with
          </Text>
          <div className="flex flex-row">
            <Image
              src={"assets/image/fb-icon.png"}
              className="w-20 px-5"
              alt="fb"
            />
            <Image
              src={"assets/image/google-icon.png"}
              className="w-20 px-5"
              alt="google"
            />
          </div>
          <Button caption="Login" className="w-64 bg-blue text-white" />
          <Text className="text-gray text-lg text-center mb-10">
            Don't have an account?{" "}
            <a
              href="#login"
              onClick={() => (user.current = "Register")}
              className="text-blue"
            >
              Register
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
});
