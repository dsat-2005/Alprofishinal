import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  const phoneNumber = '01020136636';
  const whatsappNumber = '201020136636';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-2xl border-t-2 border-gray-200">
      <div className="flex gap-2 p-3 max-w-lg mx-auto">
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-bold text-base hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          <Phone className="w-5 h-5" />
          اتصل الآن
        </a>

        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white py-4 rounded-lg font-bold text-base hover:bg-green-600 transition-all flex items-center justify-center gap-2 shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          واتساب
        </a>
      </div>
    </div>
  );
}
