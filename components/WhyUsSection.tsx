import { Lightbulb, Compass, Wrench } from "lucide-react";

interface WhyUsItem {
  title: string;
  description: string;
  icon: string;
}

interface WhyUsSectionProps {
  items: WhyUsItem[];
}

const iconMap = {
  lightbulb: Lightbulb,
  "drafting-compass": Compass,
  wrench: Wrench,
};

export default function WhyUsSection({ items }: WhyUsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
            למה לבחור בנו?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנחנו מספקים שירות מקצועי ואמין בכל שלב מהפרויקט
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Lightbulb;
            return (
              <div
                key={index}
                className="group relative rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-red/10 transition-colors group-hover:bg-primary-red">
                  <Icon className="h-8 w-8 text-primary-red transition-colors group-hover:text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 h-2 w-2 rounded-bl-lg bg-primary-blue"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

