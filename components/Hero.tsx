// "use client";

// import { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';

// const Hero = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0
//   });

//   // Set launch date (30 days from now)
//   const launchDate = new Date();
//   launchDate.setDate(launchDate.getDate() + 30);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = launchDate.getTime() - now;

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700">
//         <div className="absolute inset-0 bg-black/20"></div>
        
//         {/* Animated Water Waves */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden">
//           <svg className="relative w-full h-24 sm:h-32 lg:h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
//             <path
//               d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
//               className="fill-blue-400/30 animate-wave"
//             />
//             <path
//               d="M0,80 C300,140 600,20 1200,80 L1200,120 L0,120 Z"
//               className="fill-blue-300/40 animate-wave-slow"
//             />
//           </svg>
//         </div>

//         {/* Floating Water Droplets */}
//         <div className="absolute inset-0 pointer-events-none">
//           {[...Array(6)].map((_, i) => (
//             <div
//               key={i}
//               className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float-${i + 1}`}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${i * 0.5}s`,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto">
//         <div className="animate-fade-in-up">
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
//             <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
//               VedAqua
//             </span>
//           </h1>
//           <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 font-light">
//             Premium Customized Water Bottles
//           </p>
//           <p className="text-lg sm:text-xl text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed">
//             Discover the perfect blend of style, sustainability, and personalization. 
//             Your hydration journey starts here.
//           </p>
//         </div>

//         {/* Countdown Timer */}
//         <div className="animate-fade-in-up animation-delay-300 mb-12">
//           <h3 className="text-2xl sm:text-3xl text-white mb-8 font-semibold">
//             Launching Soon
//           </h3>
//           <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
//             {Object.entries(timeLeft).map(([unit, value], index) => (
//               <div key={unit} className="text-center">
//                 <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 hover:bg-white/25 transition-all duration-300">
//                   <div className="text-2xl sm:text-3xl font-bold text-white">
//                     {value.toString().padStart(2, '0')}
//                   </div>
//                   <div className="text-sm text-blue-100 capitalize mt-1">
//                     {unit}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Button */}
//         <div className="animate-fade-in-up animation-delay-600">
//           <button
//             onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
//             className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//           >
//             <span className="flex items-center gap-2">
//               Get Notified
//               <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <ChevronDown className="w-8 h-8 text-white/60" />
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set launch date to 22 September 2025 00:00:00 (local time)
  const launchDate = new Date('2025-09-22T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance <= 0) {
        // Launch date passed: stop timer and reset to zero
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Water Waves */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative w-full h-24 sm:h-32 lg:h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
              className="fill-blue-400/30 animate-wave"
            />
            <path
              d="M0,80 C300,140 600,20 1200,80 L1200,120 L0,120 Z"
              className="fill-blue-300/40 animate-wave-slow"
            />
          </svg>
        </div>

        {/* Floating Water Droplets */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/20 rounded-full animate-float-${i + 1}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              VedAqua
            </span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 font-light">
            {/* Premium Customized Water Bottles */}
          </p>
          <p className="text-lg sm:text-xl text-blue-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover the perfect blend of style, sustainability, and personalization. 
            Your hydration journey starts here.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="animate-fade-in-up animation-delay-300 mb-12">
          <h3 className="text-2xl sm:text-3xl text-white mb-8 font-semibold">
            Launching Soon
          </h3>
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30 hover:bg-white/25 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-blue-100 capitalize mt-1">
                    {unit}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in-up animation-delay-600">
          <button
            onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="flex items-center gap-2">
              Get Notified
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
