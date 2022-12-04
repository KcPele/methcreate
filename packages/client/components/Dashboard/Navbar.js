import React from "react";
import Image from "next/image";
import DP from "../../images/dp.png";
import notification from "../../images/bell.png";
import search from "../../images/search.png";
import record from "../../images/record.png";
import wifi from "../../images/wifi.png";
import arrowdown from "../../images/arrowdown.png";

const Navbar = () => {
  // create array of objects for filter options
  const filterOptions = [
    {
      name: "All",
      link: "#",
    },
    {
      name: "Live",
      link: "#",
    },
    {
      name: "Paid",
      link: "#",
    },
    {
      name: "Free",
      link: "#",
    },
    {
      name: "SPorts",
      link: "#",
    },
    {
      name: "Music",
      link: "#",
    },
    {
      name: "News",
      link: "#",
    },
    {
      name: "Live",
      link: "#",
    },
    {
      name: "VOD",
      link: "#",
    },
    {
      name: "All",
      link: "#",
    },
    {
      name: "Live",
      link: "#",
    },
    {
      name: "Paid",
      link: "#",
    },
    {
      name: "Free",
      link: "#",
    },
    {
      name: "SPorts",
      link: "#",
    },
    {
      name: "Music",
      link: "#",
    },
    {
      name: "News",
      link: "#",
    },
    {
      name: "Live",
      link: "#",
    },
    {
      name: "VOD",
      link: "#",
    },
  ];
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row justify-between items-center p-2 mt-3">
        <div className="flex flex-row items-center justify-center bg-[#171717] rounded-full ml-3">
          <Image src={search} alt="search" className="w-[12px] mx-3" />
          <input
            type="text"
            placeholder="Search videos, creators etc"
            className="bg-transparent outline-none w-[18vw] h-[5vh] text-[#a3a3a3] text-sm"
          />
        </div>
        <div className="flex flex-row items-center justify-center">
          <div>
            <Image src={record} alt="record" className="w-auto mr-5" />
          </div>
          <button className="flex flex-row items-center justify-center bg-transparent border-[#6624FF] rounded-full w-[10vw] h-[5vh]">
            <p className="text-[#6624FF] text-[12px]">Start Stream</p>
            <Image src={wifi} alt="wifi" className="w-auto" />
          </button>
          <div>
            <Image
              src={notification}
              alt="notification"
              className="w-auto mx-3"
            />
          </div>
          <button className="bg-[#6624FF] text-[12px] text-[#fafafa] rounded-full w-auto py-1 px-2 h-[5vh]">
            Connect Wallet
          </button>
          {/* <div className="relative">
          <button className="flex flex-row items-center justify-center bg-[#171717] rounded-full w-[10vw] h-[5vh]">
            0x3254...4567
            <Image
              src={arrowdown}
              alt="arrowdown"
              className="w-[3vw] h-[3vh]"
            />
          </button>
        </div> */}
          {/* <div className="relative">
          <Image src={DP} alt="DP" className="w-[3vw] h-[3vh]" />
          <div className="absolute top-[5vh] right-0 bg-[#171717] w-[10vw] h-[10vh] rounded-md">
            <Image
              src={arrowdown}
              alt="arrowdown"
              className="w-[3vw] h-[3vh]"
            />
          </div>
        </div> */}
        </div>
      </div>
      <div className="flex flex-row justify-center ml-4 overflow-auto items-center pl-4 p-2 mt-3">
        {filterOptions.map((option) => (
          <button className="bg-[#171717] rounded-full mx-2 text-[14px] text-[#fafafa] w-auto py-1 px-4">
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
