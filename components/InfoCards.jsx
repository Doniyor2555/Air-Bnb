import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/outline";

function InfoCards({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">

      <div className="relative w-40 h-24 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          alt="images of houses"
          objectFit="cover"
          className="rounded-2xl " />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p className="">{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="thunk pt-2 text-sm text-gray-600 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">

          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight ">{total}</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default InfoCards