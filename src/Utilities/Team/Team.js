
import { Hashicon } from "@emeraldpay/hashicon-react";

export const Team = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            <Hashicon value={"Team"} size={30} />
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              {/* <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                  width="52"
                  height="24"
                />
              </svg> */}
              <span className="relative">Team</span>
            </span>{' '}
            Responsible for ALG Project
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Creative Minds working behind the scenes in order to deliver exceptional service to our users!
          </p>
        </div>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-2">
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d54ffd98931623.5ee79b6bb51dd.jpg"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Gaurang Vishwakarma</p>
              <p className="text-sm text-gray-800">Product Lead</p>
              <p className="text-sm text-gray-800">Maintains ALG Repo.</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/6c584598931623.5ee79b6bb5949.jpg"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Lovlesh Dagar</p>
              <p className="text-sm text-gray-800">Web Lead</p>
              <p className="text-sm text-gray-800">Maintainance of Website</p>
            </div>
          </div>
          {/* <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Kulin Goyal</p>
              <p className="text-sm text-gray-800">Design Incharge</p>
            </div> 
          </div> */}
        </div>
      </div>
    );
  };