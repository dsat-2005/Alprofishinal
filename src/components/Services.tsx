import { Link } from 'react-router-dom';

const services = [
  {
    image: 'ac-maintenance.jpg',
    title: 'صيانة التكييفات',
    description: 'نقدم خدمات إصلاح وصيانة جميع أنواع التكييفات، سواء سبليت أو شباك، مع فحص شامل، تنظيف، شحن فريون، وإصلاح الأعطال لضمان أفضل أداء.',
    link: '/services/ac-maintenance',
  },
  {
    image: 'refrigerator-maintenance.jpg',
    title: 'صيانة الثلاجات',
    description: 'نصلح جميع أعطال الثلاجات والفريزر، ضعف التبريد، تسريب المياه، مشاكل الموتور، مع استخدام قطع غيار أصلية لضمان عمر أطول للجهاز.',
    link: '/services/refrigerator-maintenance',
  },
  {
    image: 'washer-maintenance.jpg',
    title: 'صيانة الغسالات الهاف',
    description: 'نقدم خدمات صيانة وإصلاح الغسالات الهاف بجميع أنواعها، أعطال العصر، عدم التفريغ، ضعف الموتور، وتسريب المياه، مع فنيين متخصصين وخدمة سريعة داخل الفيوم.',
    link: '/services/washer-maintenance',
  },
  {
    image: 'deep-freezer-maintenance.jpg',
    title: 'صيانة الديب فريزر',
    description: 'خدمات متكاملة لإصلاح وصيانة جميع أنواع الديب فريزر، أعطال التجميد، ضعف التبريد، واستبدال قطع الغيار التالفة بسرعة ودقة.',
    link: '/services/deep-freezer-maintenance',
  },
];

export default function Services() {
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src={`/services/${service.image}`}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center mb-6 flex-grow">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-all text-center"
                >
                  المزيد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
