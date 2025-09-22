import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useStore } from '../../stores';
import { postLogoutUser } from '../../apis/auth.api';
import Icon, { LucideIconName } from '../ui/Icon';

const Navbar = () => {
  const user = useStore((state) => state.user);
  const setLogout = useStore((state) => state.setLogout);
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: postLogoutUser,
    onSuccess: () => {
      setLogout();
      queryClient.clear(); // Clear all queries when logging out
      navigate('/login');
    },
    onError: (error: Error) => {
      console.error('Logout error:', error);
      // Even if logout fails on backend, clear frontend state
      setLogout();
      queryClient.clear();
      navigate('/login');
    },
  });

  const handleLogout = () => {
    logout();
  };

  const navItems = [
    { icon: 'Home' as LucideIconName, label: 'Home', path: '/' },
    { icon: 'Search' as LucideIconName, label: 'Search', path: '/search' },
    { icon: 'PlusSquare' as LucideIconName, label: 'Create', path: '/create' },
    {
      icon: 'User' as LucideIconName,
      label: 'Profile',
      path: user?.username ? `/profile/${user.username}` : '/profile/',
    },
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
              <Icon name="Settings" size={20} />
            </Link>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="p-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md disabled:opacity-50"
            >
              <Icon name="LogOut" size={20} />
            </button>
            <Link
              to={user?.username ? `/profile/${user.username}` : '/profile/'}
              className="flex items-center space-x-2"
            >
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.fullName || 'User Avatar'}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <Icon name="User" size={32} className="text-gray-400" />
              )}
              <span className="hidden md:block text-sm font-medium text-gray-700">
                {user?.username}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around py-2">
          {navItems.map(({ icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center py-2 px-3 text-xs ${
                location.pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <Icon name={icon} size={20} />
              <span className="mt-1">{label}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex flex-col items-center py-2 px-3 text-xs text-gray-700 hover:text-red-600 disabled:opacity-50"
          >
            <Icon name="LogOut" size={20} />
            <span className="mt-1">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
