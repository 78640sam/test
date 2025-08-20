"use client";

import { Droplets, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Droplets className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              VedAqua
            </span>
          </div>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Crafting premium customized water bottles that blend style, functionality, 
            and environmental responsibility.
          </p>

          {/* Social Links Placeholder */}
          <div className="flex justify-center gap-6 mb-8">
            {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-lg font-medium"
              >
                {social}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-400" /> for water lovers everywhere
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024 VedAqua. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;