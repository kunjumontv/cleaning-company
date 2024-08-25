import Image from 'next/image'
import React from 'react'

const FeaturedIn = () => {
  return (
    <div className="bg-yellow mt-20 md:py-8 flex flex-col items-center lg:mx-28">
      <h1 className="text-center mb-6 text-44px">Featured In</h1>
      <div className="flex flex-col md:flex-row md:space-x-8 items-center">
        <Image width={150} height={50} src="/images/latch.webp" alt="Latch"  />
        <Image width={150} height={50} src="/images/stellamaris.webp" alt="Stellamaris"  />
        <Image width={150} height={50} src="/images/gasparyan.webp" alt="Gasparyan"  />
        <Image width={150} height={50} src="/images/volve.webp" alt="Volve"  />
              <Image width={150} height={50} src="/images/foreva.webp" alt="Foreva" />
             
      </div>
    </div>
  )
}

export default FeaturedIn
