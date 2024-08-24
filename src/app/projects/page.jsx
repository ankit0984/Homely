import React from 'react'
import Image from 'next/image'
import {projectData} from '../data/data'

export default function page() {
  return (
    <div>
      <div className="bg-projects bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">
          Our Projects
        </h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl group"
          >
            <div>
              <Image
                className="w-full"
                src={project.image}
                width={480}
                height={380}
                alt=""
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white/90 flex-col items-center justify-end w-96 gap-32 p-12 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
              <h1 className="font-semibold text-2xl">{project.name}</h1>
              <p className="py-4">{project.description}</p>
              <a
                href={project.link}
                className="text-primary hover:text-primary-foreground"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
