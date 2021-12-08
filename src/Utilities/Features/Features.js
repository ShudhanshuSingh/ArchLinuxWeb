import React from 'react'
import { Hashicon } from "@emeraldpay/hashicon-react";

function Features() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                <Hashicon value={"Features"} size={30}/>
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">

                <span className="relative">What</span>
              </span>{' '}
              we are offering you?
            </h2>
          </div>
          <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x">
            <div className="space-y-6 sm:px-16">
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="mb-4 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                    <Hashicon value={"1"} size={20}/>
                  </div>
                </div>
                <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Easy to Install
                  </h6>
                  <p className="text-sm text-gray-900">
                    GUI makes it easier to install Operating System
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="mb-4 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                    <Hashicon value={"2"} size={20}/>
                  </div>
                </div>
                <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Stock Desktop Environment
                  </h6>
                  <p className="text-sm text-gray-900">
                    User wanting to customize their OS from scratch can choose pure edition which has stocked desktop environment.
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="mb-4 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <Hashicon value={"3"} size={20}/>
                  </div>
                </div>
                <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Themed Desktop
                  </h6>
                  <p className="text-sm text-gray-900">
                  User wanting to start immediately can choose themed edition which has themed desktop environments.
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="mb-4 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <Hashicon value={"4"} size={20}/>
                  </div>
                </div>
                <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Easy to Multiboot
                  </h6>
                  <p className="text-sm text-gray-900">
                  Easily dual/triple boot with Windows or any other Linux distributions.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6 sm:px-16">
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="mb-4 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <Hashicon value={"5"} size={20}/>
                  </div>
                </div>
                <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Monthly releases
                  </h6>
                  <p className="text-sm text-gray-900">
                   Monthly rolling release schedule, just like mainline Arch Linux with new ISOs every month.
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="mb-4 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <Hashicon value={"6"} size={20}/>
                  </div>
                </div>
                <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Legacy & UEFI Support
                  </h6>
                  <p className="text-sm text-gray-900">
                    Install in UEFI/GPT or Legacy/MBR setup
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="mb-4 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <Hashicon value={"7"} size={20}/>
                  </div>
                </div>
                <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    Encryption using LUKS
                  </h6>
                  <p className="text-sm text-gray-900">
                    All editions come with Encryption using LUKS. User can easily encrpyt drives during installation.
                  </p>
                </div>
              </div>
              <div className="flex flex-col max-w-md sm:flex-row">
                <div className="mb-4 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <Hashicon value={"8"} size={20}/>
                  </div>
                </div>
                <div>
                  <h6 className="mb-3 text-xl font-bold leading-5">
                    For Intel & AMD Computers
                  </h6>
                  <p className="text-sm text-gray-900">
                    Hardware tested on Team Blue and Team Red Harware
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Features
