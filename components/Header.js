import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
const Header = () => {
  return (
    <div className="sticky  top-0 z-50 bg-white flex  items-center pg-2 lg:px-5 shadow-md">
      <Image
        src="https://links.papareact.com/5me"
        height={40}
        layout="fixed"
        width={40}
      />
      <div className="flex ml-2  items-center rounded-full bg-gray-100 p-2">
        <SearchIcon className="h-6 text-gray-600" />
        <input
          className="flex hidden md:inline-flex ml-2 items-center bg-transparent outline-none flex-shrink placeholder-gray-500"
          type="text"
          placeholder="Search Facebook"
        />
      </div>
      <div className="flex justify-center flex-grow">
        <div className="flex  space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="font-semibold pr-3 whitespace-nowrap">
          Giovani
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
