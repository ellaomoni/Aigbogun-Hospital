import React from 'react';
import { CalendarDays, Clock, User, Mail, Stethoscope, MessageSquare } from 'lucide-react';
import BookAppointmentimg from "../../assets/BookAppointmentimg.png";

const BookAppointment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Appointment booked successfully!');
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-gray-700 relative overflow-hidden mt-12">
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
  );
};

export default BookAppointment;