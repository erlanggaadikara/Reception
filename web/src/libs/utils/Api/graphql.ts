import { Api } from "./Api";

const query = async (data: string) => {
  let q = await Api.Post(
    "https://harimadu.hasura.app/v1/graphql",
    { query: data },
    {
      "Content-Type": "application/json",
      "x-hasura-admin-secret":
        "kLNeMFiqkPjI6lyzG62TduQQg3E2k7uiHOEr1SnDpeC6qokxR2bERBCKgYY1Bgq1",
    }
  );

  if (!!q && q.data) {
    return q.data;
  }
};

const encode = (data: any) => {
  return Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}: ${
          typeof data[key] == "string" ? `"${data[key]}"` : data[key]
        }`
    )
    .join(", ");
};

export { query, encode };
