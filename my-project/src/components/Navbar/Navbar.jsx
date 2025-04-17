import logo from "../../assets/logo.png";
import {Menu, X, Search} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);  
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b ">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    {/* Logo or Search Icon (mobile view) */}
                    {!mobileDrawerOpen ? (
                        // Show logo when drawer is closed
                        <div className="flex items-center flex-shrink-0">
                            <img className="h-10 w-10 mr-2" src={logo} alt="logo"/>
                        </div>
                    ) : (
                        // Show search icon when drawer is open
                        <div className="flex items-center flex-shrink-0">
                            <Search className="h-6 w-6 text-green-600 cursor-pointer" />
                        </div>
                    )}

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex ml-14 space-x-12 font-semibold text-green-600 text-base ">
                        <li className="cursor-pointer py-4"><a href="#">Home</a></li>
                        <li className="cursor-pointer py-4"><a href="#">About us</a></li>
                        <li className="cursor-pointer py-4"><a href="#">Services</a></li>
                        <li className="cursor-pointer py-4"><a href="#">Doctors</a></li>
                        <li className="cursor-pointer py-4"><a href="#">Contact</a></li>   
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        <Search className="text-green-600 cursor-pointer" size={25} />
                        <a href="#" className="py-2 px-3 border rounded-full bg-green-600 text-white font-semibold text-base  hover:bg-green-700">
                            Book an Appointment
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer Content */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-white text-green-600 w-full p-12 flex flex-col justify-center items-center lg:hidden font-semibold text-base">
                        <ul>
                            <li className="cursor-pointer py-4"><a href="#">Home</a></li>
                            <li className="cursor-pointer py-4"><a href="#">About us</a></li>
                            <li className="cursor-pointer py-4"><a href="#">Services</a></li>
                            <li className="cursor-pointer py-4"><a href="#">Doctors</a></li>
                            <li className="cursor-pointer py-4"><a href="#">Contact</a></li>
                        </ul>

                        <div className="mt-4">
                            <a href="#" className="py-2 px-4 border rounded-full bg-green-600 text-white text-base  hover:bg-green-700">
                                Book an Appointment
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Navbar;