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
            <motion.div initial={{ opacity: 0  }} whileInView={{ opacity: 1}} transition={{ duration: 0.6 }} className={`md:mb-0 mb-5`}>
                <h2 className={`${styles.heading2}`}>
                    Brief Intro<span className={`gradient-two`}> About me</span>.
                </h2>
                <p className={`${styles.paragraph} sm:mt-7 mt-5 z-[2]`}>
                    I'm Azeez Abass Afolarin, I'm from Oyo state<br className={`sm:flex hidden`} />  of Nigeria. I love spending my  leisure time <br className={`sm:flex hidden`} /> coding and listening to music. I'm always <br className={`sm:flex hidden`} /> looking forward to build webpages that are <br className={`sm:flex hidden`} />beautiful and accessible to users.<br className={`sm:flex hidden`} /> 
                </p>
                <ViewResume />
                <div className={` about-anime w-[40px] h-[40px] rounded-full`} />
            </motion.div>
            {/* <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} >
                <h2 className={`${styles.heading2}`}>
                    My<span className={`gradient-two`}> Mission</span> and<span className={`gradient-two`}> Vision</span>.
                </h2>
                <p className={`${styles.paragraph} sm:mt-7 mt-5`}>
                    Though as humans our vision or mission  <br className={`sm:flex hidden`} /> may change over time, as of now, my <br className={`sm:flex hidden`} /> vision is to build webpages that are <br className={`sm:flex hidden`} />beautiful, easy to navigate and lack usage <br className={`sm:flex hidden`} /> stress for users and I plan to  accomplish <br className={`sm:flex hidden`} /> this by my mission  which is Learning and  <br className={`sm:flex hidden`} />integrating both new and existing web techs.
                </p>
                <div className={` about-anime w-[40px] h-[40px] rounded-full`} />
            </motion.div > */}
            <div className={`flex justify-center items-center sm:min-h-[450px] min-h-[300px] md:mr-7`}>
                <Cube />
            </div>

        </div>
        <motion.div initial={{ opacity: 0, y:80 }} whileInView={{ opacity:1, y:0 }} transition={{ duration: 0.3 }} className={`flex justify-center`}>
            <FavoriteQuote />
        </motion.div>
    </div>
  )
}

export default About