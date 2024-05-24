import React, { useState } from "react";
import Navbar from "./Navbar";
import DashTitle from "./DashTitle";
import DashCards from "./DashCards";
import Linechart from "./Linechart";
import LineChart from "./LineChart2";
import DonutChart from "./DonutChart";
import AreaChart from "./AreaChart ";
import { HiOutlineDotsVertical } from "react-icons/hi";

const MainContent = () => {
  const [selectedOption, setSelectedOption] = useState("chart");

  // SENDING DATA TO AREACHART COMPONENT
  const seriesData = {
    monthDataSeries1: {
      orders: [415, 320, 450, 380, 500, 480, 550],
      dates: [
        "2023-01-01",
        "2023-01-02",
        "2023-01-03",
        "2023-01-04",
        "2023-01-05",
        "2023-01-06",
        "2023-01-07",
      ],
    },
  };

  return (
    <div className="mx-5">
      <Navbar />
      <div className="mx-3">
        <DashTitle />
        <DashCards />

        {/* ALL CHARTS HERE  */}
        <div className="my-10">
          <div className="grid grid-cols-2 gap-4 ">
            {/* DONUT CHARTS  */}
            <div className="h-[270px] flex flex-col justify-around rounded-xl px-6 bg-[#FFFFFF] ">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold ">Pie Chart</h1>
                <div>
                  {/* Square radio buttons */}
                 <div className="ms-24 ">
                 <label className="inline-flex items-center me-4">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      value="chart"
                      checked={selectedOption === "chart"}
                      onChange={() => setSelectedOption("chart")}
                    />
                    <span className="ms-1">Chart</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-4 w-4 text-blue-600"
                      value="value"
                      checked={selectedOption === "value"}
                      onChange={() => setSelectedOption("value")}
                    />
                    <span className="ms-1">Show Value</span>
                  </label>
                  
                 </div>
                </div>
                  {/* THREE DOTS  */}
                  <HiOutlineDotsVertical className="cursor-pointer" />
              </div>
              <div className="flex items-center gap-4">
                {selectedOption === "value" ? (
                  <>
                    {/* Show value */}
                    <div>Value 1: 80%</div>
                    <div>Value 2: 70%</div>
                    <div>Value 3: 30%</div>
                  </>
                ) : (
                  <>
                    {/* Show chart */}
                    <div className="flex flex-col items-center gap-4">
                      <DonutChart
                        percentage={80}
                        color="#4CAF50"
                        backgroundColor="rgba(76, 175, 80, 0.3)"
                      />
                      <h1 className="text-[#464255] font-bold text-sm ">
                        Total Order
                      </h1>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <DonutChart
                        percentage={70}
                        color="#FF9800"
                        backgroundColor="rgba(255, 152, 0, 0.3)"
                      />
                      <h1 className="text-[#464255] font-bold text-sm ">
                        Customer Growth
                      </h1>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <DonutChart
                        percentage={30}
                        color="#F44336"
                        backgroundColor="rgba(244, 67, 54, 0.3)"
                      />
                      <h1 className="text-[#464255] font-bold text-sm ">
                        Total Revenue
                      </h1>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* AREA CHART  */}
            <AreaChart seriesData={seriesData} />
          </div>

          {/* LINE CARTS  */}
          <div className="grid grid-cols-3 gap-5 mt-8 ">
            <div className="col-span-2">
              <LineChart />
            </div>
            <div className="col-span-1">
              <Linechart />
            </div>
          </div>
        </div>

        {/* CUSTOMER REVIEWS  */}
        <div className="">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-[#464255] font-bold text-xl ">
              Customer <br /> Review
            </h1>
            <div className="flex items-center gap-2">
            <button className="text-3xl font-bold text-[#00B074] text-center px-3 pb-1 bg-[#ffffff] rounded-lg ">&#8249;</button>
            <button className="text-3xl font-bold text-[#00B074] text-center px-3 pb-1 bg-[#ffffff] rounded-lg ">&#8250;</button>
            </div>
          </div>

          {/* ALL CARDS HERE  */}
          <div className=" grid grid-cols-3 gap-10 my-8">
            {/* CARD ONE  */}
            <div className="relative  flex justify-between py-3 ps-4 bg-[#ffffff] rounded-xl">
              <div>
                {/* PROFILE IMAGE AND NAME HERE */}
                <div className="flex items-center gap-4">
                  <img
                    src="/images/cardperson1.png"
                    className="rounded-full"
                    alt=""
                  />
                  <div className="leading-[15px]">
                    <p className="text-sm text-[#464255] font-bold">
                      Jons Sena
                    </p>
                    <span className="text-xm text-[#A3A3A3]">2 days ago</span>
                  </div>
                </div>

                {/* CARD TEXT CONTENT */}
                <div className="my-3">
                  <p className="text-[12px] text-[#464255] font-semibold">
                    Lorem Ipsum is simply dummy <br /> text of the printing and{" "}
                    <br />
                    typesetting industry. <br /> Lorem Ipsum has been the <br />{" "}
                    industry's standard dummy text
                  </p>
                </div>

                {/* RATING */}
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    4.95
                  </p>
                </div>
              </div>
              <div className="absolute right-[-20px] top-12 transform translate-x-1/2">
                <img
                  src="/images/cardfood1.png"
                  className="rounded-full w-1/2"
                  alt=""
                />
              </div>
            </div>

            {/* CARD TWO  */}
            <div className="relative flex justify-between py-3 px-4 bg-[#ffffff] rounded-xl">
              <div>
                {/* PROFILE IMAGE AND NAME HERE  */}
                <div className="flex items-center gap-4">
                  <img
                    src="/images/cardperson2.png"
                    className="rounded-full"
                    alt=""
                  />
                  <div className=" leading-[15px] ">
                    <p className="text-sm text-[#464255] font-bold ">Sofia</p>
                    <span className="text-xm text-[#A3A3A3] ">2 days ago</span>
                  </div>
                </div>

                {/* CARD TEXT CONTENT  */}
                <div className="my-3">
                  <p className="text-[12px] text-[#464255] font-semibold ">
                    Lorem Ipsum is simply dummy <br /> text of the printing and{" "}
                    <br />
                    typesetting industry. <br /> Lorem Ipsum has been the <br />{" "}
                    industry's standard dummy text{" "}
                  </p>
                </div>

                {/* RATING  */}
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    4.00
                  </p>
                </div>
              </div>
              <div className="absolute right-[-20px] top-12 transform translate-x-1/2">
                <img
                  src="/images/cardfood2.png"
                  className="rounded-full w-1/2 "
                  alt=""
                />
              </div>
            </div>
            {/* CARD THREE  */}
            <div className="relative flex justify-between py-3 px-4 bg-[#ffffff] rounded-xl">
              <div>
                {/* PROFILE IMAGE AND NAME HERE  */}
                <div className="flex items-center gap-4">
                  <img
                    src="/images/cardperson3.png"
                    className="rounded-full"
                    alt=""
                  />
                  <div className=" leading-[15px] ">
                    <p className="text-sm text-[#464255] font-bold ">
                      Anandreansyah
                    </p>
                    <span className="text-xm text-[#A3A3A3] ">2 days ago</span>
                  </div>
                </div>

                {/* CARD TEXT CONTENT  */}
                <div className="my-3">
                  <p className="text-[12px] text-[#464255] font-semibold ">
                    Lorem Ipsum is simply dummy <br /> text of the printing and{" "}
                    <br />
                    typesetting industry. <br /> Lorem Ipsum has been the <br />{" "}
                    industry's standard dummy text{" "}
                  </p>
                </div>

                {/* RATING  */}
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                    4.50
                  </p>
                </div>
              </div>
              <div className="absolute right-[-20px] top-12 transform translate-x-1/2">
                <img
                  src="/images/cardfood3.png"
                  className="rounded-full w-1/2 "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
