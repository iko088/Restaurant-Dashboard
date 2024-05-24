import React, { useState } from "react";

const DashTitle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center my-5">
      {/* MAIN DASHBOARD TEXT  */}
      <div className="flex w-full items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <p className="text-sm text-[#A3A3A3]">
            Hi, Samantha. Welcome back to Sedap Admin!
          </p>
        </div>

        <div>
          <div className="relative inline-block text-left">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-whitefocus:ring-4 bg-[#FFFFFF] focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
              type="button"
            >
              <img
                src="/images/filter.png"
                className="w-[40px] p-2 bg-[#2D9CDB] bg-opacity-15 rounded-lg "
                alt=""
              />
              <div className="flex flex-col items-center mx-4 ">
                <h1 className="font-semibold">Filter Periode</h1>
                <p className="text-[12px] ">17 April 2020 - 21 May 2020</p>
              </div>
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {isOpen && (
              <div
                id="dropdown"
                className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default DashTitle;
