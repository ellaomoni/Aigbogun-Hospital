import DocImg from "../../assets/Doc-img-2.png";

const AboutUs = () => {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 mt-12" >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Smaller square image container */}
        <div className="md:w-1/3 aspect-square overflow-hidden rounded-lg shadow-lg max-w-md">
          <img 
            src={DocImg} 
            alt="Medical professionals" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content section - now takes more space (2/3) */}
        <div className="md:w-2/3 space-y-4">
          <h4 className="text-green-600 font-semibold text-lg">OUR PROFESSIONALS</h4>
          <h1 className="text-3xl font-bold text-gray-800">We have highly trained team</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, debitis quidem architecto dicta unde illum nesciunt ut porro quo, consectetur recusandae similique. Modi temporibus perspiciatis quisquam, ducimus beatae aspernatur exercitationem!
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
            Meet Our Team
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;