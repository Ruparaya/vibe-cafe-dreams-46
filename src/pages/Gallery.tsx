
import { useState } from 'react';
import Layout from '../components/Layout';
import { CupSoda, Heart, Star, Coffee, Image } from 'lucide-react';

// Gallery categories
const galleryCategories = [
  { id: 'drinks', name: 'Colorful Drinks', icon: <CupSoda size={16} /> },
  { id: 'people', name: 'Happy Humans', icon: <Heart size={16} /> },
  { id: 'cafe', name: 'Café Vibes', icon: <Coffee size={16} /> },
  { id: 'all', name: 'Show All', icon: <Image size={16} /> }
];

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    caption: "Our signature Bubblegum Cloud Latte ✨",
    category: "drinks",
    featured: true
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    caption: "Café mascot Mocha helping with quality control",
    category: "people",
    featured: false
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    caption: "Weekend vibes in the back patio",
    category: "cafe",
    featured: true
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    caption: "Fresh pastries every morning!",
    category: "cafe",
    featured: false
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    caption: "Electric Blue Matcha in action",
    category: "drinks",
    featured: true
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    caption: "Sunset from our rooftop seating area",
    category: "cafe",
    featured: false
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    caption: "Summer drink special: Tropical Dream",
    category: "drinks",
    featured: false
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    caption: "Open mic night gets wild!",
    category: "people",
    featured: false
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    caption: "Our colorful mural wall - perfect for selfies",
    category: "cafe",
    featured: false
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    caption: "Rainbow latte art class",
    category: "drinks",
    featured: false
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    caption: "Staff game night after hours",
    category: "people",
    featured: false
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    caption: "Our vintage record collection for café playlists",
    category: "cafe",
    featured: false
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedImageId, setExpandedImageId] = useState<number | null>(null);
  
  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleImageClick = (id: number) => {
    setExpandedImageId(expandedImageId === id ? null : id);
  };

  return (
    <Layout>
      <section className="cafe-section pt-28">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="sticker sticker-lavender">
                <span className="flex items-center">
                  <Image size={14} className="mr-1" /> SNAPSHOT
                </span>
              </div>
            </div>
            <h1 className="section-title mb-4">Our Colorful World</h1>
            <p className="max-w-2xl mx-auto text-lg">
              From vibrant drinks to happy customers and our chaotic-but-cute café space — here's a peek into our daily dopamine hits.
            </p>
          </div>
          
          {/* Category Filters */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-muted p-1 flex-wrap justify-center">
              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all m-1 ${
                    activeCategory === category.id
                      ? 'bg-lavender text-foreground shadow-md'
                      : 'hover:bg-muted-foreground/10'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Featured Images */}
          {activeCategory === 'all' && (
            <div className="mb-16">
              <h2 className="font-fun text-2xl font-bold mb-6 text-center">✨ Featured Moments ✨</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {galleryImages.filter(img => img.featured).map((image) => (
                  <div 
                    key={image.id} 
                    className="relative overflow-hidden rounded-xl cursor-pointer aspect-square polaroid hover:z-10"
                    onClick={() => handleImageClick(image.id)}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <p className="text-white font-medium">
                        {image.caption}
                      </p>
                    </div>
                    {image.id === 1 && (
                      <div className="absolute top-3 right-3 bg-bubblegum text-white px-2 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star size={12} className="mr-1" fill="white" /> Most Liked
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all ${
                  expandedImageId === image.id 
                    ? 'col-span-2 row-span-2 z-20' 
                    : ''
                } ${
                  Math.random() > 0.5 ? 'rotate-1' : '-rotate-1'
                }`}
                onClick={() => handleImageClick(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                {(expandedImageId === image.id) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <p className="text-white font-medium">
                      {image.caption}
                    </p>
                  </div>
                )}
                {image.featured && activeCategory !== 'all' && (
                  <div className="absolute top-2 right-2 bg-lavender text-foreground p-1 rounded-full">
                    <Star size={16} fill="currentColor" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instagram Section */}
      <section className="cafe-section bg-gradient-to-b from-white to-bubblegum/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="sticker sticker-bubblegum">
                #DOPAMINECAFE
              </div>
            </div>
            <h2 className="section-title mb-4">Share Your Visit</h2>
            <p className="max-w-2xl mx-auto text-lg">
              Post your pics with #DopamineCafe and tag us @dopaminecafe for a chance to be featured on our social media and in our café!
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="cafe-card">
              <h3 className="font-fun text-2xl font-bold mb-6">Photo Challenge</h3>
              <p className="mb-6">
                Take a pic that captures one of these Dopamine Café moments:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {[
                  { title: "The Perfect Sip", desc: "Catch that first-sip bliss", color: "bg-bubblegum/10" },
                  { title: "Color Explosion", desc: "Show off our vibrant drinks", color: "bg-tangerine/10" },
                  { title: "Café Corner", desc: "Your favorite spot to sit", color: "bg-lavender/10" },
                  { title: "Friend Vibes", desc: "Sharing is caring!", color: "bg-mint/10" },
                  { title: "Detail Shot", desc: "The little things that spark joy", color: "bg-lemonade/10" },
                  { title: "Outside View", desc: "Café from a new perspective", color: "bg-blueberry/10" }
                ].map((challenge, i) => (
                  <div key={i} className={`${challenge.color} rounded-xl p-4 text-center`}>
                    <p className="font-medium mb-1">{challenge.title}</p>
                    <p className="text-sm text-muted-foreground">{challenge.desc}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="button-fun button-primary"
                >
                  Follow @dopaminecafe
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
