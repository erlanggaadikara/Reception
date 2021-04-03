/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps, useLocation, navigate } from "@reach/router";
import Sidebar from "Page/Admin/Sidebar";
import { useEffect } from "react";
import { Session } from "libs/utils/Session";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/Admin/") navigate("/Admin/Dashboard");
  }, []);

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
