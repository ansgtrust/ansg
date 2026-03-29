"use client";

import type { EmblaCarouselType } from "embla-carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import DownSlideBtn from "./DownSlideBtn";
import Autoplay from "embla-carousel-autoplay";

// Slide Type
interface Slide {
  image: string;
  title: string;
  desc: string;
}

const CarouselPage = () => {
  const slides: Slide[] = [
    {
      image: "./images/carousel/img2.jpg",
      title: "गुरुकुल — शिक्षा, संस्कृति और संस्कार का संगम",
      desc: "ज्ञान, अनुशासन और आध्यात्मिकता का घर, गुरुओं की कृपा, शिष्यों का मार्ग",
    },
    {
      image: "./images/carousel/gurukul-img.jpg",
      title:
        "सुरक्षित आश्रय, शिक्षा और विकास, प्रेम और देखभाल, खेल और संस्कार, उज्ज्वल भविष्य",
      desc: "हर बच्चे के लिए परिवार जैसा घर और स्नेहपूर्ण वातावरण। योग, खेलकूद और सांस्कृतिक गतिविधियों के माध्यम से संपूर्ण विकास।",
    },
    {
      image: "./images/carousel/shakha.jpg",
      title:
        "सुरक्षित आश्रय, शिक्षा और विकास, प्रेम और देखभाल, खेल और संस्कार, उज्ज्वल भविष्य",
      desc: "हर बच्चे के लिए परिवार जैसा घर और स्नेहपूर्ण वातावरण। योग, खेलकूद और सांस्कृतिक गतिविधियों के माध्यम से संपूर्ण विकास।",
    },
    {
      image: "./images/carousel/mantrocharan.jpg",
      title: "गुरुकुल — ऋषियों की धरती से ज्ञान का प्रकाश",
      desc: "गुणवत्तापूर्ण शिक्षा और नैतिक मूल्यों के साथ उज्ज्वल भविष्य।",
    },
    {
      image: "./images/carousel/mandir.jpg",
      title: "गुरुकुल — ज्ञान, अनुशासन और आध्यात्मिकता का घर",
      desc: "गुरुकुल: भारतीय शिक्षा की आत्मा, सीखने की प्राचीन परंपरा, जहाँ शिक्षा चरित्र निर्माण बनती है",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Embla API – keep relaxed to avoid version-based type issues
  const [api, setApi] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      try {
        setCurrent(api.selectedScrollSnap());
      } catch {
        // defensive handling
      }
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  const autoplayOptions = {
    delay: 4000, // Duration each slide is displayed in milliseconds
    stopOnMouseEnter: true, // Pauses autoplay on mouse hover
    stopOnFocusIn: true, // Pauses autoplay when carousel is focused
    // stopOnInteraction: false, // Autoplay continues after user interaction
  };

  return (
    <section className="w-full overflow-hidden">
      <Carousel
        className="relative w-full"
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        {/* CONTENT */}
        <CarouselContent className="relative w-full !ml-0 !p-0 flex">
          {slides.map((item, index) => (
            <CarouselItem
              key={index}
              className="!pl-0 !ml-0 w-full h-auto md:h-[80vh] overflow-hidden"
            >
              <div className="relative w-full h-auto md:h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  sizes="100vw"
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* TEXT */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center px-4">
                    <h2 className="text-base md:text-4xl font-bold drop-shadow-lg">
                      {item.title}
                    </h2>

                    <p className="text-lg mt-2 drop-shadow-lg">{item.desc}</p>

                    <DownSlideBtn />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* NAVIGATION */}
        <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="right-4 top-1/2 -translate-y-1/2 z-10" />

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all ${
                current === i ? "bg-white w-6" : "bg-white/50 w-2"
              }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselPage;
