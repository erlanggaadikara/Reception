/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Sidebar from "Page/Admin/Sidebar";
import { autorun } from "mobx";
import { navigate } from "@reach/router";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  autorun(() => {
    navigate("/Admin/Dashboard");
  });

  return (
    <div className="lg:flex md:flex w-screen">
      <div>
        <Sidebar />
      </div>
      <div
        css={css`
          width: 82vw;
          @media (min-width: 600px) {
              widtH 100vw;
          }
        `}
      >
        {props.children}
      </div>
    </div>
  );
});
