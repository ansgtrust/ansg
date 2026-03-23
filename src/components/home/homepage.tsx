import React from "react";
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
import CarouselPage from "./CarouselPage";
import Anathalay from "./Anathalay";
import Gurukulam from "./Gurukulam";

const iconMap = {
  BookOpen,
  Heart,
  GraduationCap,
  Users,
};

export type IconName = keyof typeof iconMap;

export const Homepage = () => {
  return (
    <div className="min-h-screen">
      <CarouselPage />
      {/* Hero Section */}
      <Anathalay />
      <Gurukulam />

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
              अनाथ नारायण सेवा गुरुकुलम के अनुभव
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              हमारे समर्पित समुदाय से सुनें!
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              हमारे बच्चों, अभिभावकों और सहयोगियों के अनुभव और विचार जानें, और
              देखें कि हम किस तरह बदलाव ला रहे हैं।
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              आज ही अपनी पवित्र यात्रा शुरू करें!
            </h2>
            <p className="text-xl mb-8 text-rose-100">
              हमारे समर्पित समुदाय में शामिल हों और वैदिक ज्ञान पर आधारित
              परिवर्तनकारी शिक्षा का अनुभव करें।
            </p>
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
