
'use client'
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <section>
      <div className='container grid grid-cols-1 md:grid-cols-2 relative min-h-[650px]'>
        <div className='flex flex-col justify-center py-14 md:py-0 font-playfair'>
          <div className='text-center md:text-left space-y-6'>
            {/* Animasyonu doğrudan burada tanımlıyoruz */}
            <motion.h1
              initial={{ opacity: 0, x: -100 }} // Başlangıç animasyonu
              animate={{ opacity: 1, x: 0 }} // Animasyonun görünür durumu
              transition={{ duration: 0.5 }} // Animasyonun süresi
              className='text-5xl font-bold lg:text-6xl leading-relaxed xl:leading-normal'
            >
              Şah
            </motion.h1>

            <motion.span
              initial={{ opacity: 0, x: -100 }} // Sol kayma efekti için aynı animasyon
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }} // Biraz gecikme ekleyebiliriz
              className='text-orange-500 text-5xl font-bold lg:text-6xl leading-relaxed xl:leading-normal'
            >
              Telecom
            </motion.span>

            <motion.p
              initial={{ opacity: 0 }} // İlk başta görünmez olacak
              animate={{ opacity: 1 }} // Yavaşça görünür hale gelecek
              transition={{ duration: 0.8, delay: 0.3 }} // Geçiş süresi ve gecikme
              className='text-black xl:max-w-[500px]'
            >
              Şah Telecom, yüksək sürətli internet və geniş televiziya kanalları ilə evinizə keyfiyyətli xidmət gətirir. Bizimlə rəqəmsal dünya bir toxunuş qədər yaxın! Hər zaman yanınızda olan texniki dəstəyimizlə, sorğularınıza sürətli cavab alacaqsınız.
            </motion.p>

            <div className='flex items-center justify-center gap-8 md:justify-start !mt-4'>
              <motion.button
                initial={{ opacity: 0, y: 50 }} // Y ekseninde aşağıdan yukarı doğru gelecek
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='primary-btn bg-orange-500 p-4 font-semibold letter-spacing rounded-xl text-white shadow-xl flex items-center gap-2'
              >
                Indi Qoşul
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 50 }} // Aynı animasyon diğer buton için
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex items-center gap-2 justify-center'
              >
                <FaPlay /> Sifariş ver
              </motion.button>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Görüntü başlangıçta küçük ve şeffaf
          animate={{ opacity: 1, scale: 1 }} // Yavaşça büyüyecek ve görünür olacak
          transition={{ duration: 0.7, delay: 0.6 }} // Gecikmeli ve yavaş bir geçiş
          className='flex justify-center items-center'
        >
          <Image
            src="/image/hh1.gif"
            alt="Hero Image"
            width={400}
            height={400}
            backgroundColor="transparent"
            className='w-[350px] md:w-[500px] rounded-full xl:w-[700px] bg-transparent drop-shadow'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
