
import { useState } from 'react';
import Layout from '../components/Layout';
import { Heart, Star, Coffee, CupSoda } from 'lucide-react';

// Menu categories and items
const menuData = {
  coffee: [
    {
      name: "Bubblegum Cloud Latte",
      description: "Our signature drink! Espresso with steamed milk, bubblegum syrup, and topped with cotton candy cloud and edible glitter",
      price: 6.50,
      tags: ["bestseller", "colorful", "sweet"],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    },
    {
      name: "Electric Blue Matcha",
      description: "Butterfly pea flower tea mixed with ceremonial grade matcha, oat milk, and a hint of vanilla",
      price: 7.00,
      tags: ["vegan", "colorful", "instagram-worthy"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    {
      name: "Cosmic Coconut Cold Brew",
      description: "24-hour steeped cold brew with coconut cream, star-shaped sprinkles, and a galaxy of flavor",
      price: 6.75,
      tags: ["dairy-free", "caffeine-bomb"],
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
    },
    {
      name: "Honeycomb Espresso Tonic",
      description: "Double shot of espresso over artisanal tonic water with a honey drizzle and orange zest",
      price: 5.50,
      tags: ["refreshing", "tangy"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      name: "Retro Mocha",
      description: "Espresso, steamed milk, nostalgic chocolate sauce, and a toasted marshmallow on top",
      price: 6.00,
      tags: ["cozy", "chocolatey"],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      name: "Lavender Dream Cappuccino",
      description: "Espresso with perfectly frothed milk infused with house-made lavender syrup and dried lavender buds",
      price: 5.75,
      tags: ["floral", "calming"],
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    }
  ],
  nonCoffee: [
    {
      name: "Sunset Lemonade",
      description: "Fresh-squeezed lemonade with gradient layers of passion fruit and raspberry syrups",
      price: 5.50,
      tags: ["refreshing", "colorful", "caffeine-free"],
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    {
      name: "Boba Cloud Tea",
      description: "Jasmine tea with brown sugar boba, topped with a cloud of sweet cream cheese foam",
      price: 6.25,
      tags: ["bestseller", "chewy"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      name: "Rainbow Matcha Flight",
      description: "Four mini matcha lattes in different flavors: original, strawberry, mango, and ube",
      price: 9.00,
      tags: ["instagram-worthy", "shareable"],
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    },
    {
      name: "Fizzy Fairy Potion",
      description: "Sparkling water with color-changing butterfly pea flower, mint, and a splash of lime",
      price: 5.00,
      tags: ["magical", "refreshing"],
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
    }
  ],
  food: [
    {
      name: "Sprinkle Cloud Cookie",
      description: "Soft-baked cloud-shaped sugar cookie with a mountain of rainbow sprinkles",
      price: 4.00,
      tags: ["sweet", "colorful"],
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      name: "Birthday Cake Croissant",
      description: "Buttery croissant filled with funfetti cream and topped with vanilla glaze and sprinkles",
      price: 5.50,
      tags: ["bestseller", "celebratory"],
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
    },
    {
      name: "Breakfast Burrito",
      description: "Scrambled eggs, cheddar, avocado, and hot sauce wrapped in a rainbow tortilla",
      price: 8.75,
      tags: ["savory", "filling"],
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      name: "Nostalgia Toast",
      description: "Thick-cut toast with ricotta, honey, cereal crumble, and seasonal fruit",
      price: 7.50,
      tags: ["sweet", "nostalgic"],
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
    }
  ]
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const getTagColor = (tag: string) => {
    switch(tag) {
      case 'bestseller':
        return 'bg-bubblegum text-white';
      case 'vegan':
      case 'dairy-free':
        return 'bg-mint text-foreground';
      case 'colorful':
      case 'instagram-worthy':
        return 'bg-lavender text-foreground';
      case 'refreshing':
        return 'bg-blueberry text-white';
      case 'sweet':
      case 'tangy':
        return 'bg-tangerine text-foreground';
      default:
        return 'bg-lemonade text-foreground';
    }
  };

  return (
    <Layout>
      <section className="cafe-section pt-28">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="sticker sticker-bubblegum">
                NOM NOM
              </div>
            </div>
            <h1 className="section-title mb-4">Our Colorful Menu</h1>
            <p className="max-w-2xl mx-auto text-lg">
              Life's too short for boring beverages. Everything we make is designed to taste amazing and look even better.
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-muted p-1">
              {[
                { id: 'coffee', label: 'Coffee Drinks', icon: <Coffee size={16} /> },
                { id: 'nonCoffee', label: 'Other Drinks', icon: <CupSoda size={16} /> },
                { id: 'food', label: 'Eats', icon: <Coffee size={16} /> }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all ${
                    activeCategory === category.id
                      ? 'bg-bubblegum text-white shadow-md'
                      : 'hover:bg-muted-foreground/10'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuData[activeCategory as keyof typeof menuData].map((item, i) => (
              <div key={i} className="cafe-card group hover:scale-[1.02] transition-all">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-full md:w-1/3 h-40 rounded-xl overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-fun text-xl font-bold">{item.name}</h3>
                      <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, j) => (
                        <span 
                          key={j}
                          className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${getTagColor(tag)}`}
                        >
                          {tag === 'bestseller' ? (
                            <span className="flex items-center">
                              <Star size={12} className="mr-1" /> Best Seller
                            </span>
                          ) : tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Specials Section */}
      <section className="cafe-section bg-gradient-to-b from-white to-bubblegum/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="sticker sticker-tangerine">
                LIMITED TIME
              </div>
            </div>
            <h2 className="section-title">Seasonal Specials</h2>
            <p className="max-w-2xl mx-auto text-lg mb-10">
              These drinks and treats are only available for a short time. Get them while you can!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Summer Berry Fizz",
                description: "Sparkling water infused with fresh berries, lemon, and mint. Topped with a scoop of berry sorbet.",
                price: 6.50,
                image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
                color: "border-bubblegum"
              },
              {
                name: "Mango Sticky Rice Latte",
                description: "Sweet and creamy latte inspired by the Thai dessert, with real mango puree and toasted coconut.",
                price: 7.00,
                image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
                color: "border-tangerine"
              },
              {
                name: "Lavender Lemon Scone",
                description: "Buttery scone with dried lavender, fresh lemon zest, and a tangy lemon glaze.",
                price: 4.75,
                image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
                color: "border-lavender"
              }
            ].map((special, i) => (
              <div key={i} className={`cafe-card border-b-4 ${special.color}`}>
                <div className="mb-4 aspect-square rounded-xl overflow-hidden">
                  <img
                    src={special.image}
                    alt={special.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-fun text-xl font-bold">{special.name}</h3>
                  <span className="font-bold">${special.price.toFixed(2)}</span>
                </div>
                <p className="text-muted-foreground">{special.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Orders */}
      <section className="cafe-section">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <div className="sticker sticker-lavender">
                <span className="flex items-center">
                  <Heart size={14} className="mr-1" /> MADE FOR YOU
                </span>
              </div>
            </div>
            <h2 className="section-title mb-4">Can't Decide? Let Us Surprise You!</h2>
            <p className="text-lg mb-10">
              Tell us your flavor preferences and we'll create a custom drink just for you.
              It might become our next menu star!
            </p>
            
            <div className="cafe-card">
              <h3 className="font-fun text-2xl font-bold mb-4">Barista's Choice</h3>
              <p className="mb-6">
                Our baristas love a creative challenge! Just let us know:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-bubblegum/10 rounded-xl p-4 text-center">
                  <p className="font-medium mb-2">Your mood</p>
                  <p className="text-sm">Happy? Sleepy? Need a boost?</p>
                </div>
                <div className="bg-tangerine/10 rounded-xl p-4 text-center">
                  <p className="font-medium mb-2">Flavor preferences</p>
                  <p className="text-sm">Sweet, bitter, fruity, etc.</p>
                </div>
                <div className="bg-lavender/10 rounded-xl p-4 text-center">
                  <p className="font-medium mb-2">Adventurousness level</p>
                  <p className="text-sm">Classic or totally wild?</p>
                </div>
              </div>
              <p className="text-sm italic text-muted-foreground">
                *Prices vary depending on ingredients. Just ask your barista!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
