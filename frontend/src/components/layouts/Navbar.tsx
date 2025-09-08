import { Link } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              InstaPhoto
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* TODO: add nav items */}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/settings"
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
            >
              {/* TODO: Setting page */}
            </Link>
            <button
              //   onClick={handleLogout}
              className="p-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md"
            >
              {/* TODO: Log out */}
            </button>
            <Link to="/profile" className="flex items-center space-x-2">
              {/* TODO: image */}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around py-2">{/* TODO: navbar */}</div>
      </div>
    </nav>
  );
};

export default Navbar;
