import { useEffect, useRef, useState } from 'react';

const brandLogos = [
  '/brands/files_8269982-2026-02-03t17-55-47-631z-image.png',
  '/brands/files_8269982-2026-02-03t17-55-55-401z-image.png',
  '/brands/files_8269982-2026-02-03t17-56-13-296z-image.png',
  '/brands/files_8269982-2026-02-03t17-56-27-364z-image.png',
  '/brands/files_8269982-2026-02-03t17-56-49-713z-image.png',
];

export default function Brands() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      if (!isDragging) {
        scrollPosition += speed;
        const maxScroll = scrollContainer.scrollWidth / 2;

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const triplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

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
          <div
            ref={scrollRef}
            className="flex gap-0 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {triplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white hover:shadow-lg transition-all duration-300 w-52 h-40 flex items-center justify-center px-4 py-2"
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
