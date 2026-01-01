export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/assets/sanie.png"
                  alt="Sanie"
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="order-1 md:order-2">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl">
                Hello, I'm<span className="bg-gradient-to-r from-blue-700 to-purple-400 bg-clip-text text-transparent"> Alusine Bangura</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl text-gray-600">
                  Passionate Developer & Designer
                </p>
                
                <p className="text-lg text-gray-500 leading-relaxed">
                  I craft beautiful, functional experiences that bring ideas to life. 
                  Passionate about clean code, thoughtful design, and creating solutions 
                  that make a difference.
                </p> <p className="px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full"> <span className="font-bold text-gray-500">Emmergency </span>+232 (33) 413-507</p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-full">
                  Innovative
                </span>
                <span className="px-4 py-2 bg-purple-100 hover:bg-blue-200 text-purple-700 rounded-full">
                  Detail-Oriented
                </span>
                <span className="px-4 py-2 bg-pink-100 hover:bg-blue-200 text-pink-700 rounded-full">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-indigo-100 hover:bg-blue-200 text-indigo-700 rounded-full">
                  Team Player
                </span>
              </div>

              <div className="flex gap-4 pt-6">
                 <a href="https://forms.gle/ngbkmD6vQRt1auCA6" ><button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg cursor-pointer transition-shadow">
                  Get In Touch
                              </button>
                              </a>
               <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                  25 Jamboria Street
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
