import { motion,AnimatePresence } from 'framer-motion'
import React from 'react'

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
        {open && (
            <motion.div
                initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0,y:-100}}
                transition={{duration:0.3}}
                className='absolute top-20 left-0 w-full h-screen z-20'
            >
<div className='text-2xl bg-orange-500 font-semibold  text-white py-10  m-6 rounded-3xl'>
            <ul className='flex flex-col items-center justify-center gap-10'>
                <li>
                    <a href='/'>Ana səhifə</a>
                </li>
                <li>
                    <a href='/Haqqimizda'>Haqqımızda</a>
                </li>
                <li>
                    <a href='/ChannelList'>Tv kanallar</a>
                </li>
                <li>
                    <a href='/Elaqe'>Əlaqə</a>
                </li>
                <li>
                    <a href='https://fpay.az/guest/payments/new-payment/category/4950/merchant/5024'>Ödəniş et</a>
                </li>
            </ul>

</div>

            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu