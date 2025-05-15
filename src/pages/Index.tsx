
import { ArrowRight, Coffee, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-lavender/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-mint/30 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-bubblegum/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="inline-block mb-4 animate-bounce-small">
            <div className="sticker sticker-pink">
              EST. 2023
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-fun">
            Serving <span className="text-bubblegum">Coffee</span> & <br />
            <span className="text-tangerine">Chaos</span> Since 2023
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto mb-10">
            A café that's basically a dopamine hit in real life — colorful drinks, good vibes, retro chairs, and playlists that make you wanna stay all day.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/menu" className="button-fun button-primary">
              Explore Our Menu
            </Link>
            <Link to="/contact" className="button-fun button-outline">
              Find Us
            </Link>
          </div>
          
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cafe-card">
                <div className="mb-4 text-center">
                  <Coffee size={28} className="text-bubblegum mx-auto mb-2" />
                  <h3 className="font-fun text-xl font-bold">Colorful Drinks</h3>
                </div>
                <p className="text-center text-muted-foreground">
                  From bubblegum pink lattes to sparkly blue matcha
                </p>
              </div>
              
              <div className="cafe-card">
                <div className="mb-4 text-center">
                  <Star size={28} className="text-tangerine mx-auto mb-2" />
                  <h3 className="font-fun text-xl font-bold">Good Vibes</h3>
                </div>
                <p className="text-center text-muted-foreground">
                  Playlists that make you want to stay all day
                </p>
              </div>
              
              <div className="cafe-card">
                <div className="mb-4 text-center">
                  <Heart size={28} className="text-lavender mx-auto mb-2" />
                  <h3 className="font-fun text-xl font-bold">Retro Feels</h3>
                </div>
                <p className="text-center text-muted-foreground">
                  Vintage chairs and nostalgic décor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Section */}
      <section className="cafe-section bg-gradient-to-b from-white to-minted/10">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <div className="inline-block mb-4">
              <div className="sticker sticker-mint">
                SO HOT RIGHT NOW
              </div>
            </div>
            <h2 className="section-title">Our Signature Drinks</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Bubblegum Cloud Latte",
                image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
                color: "bg-bubblegum",
                description: "Sweet, frothy, and Instagram-worthy pink latte"
              },
              {
                name: "Electric Blue Matcha",
                image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
                color: "bg-blueberry",
                description: "Butterfly pea flower tea with a matcha twist"
              },
              {
                name: "Cosmic Coconut Cold Brew",
                image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
                color: "bg-lavender",
                description: "24hr cold brew with coconut cream and star dust"
              }
            ].map((drink, i) => (
              <div key={i} className="group relative">
                <div className="cafe-card h-full flex flex-col overflow-hidden group-hover:-rotate-1 transition-all">
                  <div className="relative h-60 mb-4 rounded-xl overflow-hidden">
                    <img 
                      src={drink.image} 
                      alt={drink.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-3 right-3 ${drink.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                      ✨ Best Seller!
                    </div>
                  </div>
                  <h3 className="font-fun text-xl font-bold mb-2">{drink.name}</h3>
                  <p className="text-muted-foreground mb-4">{drink.description}</p>
                  <div className="mt-auto">
                    <Link 
                      to="/menu" 
                      className="inline-flex items-center font-medium text-bubblegum hover:underline"
                    >
                      See full details <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/menu" className="button-fun button-secondary inline-flex items-center">
              View Full Menu <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Instagram Section */}
      <section className="cafe-section">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <div className="inline-block mb-4">
              <div className="sticker sticker-tangerine">
                #DOPAMINECAFE
              </div>
            </div>
            <h2 className="section-title">Catch Us On Instagram</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Tag us for a chance to be featured and get a free drink on your next visit!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {[
              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
              "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
              "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
              "https://images.unsplash.com/photo-1500673922987-e212871fec22",
              "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
              "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
              "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
              "https://images.unsplash.com/photo-1500673922987-e212871fec22"
            ].map((img, i) => (
              <div 
                key={i} 
                className={`relative aspect-square overflow-hidden rounded-lg group ${
                  i % 3 === 0 ? 'rotate-1' : i % 3 === 1 ? 'rotate-0' : '-rotate-1'
                }`}
              >
                <img 
                  src={img} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bubblegum/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">View Post</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-fun button-outline"
            >
              Follow Us @dopaminecafe
            </a>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="cafe-section bg-lavender/10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <div className="sticker sticker-lavender">
                JOIN THE FUN
              </div>
            </div>
            <h2 className="section-title">Stay In The Loop</h2>
            <p className="text-lg mb-8">
              Sign up for our newsletter to get the scoop on new drinks, special events, and secret menu items!
            </p>
            
            <form className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full border focus:border-bubblegum focus:ring-2 focus:ring-bubblegum/20 outline-none"
                required
              />
              <button type="submit" className="button-fun button-primary whitespace-nowrap">
                Sign Me Up!
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
