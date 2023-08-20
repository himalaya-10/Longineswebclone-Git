import React from 'react'

export default function footer() {
  return (
    <div>
      
<footer className="bg-white">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                  <img src="/longines-logo.png" className="h-[80px] mr-3" alt="FlowBite Logo" />
                  {/* <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-600"></span> */}
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="/" className="hover:underline">Longines</a>
                      </li>
                  </ul>
              </div>
              
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Longines™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
          </div>
      </div>
    </div>
</footer>

    </div>
  )
}
