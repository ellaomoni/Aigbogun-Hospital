import { ArrowRight } from 'lucide-react';
import { CalendarDays, Clock, User, Mail, Stethoscope, MessageSquare } from 'lucide-react';
import DefaultLayout from "../Layout/DefaultLayout"
import heroBackground from "../assets/Backgroundimg.svg";
import heroImage from "../assets/Doc-img.png";
import DocImg from "../assets/Doc-img-2.png";
import DoctorImage from '../assets/Blackdoctors.png';
import cardImage1 from "../assets/Cardimage1.png";
import cardImage2 from "../assets/Cardimage2.png";
import cardImage3 from "../assets/Cardimage3.png";
import BookAppointmentimg from "../assets/BookAppointmentimg.png";
import React from 'react';
const Home = () => {
    const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Appointment booked successfully!');
  };

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
   <DefaultLayout>
       <section className="relative bg-green-50 overflow-hidden ">
             {/* Background Image with Overlay */}
             <div className="absolute inset-0 z-0 ">
               <img
                 src={heroBackground}
                 alt="Healthcare background texture"
                 className="w-full h-full object-cover opacity-10" 
               />
               <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 to-green-100/30"></div>
             </div>
       
             {/* Content Container */}
             <div className="max-w-7xl mx-auto px-0.5 sm:px-6 lg:px-8 py-6 md:p-0.5">
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
                       className="w-full max-w-md md:max-w-lg h-full shadow-sm" 
                       src={heroImage} 
                       alt="Professional Doctor" 
                     />   
                   </div>
                 </div>
               </div>
             </div>
           </section>

     {/* Content Section */}
     <section>
        <div className="bg-white w-full overflow-hidden">
      {/* Text Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-green-600 text-center tracking-widest">
          WELCOME TO AIGBOGUN HOSPITAL
        </h3>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-center text-green-900 leading-tight">
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
      <div className="w-full relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative">
          <img 
            className="w-full h-auto object-cover max-h-[500px] md:max-h-[600px]"
            src={DoctorImage} 
            alt="Medical team at Aigbogun Hospital"
          />
        </div>
      </div>
    </div>
    </section>

     {/* About Us Section */}
    <section>
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

        {/* Content section */}
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
    </section>

    {/* Service Section */}
    <section className="bg-green-50 mt-12 py-12">
      <div className="container mx-auto px-12">
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

    {/* Appointment Section */}

    <section>
        <div className="min-h-screen py-16 px-12 sm:px-6 lg:px-8 text-gray-700 relative overflow-hidden mt-12">
      {/* Background image with proper positioning */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img 
          src={BookAppointmentimg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-10" 
        />
      </div>
      
      {/* Content container with relative positioning */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 relative z-10">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-green-600">Book an Appointment</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <CalendarDays className="mr-2 text-green-300" />
              <span>Mon - Sat: 9am - 6pm</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 text-green-300" />
              <span>Emergency 24/7</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 text-green-300" />
              <span>50+ Specialists</span>
            </div>
            <div className="flex items-center">
              <Stethoscope className="mr-2 text-green-300" />
              <span>Modern Equipment</span>
            </div>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="lg:w-1/2 bg-white rounded-lg shadow-lg p-8 text-gray-800"
        >
          {/* Form content remains the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <select
                  id="time"
                  name="time"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">01:00 PM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="doctor" className="block text-sm font-medium text-gray-700 mb-1">
                Doctor
              </label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <select
                  id="doctor"
                  name="doctor"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select Doctor</option>
                  <option value="dr-smith">Dr. John Smith</option>
                  <option value="dr-johnson">Dr. Sarah Johnson</option>
                  <option value="dr-williams">Dr. Michael Williams</option>
                  <option value="dr-brown">Dr. Emily Brown</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <select
              id="department"
              name="department"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">Select Department</option>
              <option value="cardiology">Cardiology</option>
              <option value="neurology">Neurology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="dermatology">Dermatology</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-gray-400 h-4 w-4" />
              <textarea
                id="message"
                name="message"
                placeholder="Any additional information..."
                rows="3"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 flex items-center justify-center"
          >
            <CalendarDays className="mr-2 h-4 w-4" />
           Submit
          </button>
        </form>
      </div>
    </div>
    </section>


   </DefaultLayout>
  )
}

export default Home