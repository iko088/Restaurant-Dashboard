import React, { useState } from "react";

const Navbar = () => {
  const [notification, setnotification] = useState(5)
  const [message, setmessage] = useState(7)
  const [gifts, setgifts] = useState(3)
  const [setting, setsetting] = useState(2)
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between">
        {/* SEARCH BAR  */}
        <div className="flex w-1/2 items-center justify-center my-2 ">
          <div className="flex w-full mx-3 rounded-md bg-white">
            <input
              className="w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none"
              type="search"
              name="search"
              placeholder="Search here"
            />
            <button
              type="submit"
              className="m-2 rounded px-2 py-1 text-[#A4A4A4] "
            >
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 56.966 56.966"
                width="10"
                height="10"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>

        {/* NOTEFICATION  */}
        <div>
      <div>
        <button className="relative mx-2">
          <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-[#2D9CDB] rounded-full px-2 py-1 text-[7px] font-bold text-white border-2 border-white ">{notification} </span>
          <img src="/images/notification.png" className="w-[40px] p-3 bg-[#2D9CDB] bg-opacity-25 hover:bg-opacity-35 transition duration-200 rounded-xl" alt="Notification" />
        </button>

        <button className="relative mx-2">
          <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-[#2D9CDB] rounded-full px-2 py-1 text-[7px] font-bold text-white border-2 border-white">{message} </span>
          <img src="/images/message.png" className="w-[40px] p-3 bg-[#2D9CDB] bg-opacity-25 hover:bg-opacity-35 transition duration-200 rounded-xl" alt="Notification" />
        </button>

        <button className="relative mx-2">
          <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-[#5E6C93] text-white rounded-full px-2 py-1 text-[7px] font-bold border-2 border-white">{gifts} </span>
          <img src="/images/gift.png" className="w-[40px] p-3 bg-[#5E6C93] bg-opacity-25 hover:bg-opacity-35 transition duration-200 rounded-xl" alt="Notification" />
        </button>

        <button className="relative mx-2">
          <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-[#FF5B5B] text-white rounded-full px-2 py-1 text-[7px] font-bold border-2 border-white">{setting} </span>
          <img src="/images/gar.png" className="w-[40px] p-3 bg-[#FF5B5B] bg-opacity-25 hover:bg-opacity-35 transition duration-200 rounded-xl" alt="Notification" />
        </button>
      </div>
    </div>

        {/* PROFILE*/}
        <div className="flex items-center gap-4 ps-4 border-s-2 border-[#D0D6DE] mx-3">
        <p className="text-sm text-[#464255] ">Hello, <span className="font-bold">Samantha</span></p>
        <img src="/images/person.png" className="w-[40px] cursor-pointer " alt="" />
        </div>


        {/* END OF PARENT DIV  */}
      </div>
    </div>
  );
};

export default Navbar;
