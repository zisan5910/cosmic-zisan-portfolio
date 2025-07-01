
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Users, Search, Plus, Building2, Award, HeartHandshake, Bell, Info, Phone, Home, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'হোম', path: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'ডোনার খুঁজুন', path: '/find-donors', icon: <Search className="h-4 w-4" /> },
    { name: 'রক্তদাতা হোন', path: '/donate-blood', icon: <Plus className="h-4 w-4" /> },
    { name: 'রক্তের জন্য আবেদন', path: '/get-blood', icon: <Droplet className="h-4 w-4" /> },
    { name: 'স্বেচ্ছাসেবক হোন', path: '/be-a-volunteer', icon: <Users className="h-4 w-4" /> },
    { name: 'হাসপাতাল', path: '/hospitals', icon: <Building2 className="h-4 w-4" /> },
    { name: 'সার্টিফিকেট', path: '/certificate', icon: <Award className="h-4 w-4" /> },
    { name: 'আর্থিক অনুদান', path: '/donate', icon: <HeartHandshake className="h-4 w-4" /> },
    { name: 'নোটিশ', path: '/notice', icon: <Bell className="h-4 w-4" /> },
    { name: 'আমাদের সম্পর্কে', path: '/about-us', icon: <Info className="h-4 w-4" /> },
    { name: 'যোগাযোগ', path: '/contacts', icon: <Phone className="h-4 w-4" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blood-600 rounded-xl flex items-center justify-center shadow-md">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">BOBDO</h1>
              <p className="text-xs text-gray-600">রক্তদান সংগঠন</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.slice(0, 6).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-blood-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blood-600'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-xl"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-3 p-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-blood-600 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-blood-50 hover:text-blood-600'
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
