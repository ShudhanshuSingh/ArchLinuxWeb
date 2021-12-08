import React from "react";
import { Hashicon } from "@emeraldpay/hashicon-react";
import appmenu from './app-menu.png'
import cinapps from './cin-apps.png'
import gnomeabout from './gnome-about.png'
import gnomepolkit from './gnome-polkit.png'
import installer from './installer.png'
import plasmapure from './plasma-pure.png'


function ImageGallery() {
  return (
    <div className="flex flex-col items-center justify-center px-2 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-12 md:px-0">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            <Hashicon value={"Gallery"} size={30}/>
            </p>
          </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative">Image Gallery</span>
          </span>{" "}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
         Some beautiful snapshots of our OS
        </p>
      </div>
    <div class="container w-3/4 grid grid-cols-2 mx-auto gap-2 mb-4  md:grid-cols-3  ">
        
      <div class="w-auto rounded">
        <img
          src={appmenu}
          alt="image"
        />
      </div>
      <div class="w-full rounded">
        <img
          src={cinapps}
          alt="image"
        />
      </div>
      <div class="w-full rounded">
        <img
          src={gnomeabout}
          alt="image"
        />
      </div>
      <div class="w-full rounded ">
        <img
          src={gnomepolkit}
          alt="image"
        />
      </div>
      <div class="w-full rounded">
        <img
          src={installer}
          alt="image"
        />
      </div>
      <div class="w-full rounded">
        <img
          src={plasmapure}
          alt="image"
        />
      </div>
    </div>
    </div>
  );
}

export default ImageGallery;
