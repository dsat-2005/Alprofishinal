import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const phoneNumber = '01020136636';
  const whatsappNumber = '201020136636';
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'صيانة التكييفات', path: '/services/ac-maintenance' },
    { name: 'صيانة الثلاجات', path: '/services/refrigerator-maintenance' },
    { name: 'صيانة الغسالات الهاف', path: '/services/washer-maintenance' },
    { name: 'صيانة الديب فريزر', path: '/services/deep-freezer-maintenance' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/whatsapp_image_2026-02-03_at_3.26.12_pm.jpeg"
              alt="Alprofishinal"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold text-blue-600">
              Alprofishinal
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
            >
              الرئيسية
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
                خدماتنا
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[250px]">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              اتصل الآن
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              واتساب
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
