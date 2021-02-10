import { observer, useLocalObservable } from "mobx-react-lite";
import { observable } from "mobx";
import { RouteComponentProps } from "@reach/router";
import { autorun } from "mobx";
import { Helmet } from "react-helmet";
import Navbar from "Page/Landing/Navbar";
import Login from "Page/Landing/Login";
import Register from "Page/Landing/Register";

export const user = observable({ current: "Login" });

interface propType {
  path?: RouteComponentProps;
}

export default observer((props: propType) => {
  const dim = useLocalObservable(() => ({
    visible: false as any,
  }));

  const menuHandle = () => {
    let scrollY = window.scrollY;
    let menuEl = document.getElementById("navbar");
    if (scrollY > 0) {
      menuEl?.classList.add("scroll");
    } else {
      menuEl?.classList.remove("scroll");
    }
  };

  autorun(() => {
    window.onscroll = function () {
      if (window.pageYOffset !== 0) {
        dim.visible = true;
      } else {
        dim.visible = false;
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", menuHandle);
      return () => window.removeEventListener("scroll", menuHandle);
    }
  });

  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Honeyday: your trusted Wedding Management System</title>
      </Helmet>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-col">
          <div className="bg-home bg-cover bg-transparentBlack h-screen" />
          {user.current == "Login" ? <Login /> : <Register />}
        </div>
      </div>
    </>
  );
});
