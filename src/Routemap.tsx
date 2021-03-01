import { Router } from "@reach/router";
import { observer } from "mobx-react-lite";
import Theme from "Page/Theme";
import Landing from "Page/Landing";
import Main from "Page/Theme/Main";

export default observer(() => {
  return (
    <Router>
      <Landing path="/" />
      <Theme path="/Theme">
        <Main path="/Theme/Main" />
        <Main path="/Theme/Main/:sess/:guest" />
      </Theme>
    </Router>
  );
});
