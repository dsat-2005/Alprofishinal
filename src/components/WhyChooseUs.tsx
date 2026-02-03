import { Clock, Award, DollarSign, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'سرعة الوصول',
    description: 'نصل إليك في أسرع وقت ممكن لحل جميع مشاكل أجهزتك',
  },
  {
    icon: Award,
    title: 'خبرة في المجال',
    description: 'فريق من الفنيين المحترفين ذوي الخبرة الطويلة في الصيانة',
  },
  {
    icon: DollarSign,
    title: 'أسعار مناسبة',
    description: 'أفضل الأسعار في السوق مع ضمان جودة الخدمة',
  },
  {
    icon: MapPin,
    title: 'تغطية جميع مناطق الفيوم',
    description: 'نخدم جميع أحياء ومناطق محافظة الفيوم بدون استثناء',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            لماذا تختارنا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نحن الخيار الأمثل لصيانة أجهزتك في الفيوم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
