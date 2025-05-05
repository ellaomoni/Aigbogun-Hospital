import DefaultLayout from "../Layout/DefaultLayout";
import CardImage3 from "../assets/Cardimage3.webp";
import DocImage1 from "../assets/Doc-img-2.webp";
import DocImage2 from "../assets/Doc-img-3.webp";
import DocImage3 from "../assets/Doc-img-4.webp";
import BackgroundImage from "../assets/Blackdoctors.webp";
import HistoryImage from "../assets/Doc-img-2.webp"; // Assuming we'll use the same image or you can import a new one
import { Instagram, Twitter, Facebook, Linkedin, Quote } from 'lucide-react';

const About = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      department: "Cardiology",
      image: DocImage1,
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      department: "Neurology",
      image: DocImage2,
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      department: "Pediatrics",
      image: DocImage3,
      social: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <DefaultLayout>
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-5xl font-bold text-white relative z-10">About Us</h1>
      </div>

      {/* History Section */}
      <div className="container mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
      <h1 className="text-4xl font-bold mb-6 text-green-600">Our History</h1>
      <p className="text-gray-700 mb-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores minus fugit! Dolore doloribus quibusdam,
        necessitatibus numquam tenetur deleniti voluptatibus suscipit aspernatur non veritatis
        reiciendis! Repudiandae harum incidunt atque quibusdam.</p>
      <p className="text-gray-700 mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati neque eveniet quo, quae, 
        aspernatur doloribus voluptas ullam dolor itaque accusamus voluptatem nulla nesciunt, 
        minus nemo molestias deleniti asperiores recusandae expedita.
      </p>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maiores quam exercitationem dolor 
        maxime neque perspiciatis saepe? Culpa similique aliquid sint nemo blanditiis, facilis doloribus cupiditate hic modi amet impedit.</p>
    </div>
    <div className="flex justify-center">
      <img 
        src={HistoryImage} 
        alt="Hospital history" 
        className="w-full h-auto rounded-lg "
      />
    </div>
  </div>
</div>

      {/* Description Section */}
     
      {/* Image and List Section */}
      <div className="container mx-auto px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={CardImage3} 
              alt="About our hospital" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-green-600">Our Mission</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2 mt-1">•</span>
                <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div 
        className="py-20 relative"
        style={{
          background: `linear-gradient(to right, rgba(10, 180, 120, 0.9), rgba(5, 103, 103, 0.9)), url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <Quote className="h-12 w-12 mx-auto mb-6" />
          <blockquote className="text-2xl md:text-3xl font-light max-w-3xl mx-auto">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor."
          </blockquote>
          <p className="mt-6 text-lg font-medium">— Hospital Founder</p>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="container mx-auto px-12 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-green-600">Meet Our Doctors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">{doctor.name}</h3>
                <p className="text-green-600 mb-4">{doctor.department}</p>
                <div className="flex space-x-4">
                  <a href={doctor.social.twitter} className="text-gray-500 hover:text-blue-400">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={doctor.social.facebook} className="text-gray-500 hover:text-blue-600">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={doctor.social.instagram} className="text-gray-500 hover:text-pink-600">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={doctor.social.linkedin} className="text-gray-500 hover:text-blue-700">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;