import Axios from "axios";

const Ip = "";

const Get = async (url: string, header: any) => {
  let send: any;
  await Axios.get(Ip + url, { headers: header })
    .then((res) => {
      if (res.data) {
        send = res.data;
      }
    })
    .catch((err) => err && (send = null));

  return send;
};

const Post = async (url: string, data: any, header: any) => {
  let send: any;
  await Axios.post(Ip + url, data, { headers: header })
    .then((res) => {
      if (res.data) {
        send = res.data;
      }
    })
    .catch((err) => err && (send = null));

  return send;
};

export const Api = { Ip, Get, Post };
