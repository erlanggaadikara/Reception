import { storageRef } from "./Api/firebase";

let log = console.log.bind(this);

export const ValidFile = (file: any, type: string) => {
  if (type == "image" && !file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
    window.alert("File does not support. You must use .png or .jpg ");
    return false;
  }

  if (file.size > 5242880) {
    window.alert("Please upload a file smaller than 1 MB");
    return false;
  }
};

export const uploadPhoto = (file: any) => {
  let form = new FormData();

  form.append("file", file);

  return form;
};

export const fileUpload = (file: any) => {
  const str = storageRef.child("/image/" + file);
  log(str);
  return str;
};
