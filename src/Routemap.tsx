import { Router } from "@reach/router";
import { observer } from "mobx-react-lite";
import Landing from "Page/Landing";
import Main from "Page/Theme/Main";

export default observer(() => {
  return (
    <Router>
      <Landing path="/" />
      <Main path="/Theme/Main" />
      <Main path="/Theme/Main/:sess" />
    </Router>
  );
});
