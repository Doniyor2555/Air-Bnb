import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>About</h5>
        <p>How Airbnb works</p>
        <p>News room</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>Community</h5>
        <p>Accessibility</p>
        <p>This is not real site</p>
        <p>Its a pretty awesome clone</p>
        <p>Refferals acceptred</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>HOST</h5>
        <p>Doni</p>
        <p>Presents</p>
        <p>Zero to Full Stack hero</p>
        <p>Hundreds of Students</p>
        <p>Join now</p>
      </div>
      
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Center</p>
        <p>Trus & Safety</p>
        <p>Hello Wolrd!</p>
        <p>Easter eggs</p>
        <p>For the Win</p>
      </div>
      
      <div></div>
    </div>
  )
}

export default Footer