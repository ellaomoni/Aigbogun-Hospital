import BackGroundImage from "../assets/Gallery-Background.png";
import Image1 from "../assets/Gallery-img-1.png";
import Image2 from "../assets/Gallery-img-3.png";
import Image3 from "../assets/Gallery-img-1.png";
import Image4 from "../assets/Gallery-img-3.png";
import Image5 from "../assets/Gallery-img-1.png";
import Image6 from "../assets/Gallery-img-1.png";
import DefaultLayout from "../Layout/DefaultLayout";
const Gallery = () => {
  return (
    <DefaultLayout>
        {/* Hero Section with Background Image */}
        <div 
            className="relative h-96 flex items-center justify-center"
            style={{
            backgroundImage: `url(${BackGroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h1 className="text-5xl font-bold text-white relative z-10">Gallery</h1>
        </div>
    
        {/* Gallery Section */}
        <div className="container mx-auto px-12 py-16">
            <h2 className="text-3xl font-semibold mb-6 text-green-600 text-center">Our Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
            {[Image1, Image2, Image3, Image4, Image5, Image6].map((image, index) => (
                <div key={index} className="overflow-hidden ">
                <img src={image} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
            ))}
            </div>
        </div>
        </DefaultLayout>

  )
}

export default Gallery