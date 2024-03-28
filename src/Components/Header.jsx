import React, { useState } from "react";
import logo from "./../assets/images/logo.png";
import {
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiHome,
} from "react-icons/hi2";
import { fromJSON } from "postcss";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className=" flex items-center justify-between p-4">
      <div className=" flex gap-8 items-center">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className=" hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItems name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItems name={""} Icon={item.icon} />
          )}

          <div className=" md:hidden " onClick={() => setToggle(!toggle)}>
            <HeaderItems name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className=" absolute mt-3 bg-[#11101f] border-[1px] p-3 border-gray-700 px-5 py-4 ">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItems name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://png.pngitem.com/pimgs/s/22-223968_default-profile-picture-circle-hd-png-download.png"
        className=" w-[40px] rounded-full "
      />
    </div>
  );
}

export default Header;
