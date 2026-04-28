import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  showScrollIndicator?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = "/images/hero/main.jpg",
  backgroundVideo,
  showScrollIndicator = false,
}: HeroSectionProps) {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Video or Image with Overlay */}
      {backgroundVideo ? (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
            {/* Fallback to image if video fails */}
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/40" />
        </>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        <p className="mb-8 text-xl text-white md:text-2xl text-balance max-w-3xl mx-auto">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="inline-block rounded-md bg-primary-red px-8 py-4 text-lg font-bold text-white transition-all hover:bg-red-700 hover:shadow-2xl hover:scale-105"
          >
            {ctaText}
          </Link>
        )}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      )}
    </section>
  );
}

