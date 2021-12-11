import React from "react";
import { Link as Navigate } from "react-router-dom";

function Header() {
  const [visible, setVisible] = React.useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const listenScrollEvent = () => {
    if (window.scrollY != 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center px-2 pt-14 mx-auto sm:max-w-xl md:max-w-full lg:pt-10 md:px-0">
      <div className="flex flex-col items-center max-w-2xl md:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="bg-teal-accent-400">
            <Navigate to="/changelog">
            <p className="cursor-pointer inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 border-2 border-gray-700 hover:drop-shadow-lg">
              ArchLinuxGUI v2.0 is now released →
            </p></Navigate>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              {/* <span className="relative">Welcome</span> */}
            </span>{" "}
            Welcome to Arch Linux GUI
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            A fast, offline & Graphical Installer for Vanilla Arch Linux
          </p>
        </div>
      </div>
      {/* <img
            src="https://kitwind.io/assets/kometa/half-browser.png"
            className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
            alt=""
        />   */}
      <div className="w-full  max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md">
        <iframe
          className="w-full max-w-screen-sm  mx-auto rounded shadow-2xl md:w-screen h-96 lg:max-w-screen-md "
          // width="800"
          // height="400"
          src="https://www.youtube.com/embed/a1a2pYgV6XU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* <img
            // src="https://kitwind.io/assets/kometa/half-browser.png"
            src="pc.png"
            className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-md"
            alt=""
            />*/}
        <button
          onClick={scrollTop}
          className={`${
            visible === true ? "visible" : "invisible"
          } animate-bounce z-10 fixed right-1 m-4 bottom-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded`}
        >
          ↑
        </button>
      </div>
    </div>
  );
}

export default Header;
