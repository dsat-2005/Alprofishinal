import { Phone, MessageCircle } from 'lucide-react';

export default function Hero() {
  const phoneNumber = '01234567890';

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            مركز الفني لصيانة التكييف والتبريد بالفيوم
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold">
            خدمة سريعة – فنيين محترفين – أسعار مناسبة
          </p>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            نوفر خدمات صيانة متكاملة للتكييف والثلاجات والغسالات في جميع أنحاء الفيوم
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Phone className="w-6 h-6" />
              اتصل الآن
            </a>

            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-6 h-6" />
              راسلنا على واتساب
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
