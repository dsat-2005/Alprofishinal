import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'أحمد محمود',
    rating: 5,
    comment: 'خدمة ممتازة وسريعة، الفني وصل في نفس اليوم وأصلح التكييف في أقل من ساعة. شكراً لمركز Alprofishinal على الاحترافية العالية.',
  },
  {
    name: 'سارة حسن',
    rating: 5,
    comment: 'تعاملت مع المركز لصيانة الثلاجة وكانت التجربة رائعة. الأسعار مناسبة والفني محترف جداً. أنصح الجميع بالتعامل معهم.',
  },
  {
    name: 'محمد عبد الله',
    rating: 5,
    comment: 'مركز موثوق وأمين. صلحوا الغسالة الأوتوماتيك بسرعة وبضمان، والحمد لله الجهاز شغال كويس جداً. ربنا يبارك فيهم.',
  },
  {
    name: 'فاطمة علي',
    rating: 5,
    comment: 'أفضل مركز صيانة في الفيوم. تعاملهم راقي جداً والخدمة سريعة. صلحوا الديب فريزر وأصبح يعمل أحسن من الأول.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            آراء عملائنا
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ثقة عملائنا هي أكبر شهادة على جودة خدماتنا
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {testimonial.name}
              </h3>

              <p className="text-gray-600 leading-relaxed text-center">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
