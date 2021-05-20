import { PlusSmIcon } from "@heroicons/react/outline";
import Image from "next/image";
const StoryCard = ({ name, src, profile, add }) => {
  return (
    <div
      className="relative  h-14 w-14 md:h-20 md:w-20 lg:h-48 lg:w-32 cursor-pointer overflow-x p-3
    "
    >
      {profile && (
        <Image
          className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
          src={profile}
          width={40}
          height={40}
          layout="fixed"
          objectFit="contain"
        />
      )}

      <Image
        className="transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse object-cover inline-flex filter brightness-75 rounded-full lg:rounded-2xl"
        src={src}
        layout="fill"
      />
    </div>
  );
};

export default StoryCard;
