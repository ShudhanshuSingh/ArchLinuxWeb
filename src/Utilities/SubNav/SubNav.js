import React from 'react'
import { Hashicon } from "@emeraldpay/hashicon-react";
import logo from "./logo.png";
import { Link as Navigate } from "react-router-dom";

function SubNav({nameUrl}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
      <div class="bg-transparant z-40">
        <div class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16">
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li class="flex items-center ">
                <Hashicon value={"Home"} size={20}/>
                <Navigate to="/">
                <button
                  
                  aria-label="Home"
                  title="Home"
                  class="font-medium tracking-wide text-dark-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </button></Navigate>
              </li>
              <li class="flex items-center">
                <Hashicon value={nameUrl} size={20}/>
                <Navigate to={nameUrl=== "/download"? "/tutorials":"/download"}>
                <button
                  
                  aria-label="Tutorials"
                  title="Tutorials"
                  class="font-medium tracking-wide text-dark-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  {nameUrl=== "/download"? "Tutorial":"Download"}
                </button></Navigate>
              </li>
              <li class="flex items-center">
                <Hashicon value={"changelog"} size={20}/>
                <Navigate to={nameUrl=== "/changelog"?"/tutorials":"/changelog"}>
                <button
                  
                  aria-label="Changelog"
                  title="Changelog"
                  class="font-medium tracking-wide text-dark-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  {nameUrl==="/changelog"?"Tutorial":"Changelog"}
                </button></Navigate>
              </li>
            </ul>
            <Navigate to="/">
            <button
              
              aria-label="Company"
              title="Company"
              class="inline-flex items-center"
            >
              <img class="h-12" src={logo} />
              <span class="ml-2 text-xl font-bold tracking-wide text-dark-100 uppercase">
                ArchLinuxGUI
              </span>
            </button></Navigate>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li class="flex items-center ">
              <Hashicon value={"Github"} size={20}/>
                <a
                  href="https://github.com/arch-linux-gui"
                  aria-label="Github"
                  title="Github"
                  class="font-medium tracking-wide text-dark-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Github
                </a>
              </li>
              <li class="flex items-center ">
              <Hashicon value={"SourceForge"} size={20}/>
                <a
                  href="https://sourceforge.net/projects/arch-linux-gui/"
                  aria-label="Sign in"
                  title="Sign in"
                  class="font-medium tracking-wide text-dark-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  SourceForge
                </a>
              </li>
              <li class="flex items-center ">
              <Hashicon value={"Support"} size={20}/>
                <a
                  href="https://discord.gg/NgAFEw9Tkf"
                  aria-label="Support"
                  title="Support"
                  class="font-medium tracking-wide text-dark-100 transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Support
                </a>
              </li>
            </ul>
            <div class="lg:hidden z-20">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-white border rounded shadow-sm">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <Navigate to="/">
                        <button
                          
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <img class="h-12" src={logo} />
                          <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            Arch Linux GUI
                          </span>
                        </button></Navigate>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <Navigate to ="/">
                          <button
                
                            aria-label="Home"
                            title="Home"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Home
                          </button></Navigate>
                        </li>
                        <li>
                          <Navigate to = {nameUrl=== "/download"? "/tutorials":"/download"}>
                          <button
                            
                            aria-label="urlSwitch"
                            title="urlSwitch"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            {nameUrl=== "/download"? "Tutorials":"Download"}
                          </button> </Navigate>
                        </li>
                        <li>
                          <Navigate to ={nameUrl === "/changelog"?"/tutorials":"/changelog"}>
                          <button
                            
                            aria-label="Changelog"
                            title="Changelog"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            {nameUrl === "/changelog"?"Tutorial":"Changelog"}
                          </button></Navigate>
                        </li>
                        <li>
                          <a
                            href="https://discord.gg/NgAFEw9Tkf"
                            aria-label="Discord"
                            title="Discord"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Discord
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://sourceforge.net/projects/arch-linux-gui/"
                            aria-label="SourceForge"
                            title="SourceForge"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            SourceForge
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/arch-linux-gui"
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Code"
                            title="Code"
                          >
                            Github
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default SubNav
