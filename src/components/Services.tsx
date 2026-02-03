import { AirVent, Refrigerator, WashingMachine } from 'lucide-react';

const services = [
  {
    icon: AirVent,
    title: 'صيانة التكييف',
    description: 'صيانة وتصليح جميع أنواع التكييفات بأحدث المعدات والتقنيات. نوفر خدمة سريعة وكفاءة عالية لضمان راحتك.',
  },
  {
    icon: Refrigerator,
    title: 'صيانة الثلاجات',
    description: 'تصليح وصيانة الثلاجات والفريزرات من جميع الأنواع. نحل جميع مشاكل التبريد والتسريب بخبرة وضمان.',
  },
  {
    icon: WashingMachine,
    title: 'صيانة الغسالات',
    description: 'إصلاح وصيانة الغسالات الأوتوماتيك والعادية. خدمة فورية لحل جميع الأعطال بسرعة واحترافية.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            خدماتنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم خدمات صيانة شاملة لجميع أنواع الأجهزة المنزلية
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
