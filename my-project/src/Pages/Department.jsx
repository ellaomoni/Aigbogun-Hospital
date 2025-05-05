import DefaultLayout from "../Layout/DefaultLayout";
import BackgroundImage from "../assets/Cardimage1.webp";
import CardiologyImg from "../assets/Cardimage1.webp";
import NeurologyImg from "../assets/Cardimage1.webp";
import PediatricsImg from "../assets/Cardimage1.webp";
import OrthopedicsImg from "../assets/Cardimage1.webp";
import OncologyImg from "../assets/Cardimage1.webp";
import EmergencyImg from "../assets/Cardimage1.webp";

const departments = [
  {
    id: 1,
    name: "Cardiology",
    description: "Our Cardiology Department specializes in diagnosing and treating heart conditions. We offer advanced cardiac care including angioplasty, bypass surgery, and non-invasive procedures with state-of-the-art equipment.",
    image: CardiologyImg
  },
  {
    id: 2,
    name: "Neurology",
    description: "The Neurology Department provides comprehensive care for disorders of the nervous system. Our team of specialists treats conditions like epilepsy, stroke, multiple sclerosis, and Parkinson's disease.",
    image: NeurologyImg
  },
  {
    id: 3,
    name: "Pediatrics",
    description: "Dedicated to the health and well-being of infants, children, and adolescents. Our pediatricians provide compassionate care from routine checkups to complex medical conditions.",
    image: PediatricsImg
  },
  {
    id: 4,
    name: "Orthopedics",
    description: "Specializing in musculoskeletal system care, our Orthopedics Department offers treatment for fractures, sports injuries, joint replacements, and spinal disorders with cutting-edge surgical techniques.",
    image: OrthopedicsImg
  },
  {
    id: 5,
    name: "Oncology",
    description: "Our Oncology Department provides comprehensive cancer care including chemotherapy, radiation therapy, and surgical oncology. We focus on personalized treatment plans and supportive care.",
    image: OncologyImg
  },
  {
    id: 6,
    name: "Emergency Medicine",
    description: "Available 24/7, our Emergency Department is staffed with trauma specialists ready to handle critical conditions with rapid response and advanced life support systems.",
    image: EmergencyImg
  }
];

const Department = () => {
  return (
    <DefaultLayout>
      <div>
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
          <div className="text-center z-10 px-4">
            <h1 className="text-white text-4xl font-bold mb-4">Our Departments</h1>
          </div>
        </div>

        {/* Department Cards Section */}
        <div className="container mx-auto py-16 px-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department) => (
              <div key={department.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={department.image} 
                    alt={department.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">{department.name}</h3>
                  <p className="text-gray-600 mb-4">{department.description}</p>
                  <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Department;