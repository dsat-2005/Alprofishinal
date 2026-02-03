import { AirVent, Refrigerator, WashingMachine, Snowflake } from 'lucide-react';

const services = [
  {
    icon: AirVent,
    title: 'صيانة التكييفات',
    description: 'نقدم خدمات إصلاح وصيانة جميع أنواع التكييفات، سواء سبليت أو شباك، مع فحص شامل، تنظيف، شحن فريون، وإصلاح الأعطال لضمان أفضل أداء.',
  },
  {
    icon: Refrigerator,
    title: 'صيانة الثلاجات',
    description: 'نصلح جميع أعطال الثلاجات والفريزر، ضعف التبريد، تسريب المياه، مشاكل الموتور، مع استخدام قطع غيار أصلية لضمان عمر أطول للجهاز.',
  },
  {
    icon: WashingMachine,
    title: 'صيانة الغسالات الهاف',
    description: 'نقدم خدمات صيانة وإصلاح الغسالات الهاف بجميع أنواعها، أعطال العصر، عدم التفريغ، ضعف الموتور، وتسريب المياه، مع فنيين متخصصين وخدمة سريعة داخل الفيوم.',
  },
  {
    icon: Snowflake,
    title: 'صيانة الديب فريزر',
    description: 'خدمات متكاملة لإصلاح وصيانة جميع أنواع الديب فريزر، أعطال التجميد، ضعف التبريد، واستبدال قطع الغيار التالفة بسرعة ودقة.',
  },
];

export default function Services() {
  const phoneNumber = '01234567890';

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            قسم الخدمات
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            نقدم خدمات صيانة شاملة لجميع أنواع الأجهزة المنزلية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center mb-6 flex-grow">
                {service.description}
              </p>
              <a
                href={`https://wa.me/${phoneNumber}?text=أريد الاستفسار عن ${service.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-all text-center"
              >
                المزيد
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
