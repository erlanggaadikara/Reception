import { Router } from "@reach/router";
import { observer } from "mobx-react-lite";
import Main from "Page/Main";

export default observer(() => {
  return (
    <Router>
      <Main path="/" />
    </Router>
  );
});
