import React from 'react'
import { layout, styles } from '../styles'
import { motion } from 'framer-motion'
import FavoriteQuote from './FavoriteQuote'
import Cube from './Cube'
import ViewResume from './ViewResume'

const About = () => {
  return (
    <div className={`min-h-[100vh] flex flex-col justify-between`} id='about'>
        <div className={`${styles.flexCenter}`}>
            <h1 className={`${styles.sectionHeader} z-[2] `}>
                About
            </h1>
        </div>

        <div className={`${layout.section} about sm:justify-around items-start z-[2]`}>
            <motion.div whileInView={{ x: [-150, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.1 }} className={`md:mb-0 mb-5`}>
                <h2 className={`${styles.heading2}`}>
                    Brief Intro<span className={`gradient-two`}> About me</span>.
                </h2>
                <p className={`${styles.paragraph} sm:mt-7 mt-5 z-[2]`}>
                    I&apos;m Azeez Abass Afolarin, I&apos;m from Oyo state<br className={`sm:flex hidden`} />  of Nigeria. I love spending my  leisure time <br className={`sm:flex hidden`} /> coding and listening to music. I&apos;m always <br className={`sm:flex hidden`} /> looking forward to build webpages that are <br className={`sm:flex hidden`} />beautiful and accessible to users.<br className={`sm:flex hidden`} /> 
                </p>
                <ViewResume />
                <div className={` about-anime w-[40px] h-[40px] rounded-full`} />
            </motion.div>
            <motion.div transition={{ duration: 0.5, delay: 0.1 }} whileInView={{ x:[150, 0], opacity:[0, 1] }} className={`flex justify-center items-center sm:min-h-[450px] min-h-[300px] md:ml-7`}>
                <Cube />
            </motion.div>

        </div>
        <motion.div initial={{ opacity: 0, y:100 }} whileInView={{ opacity:1, y:0 }} transition={{ duration: 0.5 }} className={`flex justify-center`}>
            <FavoriteQuote />
        </motion.div>
    </div>
  )
}

export default About