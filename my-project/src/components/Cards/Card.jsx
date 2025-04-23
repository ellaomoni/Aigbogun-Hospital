import { ArrowRight } from "lucide-react";
import cardImage1 from "../../assets/Cardimage1.png";
import cardImage2 from "../../assets/Cardimage2.png";
import cardImage3 from "../../assets/Cardimage3.png";

  const Card = () => {
  const services = [
    {
      id: 1,
      title: "Cardiogram",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: cardImage1,
      link: "#"
    },
    {
      id: 2,
      title: "DNA Testing",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: cardImage2,
      link: "#"
    },
    {
      id: 3,
      title: "Free Checkup",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
      image: cardImage3,
      link: "#"
    }
  ];

  return (
    <section className="bg-green-50 mt-12 py-12">
      <div className="container mx-auto px-4">
        {/* Our Services Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-900">
          Our Services
        </h1>
        
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a 
                  href={service.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read more <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Load More Button */}
        <div className="flex justify-center mt-10">
          <button className="h-[60px] w-[200px] px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 ">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};
export default Card;