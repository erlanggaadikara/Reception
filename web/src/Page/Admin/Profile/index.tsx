import useAsyncEffect from "use-async-effect";
import { observer, useLocalObservable } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Form, { Field } from "libs/ui/Form";
import Avatar from "libs/ui/Avatar";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";
import { query } from "libs/utils/Api/graphql";
import { session } from "libs/utils/Session";
import { runInAction, toJS } from "mobx";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  const meta = useLocalObservable(() => ({
    values: {} as any,
  }));

  const getProfile = async () => {
    let profile = await query(`query {
      p_user(where: {id: {_eq: ${session.data.id}}}){
        name
        email
        address
        phone
      }
    }`);

    if (profile?.p_user.length > 0) {
      runInAction(() => {
        meta.values = profile?.p_user[0];
      });
    }

    console.log(toJS(meta.values));
  };

  const submit = async (values: any, change: any) => {
    console.log(toJS(session), values);

    let update = await query(`mutation {
      update_p_user(where: {id: {_eq: ${session.data.id}}}, _set: {name: ${values.name}}){
        affected_rows
        returning {
          name
          email
          address
          phone
        }
      }
    }`);

    console.log(update);

    runInAction(() => {
      meta.values = update?.update_p_user.returning[0];
    });
  };

  useAsyncEffect(getProfile, []);

  return (
    <>
      <div className="lg:p-8 mb-10 pt-1 flex flex-row self-start">
        <Text className="font-bold text-xl ">Profile</Text>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <Form
          className="flex flex-col justify-center items-center"
          initialValues={toJS(meta.values)}
          onSubmit={submit}
        >
          <Avatar src="/assets/images/google-icon.png" className="w-20 h-20" />
          <Field
            className="lg:w-96 border-gray border-2 pl-2"
            type="email"
            label="Email"
            name="email"
          />
          <Field
            className="lg:w-96 border-gray border-2 pl-2"
            type="text"
            label="Name"
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
