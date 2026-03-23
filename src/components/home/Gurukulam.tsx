import React from "react";

const Gurukulam = () => {
  return (
    <section className="relative bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            वेद मंत्र गुरुकुल
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            पारंपरिक संस्कृत और वैदिक शिक्षा का आधुनिक संगम। आध्यात्मिक और
            शैक्षणिक विकास के लिए आदर्श स्थान।
          </p>
          <a
            href="/gurukul"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-orange-600 transition"
          >
            प्रवेश करें
          </a>
        </div>

        <div className="md:w-1/2 relative">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="./images/gurukul.jpg"
              alt="गुरुकुल"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default Gurukulam;
