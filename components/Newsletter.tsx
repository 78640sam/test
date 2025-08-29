// "use client";

// import { useState, useEffect, useRef } from 'react';
// import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

// const Newsletter = () => {
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email.trim()) {
//       setIsSubscribed(true);
//       setEmail('');
//       setTimeout(() => setIsSubscribed(false), 3000);
//     }
//   };

//   return (
//     <section 
//       id="newsletter" 
//       ref={sectionRef} 
//       className="py-20 px-6 sm:px-8 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 relative overflow-hidden"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-black/20"></div>
//         {/* Water Ripples */}
//         <div className="absolute inset-0 opacity-20">
//           {[...Array(3)].map((_, i) => (
//             <div
//               key={i}
//               className={`absolute w-96 h-96 border-2 border-white/20 rounded-full animate-ripple-${i + 1}`}
//               style={{
//                 left: `${20 + i * 30}%`,
//                 top: `${10 + i * 20}%`,
//                 animationDelay: `${i * 2}s`,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto relative text-center">
//         <div className={`transition-all duration-1000 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}>
//           <div className="mb-8">
//             <Mail className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
//           </div>
          
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
//             Be the First to Know
//           </h2>
          
//           <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
//             Get exclusive early access, special offers, and be part of the VedAqua family from day one.
//           </p>

//           {!isSubscribed ? (
//             <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email address"
//                   className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
//                 >
//                   Subscribe
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//                 </button>
//               </div>
//             </form>
//           ) : (
//             <div className="flex items-center justify-center gap-3 text-white text-xl">
//               <CheckCircle className="w-8 h-8 text-green-300" />
//               <span>Thank you! You'll be the first to know.</span>
//             </div>
//           )}

//           <p className="text-blue-200 text-sm mt-8">
//             No spam, ever. Unsubscribe at any time.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;


// "use client";

// import { useState, useEffect, useRef } from 'react';
// import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

// const Newsletter = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     city: '',
//     email: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Google Form URL (replace with your real form's action URL)
//     const googleFormAction = "https://docs.google.com/forms/d/1uheFzBEyFh8sni3dYduNmPJCEkeLN7bG4wiKZmfqOso/edit#responses";

//     // Field names from Google Form (entry.X values will be different for your form)
//     const formFields = {
//       name: "entry.2005620554",
//       mobile: "entry.1166974658",
//       city: "entry.1065046570",
//       email: "entry.1045781291",
//     };

//     const formBody = new URLSearchParams();
//     formBody.append(formFields.name, formData.name);
//     formBody.append(formFields.mobile, formData.mobile);
//     formBody.append(formFields.city, formData.city);
//     formBody.append(formFields.email, formData.email);

//     fetch(googleFormAction, {
//       method: "POST",
//       mode: "no-cors",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: formBody.toString(),
//     });

//     setIsSubmitted(true);
//     setFormData({ name: '', mobile: '', city: '', email: '' });

//     setTimeout(() => setIsSubmitted(false), 5000);
//   };

//   return (
//     <section
//       id="newsletter"
//       ref={sectionRef}
//       className="py-20 px-6 sm:px-8 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 relative overflow-hidden"
//     >
//       {/* Background overlays and ripples here (optional) */}

//       <div className="max-w-4xl mx-auto relative text-center">
//         <div className={`transition-all duration-1000 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}>
//           <div className="mb-8">
//             <Mail className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
//           </div>

//           <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
//             Join VedAqua Early Access
//           </h2>

//           <p className="text-xl sm:text-2xl text-blue-100 mb-12">
//             Be first to get updates, offers & more.
//           </p>

//           {!isSubmitted ? (
//             <form onSubmit={handleSubmit} className="grid gap-4 max-w-2xl mx-auto">
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 required
//                 className="px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 text-lg"
//               />
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 placeholder="Mobile Number"
//                 required
//                 className="px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 text-lg"
//               />
//                 <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Email Address"
//                 required
//                 className="px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 text-lg"
//               />
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 placeholder="City"
//                 required
//                 className="px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 text-lg"
//               />
            
//               <button
//                 type="submit"
//                 className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
//               >
//                 Send
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
//               </button>
//             </form>
//           ) : (
//             <div className="flex items-center justify-center gap-3 text-white text-xl mt-8">
//               <CheckCircle className="w-8 h-8 text-green-300" />
//               <span>Thanks! We’ll be in touch.</span>
//             </div>
//           )}

//           <p className="text-blue-200 text-sm mt-8">
//             We respect your privacy. No spam.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;






"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [isSubscribed, setIsSubscribed] = useState(false);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   const { name, email, mobile, city } = formData;
  //   if (name && email && mobile && city) {
  //     setIsSubscribed(true);
  //     setFormData({ name: "", email: "", mobile: "", city: "" });
  //     setTimeout(() => setIsSubscribed(false), 4000);
  //   }
  // };

//   const handleSubmit = (e: React.FormEvent) => {
//   e.preventDefault();

//   const formEndpoint = 
//   //"https://docs.google.com/forms/d/e/1FAIpQLSfahXGHYgCzN0XgI7TlOOLoK-gTC_JgNQPgI58DS2b-qC4bhg/formResponse";
//                        "https://docs.google.com/forms/d/e/1FAIpQLSfahXGHYgCzN0XgI7TlOOLoK-gTC_JgNQPgI58DS2b-qC4bhg/formResponse"; // Replace with your form's URL


 
//   const form = new FormData();
//   form.append("entry.2005620554", formData.name);   // Replace with your actual field IDs
//   form.append("entry.1045781291", formData.email);
//   form.append("entry.1166974658", formData.mobile);
//   form.append("entry.1065046570", formData.city);

//   fetch(formEndpoint, {
//     method: "POST",
//     mode: "no-cors",
//     body: form,
//   })
//     .then(() => {
//       setIsSubscribed(true);
//       setFormData({ name: "", email: "", mobile: "", city: "" });
//       setTimeout(() => setIsSubscribed(false), 4000);
//     })
//     .catch((err) => {
//       console.error("Google Form submission error", err);
//     });
// };

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const apiUrl = "https://api.sheety.co/34eaeb19be3ba1bb8b3ba003165efaa8/websiteLead/sheet1"; // replace this

  const payload = {
    subscriber: {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      city: formData.city,
    }
  };
fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // If your sheet is private, include your token here
    // "Authorization": "Bearer YOUR_TOKEN",
  },
  body: JSON.stringify({
    sheet1: {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      city: formData.city,
    }
  }),
})
  .then(async (response) => {
    const text = await response.text();
    if (!response.ok) {
      console.error("❌ Error response from Sheety:", text);
      throw new Error("Failed to submit");
    }

    console.log("✅ Submitted successfully:", text);
    setIsSubscribed(true);
    setFormData({ name: "", email: "", mobile: "", city: "" });
    setTimeout(() => setIsSubscribed(false), 4000);
  })
  .catch((error) => {
    console.error("❌ Submission error:", error);
  });

};

  return (
    <section
      id="newsletter"
      ref={sectionRef}
      className="py-20 px-6 sm:px-8 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 opacity-20">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-96 h-96 border-2 border-white/20 rounded-full animate-ripple-${i + 1}`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <Mail className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
           We Are Happy To Help You!
          </h2>

          <p className="text-xl sm:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Be the first to know about our launch, get exclusive updates, and more.
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="px-5 py-4 rounded-full text-gray-900 text-lg placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="px-5 py-4 rounded-full text-gray-900 text-lg placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  className="px-5 py-4 rounded-full text-gray-900 text-lg placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="px-5 py-4 rounded-full text-gray-900 text-lg placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
                  required
                />
              </div>

              <button
                type="submit"
                className="group bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl w-full sm:w-auto mx-auto"
              >
                Submit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-white text-xl">
              <CheckCircle className="w-8 h-8 text-green-300" />
              <span>Thanks for joining VedAqua! 🎉</span>
            </div>
          )}

          <p className="text-blue-200 text-sm mt-8">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
