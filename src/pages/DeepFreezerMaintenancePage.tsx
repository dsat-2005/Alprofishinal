import { Phone, MessageCircle, Snowflake, Wrench, Volume2, Zap, Settings, ThermometerSnowflake, Droplet, Wind } from 'lucide-react';
import Navbar from '../components/Navbar';
import FloatingButtons from '../components/FloatingButtons';

const whyChooseUs = [
  {
    icon: Wrench,
    title: 'فنيين متخصصين في الديب فريزر',
    description: 'فريق من الخبراء المتخصصين في صيانة جميع أنواع الديب فريزر',
  },
  {
    icon: Zap,
    title: 'سرعة في الاستجابة والوصول',
    description: 'نصل إليك في نفس اليوم لإصلاح جميع أعطال الديب فريزر',
  },
  {
    icon: Settings,
    title: 'ضمان على الصيانة',
    description: 'ضمان شامل على جميع أعمال الصيانة والإصلاح',
  },
  {
    icon: Snowflake,
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
    icon: ThermometerSnowflake,
    title: 'تصليح ضعف التجميد',
    description: 'حل جميع مشاكل ضعف التجميد وعدم تجميد الديب فريزر بشكل صحيح',
  },
  {
    icon: Settings,
    title: 'تغيير أو إصلاح الموتور',
    description: 'إصلاح واستبدال موتور الديب فريزر بقطع غيار أصلية',
  },
  {
    icon: ThermometerSnowflake,
    title: 'صيانة الثرموستات',
    description: 'إصلاح وضبط منظم الحرارة لضمان تجميد مثالي',
  },
  {
    icon: Droplet,
    title: 'إصلاح تسريب الفريون',
    description: 'كشف وإصلاح تسريبات الفريون وإعادة شحن الغاز',
  },
  {
    icon: Zap,
    title: 'إصلاح لوحة التحكم',
    description: 'إصلاح جميع مشاكل لوحة التحكم الإلكترونية',
  },
  {
    icon: Wrench,
    title: 'فحص شامل للديب فريزر',
    description: 'فحص كامل لجميع أجزاء الديب فريزر والتأكد من سلامته',
  },
];

const commonIssues = [
  {
    icon: ThermometerSnowflake,
    title: 'ضعف التجميد',
    description: 'الديب فريزر يعمل لكن التجميد ضعيف أو الطعام لا يتجمد',
  },
  {
    icon: Snowflake,
    title: 'تراكم ثلج زائد',
    description: 'تكون طبقة ثلج سميكة على جدران الديب فريزر',
  },
  {
    icon: Volume2,
    title: 'صوت عالي',
    description: 'أصوات غير طبيعية أو مزعجة من الديب فريزر',
  },
  {
    icon: Zap,
    title: 'توقف مفاجئ',
    description: 'الديب فريزر يتوقف عن العمل فجأة أو لا يعمل نهائياً',
  },
  {
    icon: Wind,
    title: 'تسريب فريون',
    description: 'فقدان غاز الفريون وضعف في أداء التجميد',
  },
];

