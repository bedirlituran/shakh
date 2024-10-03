"use client";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react'
import { AiFillPhone } from "react-icons/ai";
import { FaInternetExplorer  } from "react-icons/fa";
import { IoIosTv } from "react-icons/io";

const Equipents = () => {
    const EquipmentData = [
        {
            id: 1,
            title: "İp Telefoniya",
            icon: <AiFillPhone />,
            delay: 0.2,
            desc: "Eyni zamanda çoxsaylı zənglərin qəbulu, sabit qoşulma "
        },
        {
            id: 2,
            title: "İnternet",
            icon: <FaInternetExplorer  />,
            delay: 0.4,
            desc: "300 000 km/san sürətlə fasiləsiz internet qoşulması"
        },
        {
            id: 3,
            title: "Kabel Tv",
            icon: <IoIosTv />,
            delay: 0.6,
            desc: "60-dan çox əsas kanal mövcuddur"
        },
    ]

    return (
        <div>
            <div className="container py-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
                    <div className='space-y-4 p-6'>
                        <h1 className='text-3xl font-bold md:text-4xl'>
                            Xidmətlərimiz
                        </h1>
                        <p className='text-gray-500'>
                        Yüksək səviyyədə xidmət etməyə hazırıq. Bizim peşəkar komandamız və geniş təcrübəmiz sayəsində 
                        müştərilərimizə keyfiyyətli və etibarlı həllər təklif edirik.
                        </p>
                    </div>
                    {
                        EquipmentData.map((item) => {
                            // Intersection Observer Hook
                            const { ref, inView } = useInView({
                                triggerOnce: true, // Bir defa tetiklendikten sonra tekrar tetiklenmez
                                threshold: 0.1 // Bileşenin %10'u göründüğünde tetiklenir
                            });

                            return (
                                <motion.div
                                    key={item.id}
                                    className='space-y-4 p-6 bg-[#fae8e8] hover:bg-white rounded-xl hover:shadow-2xl cursor-pointer'
                                    ref={ref} // Intersection Observer'a ref veriyoruz
                                    initial={{ opacity: 0, y: 50 }} // Başlangıç durumu
                                    animate={inView ? { opacity: 1, y: 0 } : {}} // inView olduğunda animasyon çalışır
                                    transition={{ duration: 0.5, delay: item.delay }}
                                >
                                    <div className='text-5xl'>{item.icon}</div>
                                    <p className='text-2xl font-semibold'>{item.title}</p>
                                    <p className='text-gray-500'>{item.desc}</p>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Equipents;
