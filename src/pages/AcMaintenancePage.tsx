import { Phone, MessageCircle, Wind, Snowflake, Wrench, Droplet, Volume2, Zap, Settings } from 'lucide-react';
import Navbar from '../components/Navbar';
import FloatingButtons from '../components/FloatingButtons';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';

const whyChooseUs = [
  {
    icon: Wrench,
    title: 'فنيين متخصصين في التكييف',
    description: 'فريق من الخبراء المتخصصين في صيانة جميع أنواع التكييفات',
  },
  {
    icon: Zap,
    title: 'سرعة في الاستجابة والوصول',
    description: 'نصل إليك في نفس اليوم لإصلاح جميع أعطال التكييف',
  },
  {
    icon: Settings,
    title: 'ضمان جودة الشغل',
    description: 'ضمان شامل على جميع أعمال الصيانة والإصلاح',
  },
  {
    icon: Wind,
    title: 'أسعار مناسبة',
    description: 'أسعار تنافسية تناسب جميع العملاء مع جودة عالية',
  },
  {
    icon: Settings,
    title: 'قطع غيار أصلية',
    description: 'نستخدم فقط قطع الغيار الأصلية لضمان أفضل أداء',
  },
];

const services = [
  {
    icon: Snowflake,
    title: 'شحن فريون',
    description: 'شحن غاز الفريون بأحدث الأجهزة لضمان أفضل تبريد',
  },
  {
    icon: Wind,
    title: 'تنظيف وصيانة دورية',
    description: 'تنظيف شامل للفلاتر والوحدات الداخلية والخارجية',
  },
  {
    icon: Wrench,
    title: 'تشخيص الأعطال بدقة',
    description: 'فحص دقيق لتحديد المشكلة وإصلاحها من الجذور',
  },
  {
    icon: Snowflake,
    title: 'تصليح ضعف التبريد',
    description: 'حل جميع مشاكل ضعف التبريد والهواء الساخن',
  },
  {
    icon: Droplet,
    title: 'إصلاح تسريب المياه',
    description: 'معالجة مشاكل تسريب المياه من الوحدة الداخلية',
  },
  {
    icon: Zap,
    title: 'إصلاح أعطال الكهرباء واللوحة',
    description: 'إصلاح جميع الأعطال الكهربائية ولوحة التحكم',
  },
  {
    icon: Settings,
    title: 'تركيب وفك التكييفات',
    description: 'خدمة تركيب وفك التكييفات بطريقة احترافية وآمنة',
  },
];

const commonIssues = [
  {
    icon: Snowflake,
    title: 'ضعف التبريد',
    description: 'التكييف يعمل لكن التبريد ضعيف أو الهواء ساخن',
  },
  {
    icon: Droplet,
    title: 'خروج مياه',
    description: 'تسريب مياه من الوحدة الداخلية على الأرض أو الحائط',
  },
  {
    icon: Volume2,
    title: 'صوت عالي',
    description: 'أصوات غير طبيعية أو مزعجة من الوحدة الداخلية أو الخارجية',
  },
  {
    icon: Zap,
    title: 'توقف مفاجئ',
    description: 'التكييف يتوقف عن العمل فجأة أو لا يعمل نهائياً',
  },
  {
    icon: Settings,
    title: 'أعطال كهرباء',
    description: 'مشاكل في التشغيل، الريموت لا يستجيب، أو فصل متكرر للكهرباء',
  },
];

