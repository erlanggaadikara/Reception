import { Router } from "@reach/router";
import { observer } from "mobx-react-lite";
import Landing from "Page/Landing";

export default observer(() => {
  return (
    <Router>
      <Landing path="/" />
    </Router>
  );
});
