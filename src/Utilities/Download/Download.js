import React from "react";
import { Hashicon } from "@emeraldpay/hashicon-react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import data from "./download.json";
import RequirementModal from "../RequirementModal/RequirementModal";
import IntructionModal from "../IntructionModal/IntructionModal";
import EditionComponent from "../EditionComponent/EditionComponent";
import {Link} from 'react-scroll'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Download() {
  const [select, setSelect] = React.useState("Download");
  const [allData, setAllData] = React.useState([data.data]);
  const [reqBool, setReqBool] = React.useState(false);
  const [instruction, setIntruction] = React.useState(false);
  // 
  // React.useEffect(()=>{
  //   // setAllData(data)

  // },[allData])
  

  // React.useEffect(()=>{
  //     console.log(select)
  // },[select])
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 flex justify-center flex-col">
      {reqBool === true || instruction === true ? (
        reqBool === true && instruction === false ? (
          <RequirementModal modal={reqBool} setModal={setReqBool} />
        ) : (
          <IntructionModal modal={instruction} setModal={setIntruction} />
        )
      ) : (
        <Menu
          as="div"
          className="relative inline-block text-left justify-center "
        >
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
              {select}
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
            <ul class="flex items-center space-x-8 lg:flex justify-center">
              <li class="p-2 m-2 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <button
                  aria-label="Requirements"
                  title="Requirements"
                  class="font-medium tracking-wide text-dark-100 transition-colors duration-200 hover:text-teal-accent-400"
                  onClick={() => setReqBool(true)}
                >
                  Requirements
                </button>
              </li>
              <li class="p-2 m-2 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                <button
                  aria-label="General Instructions"
                  title="General Instructions"
                  class="font-medium tracking-wide text-dark-100 transition-colors duration-200 hover:text-teal-accent-400"
                  onClick={() => setIntruction(true)}
                >
                  General Instructions
                </button>
              </li>
            </ul>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() =>setSelect("Plasma Editions")}
                    >
                      <Link to="1" spy={true} smooth={true}>
                      Plasma Editions </Link>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => setSelect("Gnome Editions")}
                    >
                      <Link to="3"spy={true} smooth={true}>
                      Gnome Editions </Link>
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => setSelect("Xfce Editions")}
                    >
                      <Link to="5"spy={true} smooth={true}>
                      Xfce Editions </Link>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => setSelect("Cinnamon Editions")}
                    ><Link to="7"spy={true} smooth={true}>
                      Cinnamon Editions </Link>
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => setSelect("MATE Editions")}
                    ><Link to="9"spy={true} smooth={true}>
                      MATE Editions </Link>
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => setSelect("i3 Editions")}
                    ><Link to="11"spy={true} smooth={true}>
                      i3 Editions </Link>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => setSelect("BSPWM Editions")}
                    ><Link to="12"spy={true} smooth={true}>
                      BSPWM Editions </Link>
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => setSelect("Zen Editions")}
                    ><Link to="13"spy={true} smooth={true}>
                      Zen Editions </Link>
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                      onClick={() => setSelect("All")}
                    ><Link to="1"spy={true} smooth={true}>
                      All </Link>
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
      {allData[0].map((data) => (
        <EditionComponent
          key={data.key}
          id = {data.key}
          edition={data.edition}
          desc={data.description}
          name={data.name}
          features={data.features}
          img = {data.img}
          link1={data.download1}
          link2={data.download2}
        />
      ))}
      <button onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}} class="z-10 fixed right-0 m-4 bottom-0 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          ↑ 
      </button>
    </div>
  );
}

export default Download;
