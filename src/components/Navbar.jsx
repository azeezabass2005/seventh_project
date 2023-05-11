import React from 'react'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { menu, close, AbassLogo } from '../assets'
import { useState } from 'react'
import { linkedinicon, fbicon } from '../assets'


// https://web.facebook.com/profile.php?id=100089854802784
//https://www.linkedin.com/in/abass-afolarin-5a9554259/


const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <div className={`flex justify-between items-center sm:px-15`} >
        <div className={`${styles.flexCenter}`}>
            <a href="#" onClick={ () => window.scrollTo(0, 0)}><img src={AbassLogo} alt="logo" className={`h-[38px] w-[38px] object-contain mr-3`} /></a>
            <h1 className={`text-white font-pageName text-[30px]`}>
                Ab<span className='gradient'>a</span>ss
            </h1>
        </div>
        <div className='sm:flex hidden justify-center items-center gap-[2rem]'>
            <div className={`flex gap-[1rem] justify-center items-center`}>
                <a href="https://web.facebook.com/profile.php?id=100089854802784" target='_blank'><img src={fbicon} alt="fb" className={`h-[46px] w-[46px]`}/></a>
                <a href="https://www.linkedin.com/in/abass-afolarin-5a9554259/" target='_blank'>
                    <img src={linkedinicon} alt="linkedin" className={`h-[36px] w-[36px]`} />
                </a>
            </div>
            <ul className={`flex`}>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`${navLinks.length - 1 == index ? 'mr-0' : 'md:mr-7 mr-3'}`}>
                        <a href={`#${nav.id}`} className={`text-white link-hover px-1 py-2`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <div className='sm:hidden flex nav-mobile-container'>
            <img src={toggle ? close : menu} alt="menu" onClick={ () => setToggle((prev) => (!prev))} />
            <ul className={`${toggle ? 'flex' : 'hidden'} flex-col nav-mobile`}>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`${navLinks.length - 1 == index ? 'mb-0' : 'mb-3'}`}>
                        <a href={`#${nav.id}`} onClick={ () => setToggle((prev) => (!prev))} className={`text-white px-1 py-2`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
                <li className='mt-5'>
                    <div className={`flex gap-[1rem] justify-center items-center`}>
                        <a href="https://web.facebook.com/profile.php?id=100089854802784" target='_blank'><img src={fbicon} alt="fb" className={`h-[46px] w-[46px]`}/></a>
                        <a href="https://www.linkedin.com/in/abass-afolarin-5a9554259/">
                            <img src={linkedinicon} alt="linkedin" className={`h-[36px] w-[36px]`} />
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar