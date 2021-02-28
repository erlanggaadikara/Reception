import { observer, useLocalObservable } from "mobx-react-lite";
import { observable } from "mobx";
import { RouteComponentProps } from "@reach/router";
import { autorun } from "mobx";
import { Helmet } from "react-helmet";
import Text from "libs/ui/Text";
import Navbar from "Page/Landing/Navbar";
import Login from "Page/Landing/Login";
import Register from "Page/Landing/Register";
import Whatis from "Page/Landing/Whatis";
import About from "Page/Landing/About";
import Pricing from "Page/Landing/Pricing";

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
          <div className="bg-home bg-cover bg-transparentBlack lg:h-screen h-72 m-0 p-0 flex flex-col items-center justify-center ">
            <Text className="font-bold text-white text-6xl">
              Take controll your guess easily
            </Text>
            <Text className="font-bold text-gray text-6xl">
              Visualize your Invitation
            </Text>
            <Text className="text-xl text-white my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
          <Whatis />
          <About />
          <Pricing />
          {user.current == "Login" ? <Login /> : <Register />}
        </div>
      </div>
    </>
  );
});
