import useAsyncEffect from "use-async-effect";
import { observer, useLocalObservable } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Form, { Field } from "libs/ui/Form";
import Avatar from "libs/ui/Avatar";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";
import { query, encode } from "libs/utils/Api/graphql";
import { session } from "libs/utils/Session";
import { runInAction, toJS } from "mobx";
import { useRef, useEffect } from "react";
import { fileUpload, uploadPhoto, ValidFile } from "libs/utils/File";
import { storageRef } from "libs/utils/Api/firebase";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  const meta = useLocalObservable(() => ({
    values: {} as any,
    load: false as boolean,
    photo: "" as any,
  }));

  const inputFile = useRef<HTMLInputElement | null>(null);

  const getProfile = async () => {
    meta.load = true;
    let profile = await query(`query {
      p_user(where: {id: {_eq: ${session.data.id}}}){
        name
        email
        address
        phone
        photo
      }
    }`);

    if (profile?.p_user.length > 0) {
      runInAction(() => {
        meta.values = profile?.p_user[0];
        meta.photo = profile?.p_user[0].photo;
        meta.load = false;
      });
    }
  };

  const uploadImg = (img: any) => {
    let objFile = URL.createObjectURL(img);

    let validFile = ValidFile(img, "image");

    if (!validFile) {
      return validFile;
    }

    // if (objFile !== meta.photo) {
    console.log("true");
    return fileUpload(objFile);
    // }
  };

  const submit = async (values: any) => {
    let upImg = uploadImg(values.photo);
    if (!upImg) return null;

    values.photo = upImg;

    meta.load = true;
    let data: string = encode(values);
    let update = await query(`mutation {
      update_p_user(where: {id: {_eq: ${session.data.id}}}, _set: {${data}}){
        affected_rows
        returning {
          id
          name
          email
          address
          phone
          photo
        }
      }
    }`);

    if (!!update)
      runInAction(() => {
        meta.values = update?.update_p_user.returning[0];
        meta.load = false;
      });
  };

  useAsyncEffect(getProfile, []);

  useEffect(() => {
    console.log(inputFile.current);
  }, []);

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
          {(props: any) => (
            <>
              <input
                style={{ display: "none" }}
                type="file"
                ref={inputFile}
                name="photo"
                onChange={(e: any) => {
                  console.log(e.currentTarget.files[0]);
                  props.setFieldValue("photo", e.currentTarget.files[0]);
                }}
              />
              <Avatar
                src={
                  !!props.value?.photo
                    ? props.value.photo
                    : "/assets/images/google-icon.png"
                }
                className="w-20 h-20"
                onClick={() => {
                  inputFile.current?.click();
                }}
              />
              <Field
                className="lg:w-96 border-gray border-2 pl-2"
                type="email"
                label="Email"
                name="email"
                disabled
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
                caption={meta.load ? "Loading..." : "Save"}
                disabled={meta.load}
                type="submit"
                className="w-64 bg-blue-500 text-white"
              />
            </>
          )}
        </Form>
      </div>
    </>
  );
});
