import { Router } from "@reach/router";
import { observer } from "mobx-react-lite";
import Theme from "Page/Theme";
import Landing from "Page/Landing";
import Admin from "Page/Admin"
import Dashboard from "Page/Admin/Dashboard"
import Profile from "Page/Admin/Profile"
// import Main from "Page/Theme/Main/Page";

export default observer(() => {
  return (
    <Router>
      <Landing path="/" />
      <Admin path="/Admin">
        <Dashboard path="/Dashboard"/>
        <Profile path="/Profile"/>
      </Admin>
      <Theme path="/Theme">
        {/* <Main path="/Theme/Main" />
        <Main path="/Theme/Main/:sess/:guest" /> */}
      </Theme>
    </Router>
  );
});
