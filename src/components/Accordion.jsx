"use client"
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] md:text-4xl">
                Bizə tez-tez ünvanlanan suallar!
              </h2>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="ŞahTelecom abunəçisi olmaq üçün nə etməliyəm?"
              text="Bunun üçün sadəcə sağ alt küncdə WHATSAPP iconuna toxunmaq kifayət edər."
            />
            <AccordionItem
              header="Qoşulma edilən zaman hansısa Tv və Router avadanlığı almalıyam?"
              text="Roter pulsuz verilir. Tv üçün isə əgər Televizorunuz smartdırsa vəya andoroid tv boxunuz varsa xeyir."
            />
            <AccordionItem
              header="Wifi şifrəmi unutmuşam vəya routeri reset etmişəm bunun üçün nə etməliyəm?"
              text="Bunun üçün texniki dəstəyimiz ilə mütləq əlaqə saxlamalısınız və ya sadəcə WHATSAPP düyməsinə toxunaraq 24 saat xidmət göstərən xəttimiz ilə əlaqə saxlaya bilərsiniz."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="ŞahTelecomun aylıq xidmət haqqını necə ödəyə bilərəm?"
              text="Xidmət haqqını sizə rahat olan üsulla ödəmək mümkündür: saytımız vasitəsilə onlayn ödəniş; ödəmə terminalları vasitəsilə ödəniş; bank mobil tətbiqləri ilə ödəniş; onlayn ödəniş saytları ilə."
            />
            <AccordionItem
              header="İp tvdə bizə təqdim etdiyiniz kanal sayını haradan görə bilərəm?"
              text="Yuaxarı bölmədə IP tv kanal siyahısı bölməsinə keçid edərək oradan təqdim etdiyimiz TV kanalların siyahısına baxmaq olar."
            />
            <AccordionItem
              header="Tv də heç bir kanal göstərmir və ya səs var görüntün yoxdur bu zaman nə edim?"
              text="Bu halda routerdən tvyə gedən kabelin yerində olduğunu, onun zədəli olmadığını yoxlayın. Hər şey qaydasında olduğu halda bizimlə əlaqə saxlayın."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();
  const [inView, setInView] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            controls.start("visible");
          }
        });
      },
      { threshold: 0.1 } // Bileşenin %10'u görünür olursa animasyon başlasın.
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8"
    >
      <button
        className="faq-btn flex w-full text-left"
        onClick={toggleAccordion}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              isOpen ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="none"
              stroke="currentColor"
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-dark-6">
            {header}
          </h4>
        </div>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pl-[62px] py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
            {text}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};
