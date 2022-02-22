import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
} from "@heroicons/react/outline";
function Header() {
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
          <div className="ml-auto border-[1px-solid] rounded-full shadow-lg px-1">
            <input
              type="text"
              className="outline-none rounded-full  px-2 font-thin"
              placeholder="search"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
