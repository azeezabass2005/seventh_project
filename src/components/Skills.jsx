import React from 'react'
import { styles, layout } from '../styles'
import { technicalSkills, softSkills } from '../constants'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

const Skills = () => {
  return (
    <div className={`flex flex-col items-center`} id='skills'>
        <h1 className={`${styles.sectionHeader}`}>
            Skills
        </h1>
        <div className={`flex justify-center items-start flex-col w-full`}>
            <div className={`w-full ${styles.flexCenter} flex-col`}>
                <div className={`bg-secondary w-[80%] sm:p-7 p-5 text-white flex rounded-[10px] text-[20px] sm:m-5 m-3`}>
                    What I have to offer technically
                </div>
                <motion.div className={`flex flex-wrap justify-around`}>
                    {technicalSkills.map((tSkill) => (
                        <Tilt key={tSkill.id} className={`bg-shine w-[286px] h-[266px] m-4 rounded-[5px] ${styles.flexCenter}`}>
                            <div className={`w-[280px] h-[260px] flex flex-col justify-between items-center bg-secondary p-4 rounded-[5px]`}>
                                <h4 className={`text-white whitespace-nowrap`}>
                                    {tSkill.skill}
                                </h4>
                                <img src={tSkill.img} alt="skill image" className={`h-[80px] w-[80px] object-contain`} />
                                <p className={`text-dimWhite`}>
                                    {tSkill.description}
                                </p>
                            </div>
                        </Tilt>
                    ))}
                </motion.div>
            </div>
            <div className={`w-full ${styles.flexCenter} flex-col`}>
                <div className={`bg-secondary w-[80%] sm:p-7 p-5 text-white flex rounded-[10px] text-[20px] sm:m-5 m-3`}>
                    My special soft skills
                </div>
                <motion.div className={`flex flex-wrap justify-around`}>
                    {softSkills.map((sSkill) => (
                        <Tilt key={sSkill.id} className={`bg-shine w-[286px] h-[266px] m-4 rounded-[5px] ${styles.flexCenter}`}>
                            <div className={`w-[280px] h-[260px] flex flex-col justify-between items-center bg-secondary p-4 rounded-[5px]`}>
                                <h4 className={`text-white whitespace-nowrap`}>
                                    {sSkill.skill}
                                </h4>
                                <img src={sSkill.img} alt="skill image" className={`h-[80px] w-[80px] object-contain`} />
                                <p className={`text-dimWhite`}>
                                    {sSkill.description}
                                </p>
                            </div>
                        </Tilt>
                    ))}
                </motion.div>
            </div>

        </div>
        <div className='w-full flex justify-center items-center gap-2.5 flex-wrap mt-4'>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                NextJS
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                ReactJs
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                NodeJs
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                ExpressJs
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                Typescript
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                TailwindCSS
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                MongoDb
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                HTMl
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                CSS
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                Javascript
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                React Native
            </p>
            <p className='text-white font-semibold bg-gradient px-2 py-1 rounded-full'>
                Git
            </p>
        </div>
    </div>
  )
}

export default Skills