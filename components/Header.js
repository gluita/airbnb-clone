import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header className="flex items-center shadow-md w-full h-[60px]">
      <div className="flex justify-between px-2 items-center w-full h-full gap-x-3">
        <div className="w-[50px] h[50px]">
          <img src="/images/logo.png" alt="" className="w-full h-ful" />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="search"
            className="outline-none  rounded-md shadow-md h-[33px] w-[200px]"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
