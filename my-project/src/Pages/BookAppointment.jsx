import Image from "../assets/Book-2.webp";
import DefaultLayout from "../Layout/DefaultLayout";
import { CalendarDays, Clock, User, Mail, Stethoscope, MessageSquare, Phone } from 'lucide-react';

const BookAppointment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Appointment booked successfully!');
  };

  return (
    <DefaultLayout>
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="text-5xl font-bold text-white relative z-10">Book Appointment</h1>
      </div>

      <section className="py-12">
        {/* Content container with relative positioning */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 relative z-10">
          {/* Left column with heading, paragraph, and form */}
          <div className="lg:w-2/3 flex flex-col">
            <div className="mb-8">
              <h2 className="text-4xl font-bold mb-6 text-green-600">Book an Appointment</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias reiciendis beatae repellat tempora, labore, aspernatur accusantium necessitatibus in repudiandae ad nesciunt maiores commodi! At molestias voluptatem ducimus, veritatis nobis velit.
              </p>
            </div>

            <form 
              onSubmit={handleSubmit} 
              className="bg-white rounded-lg shadow-lg p-8 text-gray-800"
            >
              {/* Form content remains the same */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
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

          {/* Right column with schedule and emergency number */}
          <div className="lg:w-1/3 bg-white rounded-lg shadow-lg p-8 h-fit sticky top-8">
            <h3 className="text-2xl font-bold mb-6 text-green-600">Scheduled Hours</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday</span>
                <span>9:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span>Emergency Only</span>
              </div>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="text-lg font-bold mb-2 text-red-600">Emergency Contact</h4>
              <div className="flex items-center">
                <Phone className="text-red-600 mr-2 h-5 w-5" />
                <span className="font-medium text-lg">911</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">Available 24/7 for emergencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-600">Our Location</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            {/* Replace with your actual map embed code */}
            <div className="h-full">
            <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                title="Hospital Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hospital+(Your%20Hospital%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
              </iframe>
            </div>
          </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default BookAppointment;