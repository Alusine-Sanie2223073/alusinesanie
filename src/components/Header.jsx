export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-20 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SANIE</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="https://forms.gle/ngbkmD6vQRt1auCA6" 
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Contact Me
            </a>
            <a
              href="./" 
              className="text-gray-800 hover:text-blue-600 transition-colors cursor-pointer"
            >
              Profile
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
