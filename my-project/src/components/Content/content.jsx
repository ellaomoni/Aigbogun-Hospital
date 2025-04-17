import { ArrowRight } from 'lucide-react';
import DoctorImage from '../../assets/Blackdoctors.png';

const Content = () => {
  return (
    <div className="bg-white w-full overflow-hidden">
      {/* Text Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col items-center">
        <h3 className="text-xl md:text-2xl font-semibold text-green-600 text-center">
          Welcome to Aigbogun Hospital
        </h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-center text-gray-800">
          A Great Place to Receive Care
        </h1>
        <p className="mt-4 md:mt-6 text-gray-600 max-w-2xl text-center text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus odit nobis ullam, tenetur, aliquid nam hic laudantium maiores illo minus eos incidunt dolor doloribus sit fugiat aut vero qui!
        </p>
        <p className="mt-6 md:mt-8">
          <a href="#" className="flex items-center text-green-600 hover:text-green-800 font-medium transition-colors duration-300 group">
            Learn More 
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </a>
        </p>
      </div>

      {/* Full Width Image Container */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative">
          <img 
            className="w-full h-auto object-cover max-h-[500px] md:max-h-[600px]"
            src={DoctorImage} 
            alt="Medical team at Aigbogun Hospital"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       
      </div>
    </div>
  );
};

export default Content;