import React from "react";

function ChangelogList({ latest, month, new_addition, changes }) {
  return (
    <li className="update">
      <div class="absolute -ml-6 inline-flex h-5 w-5 rounded-full bg-blue-700">
        
        {" "}
        <span class={`${latest===true?"animate-ping h-5 w-5 bg-blue-600 opacity-75":"h-5 w-5 bg-white border-4 border-blue-700 border-solid"} absolute  inline-flex  rounded-full  `}></span>{" "}
      </div>{" "}
      <h4 className="text-2xl font-bold leading-tight text-gray-900 md:text-2xl">
        {month} Update
      </h4>
      <h6 className="text-1xl pt-3 pb-1 font-bold leading-tight text-gray-900 md:text-1xl">
        Edition Released :{" "}
      </h6>
      <ul>
        {new_addition.map((k) => (
          <li className="list-disc ml-5">{k}</li>
        ))}
      </ul>
      <h6 className="text-1xl pt-5 pb-1 font-bold leading-tight text-gray-900 md:text-1xl">
        CHANGELOG: Fixes/Updates :{" "}
      </h6>
      <ul className="ml-5">
        {changes.map((change) => (
          <li className="list-decimal ">{change}</li>
        ))}
      </ul>
    </li>
  );
}

export default ChangelogList;
