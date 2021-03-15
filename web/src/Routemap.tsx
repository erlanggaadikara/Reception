import { Router } from "@reach/router";
import { observer } from "mobx-react-lite";
import Theme from "Page/Theme";
import Landing from "Page/Landing";
import Admin from "Page/Admin"
import Dashboard from "Page/Admin/Dashboard"
import Profile from "Page/Admin/Profile"
import NewForm from "Page/Admin/NewForm"
import Form2 from "Page/Admin/NewForm/Form2"
// import Main from "Page/Theme/Main/Page";

export default observer(() => {
  return (
    <Router>
      <Landing path="/" />
      <Admin path="/Admin">
        <Dashboard path="/Dashboard"/>
        <NewForm path="/Dashboard/New"/>
        <Form2 path="/Dashboard/New/Theme"/>
        <Profile path="/Profile"/>
      </Admin>
      <Theme path="/Theme">
        {/* <Main path="/Theme/Main" />
        <Main path="/Theme/Main/:sess/:guest" /> */}
      </Theme>
    </Router>
  );
});