export default function AcMaintenancePage() {
  const phoneNumber = '01020136636';
  const whatsappNumber = '201020136636';

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="صيانة تكييفات في الفيوم | Alprofishinal - خدمة سريعة واحترافية"
        description="مركز Alprofishinal لصيانة التكييفات بالفيوم - فنيين متخصصين في إصلاح جميع أنواع التكييفات سبليت وشباك - شحن فريون - تنظيف - اتصل الآن 01020136636"
        keywords="صيانة تكييف الفيوم, تصليح تكييف الفيوم, شحن فريون الفيوم, تنظيف تكييف الفيوم, صيانة تكييف سبليت الفيوم, مركز صيانة تكييف الفيوم"
        ogTitle="صيانة تكييفات في الفيوم | Alprofishinal"
        ogDescription="مركز Alprofishinal لصيانة التكييفات بالفيوم - فنيين متخصصين - خدمة سريعة - أسعار مناسبة - اتصل الآن 01020136636"
        ogUrl="https://alprofishinal.vercel.app/services/ac-maintenance"
        ogImage="https://alprofishinal.vercel.app/services/ac-maintenance.jpg"
      />
      <StructuredData
        type="service"
        serviceName="صيانة التكييفات في الفيوم"
        serviceDescription="مركز Alprofishinal لصيانة التكييفات بالفيوم - فنيين متخصصين في إصلاح جميع أنواع التكييفات"
        url="https://alprofishinal.vercel.app/services/ac-maintenance"
      />
      <Navbar />

      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white min-h-[70vh] flex items-center pt-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Wind className="w-20 h-20 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              صيانة التكييفات بالفيوم – مركز Alprofishinal
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-semibold">
              فنيين محترفين لصيانة جميع أنواع التكييف بسرعة وضمان
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
                href={`https://wa.me/${whatsappNumber}?text=أريد الاستفسار عن صيانة التكييفات`}
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              ليه تختارنا؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نحن الخيار الأمثل لصيانة التكييفات في الفيوم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {whyChooseUs.map((reason, index) => (
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              خدماتنا في التكييفات
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم جميع خدمات الصيانة والإصلاح لجميع أنواع التكييفات
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                مركز Alprofishinal لصيانة التكييفات في الفيوم
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-right space-y-6">
                <p className="text-xl">
                  مركز <strong>Alprofishinal</strong> يقدم أفضل خدمة صيانة تكييفات في الفيوم، حيث نتعامل مع جميع أنواع التكييفات سواء <strong>سبليت</strong> أو <strong>شباك</strong>، ونقوم بإصلاح جميع الأعطال مهما كانت درجة تعقيدها. نحن متخصصون في حل مشاكل <strong>ضعف التبريد</strong>، والذي يعتبر من أكثر الأعطال شيوعاً، حيث قد يكون السبب نقص غاز الفريون، انسداد في الفلاتر، أو تلف في الضاغط.
                </p>
                <p className="text-xl">
                  من المشاكل الشائعة أيضاً <strong>تسريب المياه من التكييف</strong>، والتي قد تسبب أضراراً في الجدران والأرضيات، وغالباً ما تكون بسبب انسداد في مجرى تصريف المياه أو خلل في تركيب الوحدة. كما نتعامل مع مشاكل <strong>الصوت العالي والمزعج</strong> الذي قد ينتج عن تلف في المروحة أو وجود أجزاء مفككة داخل الوحدة.
                </p>
                <p className="text-xl">
                  إذا كان التكييف <strong>لا يعمل نهائياً</strong> أو <strong>يتوقف فجأة</strong>، فقد يكون السبب عطل كهربائي، تلف في لوحة التحكم، أو مشكلة في الضاغط. فريقنا من الفنيين المتخصصين يقوم بتشخيص دقيق للعطل باستخدام أحدث الأجهزة، ثم يصلحه بسرعة مع استخدام قطع غيار أصلية لضمان عمر أطول للجهاز.
                </p>
                <p className="text-xl">
                  نقدم أيضاً خدمة <strong>الصيانة الدورية</strong> التي تشمل تنظيف الفلاتر، فحص مستوى الفريون، تنظيف الوحدة الخارجية، وفحص جميع الأجزاء الكهربائية لتجنب الأعطال المفاجئة وضمان أداء مثالي طوال فصل الصيف.
                </p>
                <p className="text-xl font-semibold text-blue-600">
                  ما يميز مركز Alprofishinal هو <strong>السرعة في الاستجابة</strong>، حيث نصل إليك في نفس اليوم داخل جميع مناطق الفيوم، مع فريق فنيين محترفين، أسعار مناسبة، وضمان شامل على جميع أعمال الصيانة. اتصل بنا الآن على <strong>01020136636</strong> واحصل على خدمة سريعة واحترافية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              الأعطال الشائعة
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نحن خبراء في إصلاح جميع أنواع أعطال التكييفات
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {commonIssues.map((issue, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <issue.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {issue.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {issue.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                الماركات التي نخدمها في صيانة التكييفات
              </h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-2xl md:text-3xl text-gray-800 font-semibold text-center leading-relaxed">
                Fresh – LG – Carrier – Hisense – Koldair – American Cool – Gree – Deio – Creft
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              اتصل الآن لصيانة تكييفك في نفس اليوم داخل الفيوم
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
              <div className="flex items-center gap-3">
                <Phone className="w-10 h-10" />
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-3xl font-bold hover:text-blue-200 transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-10 h-10" />
                <a
                  href={`https://wa.me/${whatsappNumber}?text=أريد صيانة التكييف`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold hover:text-blue-200 transition-colors"
                >
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FloatingButtons />
      <div className="pb-20"></div>
    </div>
  );
}
