const brandLogos = [
  '/brands/files_8269982-2026-02-03t17-55-47-631z-image.png',
  '/brands/files_8269982-2026-02-03t17-55-55-401z-image.png',
  '/brands/files_8269982-2026-02-03t17-56-13-296z-image.png',
  '/brands/files_8269982-2026-02-03t17-56-27-364z-image.png',
  '/brands/files_8269982-2026-02-03t17-56-49-713z-image.png',
];

export default function Brands() {
  const duplicatedLogos = [...brandLogos, ...brandLogos];

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

        <div className="relative overflow-hidden py-8">
          <div className="flex gap-0 brands-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white w-52 h-40 flex items-center justify-center px-4 py-2"
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              >
                <img
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                  draggable="false"
                />
              </div>
            ))}
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
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
