import React from "react";

const AnathalayTop = () => {
  return (
    <section className="bg-gradient-to-r from-red-200 via-red-300 to-red-200 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            हमारा अनाथालय
          </h2>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            हर बच्चे के लिए एक सुरक्षित, प्रेमपूर्ण और शिक्षाप्रद वातावरण। यहाँ
            हम बच्चों को शिक्षा, संस्कार और उज्ज्वल भविष्य की दिशा देते हैं।
          </p>
          <p>
            हमारा अनाथालय हर बच्चे के लिए एक सुरक्षित, स्नेहपूर्ण और प्रेरणादायक
            वातावरण प्रदान करता है, जहाँ उन्हें परिवार जैसा प्रेम और देखभाल
            मिलती है। यहाँ हम केवल उनकी मूलभूत आवश्यकताओं को पूरा नहीं करते,
            बल्कि उन्हें गुणवत्तापूर्ण शिक्षा, नैतिक संस्कार और जीवन मूल्यों से
            भी सशक्त बनाते हैं। अनुभवी मार्गदर्शन और सकारात्मक वातावरण के माध्यम
            से बच्चों के आत्मविश्वास, व्यक्तित्व और प्रतिभा का विकास किया जाता
            है। हमारा उद्देश्य हर बच्चे को आत्मनिर्भर, जागरूक और उज्ज्वल भविष्य
            की ओर अग्रसर करना है, ताकि वे समाज में एक सशक्त और जिम्मेदार नागरिक
            बन सकें।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white border-2 border-amber-600 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              सुरक्षित वातावरण
            </h3>
            <p className="text-gray-600 text-sm">
              स्वच्छ, सुरक्षित और परिवार जैसा माहौल बच्चों के लिए।
            </p>
          </div>

          <div className="bg-white border-2 border-amber-600 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              शिक्षा और विकास
            </h3>
            <p className="text-gray-600 text-sm">
              गुणवत्तापूर्ण शिक्षा और नैतिक, संस्कारिक विकास।
            </p>
          </div>

          <div className="bg-white border-2 border-amber-600 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              प्रेम और देखभाल
            </h3>
            <p className="text-gray-600 text-sm">
              हर बच्चे को परिवार जैसा स्नेह और व्यक्तिगत ध्यान।
            </p>
          </div>

          <div className="bg-white border-2 border-amber-600 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-500 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              उज्ज्वल भविष्य
            </h3>
            <p className="text-gray-600 text-sm">
              बच्चों को आत्मनिर्भर और सफल बनाने की दिशा में मार्गदर्शन।
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
          >
            बच्चों की मदद करें
          </a>
        </div>
      </div>

      <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default AnathalayTop;
