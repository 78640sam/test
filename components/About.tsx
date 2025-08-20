"use client";

import { useEffect, useRef, useState } from 'react';
import { Droplet, Sparkles, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 sm:px-8 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Pure Innovation
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where personalization meets sustainability, creating water bottles that reflect your unique style
            while caring for our planet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: Droplet,
              title: "Pure Quality",
              description: "Premium materials that keep your water fresh and clean, bottle after bottle.",
              delay: "100"
            },
            {
              icon: Sparkles,
              title: "Custom Design",
              description: "Personalize every detail - from colors to engravings, make it uniquely yours.",
              delay: "300"
            },
            {
              icon: Heart,
              title: "Eco-Friendly",
              description: "Sustainable production processes that love our planet as much as you do.",
              delay: "500"
            }
          ].map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`text-center group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                  </div>
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-blue-400/20 animate-ping group-hover:animate-none"></div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;