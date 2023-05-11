import React from 'react'
import { styles } from '../styles'
import { myProjects } from '../constants'
import { github } from '../assets'

const Works = () => {
  return (
    <div id='my-works' className={`flex justify-around items-center flex-col w-[100%]`}>
      <div className={`${styles.sectionHeader}`}>
        <h1>
          <span className={`sm:inline-block hidden`}>Some of </span> My Works
        </h1>
      </div>
      <div>
        <div className={`flex justify-around sm:gap-15 gap-10 flex-wrap w-[100%]`}>
          {myProjects.map((project) => (
            <div key={project.id} className={`vs:w-[320px] w-[300px] ${styles.flexCenter} flex-col bg-[#111435] rounded-2xl relative`}>
              <div className={`${styles.flexCenter} w-[50px] h-[50px] rounded-full bg-[#1e1227] absolute right-[20px] top-[20px] cursor-pointer`}>
                <img src={github} alt="github" className={`w-[30px] h-[30px] object-contain`} />
              </div>
              <img src={project.img} alt="projectimage" className={`h-[260px] w-[320px] rounded-tr-2xl rounded-tl-2xl`} />
              <h4 className={`text-white p-3 font-semibold text-[18px]`}>
                {project.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works