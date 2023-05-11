import React from 'react'
import emailjs from '@emailjs/browser'
import { styles, layout } from '../styles'
import { useState, useRef } from 'react'
import { access } from '../assets'

// Public key N1dbCYtRQwfWzi4ta
// Template id template_itnl2fp
// Service id service_279qioa


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      'service_279qioa',
      'template_itnl2fp',
      {
        from_name: form.name,
        to_name: 'Abass',
        from_email: form.email,
        to_email: 'azeezabass2005@gmail.com',
        message: form.message,
      },
      'N1dbCYtRQwfWzi4ta'
      )
      .then(() => {
        setLoading(false);
        alert('Thanks for contacting me, I will get back to you soonest')

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)

        console.log(error);

        alert('Something went wrong.')
      })


  }


  return (
    <div id='contact' className={`bg-primary w-full flex flex-col items-center`}>
      <div className={`${styles.sectionHeader}`}>
        <h1>
          Contact
        </h1>
      </div>
      <div className={`${layout.section} justify-around w-full`}>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className={`flex flex-col w-full bg-[#232538] sm:p-10 p-5 sm:m-10 m-7 rounded-2xl  max-w-[550px]`}
        >
            <label htmlFor="name" className={`flex gap-5 flex-col`}>
              <span className={`text-white font-poppins font-semibold`}>
                Name
              </span>
              <input 
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Your name'
                className={`p-3 rounded-xl text-white flex w-full bg-[#070920] outline-none`}
              />
            </label>
            <label htmlFor="email" className={`flex gap-5 flex-col`}>
              <span className={`text-white font-poppins font-semibold`}>
                Email
              </span>
              <input 
                type="text"
                name='email'
                onChange={handleChange}
                value={form.email}
                placeholder='Your email'
                className={`p-3 rounded-xl outline-none flex w-full bg-[#070920] text-white`}
              />
            </label>
            <label htmlFor="message" className={`flex gap-5 flex-col`}>
              <span className={`text-white font-poppins font-semibold`}>
                Email
              </span>
              <textarea
                rows={5} 
                name='message'
                onChange={handleChange}
                value={form.message}
                placeholder='Your message'
                className={`p-3 rounded-xl outline-none flex w-full bg-[#070920] text-white`}
              />
            </label>
            <button type='submit' className={`p-3 my-5 rounded-[5px] text-white bg-[#060822] w-[100px] send-button`}>
              {loading ? 'Sending' : 'Send'}
            </button>
        </form>
        <div className='relative'>
          <p className={`text-[#ccc] text-center`}>
            Contact me from virtually anywhere in the world.
          </p>
          <img src={access} alt="access" className='relative z-[3]' />
          <div className={`access__gradient absolute h-[50%] w-[60%] top-[10%] rounded-full left-[10%]`}/>
        </div>
      </div>
    </div>
  )
}

export default Contact