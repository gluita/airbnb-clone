import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <header className="shadow-md ">
      <div className="flex h-[80px] w-full px-9 items-center justify-between">
        <div className="flex-[1_0_140px]">
          <img src="/images/logo.png" className="w-[120px]" alt="" />
        </div>
        <div className="flex flex-[0_1_auto] min-w-[200px] gap-x-[50px]">
          <a href="/places">Places</a>
          <a href="/places">Places</a>
          <a href="/places">Places</a>
        </div>
        <div className="flex flex-[1_0_140px] justify-end gap-x-[30px]">
          <div className="flex gap-x-[20px]">
            <p>Become a Host</p>
            <GlobeAltIcon className="w-[20px]" />
          </div>
          <div className="flex w-[20px]">
            <MenuIcon />
            <UserCircleIcon />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
