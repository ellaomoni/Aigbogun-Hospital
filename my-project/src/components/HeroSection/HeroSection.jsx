import heroImage from "../../assets/Doc-img.png";
import heroBackground from "../../assets/Backgroundimg.svg";

const Hero = () => {
  return (
    <section className="relative bg-green-50 overflow-hidden">

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Healthcare background texture"
          className="w-full h-full object-cover opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 to-green-100/30"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1 z-10">
            <h3 className="text-2xl text-green-600 leading-tight font-semibold tracking-widest mb-2">
              CARING FOR LIFE 
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight mb-4">
              Leading the way <br/>
              in <span className="text-green-900">Medical Excellence</span>
            </h1>
            
            {/* Services Button */}
            <div className="mt-6 flex justify-center md:justify-start">
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-200">
                Our Services
              </button>
            </div>
          </div>

          {/* Image Content - Enhanced */}
          <div className="flex justify-center order-1 md:order-2 relative">
            <div className="relative">
              <img 
                className="w-full max-w-md md:max-w-lg h-auto  shadow-sm transform transition-all duration-500 hover:scale-105" 
                src={heroImage} 
                alt="Professional Doctor" 
              />   
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;