/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
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
import Contact from "Page/Landing/Contact";

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
        <meta
          name="description"
          content="Honeyday make it easier to create and share your invitation, you can
      also edit and update information without wasting time and money. Ever
      thought manage guests much easier? Honeyday record every guest with QR
      Code feature."
        />
        <title>Honeyday: your trusted Wedding Management System</title>
      </Helmet>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-col">
          <div
            className="lg:h-screen h-72 m-0 p-0 flex flex-col items-center justify-center "
            css={css`
              background-image: url("assets/images/wpp-1.png");
              background-size: cover;
              background-repeat: no-repeat;
              background-color: rgba(0, 0, 0, 0.5);
            `}
          >
            <Text className="font-bold text-white lg:text-6xl md:text-normal">
              Take controll your guess easily
            </Text>
            <Text className="font-bold text-gray-500 lg:text-6xl md:text-normal">
              Visualize your Invitation
            </Text>
          </div>
          <Whatis />
          <About />
          <Pricing />
          {user.current == "Login" ? <Login /> : <Register />}
          <Contact />
        </div>
      </div>
      <footer className="relative bottom-0 w-screen bg-gray-400 align-center py-2">
        <Text className="text-center">
          Copyright © 2021 | All Right Reserved
        </Text>
        <Text className="text-center">harimadu.id</Text>
      </footer>
    </>
  );
});
