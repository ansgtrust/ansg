import React from "react";

const Sanchalak = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-10 md:px-30">
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <img
              src="/images/navneetji.jpeg" // apni image ka path yaha daalein
              alt="Navneet Ji"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">नवनीत जी</h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              गुरुकुल के संचालक श्री नवनीत जी एक समर्पित, अनुशासित और दूरदर्शी
              व्यक्तित्व के धनी हैं। उन्होंने गुरुकुल की स्थापना और संचालन में
              अपना अमूल्य योगदान दिया है, जिससे विद्यार्थियों को न केवल आधुनिक
              शिक्षा मिल रही है, बल्कि उन्हें भारतीय संस्कृति, संस्कार और नैतिक
              मूल्यों की भी गहरी समझ प्राप्त हो रही है।
            </p>

            <p className="text-gray-700 leading-relaxed mb-3">
              नवनीत जी का उद्देश्य केवल शिक्षा प्रदान करना नहीं, बल्कि
              विद्यार्थियों का सर्वांगीण विकास करना है। वे विद्यार्थियों को
              आत्मनिर्भर, जिम्मेदार और संस्कारी नागरिक बनाने के लिए निरंतर
              प्रयासरत रहते हैं। उनके नेतृत्व में गुरुकुल में एक सकारात्मक और
              प्रेरणादायक वातावरण निर्मित हुआ है, जहाँ हर विद्यार्थी अपने लक्ष्य
              की ओर आत्मविश्वास के साथ अग्रसर होता है।
            </p>

            <p className="text-gray-700 leading-relaxed mb-3">
              वे शिक्षा को केवल पुस्तकों तक सीमित नहीं मानते, बल्कि जीवन के हर
              पहलू में सीखने और सिखाने की भावना को बढ़ावा देते हैं। उनके
              मार्गदर्शन में विद्यार्थियों को नैतिकता, अनुशासन और समाज के प्रति
              कर्तव्य का भी बोध कराया जाता है।
            </p>

            <p className="text-gray-700 leading-relaxed">
              उनकी मेहनत, समर्पण और शिक्षा के प्रति अटूट लगन उन्हें एक आदर्श
              शिक्षक और प्रेरणास्रोत बनाती है। वे निरंतर इस दिशा में कार्य कर
              रहे हैं कि गुरुकुल के विद्यार्थी न केवल सफल हों, बल्कि एक अच्छे
              इंसान के रूप में समाज में अपनी पहचान बनाएँ।
            </p>
            <p className="text-gray-700 leading-relaxed">
              विद्यार्थियों को आत्मनिर्भर, जिम्मेदार और संस्कारी नागरिक बनाने के
              लिए निरंतर प्रयासरत रहते हैं। उनके मार्गदर्शन में गुरुकुल का
              वातावरण अनुशासन, परिश्रम और सदाचार से परिपूर्ण रहता है।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sanchalak;
