import { RouteComponentProps } from "@reach/router";
import { observer } from "mobx-react-lite";

interface propTypes {
  children?: any;
  path?: RouteComponentProps;
}

export default observer((props: propTypes) => {
  return props.children;
});
