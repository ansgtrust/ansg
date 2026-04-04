"use client";

import Link from "next/link";

export default function DonateBanner() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/gallery/gurukul-img.jpeg" // 👉 put your image in public/images
        alt="Donate to Gurukul"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          🙏 हमारे पवित्र मिशन में सहयोग करें
        </h2>
        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Support Our Mission
        </h2>

        <p className="text-gray-200 max-w-2xl text-lg md:text-xl">
          आपका दान अनाथ बच्चों के पालन-पोषण, शिक्षा और उनके उज्ज्वल भविष्य के
          निर्माण में हमारी सहायता करता है।
        </p>
        <p className="text-gray-200 max-w-2xl text-lg md:text-xl mb-6">
          Your donation helps us provide care for the orphans, support our
          gurukul, and continue spiritual & educational services for society.
        </p>

        {/* CTA Button */}
        <Link href="/donate">
          <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition-all">
            Donate Now ❤️
          </button>
        </Link>

        {/* Small Trust Line */}
        {/* <p className="text-gray-300 text-sm mt-4">
          🔒 100% Secure • UPI • 80G Tax Benefits
        </p> */}
      </div>
    </section>
  );
}
