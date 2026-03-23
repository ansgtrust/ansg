import React from "react";

const Anathalay = () => {
  return (
    <section className="bg-orange-300 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            हमारा अनाथालय
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            हमारा अनाथालय उन बच्चों के लिए एक सुरक्षित और स्नेहपूर्ण आश्रय है,
            जहाँ उन्हें प्रेम, शिक्षा और उज्ज्वल भविष्य की दिशा मिलती है।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="./images/friends-showing-hands.jpg"
              alt="अनाथालय"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                🏠 सुरक्षित वातावरण
              </h3>
              <p className="text-gray-600 text-sm">
                बच्चों के लिए स्वच्छ, सुरक्षित और परिवार जैसा माहौल
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                📚 शिक्षा और विकास
              </h3>
              <p className="text-gray-600 text-sm">
                गुणवत्तापूर्ण शिक्षा के साथ नैतिक और संस्कारिक विकास
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                ❤️ प्रेम और देखभाल
              </h3>
              <p className="text-gray-600 text-sm">
                हर बच्चे को परिवार जैसा स्नेह और व्यक्तिगत ध्यान
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                🌱 उज्ज्वल भविष्य
              </h3>
              <p className="text-gray-600 text-sm">
                बच्चों को आत्मनिर्भर और सफल बनाने की दिशा में मार्गदर्शन
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/anathalay"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-orange-600 transition"
          >
            हमसे जुड़ें
          </a>
        </div>
      </div>
    </section>
  );
};

export default Anathalay;
