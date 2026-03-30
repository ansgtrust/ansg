"use client";

import LightGallery from "lightgallery/react";

// plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

type ImageItem = {
  galleryImages: string[];
};

export default function GallerySection({ galleryImages }: ImageItem) {
  return (
    <section className="bg-red-200">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          चित्र दीर्घा
        </h2>
        <p className="text-start text-xl text-gray-700 leading-relaxed mb-4">
          हमारे गुरुकुलम की यह चित्र दीर्घा उन सुंदर और प्रेरणादायक पलों की झलक
          प्रस्तुत करती है, जो यहाँ के जीवन का अभिन्न हिस्सा हैं। इन चित्रों के
          माध्यम से आप विद्यार्थियों की गतिविधियाँ, सांस्कृतिक कार्यक्रम,
          अनुशासन और सीखने के वातावरण को करीब से अनुभव कर सकते हैं। हर चित्र एक
          कहानी कहता है — परिश्रम, समर्पण और संस्कारों की कहानी। यह दीर्घा न
          केवल हमारे गुरुकुलम के दैनिक जीवन को दर्शाती है, बल्कि यहाँ के
          सकारात्मक और प्रेरणादायक माहौल को भी जीवंत रूप में प्रस्तुत करती है।
        </p>

        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom, lgVideo]}
          elementClassNames="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((img, index) => {
            // Random span for collage effect
            const spanClass =
              index % 5 === 0
                ? "md:col-span-2 md:row-span-2"
                : index % 3 === 0
                  ? "row-span-2"
                  : "";

            return (
              <a
                key={index}
                href={`/images/gallery/${img}`}
                data-src={`/images/gallery/${img}`}
                className={`overflow-hidden rounded-lg ${spanClass}`}
              >
                <img
                  src={`/images/gallery/${img}`}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover rounded-lg shadow-md cursor-pointer hover:scale-110 transition duration-300"
                />
              </a>
            );
          })}
        </LightGallery>
      </div>
    </section>
    // <div className="max-w-6xl mx-auto px-4 py-10">
    //   <h2 className="text-3xl font-bold text-center mb-6">चित्र दीर्घा</h2>
    //   <LightGallery
    //     speed={500}
    //     plugins={[lgThumbnail, lgZoom, lgVideo]}
    //     elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-4"
    //   >
    //     {galleryImages.map((img, index) => (
    //       <a
    //         key={index}
    //         href={`/images/gallery/${img}`}
    //         data-src={`/images/gallery/${img}`}
    //       >
    //         <img
    //           src={`/images/gallery/${img}`}
    //           alt={`gallery-${index}`}
    //           className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition"
    //         />
    //       </a>
    //     ))}
    //   </LightGallery>
    // </div>
  );
}
