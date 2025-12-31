export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="w-20 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">SANIE</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating exceptional digital experiences through code and design. Creating solutions that make a difference.
              Transform ideas into reality with passion and precision. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#profile" className="text-gray-400 hover:text-white transition-colors">
                  Profile
                </a>
              </li>
              <li>
                <a href="https://forms.gle/ngbkmD6vQRt1auCA6" className="text-gray-400 hover:text-white transition-colors">
                  Contact Me
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>alusinesanie20@gmail.com</li>
              <li>+232 33 413-507</li>
              <li>25 Jamboria Street,Freetown, Sierra Leone</li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-60 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xl">LinkedIn</span>
              </a>
              <a 
                href="#" 
                className="w-60 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <span className="text-xl">Facebook</span>
              </a>
              <a 
                href="#" 
                className="w-60 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatSapp"
              >
                <span className="text-xl">WhatSapp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} All rights reserved || SANIE</p>
        </div>
      </div>

      src="src/assets/hero.jpg"
                  alt="Sanie Profile"
                  className="w-full h-full object-cover"
                />
    </footer>
  );
}
