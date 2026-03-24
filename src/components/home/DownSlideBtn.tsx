import React, { useRef } from "react";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";

const DownSlideBtn = () => {
  const scrollToSection = () => {
    // if (sectionRef.current) {
    window.scrollBy({
      top: window.innerHeight - 140,
      behavior: "smooth",
    });
    // }
  };
  return (
    <div className="hidden md:block text-center px-4 pt-8">
      <Button
        size="lg"
        onClick={scrollToSection}
        className="bg-linear-to-r cursor-pointer from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
      >
        आगे और देखें!
        <ArrowDown className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
};

export default DownSlideBtn;
