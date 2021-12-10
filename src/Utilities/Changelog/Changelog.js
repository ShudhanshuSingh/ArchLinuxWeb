import React from "react";
import ChangelogList from "../ChangelogList/ChangelogList";
import "./Changelog.css";
import data from "./ChangelogData.json";
function Changelog() {
  const [logData, setLogData] = React.useState([data.data]);
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
    <div>
      <section class="px-4 py-10 mx-auto max-w-7xl">
        <div class="mb-24 text-left md:text-center">
          <h1 class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Change log
          </h1>
          <p class="mb-5 text-base text-gray-500 md:text-lg">
            Last updated: 09th Dec 2021
          </p>
        </div>
        <div class="mx-auto p-2 prose">
          <ul>
            {logData[0].map((data) => (
              <ChangelogList
                key={data.id}
                latest={data.latest}
                month={data.month}
                new_addition={data.new_additions}
                changes={data.changes}
              />
            ))}
          </ul>
        </div>
      </section>
      <button
          onClick={scrollTop}
          className={`${
            visible === true ? "visible" : "invisible"
          } animate-bounce z-10 fixed right-1 m-4 bottom-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded`}
        >
          ↑
        </button>
    </div>
  );
}

export default Changelog;
