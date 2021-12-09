import React from 'react'
import "./Changelog.css"

function Changelog() {
    return (
        <div>
           <section class="px-4 py-10 mx-auto max-w-7xl">
                <div class="mb-24 text-left md:text-center">
                    <h1 class="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">Change log</h1>
                    <p class="mb-5 text-base text-gray-500 md:text-lg">Last updated: 09th Dec 2021</p>
                </div>
                <div class="mx-auto p-2 prose">
                    <ul>
                        <li className="update"><div class="absolute -ml-6 inline-flex h-5 w-5 rounded-full bg-blue-700"> <span class="animate-ping absolute  inline-flex h-5 w-5 rounded-full bg-blue-600 opacity-75"></span> </div>  <h4 className="text-2xl font-bold leading-tight text-gray-900 md:text-2xl">October 2021 Update</h4>
                            <h6 className="text-1xl pt-3 pb-1 font-bold leading-tight text-gray-900 md:text-1xl">Edition Released : </h6>
                                <ul>
                                    <li className="list-disc ml-5">No New Release</li>
                                </ul>
                            <h6 className="text-1xl pt-5 pb-1 font-bold leading-tight text-gray-900 md:text-1xl">CHANGELOG: Fixes/Updates : </h6>
                                <ul className="ml-5">
                                    <li className="list-decimal ">Driver Support for Latest Nvidia GPUs (themed editions only)</li>
                                    <li className="list-decimal">Automatic Generation of BTRFS subvolumes (/, /home, /var/cache, /var/log)</li>
                                    <li className="list-decimal">Live USB has more space now (4GB)</li>
                                    <li className="list-decimal">ROFI Launch key changed to mod+D in WM Editions</li>
                                    <li className="list-decimal">Emoji Support in MATE, GNOME, XFCE, Cinnamon</li>
                                </ul>


                            {/* <p>We, the Operators of this Website, provide it as a public service to our users.</p>

                            <p>
                            Please carefully review the following basic rules that govern your use of the Website. Please note that your use of the Website constitutes your unconditional agreement to follow and be bound by
                            these Terms and Conditions of Use. If you (the "User") do not agree to them, do not use the Website, provide any materials to the Website or download any materials from them.
                            </p>

                            <p>
                            The Operators reserve the right to update or modify these Terms and Conditions at any time without prior notice to User. Your use of the Website following any such change constitutes your
                            unconditional agreement to follow and be bound by these Terms and Conditions as changed. For this reason, we encourage you to review these Terms and Conditions of Use whenever you use the
                            Website.
                            </p>

                            <p>
                            These Terms and Conditions of Use apply to the use of the Website and do not extend to any linked third party sites. These Terms and Conditions and our Privacy Policy, which are hereby
                            incorporated by reference, contain the entire agreement (the “Agreement”) between you and the Operators with respect to the Website. Any rights not expressly granted herein are reserved.
                            </p> */}
                        </li>
                        
                    </ul>

    
                </div>
            </section>

        </div>
    )
}

export default Changelog
