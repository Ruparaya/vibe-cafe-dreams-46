
import { Coffee, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-bubblegum/5 to-lavender/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee size={28} className="text-bubblegum" />
              <span className="font-fun font-bold text-2xl">Dopamine Café</span>
            </div>
            <p className="mb-4">Serving Coffee & Chaos Since 2023</p>
            <p className="text-sm text-muted-foreground">
              A place where coffee meets good vibes, retro chairs, and playlists that make you want to stay all day.
            </p>
          </div>
          
          <div>
            <h3 className="font-fun font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-bubblegum transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-bubblegum transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-bubblegum transition-colors">Menu</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-bubblegum transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-bubblegum transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-fun font-bold text-xl mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-bubblegum transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-bubblegum transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-bubblegum transition-colors">
                <Twitter />
              </a>
              <a href="mailto:hello@dopaminecafe.com" className="hover:text-bubblegum transition-colors">
                <Mail />
              </a>
            </div>
            <p className="mt-4 text-sm">
              Opening Hours:<br />
              Mon-Fri: 7am - 8pm<br />
              Sat-Sun: 8am - 10pm
            </p>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Dopamine Café. All rights reserved.</p>
          <p className="mt-1">Designed with ♥ and extra caffeine</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
