import React from "react";

function Testimonials() {
  return (
    <div class="w-full testimonial flex flex-col md:flex-row gap-4 mb-8 md:mb-0 flex-between items-center p-8 mt-5">
      <div class="flex items-center  justify-center px-5 py-5 transform -rotate-12 hover:rotate-0 transition duration-400">
        <div class="w-full mx-auto  max-w-xl rounded-lg bg-indigo-600 dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
          <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/352a6998931623.5ee79b6a910e7.jpg"
                class="mx-auto object-cover rounded-full h-20 w-20 "
              />
            </a>
          </div>
          <div class="w-full mb-10">
            <div class="text-3xl text-white text-left leading-tight h-3">
              “
            </div>
            <p class="text-sm text-gray-100 dark:text-gray-100 text-center px-5">
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
            </p>
            <div class="text-3xl text-white text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div class="w-full">
            <p class="text-md text-indigo-200 font-bold text-center">
              Tom Hardy
            </p>
            <p class="text-xs text-gray-100 dark:text-gray-300 text-center">
              @thom.hardy
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center px-5 py-5 transform rotate-12 hover:rotate-0 transition duration-400">
        <div class="w-full mx-auto max-w-xl rounded-lg bg-red-200 dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
          <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/baa20698931623.5ee79b6a8ec2b.jpg"
                class="mx-auto object-cover rounded-full h-20 w-20 "
              />
            </a>
          </div>
          <div class="w-full mb-10">
            <div class="text-3xl text-gray-100 text-left leading-tight h-3">
              “
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
            </p>
            <div class="text-3xl text-gray-100 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div class="w-full">
            <p class="text-md text-red-400 font-bold text-center">
              Tom Hardy
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-300 text-center">
              @thom.hardy
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center px-5 py-5 transform -rotate-12 hover:rotate-0 transition duration-400">
        <div class="w-full mx-auto max-w-xl rounded-lg bg-pink-500 dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
          <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/67b96798931623.5ee79b6a8dd2f.jpg"
                class="mx-auto object-cover rounded-full h-20 w-20 "
              />
            </a>
          </div>
          <div class="w-full mb-10">
            <div class="text-3xl text-indigo-100 text-left leading-tight h-3">
              “
            </div>
            <p class="text-sm text-gray-100 dark:text-gray-100 text-center px-5">
              To get social media testimonials like these, keep your customers
              engaged with your social media accounts by posting regularly
              yourself
            </p>
            <div class="text-3xl text-indigo-100 text-right leading-tight h-3 -mt-3">
              ”
            </div>
          </div>
          <div class="w-full">
            <p class="text-md text-indigo-200 font-bold text-center">
              Tom Hardy
            </p>
            <p class="text-xs text-gray-100 dark:text-gray-300 text-center">
              @thom.hardy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
