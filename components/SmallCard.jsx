import React from 'react'
import Image from 'next/image'

function SmallCard({img, location, distance}) {
  return (
    <div className='flex items-center'>
    {/* Left side */}
      <div className='relative h-16 w-16'>
        <Image src={img} layout="fill" className='rounded-lg ' alt='Images'/>
      </div>
      {/* Right side */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard