
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Droplet,
  Facebook,
  Youtube,
  Users,
  Mail,
  Phone,
  MapPin,
  Clock,
  Heart,
  Shield,
  Award,
  Globe,
  Calendar,
  Star
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { to: '/', text: 'হোম', icon: <Globe className="h-4 w-4" /> },
    { to: '/find-donors', text: 'ডোনার খুঁজুন', icon: <Users className="h-4 w-4" /> },
    { to: '/donate-blood', text: 'রক্ত দিন', icon: <Heart className="h-4 w-4" /> },
    { to: '/be-a-volunteer', text: 'স্বেচ্ছাসেবক', icon: <Star className="h-4 w-4" /> },
    { to: '/certificate', text: 'সার্টিফিকেট', icon: <Award className="h-4 w-4" /> },
    { to: '/about-us', text: 'আমাদের সম্পর্কে', icon: <Shield className="h-4 w-4" /> },
  ];

  const services = [
    { name: 'জরুরি রক্ত সেবা', description: '২৪/৭ উপলব্ধ' },
    { name: 'রক্তদাতা নিবন্ধন', description: 'বিনামূল্যে' },
    { name: 'স্বাস্থ্য পরামর্শ', description: 'বিশেষজ্ঞ ডাক্তার' },
    { name: 'সচেতনতা কর্মসূচি', description: 'নিয়মিত আয়োজন' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <Droplet className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold">BOBDO</span>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            বগুড়া অনলাইন রক্তদান সংগঠন - ২০১৬ সাল থেকে নিরবচ্ছিন্ন সেবা প্রদান করে আসছি। 
            আমাদের লক্ষ্য প্রতিটি মানুষের কাছে নিরাপদ রক্ত পৌঁছে দেওয়া।
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 bg-gray-800 rounded-lg p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500 mb-1">68K+</div>
            <div className="text-sm text-gray-400">সদস্য</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500 mb-1">1000+</div>
            <div className="text-sm text-gray-400">রক্তদান</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500 mb-1">500+</div>
            <div className="text-sm text-gray-400">জীবন বাঁচানো</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-500 mb-1">8+</div>
            <div className="text-sm text-gray-400">বছর সেবা</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Globe className="h-5 w-5 text-red-500" />
              দ্রুত লিংক
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-gray-800 px-2 py-1 rounded transition-all"
                >
                  {link.icon}
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              আমাদের সেবা
            </h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded">
                  <div className="font-medium text-sm">{service.name}</div>
                  <div className="text-xs text-gray-400">{service.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Phone className="h-5 w-5 text-red-500" />
              যোগাযোগ
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-gray-400 mt-1" />
                <div>
                  <div className="text-sm font-medium">জরুরি হটলাইন</div>
                  <a href="tel:01722528164" className="text-gray-400 hover:text-white text-sm">
                    ০১৭২২-৫২৮১৬৪
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-gray-400 mt-1" />
                <div>
                  <div className="text-sm font-medium">ইমেইল</div>
                  <a href="mailto:bobdo5800@gmail.com" className="text-gray-400 hover:text-white text-sm">
                    bobdo5800@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <div>
                  <div className="text-sm font-medium">ঠিকানা</div>
                  <span className="text-gray-400 text-sm">
                    সাতমাথা, বগুড়া, বাংলাদেশ
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-gray-400 mt-1" />
                <div>
                  <div className="text-sm font-medium">সেবার সময়</div>
                  <span className="text-gray-400 text-sm">
                    ২৪ ঘণ্টা, ৭ দিন
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Emergency */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-red-500" />
              সামাজিক মাধ্যম
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/bobdo.official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="text-sm">ফেসবুক পেজ</span>
              </a>
              <a
                href="https://www.facebook.com/groups/BOBO.BD"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
              >
                <Users className="h-5 w-5" />
                <span className="text-sm">ফেসবুক গ্রুপ</span>
              </a>
              <a
                href="https://youtube.com/@BograOnlineBloodDonationOrgani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="text-sm">ইউটিউব</span>
              </a>
            </div>

            <div className="mt-6 bg-red-600 p-4 rounded">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                জরুরি সেবা
              </h4>
              <p className="text-sm text-red-100 mb-2">
                রক্তের জরুরি প্রয়োজনে সরাসরি কল করুন
              </p>
              <a
                href="tel:01722528164"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-3 py-1 rounded text-sm font-medium hover:bg-red-50 transition-colors"
              >
                <Phone className="h-4 w-4" />
                এখনই কল করুন
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                &copy; ২০১৬-২০২৫ BOBDO. সকল অধিকার সংরক্ষিত।
              </p>
              <p className="text-gray-500 text-xs">
                বগুড়া অনলাইন রক্তদান সংগঠন - মানবসেবায় নিবেদিত
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/developer-info" className="text-gray-400 hover:text-white text-sm">
                ডেভেলপার তথ্য
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/contacts" className="text-gray-400 hover:text-white text-sm">
                যোগাযোগ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
