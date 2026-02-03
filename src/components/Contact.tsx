import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Contact() {
  const phoneNumber = '01234567890';

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن هنا لخدمتك على مدار الساعة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    اتصل بنا
                  </h3>
                  <p className="text-gray-600">نحن في انتظار مكالمتك</p>
                </div>
              </div>
              <a
                href={`tel:${phoneNumber}`}
                className="block bg-blue-600 text-white text-center py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all"
              >
                {phoneNumber}
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    واتساب
                  </h3>
                  <p className="text-gray-600">راسلنا مباشرة على واتساب</p>
                </div>
              </div>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 text-white text-center py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all"
              >
                إرسال رسالة واتساب
              </a>
            </div>

            <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-8 h-8" />
                <h3 className="text-2xl font-bold">موقعنا</h3>
              </div>
              <p className="text-lg">الفيوم – مصر</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110614.03832864673!2d30.844299!3d29.308915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f6a7c48f47d%3A0x3c6d5a4c5b0a5b5c!2sFaiyum%2C%20Egypt!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مركز الفني للتكييف والتبريد في الفيوم"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
