"use client"
import React, { useState, useEffect, useRef } from 'react';

const Stat = () => {
  const [freeServers, setFreeServers] = useState(0);
  const [serversPerMonth, setServersPerMonth] = useState(0);
  const [serversPerWeek, setServersPerWeek] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const statRef = useRef(null); // Component'i gözlemek için referans

  // Sayıları artıran işlev
  const animateValue = (setState, targetValue, duration) => {
    let start = 0;
    let increment = targetValue / (duration / 50);

    const updateValue = () => {
      start += increment;
      if (start < targetValue) {
        setState(Math.ceil(start));
        setTimeout(updateValue, 20);
      } else {
        setState(targetValue);
      }
    };
    updateValue();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Component görünürse animasyonu başlat
        }
      },
      {
        threshold: 0.5, // Component'in en az %50'si görünmeli
      }
    );

    if (statRef.current) {
      observer.observe(statRef.current); // Component'i gözlemlemeye başla
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current); // Gözlemlemeyi bırak
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateValue(setFreeServers, 16000, 2000);
      animateValue(setServersPerMonth, 10050, 2000);
      animateValue(setServersPerWeek, "99.9%", 2000);
      animateValue(setTotalUsers, 26050, 2000);
    }
  }, [isVisible]);

  return (
    <div className="bg-gray-200 h-auto w-full dark:bg-gray-700 flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:py-24 lg:px-8" ref={statRef}>
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl dark:text-white">Bizim göstəricilərimiz</h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-black truncate dark:text-gray-400">Internet Abunəsi</dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-black dark:text-indigo-400">{freeServers.toLocaleString()}</dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-black truncate dark:text-gray-400">Tv Abunəsi</dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-black dark:text-indigo-400">{serversPerMonth.toLocaleString()}</dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-black truncate dark:text-gray-400">İş qarantiyası</dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-black dark:text-indigo-400">{serversPerWeek.toLocaleString()}</dd>
              </dl>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm leading-5 font-medium text-black truncate dark:text-gray-400">Ümumi Abunəçi</dt>
                <dd className="mt-1 text-3xl leading-9 font-semibold text-black  dark:text-indigo-400">{totalUsers.toLocaleString()}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
