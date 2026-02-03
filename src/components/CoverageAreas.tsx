import { MapPin } from 'lucide-react';

export default function CoverageAreas() {
  return (
    <section id="areas" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto">
            <MapPin className="w-10 h-10 text-blue-600" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            نخدم جميع مناطق الفيوم
          </h2>

          <p className="text-xl md:text-2xl leading-relaxed">
            نقدم خدماتنا في جميع مراكز وقرى محافظة الفيوم بسرعة واستجابة فورية، مع إمكانية الوصول في نفس اليوم.
          </p>
        </div>
      </div>
    </section>
  );
}
