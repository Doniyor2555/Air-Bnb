import Image from "next/image"

function InfoCards({ img, location, title, description, star, price, total }) {
  return (
    <div>
      <Image src={img} layout="fill" alt="images of houses"/>
    </div>
  )
}

export default InfoCards