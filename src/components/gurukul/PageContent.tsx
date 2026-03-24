import Link from "next/link";
import {
  BookOpen,
  Heart,
  GraduationCap,
  Users,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { schoolInfo, features, testimonials, programs } from "@/mock/mock";

const iconMap = {
  BookOpen,
  Heart,
  GraduationCap,
  Users,
};

export type IconName = keyof typeof iconMap;

export const PageContent = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-500 via-red-200 to-orange-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZGRkZCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Om Symbol with animation */}
            {/* <div className="mb-6 relative">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <span className="text-white font-bold text-4xl">ॐ</span>
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="text-yellow-500 w-6 h-6 animate-bounce" />
              </div>
            </div> */}

            <div className="mb-6 max-w-80">
              <img
                src="/images/sri-premdarshnanad-gurukul-logo.png"
                style={{ width: "100%" }}
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent leading-tight">
              {schoolInfo.name}
            </h1>

            <p className="text-xl md:text-2xl text-red-700 font-semibold mb-4">
              {schoolInfo.tagline}
            </p>

            <p className="text-lg text-gray-700 mb-4 max-w-2xl leading-relaxed">
              {schoolInfo.description}
            </p>
            <p className="text-xl md:text-xl text-red-700 font-semibold mb-8">
              “विद्या सर्वत्र विनय देती है, विनय से योग्यता, योग्यता से धन और धन
              से धर्म की रक्षा होती है।”
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              हमारा गुरुकुल क्यों चुनें?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              प्राचीन ज्ञान और आधुनिक शिक्षा के उत्तम सामंजस्य का अनुभव करें।
            </p>
            <p>
              हमारा गुरुकुल प्राचीन भारतीय परंपराओं और आधुनिक शिक्षा का एक
              अद्वितीय संगम प्रस्तुत करता है। यहाँ विद्यार्थियों को केवल
              शैक्षणिक ज्ञान ही नहीं, बल्कि संस्कार, अनुशासन और आध्यात्मिक चेतना
              का भी विकास कराया जाता है। अनुभवी गुरुओं के मार्गदर्शन में
              विद्यार्थी आत्मनिर्भर, नैतिक और चरित्रवान बनते हैं। हमारा उद्देश्य
              प्रत्येक विद्यार्थी के भीतर छिपी हुई क्षमता को जागृत कर उसे जीवन
              में सफलता और संतुलन की ओर अग्रसर करना है।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <Card
                  key={feature.id}
                  className="border-2 border-rose-100 hover:border-red-300 hover:shadow-xl transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-rose-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl text-red-700">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              हमारे कार्यक्रम
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              हर आयु वर्ग के लिए अनुकूलित व्यापक शिक्षा।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={program.id}
                className="border-2 border-red-200 hover:border-red-400 hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-red-700">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-4">
              लोग क्या कहते हैं!
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              हमारे समर्पित समुदाय से सुनें!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-2 border-rose-100 hover:border-red-300 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t border-rose-100 pt-4">
                    <p className="font-semibold text-red-700">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-700 via-rose-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZmZmZjIwIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              आज ही अपनी पवित्र यात्रा शुरू करें!
            </h2>
            <div>
              <p className="text-xl mb-8 text-rose-100">
                हमारे गुरुकुल में शामिल हों और वैदिक ज्ञान पर आधारित इस
                परिवर्तनकारी शिक्षा यात्रा का हिस्सा बनें, जो केवल शिक्षा प्रदान
                करने तक सीमित नहीं है, बल्कि जीवन को एक नई दिशा, उद्देश्य और
                संतुलन भी देती है। हमारे गुरुकुल में शिक्षा का उद्देश्य केवल
                पुस्तकीय ज्ञान देना नहीं, बल्कि प्रत्येक विद्यार्थी के भीतर छिपी
                हुई क्षमता को जागृत करना और उसे एक सशक्त, आत्मनिर्भर एवं
                संस्कारित व्यक्तित्व के रूप में विकसित करना है। यहाँ वैदिक
                परंपराओं और आधुनिक शिक्षा का अद्भुत संगम प्रस्तुत किया जाता है,
                जहाँ विद्यार्थी न केवल अकादमिक रूप से उत्कृष्ट बनते हैं, बल्कि
                नैतिक मूल्यों, अनुशासन और आध्यात्मिक चेतना से भी परिपूर्ण होते
                हैं।
              </p>
              <p className="text-xl mb-8 text-rose-100">
                हमारा गुरुओं, विद्यार्थियों, अभिभावकों और सहयोगियों का एक ऐसा
                परिवार है, जो मिलकर एक सकारात्मक और प्रेरणादायक वातावरण का
                निर्माण करता है। इस वातावरण में प्रत्येक बच्चे को व्यक्तिगत
                ध्यान, स्नेह और मार्गदर्शन मिलता है, जिससे वह अपने जीवन में
                आत्मविश्वास के साथ आगे बढ़ सके। वैदिक ज्ञान के माध्यम से हम
                बच्चों को जीवन के वास्तविक मूल्यों, जैसे सत्य, करुणा, धैर्य और
                सेवा की भावना से परिचित कराते हैं, जो उन्हें न केवल एक सफल
                व्यक्ति बनाते हैं, बल्कि एक बेहतर इंसान भी बनाते हैं।
              </p>
              <p className="text-xl mb-8 text-rose-100">
                हमारा विश्वास है कि सच्ची शिक्षा वही है, जो व्यक्ति के मन, शरीर
                और आत्मा—तीनों का संतुलित विकास करे। इसी उद्देश्य के साथ हम योग,
                ध्यान, प्रार्थना, सांस्कृतिक गतिविधियों और आधुनिक विषयों का
                समन्वय करते हैं, ताकि विद्यार्थी जीवन के हर क्षेत्र में संतुलित
                और सक्षम बन सकें। यह केवल एक शैक्षणिक संस्थान नहीं, बल्कि एक ऐसा
                केंद्र है जहाँ से जीवन को समझने और उसे सही दिशा में आगे बढ़ाने
                की प्रेरणा मिलती है।
              </p>
              <p className="text-xl mb-8 text-rose-100">
                आइए, हमारे इस समर्पित समुदाय का हिस्सा बनें और उस शिक्षा का
                अनुभव करें, जो केवल करियर ही नहीं, बल्कि जीवन को भी सफल, सार्थक
                और प्रेरणादायक बनाती है।”
              </p>
            </div>

            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-red-700 hover:bg-rose-50 shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg px-10 py-6"
              >
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
