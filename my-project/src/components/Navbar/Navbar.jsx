import logo from "../../assets/logo.png";
import { Menu, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (!searchOpen) {
      setSearchQuery("");
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Close search and mobile menu if open
      setSearchOpen(false);
      setMobileDrawerOpen(false);
      
      // Navigate to search results page with the query
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      
      // Clear search input
      setSearchQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          {!mobileDrawerOpen ? (
            <div className="flex items-center flex-shrink-0">
              <Link to="/">
                <img className="h-10 w-30 mr-2" src={logo} alt="logo" />
              </Link>
            </div>
          ) : (
            <div className="flex items-center flex-shrink-0">
              <Search
                className="h-6 w-6 text-green-600 cursor-pointer"
                onClick={toggleSearch}
              />
            </div>
          )}

          {/* Search Bar - Desktop */}
          {searchOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1/3 hidden lg:block">
              <form onSubmit={handleSearchSubmit} className="flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  className="w-full px-4 py-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-600"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-r-full hover:bg-green-700"
                >
                  Search
                </button>
              </form>
            </div>
          )}

          {/* Desktop Navigation */}
          {!searchOpen && (
            <ul className="hidden lg:flex ml-14 space-x-12 font-semibold text-gray-700 text-base">
              <li className="cursor-pointer py-4 hover:text-green-600 transition duration-300">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer py-4 hover:text-green-600 transition duration-300">
                <Link to="/about">About us</Link>
              </li>
              <li className="cursor-pointer py-4 hover:text-green-600 transition duration-300">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="cursor-pointer py-4 hover:text-green-600 transition duration-300">
                <Link to="/department">Departments</Link>
              </li>
              <li className="cursor-pointer py-4 hover:text-green-600 transition duration-300">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          )}

          {/* Desktop Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <Search
              className="text-green-600 cursor-pointer"
              size={25}
              onClick={toggleSearch}
            />
            <Link
              to="/book-appointment"
              className="py-2 px-3 border rounded-full bg-green-600 text-white font-semibold text-base hover:bg-green-700"
            >
              Book an Appointment
            </Link>
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
          <div className="fixed right-0 z-20 bg-white text-gray-700 w-full p-12 flex flex-col justify-center items-center lg:hidden font-semibold text-base">
            {/* Mobile Search Bar - shown when search is open */}
            {searchOpen ? (
              <div className="w-full mb-4">
                <form onSubmit={handleSearchSubmit} className="flex">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search..."
                    className="w-full px-4 py-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-600"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-r-full hover:bg-green-700"
                  >
                    Search
                  </button>
                </form>
              </div>
            ) : (
              <>
                <ul>
                  <li className="cursor-pointer py-4 hover:text-green-600 transition duration-300">
                    <Link to="/" onClick={() => setMobileDrawerOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li className="cursor-pointer py-4 hover:text-green-600 transition duration-300">
                    <Link to="/about" onClick={() => setMobileDrawerOpen(false)}>
                      About us
                    </Link>
                  </li>
                  <li className="cursor-pointer py-4 hover:text-green-600 transition duration-300">
                    <Link to="/gallery" onClick={() => setMobileDrawerOpen(false)}>
                      Gallery
                    </Link>
                  </li>
                  <li className="cursor-pointer py-4 hover:text-green-600 transition duration-300">
                    <Link to="/department" onClick={() => setMobileDrawerOpen(false)}>
                      Department
                    </Link>
                  </li>
                  <li className="cursor-pointer py-4 hover:text-green-600 transition duration-300">
                    <Link to="/contact" onClick={() => setMobileDrawerOpen(false)}>
                      Contact
                    </Link>
                  </li>
                </ul>

                <div className="mt-4 flex flex-col items-center space-y-4">
                  <Search
                    className="text-green-600 cursor-pointer"
                    size={25}
                    onClick={toggleSearch}
                  />
                  <Link
                    to="/book-appointment"
                    className="py-2 px-4 border rounded-full bg-green-600 text-white text-base hover:bg-green-700"
                    onClick={() => setMobileDrawerOpen(false)}
                  >
                    Book an Appointment
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;