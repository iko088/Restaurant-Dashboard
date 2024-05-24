import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center">
      {/* SIDE BAR HEADING  */}
      <div className="flex flex-col items-center justify-center my-8 ">
        <img src="/images/logo.png" className="w-1/3 " alt="" />
        <p className="text-[#B9BBBD] text-sm ">Modern Admin Dashboard</p>
      </div>

      {/* CATEGORIES  */}
      <div className="flex flex-col items-center w-full">
        <div className="ms-5">
          {/* FIRST  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1  rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200 "
              width="19"
              height="19"
              viewBox="0 0 48 48"
            >
              <path d="M 23.951172 4 A 1.50015 1.50015 0 0 0 23.072266 4.3222656 L 8.859375 15.519531 C 7.0554772 16.941163 6 19.113506 6 21.410156 L 6 40.5 C 6 41.863594 7.1364058 43 8.5 43 L 18.5 43 C 19.863594 43 21 41.863594 21 40.5 L 21 30.5 C 21 30.204955 21.204955 30 21.5 30 L 26.5 30 C 26.795045 30 27 30.204955 27 30.5 L 27 40.5 C 27 41.863594 28.136406 43 29.5 43 L 39.5 43 C 40.863594 43 42 41.863594 42 40.5 L 42 21.410156 C 42 19.113506 40.944523 16.941163 39.140625 15.519531 L 24.927734 4.3222656 A 1.50015 1.50015 0 0 0 23.951172 4 z M 24 7.4101562 L 37.285156 17.876953 C 38.369258 18.731322 39 20.030807 39 21.410156 L 39 40 L 30 40 L 30 30.5 C 30 28.585045 28.414955 27 26.5 27 L 21.5 27 C 19.585045 27 18 28.585045 18 30.5 L 18 40 L 9 40 L 9 21.410156 C 9 20.030807 9.6307412 18.731322 10.714844 17.876953 L 24 7.4101562 z"></path>
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Dashboard
            </span>
          </div>

          {/* SECOND  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1  rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200"
              height="17"
              viewBox="0 -960 960 960"
              width="17"
              fill="#5f6368"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Order Detail
            </span>
          </div>

          {/* THIRD  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1  rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200"
              width="17"
              height="17"
              viewBox="0 0 48 48"
            >
              <rect x="8" y="12" width="32" height="2" />
              <rect x="8" y="20" width="24" height="2" />
              <rect x="8" y="28" width="28" height="2" />
              <rect x="8" y="36" width="20" height="2" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Order list
            </span>
          </div>

          {/* Forth  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1 rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200"
              height="17"
              viewBox="0 -960 960 960"
              width="17"
              fill="#5f6368"
            >
              <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Customer
            </span>
          </div>

          {/* Fifth  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1 rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200"
              height="17"
              viewBox="0 -960 960 960"
              width="17"
              fill="#5f6368"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm80-160h80v-280h-80v280Zm160 0h80v-400h-80v400Zm160 0h80v-160h-80v160Zm80-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM480-480Z" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Analytics
            </span>
          </div>

          {/* Sixth  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1 rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200"
              height="17"
              viewBox="0 -960 960 960"
              width="17"
              fill="#5f6368"
            >
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Reviews
            </span>
          </div>

          {/* Seventh  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1 rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200 "
              height="17"
              viewBox="0 -960 960 960"
              width="17"
              fill="#5f6368"
            >
              <path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Foods
            </span>
          </div>

          {/* Eighth  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1 rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200 "
              height="15"
              viewBox="0 -960 960 960"
              width="15"
              fill="#5f6368"
            >
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Food Detail
            </span>
          </div>

          {/* NINTH  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1 rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200 "
              height="17"
              viewBox="0 -960 960 960"
              width="17"
              fill="#5f6368"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm  ">
              Customer Detail
            </span>
          </div>

          {/* TENTH  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1 rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200  ">
            <svg
              className="group-hover:fill-[#00B074] transition-colors duration-200"
              xmlns="http://www.w3.org/2000/svg"
              height="17"
              viewBox="0 -960 960 960"
              width="17"
              fill="#5f6368"
            >
              <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Calendar
            </span>
          </div>

          {/* ELEVENTH  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1 rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200"
              height="17"
              viewBox="0 -960 960 960"
              width="17"
              fill="#5f6368"
            >
              <path d="M320-520q17 0 28.5-11.5T360-560q0-17-11.5-28.5T320-600q-17 0-28.5 11.5T280-560q0 17 11.5 28.5T320-520Zm160 0q17 0 28.5-11.5T520-560q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560q0 17 11.5 28.5T480-520Zm160 0q17 0 28.5-11.5T680-560q0-17-11.5-28.5T640-600q-17 0-28.5 11.5T600-560q0 17 11.5 28.5T640-520ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Chat
            </span>
          </div>

          {/* TWELFTH  */}
          <div className="group flex items-center gap-2 cursor-pointer py-2 px-3 my-1 rounded-md hover:bg-[#00B074] hover:bg-opacity-25 transition duration-200  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:fill-[#00B074] transition-colors duration-200"
              height="17"
              viewBox="0 -960 960 960"
              width="17"
              fill="#5f6368"
            >
              <path d="M200-200v-560 560Zm0 80q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v100h-80v-100H200v560h560v-100h80v100q0 33-23.5 56.5T760-120H200Zm320-160q-33 0-56.5-23.5T440-360v-240q0-33 23.5-56.5T520-680h280q33 0 56.5 23.5T880-600v240q0 33-23.5 56.5T800-280H520Zm280-80v-240H520v240h280Zm-160-60q25 0 42.5-17.5T700-480q0-25-17.5-42.5T640-540q-25 0-42.5 17.5T580-480q0 25 17.5 42.5T640-420Z" />
            </svg>
            <span className="group-hover:text-[#00B074] group-hover:font-bold text-sm">
              Wallet
            </span>
          </div>

          {/* END OF CATEGORIES DIV  */}
        </div>

        {/* PARENT OF CATEGORIES DIV END HERE  */}
      </div>

      {/* CHIEF CARD  */}
      <div className="my-6">
       <div className=" flex items-center mx-4 gap-2 bg-[#00B074] p-4 rounded-lg ">
       <div className="">
          <p className=" text-[12px] text-white font-semibold ">Please, organize your <br /> menus through button <br /> bellow!</p>
          <button className="bg-white py-1 px-3 rounded-md text-sm mt-2">+Add Menus</button>
        </div>

        <div className="w-1/3">
          <img src="/images/cheif.png" alt="" />
        </div>
       </div>
      </div>

      {/* EXTRA TEXT */}
      <div className="flex flex-col items-center mt-8 mb-5">
        <div className="text-center " style={{ lineHeight: '0.8' }}>
          <p className="text-[#969BA0] text-sm font-bold ">Sedap Restaurant Admin Dashboard</p>
          <span className="text-[#969BA0] text-[13px] ">© 2020 All Rights Reserved</span>
        </div>

        <div className="mt-4">
          <p className="text-sm text-[#969BA0] ">Made with 🧡 by Peterdraw</p>
        </div>
      </div>

    </div>
  );
};

export default SideBar;
