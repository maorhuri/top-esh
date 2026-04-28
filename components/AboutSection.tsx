"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface AboutSectionProps {
  title: string;
  description: string;
  image?: string;
}

// Hook to animate counting numbers
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!shouldStart || hasAnimated.current) return;
    
    hasAnimated.current = true;
    const startTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation (easeOutExpo)
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldStart]);

  return count;
}

export default function AboutSection({
  title,
  description,
  image = "/images/about.jpg",
}: AboutSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const count1 = useCountUp(15, 2000, isVisible);
  const count2 = useCountUp(500, 2500, isVisible);
  const count3 = useCountUp(100, 2000, isVisible);

  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {description}
            </p>
            <div className="mt-8 flex gap-4 justify-center md:justify-start">
              <div className="text-center px-4">
                <div className="text-5xl md:text-6xl font-bold text-primary-red transition-all duration-300">
                  {count1}+
                </div>
                <div className="mt-2 text-sm md:text-base text-gray-600 font-medium">שנות ניסיון</div>
              </div>
              <div className="text-center px-4">
                <div className="text-5xl md:text-6xl font-bold text-primary-blue transition-all duration-300">
                  {count2}+
                </div>
                <div className="mt-2 text-sm md:text-base text-gray-600 font-medium">פרויקטים</div>
              </div>
              <div className="text-center px-4">
                <div className="text-5xl md:text-6xl font-bold text-primary-red transition-all duration-300">
                  {count3}%
                </div>
                <div className="mt-2 text-sm md:text-base text-gray-600 font-medium">שביעות רצון</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

