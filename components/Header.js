import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setnoOfGuest] = useState("1");
  const selectionRange = {
    startDate,
    endDate,
    key: "Selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };

  return (
    <header className="w-full px-[2.4rem]">
      <div className="flex items-center gap-x-5">
        <div className="relative flex items-center h-[51px] my-auto w-[80px]">
          <Image
            src="/images/logo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="flex w-full">
          <div className="flex gap-x-7">
            <p>Menu</p>
            <p>Rewards</p>
          </div>
          <div className="ml-auto border-2  border-solid rounded-full shadow-lg px-1 border-[1px-solid]">
            <input
              type="text"
              className="outline-none rounded-full  px-2 font-thin text-sm caret-slate-300  min-w-[300px] "
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="search"
            />
          </div>
        </div>
      </div>{" "}
      {searchInput && (
        <div className="justify-center flex items-center">
          <div className="flex flex-col col-span-3 justify-center">
            <DateRangePicker
              className=""
              ranges={[selectionRange]}
              onChange={handleSelect}
              rangeColors={["#FD5B61"]}
              minDate={new Date()}
            />
            <div className="px-[20px] flex items-center ">
              <h2 className="flex-grow">Number of People</h2>
              <UserCircleIcon className="w-[24px]" />
              <input
                type="number"
                min={1}
                className="w-12 pl-2 text-red-400 text-lg outline-none"
                value={noOfGuest}
                onChange={(e) => setnoOfGuest(e.target.value)}
              />
            </div>
            <div className="flex px-[20px] mb-[20px]">
              <h3 className="flex-grow text-center">Cancel</h3>
              <a href="/search" className="flex-grow ">
                <h3 className="flex-grow text-center bg-red-300">Search</h3>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
