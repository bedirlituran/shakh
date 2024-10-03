
'use client'
import React from "react";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <div className="max-w-7xl m-auto">
      <section id="pricing" className="my-24">
        <header className="text-center">
          <motion.h3
            className="text-4xl font-bold mb-5 text-gray-900"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sərfəli Aylıq Kampaniyalar
          </motion.h3>
          <motion.p
            className="text-xl text-gray-400 mb-2"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ehtiyaclarınız üçün mükəmməl planı seçin.
          </motion.p>
        </header>

        <div className="flex flex-col mt-10 mx-5 space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:mx-0 justify-between">
          {/** Sadə Plan Card */}
          <motion.div
            className="flex-1 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Sadə</h4>
                  <p className="text-xs text-gray-500">Pulsuz qoşulma</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-gray-900">10Azn</h4>
                  <p className="text-xs text-gray-500">Aylıq</p>
                </div>
              </div>
              <hr className="text-gray-100 mt-5" />
              <div className="mt-10">
                <ul role="list" className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-indigo-900">
                      200+ Tv Kanal
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-indigo-900">
                      100+ HD Kanal
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-indigo-900">
                    Kəsintisiz yayım
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <button className="w-full  items-center justify-center gap-2 text-2xl hover:bg-orange-500 text-orange-500 font-semibold rounded-md border-2 border-orange-500 px-4 py-1 hover:text-white md:flex  duration-200">
                  Qoşul
                </button>
              </div>
            </div>
          </motion.div>

          {/** Professional Plan Card */}
          <motion.div
            className="flex-1 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-indigo-900 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-2xl font-bold text-white">Çox seçilən</h4>
                  <p className="text-xs text-gray-300">Pulsuz qoşulma</p>
                </div>
                <div className="bg-indigo-700 p-2 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-white">24Azn</h4>
                  <p className="text-xs text-gray-300">Aylıq</p>
                </div>
              </div>
              <hr className="text-gray-800 mt-5" />
              <div className="mt-10">
                <ul role="list" className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-white rounded-full p-1">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-indigo-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-white">
                      Fiber Optik
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white rounded-full p-1">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-indigo-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-white">
                      Pulsuz Wifi Router
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-white rounded-full p-1">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-indigo-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-white">
                      200+ Kanal
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <button className="w-full  items-center justify-center gap-2 text-2xl hover:bg-orange-500 text-orange-500 font-semibold rounded-md border-2 border-orange-500 px-4 py-1 hover:text-white md:flex  duration-200">
                  Qoşul
                </button>
              </div>
            </div>
          </motion.div>

          {/** Enterprise Plan Card */}
          <motion.div
            className="flex-1 cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">Korporativ</h4>
                  <p className="text-xs text-gray-500">Pulsuz qoşulma</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-gray-900">31Azn</h4>
                  <p className="text-xs text-gray-500">Aylıq</p>
                </div>
              </div>
              <hr className="text-gray-100 mt-5" />
              <div className="mt-10">
                <ul role="list" className="space-y-4">
                  <li className="flex items-center">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-indigo-900">
                      Fiber Optik
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-indigo-900">
                      300+ Kanal
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-indigo-900 rounded-full p-1">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-indigo-900">
                      Pulsuz Wifi router
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-10">
                <button className="w-full  items-center justify-center gap-2 text-2xl hover:bg-orange-500 text-orange-500 font-semibold rounded-md border-2 border-orange-500 px-4 py-1 hover:text-white md:flex  duration-200">
                  Qoşul
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
