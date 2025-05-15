
import Layout from '../components/Layout';
import { Coffee, Music, Heart, Star, CupSoda } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="cafe-section pt-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <div className="sticker sticker-mint">
                  OUR STORY
                </div>
              </div>
              <h1 className="section-title mb-6">About Our Chaotic Little Café</h1>
              <p className="text-lg mb-4">
                Dopamine Café started as a wild idea after too many late nights and not enough good coffee. We wanted to create a space that feels like your coolest friend's living room, but with baristas who actually know what they're doing.
              </p>
              <p className="text-lg mb-4">
                From day one, we've been all about color, fun, and making sure no one ever has to drink a boring beige coffee again. Our founders (a former graphic designer and a DJ with a coffee obsession) combined their powers to create this dopamine-inducing wonderland.
              </p>
              <p className="text-lg">
                Now we're that place where the playlists are fire, the drinks are as colorful as they are delicious, and everyone leaves happier than when they came in. That's our whole vibe — happiness in a cup, chaos on the walls.
              </p>
            </div>
            
            <div className="relative">
              <div className="polaroid rotate-3 transform z-20 relative">
                <img 
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22" 
                  alt="Cafe interior" 
                  className="polaroid-img rounded"
                />
                <p className="polaroid-caption">Opening day chaos, 2023</p>
              </div>
              
              <div className="polaroid -rotate-2 transform absolute top-20 -left-10 z-10">
                <img 
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                  alt="Coffee art" 
                  className="polaroid-img rounded"
                />
                <p className="polaroid-caption">Our first latte art attempt 😂</p>
              </div>
              
              <div className="polaroid rotate-6 transform absolute top-40 -right-5 z-30">
                <img 
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                  alt="Fun drinks" 
                  className="polaroid-img rounded"
                />
                <p className="polaroid-caption">Testing colorful drinks</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="cafe-section bg-gradient-to-b from-white to-lavender/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="sticker sticker-bubblegum">
                OUR VIBE
              </div>
            </div>
            <h2 className="section-title">What We're All About</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Coffee className="text-bubblegum" size={32} />,
                title: "Quality Coffee",
                color: "border-bubblegum",
                description: "We source from small-batch roasters who care as much about ethics as they do about flavor."
              },
              {
                icon: <Music className="text-tangerine" size={32} />,
                title: "Killer Playlists",
                color: "border-tangerine",
                description: "Our legendary playlists span genres and decades. Shazam at your own risk."
              },
              {
                icon: <Heart className="text-lavender" size={32} />,
                title: "Good Vibes Only",
                color: "border-lavender",
                description: "We believe coffee shops should be happy places where everyone feels welcome."
              },
              {
                icon: <CupSoda className="text-mint" size={32} />,
                title: "Creative Drinks",
                color: "border-mint",
                description: "Life's too short for boring beverages. Our menu is wild in the best way."
              }
            ].map((value, i) => (
              <div key={i} className={`cafe-card border-t-4 ${value.color}`}>
                <div className="mb-4">{value.icon}</div>
                <h3 className="font-fun text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Meet The Team */}
      <section className="cafe-section">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="sticker sticker-lavender">
                THE CREW
              </div>
            </div>
            <h2 className="section-title">Meet the Dopamine Dealers</h2>
            <p className="text-lg max-w-2xl mx-auto">
              The wonderful weirdos who make your coffee and create the chaos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex",
                role: "Founder & Head Barista",
                bio: "Former graphic designer with a serious caffeine addiction. Creates drinks that are as pretty as they are delicious.",
                image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
              },
              {
                name: "Jordan",
                role: "Co-Founder & Music Director",
                bio: "DJ by night, coffee enthusiast by day. Responsible for our iconic playlists and occasional impromptu dance parties.",
                image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
              },
              {
                name: "Sam",
                role: "Pastry Chef & Vibe Curator",
                bio: "Bakes with love and sprinkles. Believes that every pastry should bring as much joy as a perfectly timed high five.",
                image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
              }
            ].map((person, i) => (
              <div key={i} className="cafe-card group hover:scale-[1.02] transition-all">
                <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="font-fun text-xl font-bold mb-1">{person.name}</h3>
                <p className="text-bubblegum font-medium mb-3">{person.role}</p>
                <p className="text-muted-foreground">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Fun Facts */}
      <section className="cafe-section bg-mint/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="sticker sticker-tangerine">
                FUN FACTS
              </div>
            </div>
            <h2 className="section-title">Totally Unnecessary Trivia</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "We've gone through 237 chalk pens creating our menu boards",
              "Our playlist has over 1,200 songs and would take 3.5 days to listen to",
              "We have 47 different mugs, none of which match",
              "The café dog, Mocha, has her own Instagram with 5K followers",
              "We've had 3 marriage proposals happen in our back corner booth",
              "Our most popular drink has 5 colors and takes 4 minutes to make"
            ].map((fact, i) => (
              <div key={i} className="relative p-6">
                <div className={`absolute inset-0 rounded-2xl ${
                  i % 3 === 0 ? 'bg-bubblegum/10' : 
                  i % 3 === 1 ? 'bg-tangerine/10' : 'bg-lavender/10'
                } rotate-1`}></div>
                <div className="relative z-10 flex items-start">
                  <div className="mr-4 mt-1">
                    <Star 
                      size={20} 
                      className={
                        i % 3 === 0 ? 'text-bubblegum' : 
                        i % 3 === 1 ? 'text-tangerine' : 'text-lavender'
                      } 
                      fill="currentColor"
                    />
                  </div>
                  <p className="font-medium">{fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
