import { User } from "lucide-react";
import React from "react";

const AnathalayContents = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="max-w-436 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center shadow-xl mx-auto">
                <img
                  src="./images/anath-narayan-seva-gurukulam.png"
                  width={436}
                  height={436}
                  alt="Anath"
                  style={{ width: "436px" }}
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold py-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent">
              अनाथ नारायण सेवा गुरुकुलम ट्रस्ट
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              एक पवित्र संस्था जो प्राचीन वैदिक ज्ञान के संरक्षण और आधुनिक विश्व
              के लिए मस्तिष्क का पोषण करने के लिए समर्पित है। अनाथ नारायण सेवा
              गुरुकुलम ट्रस्ट बच्चों के सर्वांगीण विकास और समाज में उनकी
              सुरक्षित भविष्य की दिशा में काम करता है। हमारा लक्ष्य प्रत्येक
              अनाथ और जरूरतमंद बच्चे को एक स्नेहपूर्ण घर, गुणवत्तापूर्ण शिक्षा
              और आध्यात्मिक मार्गदर्शन प्रदान करना है। हम केवल उनकी भौतिक
              आवश्यकताएँ ही पूरी नहीं करते, बल्कि उन्हें नैतिक मूल्यों और
              संस्कारों से भी सशक्त बनाते हैं।
            </p>
            <div className="">
              <h2 className="text-3xl md:text-3xl font-bold py-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent">
                हमारा मिशन
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                हमारा मिशन है कि प्रत्येक बच्चे को आत्मनिर्भर, आत्मविश्वासी और
                समाज के लिए उपयोगी बनाया जाए। इसके लिए हम उन्हें शिक्षा, योग,
                ध्यान, खेलकूद और सांस्कृतिक गतिविधियों के माध्यम से समग्र विकास
                की दिशा में मार्गदर्शन देते हैं। हमारा उद्देश्य बच्चों के भीतर
                छिपी हुई क्षमता को उजागर करना और उन्हें उज्ज्वल भविष्य की ओर
                अग्रसर करना है।
              </p>
            </div>

            <div className="">
              <h2 className="text-3xl md:text-3xl font-bold py-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent">
                हमारा दृष्टिकोण
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                हमारा दृष्टिकोण है कि हर बच्चा, चाहे वह किसी भी पृष्ठभूमि का हो,
                समान अवसर और सुरक्षा का हकदार है। अनाथ नारायण सेवा गुरुकुलम
                ट्रस्ट हर बच्चे को परिवार जैसा वातावरण, स्नेह और मार्गदर्शन
                प्रदान करता है। हम यह सुनिश्चित करते हैं कि बच्चे न केवल शिक्षा
                में उत्कृष्ट हों, बल्कि अपने चरित्र और आत्मा के विकास में भी
                प्रगति करें।
              </p>
            </div>

            <div className="">
              <h2 className="text-3xl md:text-3xl font-bold py-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent">
                हमारी सेवाएँ
              </h2>

              <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
                <div className="flex items-center space-x-3">
                  <div className="text-green-500 text-2xl">🏠</div>
                  <p className="text-gray-700 text-center">
                    सुरक्षित और स्नेहपूर्ण आवास
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-blue-500 text-2xl">📚</div>
                  <p className="text-gray-700 text-center">
                    गुणवत्तापूर्ण शैक्षणिक शिक्षा
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-purple-500 text-2xl">🙏</div>
                  <p className="text-gray-700 text-center">
                    संस्कार, नैतिक और आध्यात्मिक प्रशिक्षण
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-yellow-500 text-2xl">⚽</div>
                  <p className="text-gray-700 text-center">
                    खेलकूद, योग और सांस्कृतिक गतिविधियाँ
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-orange-500 text-2xl">🌱</div>
                  <p className="text-gray-700 text-center">
                    बच्चों के उज्ज्वल भविष्य के लिए मार्गदर्शन
                  </p>
                </div>
              </div>

              {/* <ul className="space-y-4 max-w-2xl mx-auto text-center">
                <li className="flex items-start">
                  <div className="flex-shrink-0 text-green-500 text-2xl mr-3">
                    🏠
                  </div>
                  <p className="text-gray-700">सुरक्षित और स्नेहपूर्ण आवास</p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 text-blue-500 text-2xl mr-3">
                    📚
                  </div>
                  <p className="text-gray-700">गुणवत्तापूर्ण शैक्षणिक शिक्षा</p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 text-purple-500 text-2xl mr-3">
                    🙏
                  </div>
                  <p className="text-gray-700">
                    संस्कार, नैतिक और आध्यात्मिक प्रशिक्षण
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 text-yellow-500 text-2xl mr-3">
                    ⚽
                  </div>
                  <p className="text-gray-700">
                    खेलकूद, योग और सांस्कृतिक गतिविधियाँ
                  </p>
                </li>

                <li className="flex items-start">
                  <div className="flex-shrink-0 text-orange-500 text-2xl mr-3">
                    🌱
                  </div>
                  <p className="text-gray-700">
                    बच्चों के उज्ज्वल भविष्य के लिए मार्गदर्शन
                  </p>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-amber-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center shadow-xl mx-auto">
                <User className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold py-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent">
              अनाथ नारायण सेवा गुरुकुलम ट्रस्ट के साथ योगदान दें
            </h2>
            <h3 className="text-2xl md:text-3xl">
              हर बच्चे के उज्ज्वल भविष्य के लिए आपका साथ आवश्यक है!
            </h3>
            <h3 className="text-2xl md:text-3xl">हमारे मिशन में शामिल हों!</h3>
            <h3 className="text-2xl md:text-3xl">
              बच्चों की मदद करें, उनका जीवन बदलें!
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed">
              एक पवित्र संस्था जो प्राचीन वैदिक ज्ञान के संरक्षण और आधुनिक विश्व
              के लिए मस्तिष्क का पोषण करने के लिए समर्पित है।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnathalayContents;
