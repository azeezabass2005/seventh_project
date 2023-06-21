import React from 'react'
import { motion } from 'framer-motion'
import { layout } from '../styles'
import { My01, My02 } from '../assets'
import { styles } from '../styles'
import ContactMe from './ContactMe'
import { reactjs, html, css, javascript } from '../assets'

const Hero = () => {
  return (
    <div className={`${layout.heroSection} bg-hero flex justify-around min-h-[95%]`}>
      <motion.div whileInView={{ x: [-400, 0], opacity: [0, 1] }} transition={{ duration: 0.5, delay: 0.1 }} className={`${styles.flexCenter} p-5`}>
        <div className={`flex flex-col`}>
          <h2 className={`${styles.heading2} text-white`}>
            Hi there 👋,<span className={`gradient-two`}> I&apos;m  Abass</span>,
            a <br className={`sm:flex hidden`} />website <span className={`gradient-two`}>developer</span>.
          </h2>
          <p className={`${styles.paragraph} sm:mt-7`}>
            I&apos;m passionate about building beautiful user <br className={`sm:flex hidden`} /> interfaces and user experiences that tends to <br className={`sm:flex hidden`} />satisfy the client and appeal the users.
          </p>
          <ContactMe />
        </div>
      </motion.div>
      <motion.div transition={{ duration: 0.5, delay: 0.1 }} whileInView={{ x:[400, 0], opacity:[0, 1] }}  className='relative'>
        <img src={My01} alt="my image" className={`sm:h-[600px] sm:w-[600px] w-[360px] h-[360px] object-contain relative z-[1] mt-3`} />
        <div className={`hero-skill-ring sm:w-[450px] sm:h-[450px] xs:w-[310px] xs:h-[310px] vs:w-[290px] vs:h-[290px] w-[260px] h-[260px] rounded-full absolute xs:left-[5%] left-[2%] xs:top-[25%] top-[15%]`}>
          <img src={reactjs} alt="reactjs" className={`absolute w-[50px] h-[50px] object-contain sm:top-[10%] top-[8%] sm:left-[8%] left-[6%]`} />
          <img src={javascript} alt="javascript" className={`absolute w-[50px] h-[50px] object-contain sm:right-[8%] right-[6%] sm:top-[10%] top-[8%]`} />
          <img src={html} alt="html" className={`absolute w-[50px] h-[50px] object-contain sm:bottom-[10%] bottom-[8%] sm:left-[8%] left-[6%]`} />
          <img src={css} alt="css" className={`absolute w-[50px] h-[50px] object-contain sm:bottom-[10%] bottom-[8%] sm:right-[8%] right-[6%]`} />
        </div>
      </motion.div>
    </div>
  )
}

export default Hero