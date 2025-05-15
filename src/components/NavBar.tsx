
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Coffee, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Coffee size={28} className="text-bubblegum group-hover:animate-bounce-small transition-all" />
          <span className="font-fun font-bold text-xl md:text-2xl group-hover:text-bubblegum transition-colors">Dopamine Café</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium text-lg transition-all hover:text-bubblegum ${
                location.pathname === link.path
                  ? 'text-bubblegum relative after:content-[""] after:absolute after:w-full after:h-1 after:bg-bubblegum after:-bottom-1 after:left-0 after:rounded-full'
                  : 'text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-bubblegum transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
          <div className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-6 py-3 font-medium transition-colors hover:bg-muted ${
                  location.pathname === link.path
                    ? 'text-bubblegum'
                    : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
