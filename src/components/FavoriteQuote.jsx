import React from 'react'
import { styles } from '../styles'

const FavoriteQuote = () => {
  return (
    <div className={` w-[85%] flex flex-col bg-secondary sm:p-7 p-5 mb-5 rounded-[20px]`}>
        <img src="" alt="" />
        <h2 className={`font-poppins text-[30px] gradient`}>
            Favorite Quote
        </h2>
        <p className={`${styles.paragraph}`}><q> 
          You got to find what you love, the only way to be truly satisfied is to love what you do, If you haven't find it yet keep looking, don't settle. As with all matters of the heart you will know when you find it. </q> 
        </p>
        <h4 className='text-white text-[22px] flex w-[90%] place-content-end'>
            &#8212; &nbsp; Steve Jobs
        </h4>
    </div>
  )
}

export default FavoriteQuote