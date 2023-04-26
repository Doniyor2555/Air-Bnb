import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/outline";

function InfoCards({ img, location, title, description, star, price, total }) {
  return (
    <div className="">

      <div className="relative w-40 h-24 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" alt="images of houses" objectFit="cover" />
      </div>

      <div>
        <div>
          <p>{location}</p>
          <HeartIcon />
        </div>
      </div>
    </div>
  )
}

export default InfoCards