export default function DeepFreezerMaintenancePage() {
  const phoneNumber = '01020136636';
  const whatsappNumber = '201020136636';

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white min-h-[70vh] flex items-center pt-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Snowflake className="w-20 h-20 mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              صيانة الديب فريزر بالفيوم – مركز Alprofishinal
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-semibold">
              فنيين متخصصين في إصلاح جميع أعطال الديب فريزر بسرعة وضمان
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
                href={`https://wa.me/${whatsappNumber}?text=أريد الاستفسار عن صيانة الديب فريزر`}
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
              نحن الخيار الأمثل لصيانة الديب فريزر في الفيوم
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
              خدماتنا في الديب فريزر
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نقدم جميع خدمات الصيانة والإصلاح لجميع أنواع الديب فريزر
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
                مركز Alprofishinal لصيانة الديب فريزر في الفيوم
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-right space-y-6">
                <p className="text-xl">
                  مركز <strong>Alprofishinal</strong> يقدم أفضل خدمة صيانة ديب فريزر في الفيوم، حيث نتعامل مع جميع أنواع الديب فريزر والموديلات المختلفة، سواء كانت <strong>أفقية</strong> أو <strong>رأسية</strong>، ونقوم بإصلاح جميع الأعطال مهما كانت درجة تعقيدها. نحن متخصصون في حل مشكلة <strong>ضعف التجميد</strong>، وهي من أكثر الأعطال شيوعاً في الديب فريزر، حيث قد يكون السبب نقص غاز الفريون، تلف في الموتور أو الكباس، أو مشكلة في منظم الحرارة (الثرموستات).
                </p>
                <p className="text-xl">
                  من المشاكل الشائعة أيضاً <strong>تراكم الثلج الزائد</strong> داخل الديب فريزر، والذي قد يسبب صعوبة في فتح الباب وضعف في التجميد، وغالباً ما يكون بسبب تلف في عازل الباب، مشكلة في نظام التهوية، أو خلل في الثرموستات. كما نتعامل مع مشاكل <strong>تسريب الفريون</strong>، والتي تعتبر من الأعطال الخطيرة التي تؤدي إلى توقف التجميد تماماً، ونقوم بكشف التسريب وإصلاحه وإعادة شحن الغاز بدقة عالية.
                </p>
                <p className="text-xl">
                  إذا كان الديب فريزر <strong>لا يعمل نهائياً</strong> أو <strong>يتوقف فجأة</strong>، فقد يكون السبب عطل كهربائي، تلف في لوحة التحكم، احتراق في الموتور، أو مشكلة في الكباس. فريقنا من الفنيين المتخصصين يقوم بتشخيص دقيق للعطل باستخدام أحدث الأجهزة، ثم يصلحه بسرعة مع استخدام قطع غيار أصلية لضمان عمر أطول للديب فريزر.
                </p>
                <p className="text-xl">
                  نتعامل أيضاً مع مشكلة <strong>الأصوات المزعجة</strong> التي تصدر من الديب فريزر، سواء من الموتور أو المروحة أو الكباس، وهي قد تدل على وجود مشكلة تحتاج لتدخل فوري قبل أن تتفاقم. كما نقوم بإصلاح <strong>مشاكل الثرموستات</strong> الذي يتحكم في درجة حرارة التجميد، و<strong>مشاكل الباب والجوان</strong> التي قد تسبب تسرب الهواء البارد وضعف في الأداء.
                </p>
                <p className="text-xl">
                  من الأعطال الأخرى التي نصلحها: <strong>مشاكل الكهرباء</strong> مثل عدم التشغيل أو القفل المتكرر للكهرباء، <strong>تلف المروحة الداخلية</strong> التي تساعد على توزيع الهواء البارد، و<strong>مشاكل السخان</strong> في الديب فريزر النوفروست الذي يمنع تراكم الثلج.
                </p>
                <p className="text-xl">
                  نقدم أيضاً خدمة <strong>الصيانة الدورية</strong> التي تشمل فحص مستوى الفريون، تنظيف المكثف الخارجي، فحص الموتور والكباس، فحص الثرموستات، وفحص جميع الأجزاء الكهربائية لتجنب الأعطال المفاجئة وضمان أداء مثالي للديب فريزر طوال السنة.
                </p>
                <p className="text-xl font-semibold text-blue-600">
                  ما يميز مركز Alprofishinal هو <strong>السرعة في الاستجابة</strong>، حيث نصل إليك في نفس اليوم داخل جميع مناطق الفيوم، مع فريق فنيين محترفين متخصصين في الديب فريزر، أسعار مناسبة، وضمان شامل على جميع أعمال الصيانة. اتصل بنا الآن على <strong>01020136636</strong> واحصل على خدمة سريعة واحترافية.
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
              نحن خبراء في إصلاح جميع أنواع أعطال الديب فريزر
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
                الماركات التي نخدمها في صيانة الديب فريزر
              </h2>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-2xl md:text-3xl text-gray-800 font-semibold text-center leading-relaxed">
                Samsung – Zanussi
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              اتصل الآن لصيانة الديب فريزر في نفس اليوم داخل الفيوم
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
                  href={`https://wa.me/${whatsappNumber}?text=أريد صيانة الديب فريزر`}
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
