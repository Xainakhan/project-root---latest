// pages/navBar.tsx
import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import type { NavbarProps, Brand, PageType } from '../pages/types'; // Import from shared types
import logo from '../assets/Logo-main.svg';

const Navbar: React.FC<NavbarProps> = ({ onPageChange, currentPage }) => {
  const [isBrandsOpen, setIsBrandsOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const brands: Brand[] = [
    { name: 'ZEEKR', page: 'zeekr' }, 
    { name: 'RIDDARA', page: 'riddara' },
    { name: 'FORTHING', page: 'forthing' },
    { name: 'JMEV', page: 'jmev' },
  ];

  const handleNavigation = (page: PageType, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onPageChange(page);
    setIsBrandsOpen(false); // Close dropdown when navigating
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const handleBrandClick = (brandPage: PageType, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onPageChange(brandPage);
    setIsBrandsOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isBrandsOpen) {
      setIsBrandsOpen(false);
    }
  };

  // Helper function to check if current page is home or homepage
  const isHomePage = currentPage === 'home' || currentPage === 'homepage';

  // Helper function to get the active class for navigation items
  const getNavItemClass = (page: PageType): string => {
    const isActive = page === 'home' ? isHomePage : currentPage === page;
    return `text-sm font-medium uppercase tracking-wide transition-colors ${
      isActive 
        ? 'text-black border-b-2 border-black pb-1' 
        : 'text-gray-600 hover:text-black'
    }`;
  };

  // Helper function to get mobile nav item class
  const getMobileNavItemClass = (page: PageType): string => {
    const isActive = page === 'home' ? isHomePage : currentPage === page;
    return `block px-4 py-3 rounded-md text-sm font-medium uppercase tracking-wide transition-colors ${
      isActive
        ? 'bg-gray-100 text-black'
        : 'text-gray-600 hover:bg-gray-50 hover:text-black'
    }`;
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 relative">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Capital Smart Motors Logo" 
              className="h-12 w-auto mr-4"
            />
            <div className="flex flex-col">
          
            </div>
          </div>

          {/* Center - Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <a 
              href="#" 
              onClick={(e) => handleNavigation('homepage', e)}
              className={getNavItemClass('home')}
            >
              HOME
            </a>
            
            <a 
              href="#" 
              onClick={(e) => handleNavigation('about', e)}
              className={getNavItemClass('about')}
            >
              ABOUT US
            </a>
            
            {/* Brands Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                className={`flex items-center text-sm font-medium uppercase tracking-wide transition-colors ${
                  ['zeekr', 'riddara', 'forthing', 'jmev'].includes(currentPage)
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                BRANDS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isBrandsOpen && (
                <>
                  {/* Overlay */}
                  <div 
                    className="fixed inset-0 z-40"
                    onClick={() => setIsBrandsOpen(false)}
                  />
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <div className="py-1">
                      {brands.map((brand, index) => (
                        <a
                          key={index}
                          href="#"
                          onClick={(e) => handleBrandClick(brand.page, e)}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            currentPage === brand.page
                              ? 'bg-gray-100 text-black font-medium'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                          }`}
                        >
                          {brand.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <a 
              href="#" 
              onClick={(e) => handleNavigation('news', e)}
              className={getNavItemClass('news')}
            >
              NEWS & INSIGHTS
            </a>
            
            <a 
              href="#" 
              onClick={(e) => handleNavigation('locations', e)}
              className={getNavItemClass('locations')}
            >
              LOCATIONS
            </a>
            
            <a 
              href="#" 
              onClick={(e) => handleNavigation('contact', e)}
              className={getNavItemClass('contact')}
            >
              CONTACT US
            </a>
          </nav>

          {/* Right Side - We Saved Text (Desktop) */}
          <div className="hidden lg:flex flex-col items-center">
            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">We Saved</span>
            <span className="text-black font-bold text-lg">786,679</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              className="text-gray-600 hover:text-black p-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              type="button"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 h-20">
            <img 
              src={logo} 
              alt="Capital Smart Motors Logo" 
              className="h-12 w-auto"
            />
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-black transition-colors"
              aria-label="Close mobile menu"
              type="button"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="flex-1 px-6 py-6 space-y-2">
            <a
              href="#"
              onClick={(e) => handleNavigation('homepage', e)}
              className={getMobileNavItemClass('home')}
            >
              HOME
            </a>

            <a
              href="#"
              onClick={(e) => handleNavigation('about', e)}
              className={getMobileNavItemClass('about')}
            >
              ABOUT US
            </a>

            {/* Mobile Brands Section */}
            <div>
              <button
                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium uppercase tracking-wide transition-colors ${
                  ['zeekr', 'riddara', 'forthing', 'jmev'].includes(currentPage)
                    ? 'bg-gray-100 text-black'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                }`}
                type="button"
              >
                BRANDS
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                  isBrandsOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isBrandsOpen && (
                <div className="mt-2 ml-4 space-y-1">
                  {brands.map((brand, index) => (
                    <a
                      key={index}
                      href="#"
                      onClick={(e) => handleBrandClick(brand.page, e)}
                      className={`block px-4 py-2 rounded-md text-sm transition-colors ${
                        currentPage === brand.page
                          ? 'bg-gray-100 text-black font-medium'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                      }`}
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              onClick={(e) => handleNavigation('news', e)}
              className={getMobileNavItemClass('news')}
            >
              NEWS & INSIGHTS
            </a>

            <a
              href="#"
              onClick={(e) => handleNavigation('locations', e)}
              className={getMobileNavItemClass('locations')}
            >
              LOCATIONS
            </a>

            <a
              href="#"
              onClick={(e) => handleNavigation('contact', e)}
              className={getMobileNavItemClass('contact')}
            >
              CONTACT US
            </a>
          </nav>

          {/* Mobile We Saved Footer */}
          <div className="border-t border-gray-200 p-6">
            <div className="flex flex-col items-center">
              <span className="text-med font-medium text-gray-600 uppercase tracking-wide">We Saved</span>
              <span className="text-black font-bold text-lg">786,679</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;