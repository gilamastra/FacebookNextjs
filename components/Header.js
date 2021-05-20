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
import { useSession, signOut } from "next-auth/client";
import HeaderIcon from "./HeaderIcon";
const Header = () => {
  const [session] = useSession();
  return (
    <div className="sticky    top-0 z-50 bg-white flex  items-center pg-1 lg:px-10 shadow-md">
      <Image
        src="https://links.papareact.com/5me"
        className="h-2 w-2"
        layout="fixed"
        width={40}
        height={40}
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
        <div className="w-7 h-7 mx-1 md:mx0 md:w-8 md:h-8 xl:w-10 xl:h-10  relative">
          <Image
            onClick={signOut}
            className="rounded-full cursor-pointer"
            src={session.user.image}
            layout="fill"
          />
        </div>
        <p className="font-semibold pr-3 whitespace-nowrap">
          {session.user.name}
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
