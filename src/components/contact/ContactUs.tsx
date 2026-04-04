"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { schoolInfo } from "@/mock/mock";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-50 via-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center shadow-xl mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-700 via-rose-600 to-red-700 bg-clip-text text-transparent">
              हमारे साथ जुड़े।
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              हमें आपसे सुनना अच्छा लगेगा। प्रवेश, पूछताछ या हमारे गुरुकुल के
              बारे में अधिक जानने के लिए हमसे संपर्क करें।
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-red-700 mb-2">Phone</h3>
                <p className="text-sm text-gray-600">{schoolInfo.phone}</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-red-700 mb-2">Email</h3>
                <p className="text-sm text-gray-600 break-all">
                  {schoolInfo.email}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-red-700 mb-2">Location</h3>
                <p className="text-sm text-gray-600">
                  श्री शिव मन्दिर, ग्रीन एनक्लेव, चिपियाना बुजुर्ग, गौतम बुद्ध
                  नगर – 201009, उ.प्र.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-red-700 mb-2">Hours</h3>
                <p className="text-sm text-gray-600">Mon-Sat: 8AM-6PM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-700 mb-4">
              हमारे परिसर पर जाएँ
            </h2>
            <p className="text-gray-600">
              आइए, हमारे गुरुकुल के पवित्र वातावरण का अनुभव करें।
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card
              className="border-2 border-red-200 shadow-xl overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/map.png')" }}
            >
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-700 mb-2">
                    श्री प्रेमदर्शनानन्द वेद विद्या गुरुकुलम्
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    {schoolInfo.address}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
