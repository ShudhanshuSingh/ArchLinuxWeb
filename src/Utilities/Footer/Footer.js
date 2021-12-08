import logo from './logo.png'
export const Footer = () => {
    return (
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              {/* <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg> */}
              <img src={logo} className="w-10 h-10" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Arch Linux GUI
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-800">
              Welcome to Arch Linux GUI. A fast, offline graphical installer for Vanilla Arch Linux!
              </p>
              <p className="mt-4 text-sm text-gray-800">
              The ALG project provides you with 12 editions, featuring Plasma 5, Gnome 40, Xfce4, Cinnamon 5, MATE desktops, i3WM and BSPWM. All editions come with a graphical installer.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-gray-800">
                Overview
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-800">
                Editions
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Plasma 
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Gnome 
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Xfce 
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Cinnamon 
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    MATE 
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-800">How to?</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://youtu.be/wtZjRXOny7Q"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Verify Download
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/0gAjgxGGzjw"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Automatic Install
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/smdZdPLHjWc"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Install on Legacy BIOS
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/Ltiup47QIMU"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Dual Boot Window 10 Legacy/MBR
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/zGvGkuVEx0M"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Dual Boot Window 10 UEFI/GPT
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-gray-800">Additionals</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="https://youtu.be/f2lY3k5o84w"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Install Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/hR97lCdizmk"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Install Zoom
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/m6ZeH1L2734"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Virtual Box
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtu.be/KQGedNCA1E4"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    Bootable USB with DD
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2021 ALG Team. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="https://linkedin.com/in/archlinuxgui"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              {/* <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg> */}
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" className="h-5"/>
            </a>
            <a
              href="https://t.me/archlinuxgui"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              {/* <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg> */}
              <img src="https://img.icons8.com/color/48/000000/telegram-app--v5.png" className="h-6"/>
            </a>
            <a
              href="https://discord.gg/NgAFEw9Tkf"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              {/* <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg> */}
              <img src="https://img.icons8.com/fluency/48/000000/discord-logo.png" className="h-6"/>
            </a>
            <a
              href="https://github.com/arch-linux-gui"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" className="h-6"/>
            </a>
            <a
              href="https://www.instagram.com/archlinuxgui"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
             <img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" className="h-6"/>
            </a>
            <a
              href="https://www.youtube.com/c/DemonKiller_ALG"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <img src="https://img.icons8.com/fluency/48/000000/youtube-play.png" className="h-6"/>
            </a>
          </div>
        </div>
      </div>
    );
  };