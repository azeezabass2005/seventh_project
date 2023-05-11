import React from 'react'
import { myNetworks } from '../constants'
import { styles, layout } from '../styles'

const Network = () => {
  return (
    <div id='my-network' className={`bg-primary ${styles.flexCenter} flex-col`}>
        <div className={`${styles.sectionHeader}`}>
            <h1>
                My Network
            </h1>
        </div>
        <div className='relative bg-[#131030] rounded-2xl m-10 sm:py-7 p-2'>
            <div className={`flex justify-around items-center sm:p-10 p-1 flex-wrap gap-10 sm:w-[93%] w-[100%] rounded-2xl`}>
                {myNetworks.map((friend, index) => (
                    <div key={friend.id} className={`sm:w-[316px] vs:w-[296px] w-[280px] vs:h-[256px] h-[250px] ${styles.flexCenter} bg-shine rounded-2xl flex-col`}>
                        <div className={`sm:w-[310px] vs:w-[290px] w-[275px] vs:h-[250px] h-[245px] friend-card rounded-2xl p-5 bg-secondary z-[3] flex flex-col justify-around`}>
                            <div className={`flex`}>
                                <img src={friend.img} alt="image" className={`h-[50px] w-[50px] object-contain rounded-full bg-[#25252560] mr-6`} />
                                <div>
                                    <h4 className='text-white font-poppins whitespace-nowrap font-semibold'>
                                        {friend.name}
                                    </h4>
                                    <p className='text-[#cbcbcb] italic'>
                                        &#8212; &nbsp; Freelancer
                                    </p>
                                </div>
                            </div>
                            <p className={`text-dimWhite text-[18px]`}>
                                {friend.about}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='purple__gradient absolute top-[15%] right-[8%] rounded-full h-[60%] w-[75%]'/>
            <div className='blue__gradient absolute bottom-[10%] left-[10%] rounded-full h-[57%] w-[66%]'/>
        </div>
    </div>
  )
}

export default Network