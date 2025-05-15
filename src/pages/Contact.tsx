
import Layout from '../components/Layout';
import { MapPin, Clock, Phone, Mail, Instagram, Heart } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <section className="cafe-section pt-28">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="sticker sticker-mint">
                <span className="flex items-center">
                  <Heart size={14} className="mr-1" /> SAY HI
                </span>
              </div>
            </div>
            <h1 className="section-title mb-4">Come Find Us</h1>
            <p className="max-w-2xl mx-auto text-lg">
              We're located in the heart of downtown, surrounded by good vibes and even better people. Stop by and say hello!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="cafe-card bg-gradient-to-br from-white to-mint/10 mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-mint/20 rounded-full -mt-10 -mr-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-lavender/20 rounded-full -mb-16 -ml-16"></div>
                
                <h2 className="font-fun text-2xl font-bold mb-6 relative z-10">Visit Us</h2>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start">
                    <div className="bg-bubblegum rounded-full p-3 text-white mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p>123 Dopamine Drive<br />Trendytown, CA 90210</p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-bubblegum font-medium text-sm hover:underline inline-block mt-1"
                      >
                        Get directions →
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-tangerine rounded-full p-3 text-white mr-4">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Hours</h3>
                      <p>Monday - Friday: 7am - 8pm<br />Saturday: 8am - 10pm<br />Sunday: 8am - 7pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-lavender rounded-full p-3 text-foreground mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p>(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground mt-1">Call for takeout orders or event bookings!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-mint rounded-full p-3 text-foreground mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p><a href="mailto:hello@dopaminecafe.com" className="hover:text-bubblegum">hello@dopaminecafe.com</a></p>
                      <p className="text-sm text-muted-foreground mt-1">For questions, collaborations, or just to say hi!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-lemonade rounded-full p-3 text-foreground mr-4">
                      <Instagram size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Social</h3>
                      <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-bubblegum">@dopaminecafe</a></p>
                      <p className="text-sm text-muted-foreground mt-1">DM us for the fastest response!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Upcoming Events */}
              <div className="cafe-card bg-gradient-to-br from-white to-lavender/10">
                <h2 className="font-fun text-2xl font-bold mb-6">Upcoming Events</h2>
                <div className="space-y-6">
                  {[
                    {
                      date: "May 20",
                      title: "Latte Art Workshop",
                      desc: "Learn to make Instagram-worthy latte art with our head barista",
                      color: "border-bubblegum"
                    },
                    {
                      date: "May 25",
                      title: "Open Mic Night",
                      desc: "Poetry, music, comedy — bring your talent and vibe with us",
                      color: "border-tangerine"
                    },
                    {
                      date: "June 3",
                      title: "Coffee Cupping",
                      desc: "Taste and learn about different coffee origins and roast profiles",
                      color: "border-lavender"
                    }
                  ].map((event, i) => (
                    <div key={i} className={`border-l-4 ${event.color} pl-4`}>
                      <div className="font-bold text-bubblegum">{event.date}</div>
                      <h3 className="font-medium mb-1">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Map & Form */}
            <div>
              {/* Map with sticker style */}
              <div className="mb-8 relative">
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-bubblegum/10 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-tangerine/10 rounded-full"></div>
                
                <div className="cafe-card relative z-10 p-0 overflow-hidden">
                  {/* Sticker-style map header */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="sticker sticker-bubblegum">
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" /> FIND US HERE
                      </span>
                    </div>
                  </div>
                  
                  {/* Map iframe */}
                  <div className="w-full h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130390376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1653112682332!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Cafe Location"
                    ></iframe>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="cafe-card bg-gradient-to-br from-white to-bubblegum/10">
                <h2 className="font-fun text-2xl font-bold mb-6">Say Hello!</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl border focus:border-bubblegum focus:ring-2 focus:ring-bubblegum/20 outline-none"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-xl border focus:border-bubblegum focus:ring-2 focus:ring-bubblegum/20 outline-none"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl border focus:border-bubblegum focus:ring-2 focus:ring-bubblegum/20 outline-none"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="events">Event Booking</option>
                      <option value="collaboration">Collaboration Request</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border focus:border-bubblegum focus:ring-2 focus:ring-bubblegum/20 outline-none"
                      placeholder="Tell us what's on your mind..."
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="button-fun button-primary w-full">
                      Send Message
                    </button>
                  </div>
                  
                  <p className="text-sm text-center text-muted-foreground">
                    We'll get back to you faster than our baristas make a latte! 💫
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="cafe-section bg-gradient-to-b from-white to-mint/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="sticker sticker-tangerine">
                FAQ
              </div>
            </div>
            <h2 className="section-title mb-4">Burning Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: "Do you have Wi-Fi?",
                  a: "Yes! Free high-speed Wi-Fi is available. The password is written on our giant rainbow wall — just ask a barista if you can't spot it!"
                },
                {
                  q: "Can I bring my dog?",
                  a: "Absolutely! We're dog-friendly and even have special puppy treats behind the counter. Our patio is especially perfect for furry friends."
                },
                {
                  q: "Do you have non-dairy milk options?",
                  a: "We offer oat, almond, coconut, and soy milk at no extra charge. We believe alternative milks shouldn't cost extra!"
                },
                {
                  q: "Can I book the space for a private event?",
                  a: "Yes! We offer full and partial cafe bookings for events. Fill out our contact form or email events@dopaminecafe.com for pricing and availability."
                },
                {
                  q: "What's with all the colors?",
                  a: "We believe color makes people happy! Our entire cafe concept is built around creating a space that boosts your mood through vibrant colors, playful design, and of course, delicious drinks."
                }
              ].map((faq, i) => (
                <div key={i} className={`cafe-card ${
                  i % 3 === 0 ? 'bg-gradient-to-br from-white to-bubblegum/10' : 
                  i % 3 === 1 ? 'bg-gradient-to-br from-white to-tangerine/10' : 
                  'bg-gradient-to-br from-white to-lavender/10'
                }`}>
                  <h3 className="font-fun text-xl font-bold mb-2">{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
