import Link from "next/link";
import Image from "next/image";

interface ServicePreview {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServicesPreviewProps {
  services: ServicePreview[];
}

export default function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
            השירותים שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            מגוון שירותים מקצועיים בתחום כיבוי אש
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {service.description}
                </p>
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-4 left-4 h-1 w-12 bg-primary-red transition-all duration-300 group-hover:w-20"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

