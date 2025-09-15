import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../../stores';
import Icon from '../ui/Icon';

const Navbar = () => {
  const user = useStore((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: 'home', label: 'Home', path: '/' },
    { icon: 'search', label: 'Search', path: '/search' },
    { icon: 'plus-square', label: 'Create', path: '/create' },
    { icon: 'user', label: 'Profile', path: '/profile' },
  ];

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
            {navItems.map(({ icon, label, path }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon name={icon} size={20} />
                <span>{label}</span>
              </Link>
            ))}
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
              <img
                src={user?.avatar || ''}
                alt={user?.fullName || 'User Avatar'}
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:block text-sm font-medium text-gray-700">
                {user?.username}
              </span>
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
