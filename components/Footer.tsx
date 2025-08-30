// "use client";

// import { Droplets, Heart } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12 px-6 sm:px-8">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center">
//           <div className="flex items-center justify-center gap-2 mb-6">
//             <Droplets className="w-8 h-8 text-cyan-400" />
//             <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//               VedAqua
//             </span>
//           </div>
          
//           <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
//             Crafting premium customized water bottles that blend style, functionality, 
//             and environmental responsibility.
//           </p>

//           {/* Social Links Placeholder */}
//           <div className="flex justify-center gap-6 mb-8">
//             {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((social) => (
//               <a
//                 key={social}
//                 href="#"
//                 className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-lg font-medium"
//               >
//                 {social}
//               </a>
//             ))}
//           </div>

//           <div className="border-t border-gray-800 pt-8">
//             <p className="text-gray-400 flex items-center justify-center gap-2">
//               Made with <Heart className="w-4 h-4 text-red-400" /> for water lovers everywhere
//             </p>
//             <p className="text-gray-500 text-sm mt-2">
//               © 2025 VedAqua. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";

import { Droplets, Heart, Instagram, Facebook, Twitter, Linkedin, Link, MessageCircleMore } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/thevedaqua?igsh=NnRkY2llYmd6aTVh',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/yourpage',
    icon: Facebook,
  },
  // {
  //   name: 'Twitter',
  //   href: 'https://twitter.com/yourhandle',
  //   icon: Twitter,
  // },
  // {
  //   name: 'LinkedIn',
  //   href: 'https://linkedin.com/in/yourprofile',
  //   icon: Linkedin,
  // },
];

const whatsappNumber = '+917985211542'; // Replace with your actual number (country code + number)

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 px-6 sm:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Droplets className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                VedAqua
              </span>
            </div>

            <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
              {/* Crafting premium customized water bottles that blend style, functionality,
              and environmental responsibility. */}
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mb-8 flex-wrap">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-lg font-medium"
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{name}</span>
                </a>
              ))}
              {/* WhatsApp Icon in Social Links */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors duration-300 text-lg font-medium"
              >
                <MessageCircleMore className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 flex items-center justify-center gap-2">
                Made with <Heart className="w-4 h-4 text-red-400" /> for water lovers everywhere
              </p>
              <p className="text-gray-500 text-sm mt-2">
                © 2025 VedAqua. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        {/* <MessageCircleMore className="w-6 h-6" /> */}
        <svg
  className="w-10 h-10"
  fill="currentColor"
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M16.003 3.2c-7.1 0-12.8 5.7-12.8 12.8 0 2.2.6 4.3 1.7 6.2L3.2 28.8l6.9-1.8c1.8 1 3.9 1.5 5.9 1.5h.1c7.1 0 12.8-5.7 12.8-12.8 0-3.4-1.3-6.6-3.7-9-2.4-2.3-5.6-3.7-9-3.7zM16 26.4c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1.1-1.6-1.7-3.6-1.7-5.5 0-5.7 4.7-10.4 10.4-10.4 2.8 0 5.4 1.1 7.4 3.1 2 2 3.1 4.6 3.1 7.4 0 5.8-4.7 10.3-10.3 10.3zm5.9-7.7c-.3-.2-1.8-.9-2-1-0.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-0.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.2-.7.2-.2.3-.4.5-.6.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6 0-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1-1.1 2.4c0 1.4 1.1 2.7 1.3 2.9.2.3 2.1 3.2 5.1 4.5 0.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.8 2-1.5s.2-1.3.1-1.5c0-.1-.3-.2-.6-.4z" />
</svg>
      </a>
    </>
  );
};

export default Footer;
