import React from 'react'
import Image from 'next/image'
import { TbArrowNarrowRight } from 'react-icons/tb'
import {catalogueData} from '../../data/data'


export default function Catalogue() {
  return (
    <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x">
      {catalogueData.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div>
            <Image
              src={item.image}
              alt=""
              width={380}
              height={100}
              className="w-full"
            />
          </div>
          <div className="absolute top-0 p-8 bg-white text-block bg-opacity-60 backdrop-blur m-12">
            <div className="flex justify-between pb-4">
              <p className="text-sm">{item.category}</p>
              <span className="text-sm">{item.id}</span>
            </div>
            <h1 className="block text-xl font-semibold">{item.title}</h1>
            <p className="py-4">{item.description}</p>
            <a href="" className="inline-flex items-center font-medium">
              see details
              <TbArrowNarrowRight className="ml-2" />
            </a>
          </div>
          <div className="inset-0 bg-tertiary flex-col items-center justify-end md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 group-hover:translate-y-full md:border-b-0 hidden">
            <p className="tracking-wider -rotate-90">{item.category}</p>
            <span>{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  )
}



