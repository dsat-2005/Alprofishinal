import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'homepage' | 'service';
  serviceName?: string;
  serviceDescription?: string;
  url: string;
}

export default function StructuredData({ type, serviceName, serviceDescription, url }: StructuredDataProps) {
  useEffect(() => {
    const organizationData = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Alprofishinal',
      description: 'مركز متخصص في صيانة التكييف والتبريد والأجهزة المنزلية بالفيوم',
      url: 'https://alprofishinal.vercel.app',
      telephone: '+201020136636',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'منطقة قحافة',
        addressLocality: 'الفيوم',
        addressCountry: 'EG',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '29.308915',
        longitude: '30.844299',
      },
      areaServed: {
        '@type': 'City',
        name: 'الفيوم',
      },
      priceRange: '$$',
      openingHours: 'Mo-Su 00:00-23:59',
      image: 'https://alprofishinal.vercel.app/whatsapp_image_2026-02-03_at_3.26.12_pm.jpeg',
      logo: 'https://alprofishinal.vercel.app/whatsapp_image_2026-02-03_at_3.26.12_pm.jpeg',
    };

    const serviceData = type === 'service' && serviceName ? {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      description: serviceDescription,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Alprofishinal',
        telephone: '+201020136636',
      },
      areaServed: {
        '@type': 'City',
        name: 'الفيوم',
      },
      url: url,
    } : null;

    let existingScript = document.getElementById('structured-data-org');
    if (existingScript) {
      existingScript.remove();
    }

    const scriptOrg = document.createElement('script');
    scriptOrg.id = 'structured-data-org';
    scriptOrg.type = 'application/ld+json';
    scriptOrg.text = JSON.stringify(organizationData);
    document.head.appendChild(scriptOrg);

    if (serviceData) {
      let existingServiceScript = document.getElementById('structured-data-service');
      if (existingServiceScript) {
        existingServiceScript.remove();
      }

      const scriptService = document.createElement('script');
      scriptService.id = 'structured-data-service';
      scriptService.type = 'application/ld+json';
      scriptService.text = JSON.stringify(serviceData);
      document.head.appendChild(scriptService);
    }

    return () => {
      const scriptToRemove = document.getElementById('structured-data-org');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
      const serviceScriptToRemove = document.getElementById('structured-data-service');
      if (serviceScriptToRemove) {
        serviceScriptToRemove.remove();
      }
    };
  }, [type, serviceName, serviceDescription, url]);

  return null;
}
