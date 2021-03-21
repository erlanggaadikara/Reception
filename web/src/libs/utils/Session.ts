import * as jwt from "jsonwebtoken";
import { observable } from "mobx";

export const session = observable({
  data: "" as any,
});

const setSession = (data: any) => {
  const convertData = jwt.sign(data, "deleteitdeleteit");
  localStorage.setItem("session", convertData);
  session.data = data;
};

const getSession = async () => {
  let respond;
  if (localStorage.getItem("session")) {
    const token: any = localStorage.getItem("session");
    jwt.verify(token, "deleteitdeleteit", (err: any, res: any) => {
      if (err) return console.log(err);
      respond = res;
      session.data = res;
    });
  }
  return respond;
};

const deleteSession = () => {
  if (localStorage.getItem("session")) {
    localStorage.removeItem("session");
  }
};

export const Session = { setSession, getSession, deleteSession, session };
