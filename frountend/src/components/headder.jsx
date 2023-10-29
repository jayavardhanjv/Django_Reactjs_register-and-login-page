import React from 'react'
import Switcher from "../Switcher";

function headder(pagename) {
  return (
    <header class="z-40 py-4 lg:px-16 md:px-10 bg-white shadow-bottom dark:bg-gray-800 shadow-md">
        <div class=" flex items-center justify-between h-full px-12 sm:px-6 xs:px-6 mx-auto text-purple-600 dark:text-purple-300">
            <div class="text-2xl font-bold text-gray-800 dark:text-gray-200">
                <span class="p-0 mr-0 text-purple-600">User</span>  Login</div>
                <div class="flex flex-row"><div class=" flex mr-4 right-4 dark:bg-main-dark-bg border rounded-md border-gray-300">
                    {/* <button class="rounded-md focus:outline-none focus:shadow-outline-purple" aria-label="Toggle color mode"> */}
                        {/* <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8" aria-hidden="true">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z">
                            </path>
                        </svg> */}
                        {/* <Switcher/> */}
                    {/* </button> */}
                    <Switcher/>
                </div>
                <a class="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-purple-600 border border-transparent active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple" type="button" href="/signup">Sign Up</a>
            </div>
        </div>
    </header>
  )
}

export default headder