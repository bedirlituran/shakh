"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Bileşen görünüyorsa animasyonu tetikle
        }
      },
      {
        threshold: 0.3, // %30 görünürse tetikle
      }
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div
      className="px-4 py-16 mx-auto sm:max-w-xl font-playfair md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      ref={serviceRef}
    >
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-font-playfair text-3xl font-semibold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <span className="relative text-4xl font-bold font-playfair">Şah Telecom</span>
          </span>{' '}
          Öz Servis Xidmətləri Daxilində Nələri Edir?
        </h2>
      </div>

      <motion.div
        className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <div className="space-y-6 sm:px-16">
          {[
            {
              title: 'İnternet',
              description:
                'Müştərilərimiz üçün ən yeni texnologiya və həllər istifadə edirik. Şah Telecom yüksək sürətli internet və qoşulma üçün GPON texnologiyasını təklif edir. Bakı və Abşeron bölgələrindən internetə qoşula bilərsiniz.'
            },
            {
              title: 'Ən yaxşı və ucuz qiymət',
              description:
                'Yüksək keyfiyyət və əlverişli qiymətlər yalnız bizdə.'
            },
            {
              title: 'Təcrübəli personal',
              description:
                'Dəyərli mütəxəssislərimiz istənilən problemi həll etməyə kömək edəcək.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col max-w-md sm:flex-row"
              variants={itemVariants}
            >
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">{item.title}</h6>
                <p className="text-sm text-gray-900">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-6 sm:px-16">
          {[
            {
              title: 'İP TV',
              description:
                'Müştərilərimizi  İPTV ilə təmin edirik. Müştərilərimiz TV Player və 300+ Kanal (150 Full HD daxildir) alır.'
            },
            {
              title: '24/7 Dəstək',
              description:
                'İstənilən vaxt servisimizə zəng edə və texniki xidmətdən 24/7 istifadə edə bilərsiniz.'
            },
            {
              title: 'Sürətli və kəsintisiz bağlantı',
              description:
                'Hava şəraitindən asılı olmayaraq yüksək sürət və kəsintisiz qoşulma.'
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col max-w-md sm:flex-row"
              variants={itemVariants}
            >
              <div className="mb-4 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">{item.title}</h6>
                <p className="text-sm text-gray-900">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
