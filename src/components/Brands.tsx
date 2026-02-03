import { useEffect, useState } from 'react';

const brands = [
  'LG',
  'Samsung',
  'Sharp',
  'Toshiba',
  'Midea',
  'Carrier',
  'Unionaire',
  'Fresh',
  'Zanussi',
  'Bosch',
  'Siemens',
  'Whirlpool',
  'Beko',
  'Ariston',
  'Haier',
  'Panasonic',
  'Hitachi',
  'Daewoo',
];

export default function Brands() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const brandsPerView = 6;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleBrands = () => {
    const visible = [];
    for (let i = 0; i < brandsPerView; i++) {
      visible.push(brands[(currentIndex + i) % brands.length]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            نخدم جميع الماركات العالمية
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقوم بصيانة وإصلاح جميع ماركات التكييفات، الثلاجات، والغسالات، سواء كانت محلية أو عالمية، مع توفير قطع غيار أصلية وخدمة متخصصة لكل موديل.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-8 justify-center items-center py-8">
            {getVisibleBrands().map((brand, index) => (
              <div
                key={`${brand}-${index}`}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg min-w-[150px] transform transition-all duration-500 hover:scale-110 hover:shadow-2xl"
              >
                <p className="text-2xl font-bold text-blue-600 text-center whitespace-nowrap">
                  {brand}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(brands.length / brandsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * brandsPerView)}
                className={`w-3 h-3 rounded-full transition-all ${
                  Math.floor(currentIndex / brandsPerView) === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300'
                }`}
                aria-label={`الانتقال إلى مجموعة الماركات ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 bg-blue-600 text-white rounded-2xl p-8 text-center">
          <p className="text-xl md:text-2xl font-semibold">
            وأكثر من ذلك بكثير! نحن نخدم جميع الماركات والموديلات
          </p>
        </div>
      </div>
    </section>
  );
}
