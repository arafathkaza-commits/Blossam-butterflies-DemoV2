import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ChevronDown, Phone, Mail, MapPin, Facebook, Instagram, ShoppingBag, Coffee, Flower, Scissors, Shield, Clock, ArrowLeft, MessageCircle, Send, Star, Heart, Gift, Package, Award, Sparkles, Croissant, Wifi, Sofa, Truck, Camera, Lock, Bell, Monitor, Home, Tag, Percent } from 'lucide-react';

// Logo import - will work in your React project (comment out for artifact preview)
import logo from './blooming-butterflies-logo.png';

const BloomingButterfliesWebsite = () => {
  // In your project: uncomment the import above and logo will load automatically
  // In artifact preview: uses CSS fallback below
 // const logoSrc = logo; // Change to: const logoSrc = logo; after uncommenting import
  
  // Logo Component with fallback design
  //const Logo = ({ size = 'md', className = '' }) => {

  const Logo = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-10 h-auto',
    md: 'w-14 h-auto',
    lg: 'w-40 h-auto',
    xl: 'w-48 h-auto'
  };

  return (
    <img
      src={logo}
      alt="Blooming Butterflies Logo"
      className={`${sizes[size]} ${className} object-contain`}
    />
  );
}; 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hello! Welcome to Blooming Butterflies 🦋 How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'bloom-grace-gifts',
      title: 'Bloom & Grace Gifts',
      description: 'Curated gift sets & thoughtful presents for every occasion',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=600&fit=crop&q=80',
      color: 'from-pink-500 to-rose-500',
      fullDescription: 'Discover our exquisite collection of curated gifts perfect for every special moment. From elegant gift boxes to personalized presents, we offer unique items that express your thoughtfulness and care.',
      features: [
        { name: 'Luxury Gift Boxes', icon: Gift, description: 'Premium curated gift boxes filled with handpicked treasures for special occasions' },
        { name: 'Personalized Gifts', icon: Heart, description: 'Custom engraved and personalized items that add a unique touch to your presents' },
        { name: 'Corporate Gifts', icon: Award, description: 'Professional gift solutions for businesses, clients, and corporate events' },
        { name: 'Special Occasion Sets', icon: Sparkles, description: 'Themed gift collections for birthdays, anniversaries, and celebrations' }
      ],
      address: 'Building 123, Road 456, Block 789, Manama, Bahrain',
      phone: '+973 3774 8958',
      email: 'Bloomingbutterfliesbh@gmail.com',
      hours: 'Sun-Thu: 9:00 AM - 9:00 PM',
      latitude: 26.2198,
      longitude: 50.5923,
      mapEmbed: 'https://maps.google.com/maps?q=26.2198,50.5923&hl=en&z=17&output=embed',
      specialOffer: '15% OFF on all gift boxes this month!'
    },
    {
      id: 'bloom-brew',
      title: 'Bloom & Brew',
      description: 'Artisan coffee & fresh pastries in a cozy atmosphere',
      icon: Coffee,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop&q=80',
      color: 'from-amber-500 to-orange-500',
      fullDescription: 'Indulge in our specialty coffee crafted by expert baristas and savor freshly baked pastries in our warm, inviting café. The perfect spot to relax, work, or meet friends.',
      features: [
        { name: 'Specialty Coffee', icon: Coffee, description: 'Expertly brewed espresso, cappuccino, and pour-over coffee using premium beans' },
        { name: 'Fresh Pastries', icon: Croissant, description: 'Daily baked croissants, muffins, and artisan bread made from scratch' },
        { name: 'Breakfast Menu', icon: Sparkles, description: 'Delicious breakfast plates, sandwiches, and healthy bowls to start your day' },
        { name: 'Free WiFi', icon: Wifi, description: 'High-speed internet connection perfect for remote work and studying' },
        { name: 'Comfortable Seating', icon: Sofa, description: 'Cozy corners and spacious tables for relaxation or productive meetings' }
      ],
      address: 'Building 234, Road 567, Block 890, Manama, Bahrain',
      phone: '+973 3774 8958',
      email: 'Bloomingbutterfliesbh@gmail.com',
      hours: 'Daily: 7:00 AM - 11:00 PM',
      latitude: 26.2198,
      longitude: 50.5923,
      mapEmbed: 'https://maps.google.com/maps?q=26.2198,50.5923&hl=en&z=17&output=embed',
      specialOffer: 'Buy 2 coffees, get 1 pastry FREE!'
    },
    {
      id: 'bloom-flower',
      title: 'Bloom Flower',
      description: 'Fresh blooms & custom floral arrangements for any event',
      icon: Flower,
      image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&h=600&fit=crop&q=80',
      color: 'from-purple-500 to-pink-500',
      fullDescription: 'Experience the beauty of nature with our stunning floral arrangements. From daily fresh flowers to elaborate event decorations, we bring color and life to every occasion.',
      features: [
        { name: 'Fresh Daily Flowers', icon: Flower, description: 'Handpicked seasonal blooms delivered fresh daily from local and international farms' },
        { name: 'Wedding Arrangements', icon: Heart, description: 'Breathtaking bridal bouquets and ceremony decorations for your dream wedding' },
        { name: 'Event Decoration', icon: Sparkles, description: 'Complete floral styling for corporate events, parties, and special celebrations' },
        { name: 'Delivery Service', icon: Truck, description: 'Same-day flower delivery across Bahrain with care and freshness guaranteed' },
        { name: 'Custom Bouquets', icon: Gift, description: 'Personalized arrangements tailored to your preferences and special occasions' }
      ],
      address: 'Building 345, Road 678, Block 901, Manama, Bahrain',
      phone: '+973 3774 8958',
      email: 'Bloomingbutterfliesbh@gmail.com',
      hours: 'Sun-Thu: 8:00 AM - 8:00 PM',
      latitude: 26.2198,
      longitude: 50.5923,
      mapEmbed: 'https://maps.google.com/maps?q=26.2198,50.5923&hl=en&z=17&output=embed',
      specialOffer: 'FREE delivery on orders over 20 BHD!'
    },
    {
      id: 'beauty-salon',
      title: 'Beauty Salon',
      description: 'Professional beauty treatments & relaxing spa services',
      icon: Scissors,
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop&q=80',
      color: 'from-rose-500 to-pink-500',
      fullDescription: 'Pamper yourself with our premium beauty and spa services. Our skilled professionals provide personalized treatments in a luxurious, relaxing environment.',
      features: [
        { name: 'Hair Styling & Color', icon: Scissors, description: 'Expert cuts, vibrant coloring, and professional styling for all hair types' },
        { name: 'Manicure & Pedicure', icon: Sparkles, description: 'Luxurious nail care with gel, acrylic, and artistic designs by skilled technicians' },
        { name: 'Facial Treatments', icon: Heart, description: 'Rejuvenating facials using premium products for glowing, healthy skin' },
        { name: 'Massage Therapy', icon: Sparkles, description: 'Relaxing therapeutic massages to relieve stress and tension' },
        { name: 'Bridal Packages', icon: Award, description: 'Complete bridal beauty services including makeup, hair, and skincare prep' }
      ],
      address: 'Shop 597 Rd No 1807, Manama, Bahrain',
      phone: '+973 3774 8958',
      email: 'Bloomingbutterfliesbh@gmail.com',
      hours: 'Daily: 11:00 AM - 11:00 PM',
      latitude: 26.2198,
      longitude: 50.5923,
      mapEmbed: 'https://maps.google.com/maps?q=26.2198,50.5923&hl=en&z=17&output=embed',
      specialOffer: '20% OFF first-time customers!',
      beforeAfter: [
        { 
          before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop&q=80', 
          after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop&q=80', 
          title: 'Hair Transformation' 
        },
        { 
          before: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80&sat=-100', 
          after: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80', 
          title: 'Facial Glow-Up' 
        },
        { 
          before: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop&q=80&sat=-100', 
          after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=400&fit=crop&q=80', 
          title: 'Nail Art Magic' 
        }
      ]
    },
    {
      id: 'security-solutions',
      title: 'Security Solutions',
      description: 'Advanced security systems for your peace of mind',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop&q=80',
      color: 'from-blue-500 to-cyan-500',
      fullDescription: 'Protect what matters most with our state-of-the-art security systems. From CCTV installation to access control, we provide comprehensive security solutions for homes and businesses.',
      features: [
        { name: 'CCTV Systems', icon: Camera, description: 'High-definition surveillance cameras with remote viewing and recording capabilities' },
        { name: 'Access Control', icon: Lock, description: 'Advanced entry systems with biometric and card access for enhanced security' },
        { name: 'Alarm Systems', icon: Bell, description: 'Smart alarm systems with instant alerts and emergency response integration' },
        { name: '24/7 Monitoring', icon: Monitor, description: 'Round-the-clock professional monitoring services for complete peace of mind' },
        { name: 'Smart Home Integration', icon: Home, description: 'Seamless integration with smart home devices for automated security control' }
      ],
      address: 'Building 567, Road 890, Block 123, Manama, Bahrain',
      phone: '+973 35989051',
      email: 'Bloomingbutterfliesbh@gmail.com',
      hours: 'Sun-Thu: 8:00 AM - 6:00 PM',
      latitude: 26.2198,
      longitude: 50.5923,
      mapEmbed: 'https://maps.google.com/maps?q=26.2198,50.5923&hl=en&z=17&output=embed',
      specialOffer: 'FREE installation on complete security packages!'
    }
  ];

  const navigateToService = (serviceId) => {
    setCurrentPage(serviceId);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMsg = { type: 'user', text: inputMessage };
    setChatMessages([...chatMessages, userMsg]);
    const userQuestion = inputMessage.toLowerCase();
    setInputMessage('');

    // Show typing indicator
    setChatMessages(prev => [...prev, { type: 'bot', text: 'Typing...', isTyping: true }]);

    // Simulate thinking time
    setTimeout(() => {
      let botResponse = '';

      // Simple keyword-based responses
      if (userQuestion.includes('hour') || userQuestion.includes('time') || userQuestion.includes('open')) {
        botResponse = "⏰ Our operating hours:\n\n🎁 Bloom & Grace Gifts: Sun-Thu 9AM-9PM\n☕ Bloom & Brew: Daily 7AM-11PM\n💐 Bloom Flower: Sun-Thu 8AM-8PM\n💅 Beauty Salon: Daily 11AM-11PM\n🔒 Security Solutions: Sun-Thu 8AM-6PM";
      } else if (userQuestion.includes('location') || userQuestion.includes('address') || userQuestion.includes('where')) {
        botResponse = "📍 We're located in Manama, Bahrain! Each service has its own location. Which service are you interested in? Or call us at +973 3774 8958 for directions!";
      } else if (userQuestion.includes('price') || userQuestion.includes('cost') || userQuestion.includes('how much')) {
        botResponse = "💰 Prices vary by service! For accurate pricing, please:\n\n📞 Call: +973 3774 8958\n💬 WhatsApp: +973 3774 8958\n\nWe'd love to discuss your needs!";
      } else if (userQuestion.includes('book') || userQuestion.includes('appointment') || userQuestion.includes('reservation')) {
        botResponse = "📅 Ready to book? Great! Contact us:\n\n📞 Call: +973 3774 8958\n💬 WhatsApp: +973 3774 8958\n\nOur team will help you schedule!";
      } else if (userQuestion.includes('gift') || userQuestion.includes('present')) {
        botResponse = "🎁 Bloom & Grace Gifts offers luxury gift boxes, personalized items, and corporate gifts!\n\n📞 +973 3774 8958\n📍 Building 123, Road 456, Manama";
      } else if (userQuestion.includes('coffee') || userQuestion.includes('cafe') || userQuestion.includes('brew')) {
        botResponse = "☕ Bloom & Brew serves specialty coffee, fresh pastries, and breakfast!\n\n📞 +973 3774 8958\n⏰ Daily 7AM-11PM\n📍 Building 234, Road 567, Manama";
      } else if (userQuestion.includes('flower') || userQuestion.includes('bouquet') || userQuestion.includes('bloom')) {
        botResponse = "💐 Bloom Flower offers fresh daily flowers, wedding arrangements, and delivery!\n\n📞 +973 3774 8958\n⏰ Sun-Thu 8AM-8PM\n📍 Building 345, Road 678, Manama";
      } else if (userQuestion.includes('beauty') || userQuestion.includes('salon') || userQuestion.includes('hair') || userQuestion.includes('nail')) {
        botResponse = "💅 Our Beauty Salon offers hair styling, manicures, facials, massage, and bridal packages!\n\n📞 +973 3774 8958\n⏰ Daily 11AM-11PM\n📍 Shop 597 Rd No 1807, Manama";
      } else if (userQuestion.includes('security') || userQuestion.includes('camera') || userQuestion.includes('cctv')) {
        botResponse = "🔒 Security Solutions offers CCTV, access control, alarms, and smart home integration!\n\n📞 +973 35989051\n⏰ Sun-Thu 8AM-6PM\n📍 Building 567, Road 890, Manama";
      } else if (userQuestion.includes('contact') || userQuestion.includes('phone') || userQuestion.includes('call')) {
        botResponse = "📞 Contact us:\n\nMain: +973 3774 8958\nSecurity: +973 35989051\nEmail: Bloomingbutterfliesbh@gmail.com\n\n💬 WhatsApp available!";
      } else if (userQuestion.includes('hi') || userQuestion.includes('hello') || userQuestion.includes('hey')) {
        botResponse = "👋 Hello! Welcome to Blooming Butterflies! 🦋\n\nHow can I help you today? Ask about our services, hours, or locations!";
      } else {
        botResponse = "I'd be happy to help! 😊\n\nYou can ask me about:\n• Our services\n• Operating hours\n• Locations\n• Booking appointments\n\nOr call us directly: +973 3774 8958";
      }

      // Remove typing indicator and add bot response
      setChatMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, { type: 'bot', text: botResponse }];
      });
    }, 1000);
  };

  const currentService = services.find(s => s.id === currentPage);

  const ServicePage = ({ service }) => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50">
      {/* Ultra-Modern Hero Section with Parallax Effect */}
      <div className="relative h-screen overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 animate-gradient-shift"></div>
        
        {/* Floating Geometric Shapes - REMOVED */}

        {/* Glassmorphism Hero Content */}
        <div className="relative h-full flex items-center justify-center text-white px-4">
          <div className="max-w-6xl w-full backdrop-blur-xl bg-white/10 rounded-[3rem] p-12 border border-white/20 shadow-2xl">
            <div className="text-center space-y-8">
              {/* Icon with Glow Effect */}
              <div className="relative inline-block">
                <div className="absolute inset-0 blur-2xl opacity-50 bg-white rounded-full"></div>
                <service.icon className="relative h-28 w-28 mx-auto drop-shadow-2xl animate-bounce-slow" />
              </div>
              
              {/* Modern Typography */}
              <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tight leading-none">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-purple-100">
                  {service.title}
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
                {service.description}
              </p>

              {/* Modern CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <button 
                  className="group relative px-12 py-5 bg-white text-gray-900 rounded-full font-bold text-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`https://wa.me/97337748958?text=Hi! I'd like to book an appointment for ${service.title}`, '_blank');
                  }}>
                  <span className="relative z-10">Book Appointment</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
                <button 
                  onClick={navigateToHome}
                  className="px-12 py-5 border-2 border-white/50 backdrop-blur-sm text-white rounded-full font-bold text-xl hover:bg-white/20 hover:border-white transition-all"
                >
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* 🎁 Special Offers Banner with Parallax */}
      {service.specialOffer && (
        <div className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-90`}></div>
          <div className="absolute inset-0">
            {/* Floating shapes removed */}
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Tag className="h-12 w-12 text-white animate-bounce" />
                <Percent className="h-16 w-16 text-white animate-pulse" />
                <Sparkles className="h-12 w-12 text-white animate-bounce" />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                🎉 Special Offer!
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-white/95 mb-8 drop-shadow-md">
                {service.specialOffer}
              </p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(`https://wa.me/97337748958?text=Hi! I'd like to know more about your special offer: ${service.specialOffer}`, '_blank');
                }}
                className="px-12 py-5 bg-white text-gray-900 rounded-full font-bold text-xl hover:scale-110 hover:shadow-2xl transition-all inline-flex items-center gap-3"
              >
                Claim Offer Now
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Luxury About Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-1 w-16 bg-gradient-to-r ${service.color} rounded-full`}></div>
                  <span className="text-sm font-bold text-pink-600 uppercase tracking-widest">Premium Experience</span>
                </div>
              </div>
              
              <h2 className="text-6xl font-black text-gray-900 leading-tight">
                Redefining
                <span className={`block bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  Luxury Service
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {service.fullDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-6 bg-white rounded-3xl shadow-xl">
                  <div className="text-5xl font-black text-pink-600 mb-2">500+</div>
                  <div className="text-sm font-semibold text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-white rounded-3xl shadow-xl">
                  <div className="text-5xl font-black text-purple-600 mb-2">100%</div>
                  <div className="text-sm font-semibold text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Image with Modern Frame */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-[3rem] transform rotate-6"></div>
              <div className="relative bg-white p-3 rounded-[3rem] shadow-2xl transform hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square rounded-[2.5rem] overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ultra-Modern Services Grid */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black text-gray-900 mb-6">
              Our <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>Signature</span> Services
            </h2>
            <p className="text-2xl text-gray-600">Crafted for perfection, designed for you</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => {
              const featureName = typeof feature === 'string' ? feature : feature.name;
              const FeatureIcon = typeof feature === 'object' ? feature.icon : Star;
              const featureDesc = typeof feature === 'object' ? feature.description : 'Experience premium treatment with state-of-the-art techniques and world-class products';
              
              return (
              <div 
                key={index}
                className="group relative"
                style={{animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`, opacity: 0}}
              >
                {/* Glassmorphism Card with Image */}
                <div className="relative h-full backdrop-blur-xl bg-gradient-to-br from-white/80 to-pink-50/80 rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                  
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={
                        // Beauty Salon Images
                        featureName.includes('Hair') || featureName.includes('Styling') 
                          ? 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop'
                        : featureName.includes('Manicure') || featureName.includes('Pedicure') || featureName.includes('Nail')
                          ? 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop'
                        : featureName.includes('Facial') || featureName.includes('Skin')
                          ? 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop'
                        : featureName.includes('Massage') || featureName.includes('Therapy')
                          ? 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop'
                        : featureName.includes('Bridal') || featureName.includes('Wedding')
                          ? 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop'
                        // Bloom Flower Images
                        : featureName.includes('Fresh Daily') || featureName.includes('Daily Flowers')
                          ? 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Wedding Arrangements')
                          ? 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Event Decoration')
                          ? 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Delivery Service') || featureName.includes('Delivery')
                          ? 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Custom Bouquets') || featureName.includes('Bouquet')
                          ? 'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=600&h=400&fit=crop&q=80'
                        // Security Solutions Images
                        : featureName.includes('CCTV') || featureName.includes('Camera')
                          ? 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Access Control') || featureName.includes('Access')
                          ? 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Alarm') 
                          ? 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Monitoring') || featureName.includes('24/7')
                          ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Smart Home') || featureName.includes('Integration')
                          ? 'https://images.unsplash.com/photo-1558002038-bb4237b54a96?w=600&h=400&fit=crop&q=80'
                        // Bloom & Grace Gifts Images
                        : featureName.includes('Luxury Gift') || featureName.includes('Luxury')
                          ? 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Personalized') || featureName.includes('Custom Gift')
                          ? 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Corporate') || featureName.includes('Business')
                          ? 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Gift Wrapping') || featureName.includes('Wrapping')
                          ? 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Special Occasion') || featureName.includes('Celebrations')
                          ? 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop&q=80'
                        // Bloom & Brew Cafe Images
                        : featureName.includes('Specialty Coffee') || featureName.includes('Coffee')
                          ? 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Fresh Pastries') || featureName.includes('Pastries')
                          ? 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Breakfast') || featureName.includes('Menu')
                          ? 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('WiFi') || featureName.includes('Free WiFi')
                          ? 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop&q=80'
                        : featureName.includes('Comfortable Seating') || featureName.includes('Seating')
                          ? 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&h=400&fit=crop&q=80'
                        // Default flower image
                        : 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop'
                      }
                      alt={featureName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Light overlay only on hover for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Gradient Number Overlay */}
                    <div className="absolute top-4 right-4 text-6xl font-black text-white drop-shadow-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    {/* Icon */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 -mt-16`}>
                      <FeatureIcon className="h-8 w-8 text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl"></div>
                    </div>
                    
                    {/* Text Content */}
                    <h3 className="text-2xl font-black text-gray-900 mb-4">{featureName}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {featureDesc}
                    </p>
                  </div>
                  
                  {/* Hover Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="py-32 bg-gradient-to-br from-gray-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4">
                <div className={`h-1 w-16 bg-gradient-to-r ${service.color} rounded-full`}></div>
                <span className="text-sm font-bold text-pink-600 uppercase tracking-widest">Testimonials</span>
                <div className={`h-1 w-16 bg-gradient-to-r ${service.color} rounded-full`}></div>
              </div>
            </div>
            <h2 className="text-6xl font-black text-gray-900 mb-6">
              What Our <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>Customers</span> Say
            </h2>
            <p className="text-2xl text-gray-600">Real experiences from real people</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Al-Khalifa",
                review: "Absolutely amazing service! The attention to detail and professionalism is unmatched. I keep coming back!",
                rating: 5,
                image: "https://i.pravatar.cc/150?img=1"
              },
              {
                name: "Mohammed Ahmed",
                review: "Best experience I've had in Bahrain. The staff is incredibly friendly and the quality is outstanding.",
                rating: 5,
                image: "https://i.pravatar.cc/150?img=12"
              },
              {
                name: "Fatima Hassan",
                review: "I'm so impressed! Everything exceeded my expectations. Will definitely recommend to friends and family.",
                rating: 5,
                image: "https://i.pravatar.cc/150?img=5"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-white/80 rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
                style={{animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`, opacity: 0}}
              >
                {/* Quote Icon */}
                <div className={`absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white text-3xl font-bold">"</span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-pink-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>

                {/* Decorative gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stunning Image Gallery Section - Only for Beauty Salon */}
      {service.id === 'beauty-salon' && (
      <>
        {/* 📸 Before/After Transformation Gallery */}
        <div className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating shapes removed */}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <div className="flex items-center gap-4">
                  <Sparkles className="h-8 w-8 text-pink-400 animate-pulse" />
                  <span className="text-sm font-bold text-pink-400 uppercase tracking-widest">Transformations</span>
                  <Sparkles className="h-8 w-8 text-pink-400 animate-pulse" />
                </div>
              </div>
              <h2 className="text-6xl font-black text-white mb-6">
                Before & <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>After</span>
              </h2>
              <p className="text-2xl text-gray-300">See the amazing transformations we create</p>
            </div>

            {/* Before/After Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {service.beforeAfter?.map((transformation, index) => (
                <div 
                  key={index}
                  className="group relative"
                  style={{animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards`, opacity: 0}}
                >
                  <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:-translate-y-4">
                    {/* Before/After Container */}
                    <div className="grid grid-cols-2 gap-0">
                      {/* Before */}
                      <div className="relative">
                        <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-red-500/90 backdrop-blur-sm rounded-full">
                          <span className="text-white font-bold text-sm">BEFORE</span>
                        </div>
                        <img 
                          src={transformation.before}
                          alt="Before"
                          className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      
                      {/* After */}
                      <div className="relative">
                        <div className="absolute top-4 right-4 z-10 px-4 py-2 bg-green-500/90 backdrop-blur-sm rounded-full">
                          <span className="text-white font-bold text-sm">AFTER</span>
                        </div>
                        <img 
                          src={transformation.after}
                          alt="After"
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Divider Arrow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-2xl group-hover:scale-125 transition-transform duration-500`}>
                        <ChevronRight className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl">
                      <h3 className="text-xl font-bold text-white text-center">{transformation.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(`https://wa.me/97337748958?text=Hi! I'd like to book a transformation session at ${service.title}`, '_blank');
                }}
                className={`px-12 py-5 bg-gradient-to-r ${service.color} text-white rounded-full font-bold text-xl hover:scale-110 hover:shadow-2xl transition-all inline-flex items-center gap-3`}
              >
                Book Your Transformation
                <Sparkles className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Regular Gallery */}
        <div className="py-32 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-4">
                <div className={`h-1 w-16 bg-gradient-to-r ${service.color} rounded-full`}></div>
                <span className="text-sm font-bold text-pink-600 uppercase tracking-widest">Our Work</span>
                <div className={`h-1 w-16 bg-gradient-to-r ${service.color} rounded-full`}></div>
              </div>
            </div>
            <h2 className="text-6xl font-black text-gray-900 mb-6">
              See Our <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>Amazing Results</span>
            </h2>
            <p className="text-2xl text-gray-600">Where beauty meets perfection</p>
          </div>

          {/* Gallery Grid - Beautiful Masonry Style */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Image 1 - Tall */}
            <div className="group relative row-span-2 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=600&fit=crop"
                alt="Hair Styling"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Hair Styling</h3>
                  <p className="text-sm">Professional cuts & colors</p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=400&h=300&fit=crop"
                alt="Manicure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Nail Art</h3>
                  <p className="text-xs">Beautiful manicures</p>
                </div>
              </div>
            </div>

            {/* Image 3 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop"
                alt="Makeup"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Makeup</h3>
                  <p className="text-xs">Flawless beauty</p>
                </div>
              </div>
            </div>

            {/* Image 4 - Tall */}
            <div className="group relative row-span-2 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?w=400&h=600&fit=crop"
                alt="Spa Treatment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Spa & Massage</h3>
                  <p className="text-sm">Ultimate relaxation</p>
                </div>
              </div>
            </div>

            {/* Image 5 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop"
                alt="Facial Treatment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Facial Care</h3>
                  <p className="text-xs">Glowing skin</p>
                </div>
              </div>
            </div>

            {/* Image 6 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?w=400&h=300&fit=crop"
                alt="Bridal Makeup"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Bridal</h3>
                  <p className="text-xs">Your special day</p>
                </div>
              </div>
            </div>

            {/* Image 7 - Wide */}
            <div className="group relative col-span-2 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=300&fit=crop"
                alt="Hair Color"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Hair Coloring</h3>
                  <p className="text-sm">Expert color techniques</p>
                </div>
              </div>
            </div>

            {/* Image 8 */}
            <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=400&h=300&fit=crop"
                alt="Pedicure"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Pedicure</h3>
                  <p className="text-xs">Pamper your feet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery CTA */}
          <div className="text-center mt-16">
            <button 
              className={`group relative px-12 py-6 bg-gradient-to-r ${service.color} text-white rounded-full font-bold text-xl overflow-hidden hover:shadow-2xl hover:scale-110 transition-all inline-flex items-center gap-3`}
              onClick={(e) => {
                e.stopPropagation();
                window.open(`https://wa.me/97337748958?text=Hi! I'd like to see more of your beauty work and book an appointment`, '_blank');
              }}>
              <Heart className="h-6 w-6" />
              Book Your Transformation
            </button>
          </div>
        </div>
      </div>
      </>
      )}

      {/* Futuristic Contact Section */}
      <div className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info - Glassmorphism Cards */}
            <div className="space-y-6">
              <h2 className="text-6xl font-black text-white mb-12">
                Get in <span className="text-pink-400">Touch</span>
              </h2>
              
              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform`}>
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                    <p className="text-white/70 text-lg">{service.address}</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform`}>
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                    <p className="text-white/70 text-lg">{service.phone}</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-transform`}>
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Working Hours</h3>
                    <p className="text-white/70 text-lg">{service.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <div className="backdrop-blur-xl bg-white rounded-[3rem] p-12 shadow-2xl border border-white/20">
              <h3 className="text-4xl font-black text-gray-900 mb-8">Book Your Experience</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:outline-none transition-colors text-lg"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:outline-none transition-colors text-lg"
                    placeholder="+973 XXXX XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Service</label>
                  <select className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:outline-none transition-colors text-lg">
                    {service.features.map((feature, idx) => {
                      const featureName = typeof feature === 'string' ? feature : feature.name;
                      return <option key={idx}>{featureName}</option>;
                    })}
                  </select>
                </div>
                
                <button 
                  className={`w-full bg-gradient-to-r ${service.color} text-white px-8 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all`}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`https://wa.me/97337748958?text=Hi! I'd like to book an appointment for ${service.title}`, '_blank');
                  }}>
                  Book via WhatsApp
                </button>
                
                <a 
                  href={`tel:${service.phone}`}
                  className="w-full block text-center bg-gray-100 text-gray-900 px-8 py-5 rounded-2xl font-bold text-xl hover:bg-gray-200 transition-all"
                >
                  Or Call {service.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Map Section */}
      <div className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-black text-gray-900 mb-16 text-center">
            Find <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>Our Location</span>
          </h2>
          
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] border-8 border-white">
            <iframe
              src={service.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center mt-12">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${service.latitude},${service.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative px-12 py-5 bg-gradient-to-r ${service.color} text-white rounded-full font-bold text-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3`}
            >
              <MapPin className="h-6 w-6" />
              Get Directions
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${service.latitude},${service.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-white border-2 border-gray-300 text-gray-900 rounded-full font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Other Services - Modern Cards */}
      <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-black text-gray-900 mb-16 text-center">
            Explore <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>More</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {services.filter(s => s.id !== service.id).map((otherService) => (
              <button
                key={otherService.id}
                onClick={() => navigateToService(otherService.id)}
                className="group relative backdrop-blur-xl bg-gradient-to-br from-white to-pink-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-4 border border-white/20"
              >
                <div className={`bg-gradient-to-br ${otherService.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                  <otherService.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-black text-gray-900 text-lg">{otherService.title}</h3>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(30px) translateX(-20px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open(`https://wa.me/97337748958?text=Hi! I'm interested in ${service.title}`, '_blank')}
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="relative">
          {/* Pulsing rings */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-ring"></div>
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-ring" style={{animationDelay: '1s'}}></div>
          
          {/* Main button */}
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
            <MessageCircle className="h-8 w-8" />
          </div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl">
            Chat with us on WhatsApp
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </button>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Realistic Flying Butterflies - REMOVED */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* BB Logo - Large and Centered */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <Logo size="xl" className="drop-shadow-2xl" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to Blooming Butterflies
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
            Multi-Business Solutions in Bahrain. Your one-stop destination for life's special moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              Explore Services
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-pink-600 transition-all">
              Contact Us
            </a>
            <a href="tel:+97337748958" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now
            </a>
            <button 
              onClick={() => setIsChatOpen(true)}
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl inline-flex items-center gap-2 animate-pulse"
            >
              <MessageCircle className="h-5 w-5" />
              Customer Care 24x7
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our collection of premium services designed to enrich your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 cursor-pointer"
                onClick={() => navigateToService(service.id)}
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`,
                  opacity: 0
                }}
              >
                {/* Colorful Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle gradient at bottom for text readability only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Icon Badge - Colorful gradient background */}
                  <div className={`absolute top-6 right-6 bg-gradient-to-br ${service.color} p-4 rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Content Section with Modern Typography */}
                <div className="p-8 relative bg-white">
                  <h3 className={`text-3xl font-black mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-full font-bold group-hover:gap-5 group-hover:shadow-lg transition-all duration-300`}>
                    Learn More 
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Blooming Butterflies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner for comprehensive lifestyle solutions in Bahrain
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Where Excellence Meets Innovation
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Blooming Butterflies is Bahrain's premier multi-business solutions provider, bringing together five distinct service lines under one trusted brand. Since our inception, we've been dedicated to delivering exceptional experiences that enhance the quality of life for our valued clients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From elegant gifts to artisan coffee, from stunning florals to premium beauty services, and cutting-edge security solutions – we offer a comprehensive range of services designed to meet every aspect of modern living.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence, attention to detail, and passion for customer satisfaction have made us the go-to destination for discerning clients throughout Bahrain.
              </p>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl image-reveal">
                <img 
                  src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&h=800&fit=crop"
                  alt="About Us"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-3xl shadow-xl max-w-xs animate-scale-in" style={{animationDelay: '0.5s'}}>
                <p className="text-4xl font-bold mb-2">5+</p>
                <p className="text-lg">Premium Services Under One Roof</p>
              </div>
            </div>
          </div>

          <div className="relative mt-20">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-16">
                <div className="inline-block">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded"></div>
                    <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Excellence Redefined</span>
                    <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
                  </div>
                </div>
                <h3 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                  Why Choose Blooming Butterflies?
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience the difference that true excellence makes in every interaction
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="group relative bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-pink-300 luxury-card image-reveal"
                     style={{animation: 'fadeInUp 0.6s ease-out forwards', opacity: 0}}>
                  <div className="absolute top-4 right-4 text-pink-200 text-6xl font-bold opacity-20">01</div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Star className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Unmatched Quality</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Every product, every service, every interaction is crafted with meticulous attention to detail. We don't just meet standards – we set them.
                    </p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-purple-300 luxury-card image-reveal"
                     style={{animation: 'fadeInUp 0.6s ease-out 0.1s forwards', opacity: 0}}>
                  <div className="absolute top-4 right-4 text-purple-200 text-6xl font-bold opacity-20">02</div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <ShoppingBag className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Ultimate Convenience</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Five premium services, one trusted destination. Save time and enjoy seamless service across all your lifestyle needs with unparalleled ease.
                    </p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-blue-300 luxury-card image-reveal"
                     style={{animation: 'fadeInUp 0.6s ease-out 0.2s forwards', opacity: 0}}>
                  <div className="absolute top-4 right-4 text-blue-200 text-6xl font-bold opacity-20">03</div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Trusted Excellence</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Built on years of reliability and thousands of smiling clients. Our reputation speaks for itself – Bahrain's most trusted name in lifestyle solutions.
                    </p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-amber-300 luxury-card image-reveal"
                     style={{animation: 'fadeInUp 0.6s ease-out 0.3s forwards', opacity: 0}}>
                  <div className="absolute top-4 right-4 text-amber-200 text-6xl font-bold opacity-20">04</div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Coffee className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Masterful Expertise</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our team of passionate experts brings decades of combined experience, turning every service into an art form that delights and inspires.
                    </p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-rose-300 luxury-card image-reveal"
                     style={{animation: 'fadeInUp 0.6s ease-out 0.4s forwards', opacity: 0}}>
                  <div className="absolute top-4 right-4 text-rose-200 text-6xl font-bold opacity-20">05</div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Personalized Care</h4>
                    <p className="text-gray-600 leading-relaxed">
                      You're not just a customer – you're family. We listen, understand, and tailor every experience to perfectly match your unique desires and dreams.
                    </p>
                  </div>
                </div>

                <div className="group relative bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-purple-300 luxury-card image-reveal"
                     style={{animation: 'fadeInUp 0.6s ease-out 0.5s forwards', opacity: 0}}>
                  <div className="absolute top-4 right-4 text-purple-200 text-6xl font-bold opacity-20">06</div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <Flower className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Perfection in Details</h4>
                    <p className="text-gray-600 leading-relaxed">
                      From the subtlest touch to the grandest gesture, every detail matters. We craft experiences that leave lasting impressions and cherished memories.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-2xl p-10 text-white text-center">
                <h4 className="text-3xl font-bold mb-4">Ready to Experience Excellence?</h4>
                <p className="text-xl mb-8 text-white/90">Join thousands of satisfied clients who've made Blooming Butterflies their lifestyle partner</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.open('https://wa.me/97337748958?text=Hi! I want to book an appointment with Blooming Butterflies', '_blank')}
                    className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all">
                    Book Your Experience Today
                  </button>
                  <a href="tel:+97337748958" className="bg-green-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-110 hover:shadow-2xl transition-all inline-flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    +973 3774 8958
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-white/90">We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-white/90 mb-3">+973 3774 8958</p>
              <a href="tel:+97337748958" className="inline-block bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full font-semibold transition-all">
                Call Now
              </a>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-white/90 mb-3">Bloomingbutterfliesbh@gmail.com</p>
              <a href="mailto:Bloomingbutterfliesbh@gmail.com" className="inline-block bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full font-semibold transition-all">
                Send Email
              </a>
            </div>

            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-white/90 mb-3">Quick Response</p>
              <a href="https://wa.me/97337748958" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full font-semibold transition-all">
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://facebook.com/bloomingbutterflies" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 hover:scale-110 transition-all">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://instagram.com/bloomingbutterflies" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 hover:scale-110 transition-all">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://wa.me/97337748958" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-4 rounded-full hover:bg-green-600 hover:scale-110 transition-all">
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Logo size="md" className="brightness-110" />
              <h3 className="text-2xl font-bold">Blooming Butterflies</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Multi-Business Solutions in Bahrain
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Blooming Butterflies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed w-full z-50 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <button onClick={navigateToHome} className="flex items-center gap-3">
              {/* Blooming Butterflies Logo */}
              <Logo size="md" />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Blooming Butterflies
                </h1>
                <p className="text-sm text-white/90">
                  Multi-Business Solutions in Bahrain
                </p>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-6">
              <button onClick={navigateToHome} className="font-semibold text-white hover:text-yellow-200 transition-colors">
                Home
              </button>
              
              {/* Services Dropdown Menu */}
     {/* Services Dropdown Menu */}
              <div className="relative">
                <button 
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="font-semibold text-white hover:text-yellow-200 transition-colors flex items-center gap-1"
                >
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isServicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl py-2 z-50"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => navigateToService(service.id)}
                        className="w-full text-left px-4 py-3 hover:bg-pink-50 transition-colors flex items-center gap-3 group"
                      >
                        <service.icon className="h-5 w-5 text-pink-600" />
                        <span className="text-gray-900 group-hover:text-pink-600 font-medium">{service.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              
              <a href="#about" className="font-semibold text-white hover:text-yellow-200 transition-colors">
                About
              </a>
              
              <a href="#contact" className="font-semibold text-white hover:text-yellow-200 transition-colors">
                Contact
              </a>
              
              <button 
                onClick={() => window.open('https://wa.me/97337748958?text=Hi! I want to book with Blooming Butterflies', '_blank')}
                className="bg-white text-pink-600 px-6 py-2 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all">
                Book Now
              </button>
            </nav>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button onClick={navigateToHome} className="block w-full text-left text-white hover:text-yellow-200 font-semibold py-2">Home</button>
              
              <div className="border-t border-white/20 pt-2">
                <p className="text-xs font-bold text-white/70 uppercase mb-2">Our Services</p>
                {services.map(service => (
                  <button 
                    key={service.id}
                    onClick={() => navigateToService(service.id)} 
                    className="block w-full text-left text-white hover:text-yellow-200 font-semibold py-2 pl-4"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
              
              <a href="#about" className="block w-full text-left text-white hover:text-yellow-200 font-semibold py-2">About</a>
              
              <a href="#contact" className="block w-full text-left text-white hover:text-yellow-200 font-semibold py-2">Contact</a>
              
              <button 
                onClick={() => window.open('https://wa.me/97337748958?text=Hi! I want to book with Blooming Butterflies', '_blank')}
                className="w-full bg-white text-pink-600 px-6 py-3 rounded-full font-bold hover:shadow-xl">
                Book Now
              </button>
            </div>
          </div>
        )}
      </header>

      {currentPage === 'home' ? <HomePage /> : <ServicePage service={currentService} />}

      {/* Floating WhatsApp Button - Bottom Right - Shows on ALL pages */}
      <a
        href="https://wa.me/97337748958?text=Hi!%20I%20want%20to%20book%20with%20Blooming%20Butterflies"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          window.open('https://wa.me/97337748958?text=Hi!%20I%20want%20to%20book%20with%20Blooming%20Butterflies', '_blank');
        }}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 cursor-pointer"
        style={{ zIndex: 9999 }}
        title="Chat on WhatsApp"
      >
        <svg className="h-8 w-8" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
          1
        </span>
      </a>

      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl z-50 flex flex-col" style={{ height: '600px', maxHeight: '80vh' }}>
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-t-3xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full p-1">
                <Logo size="sm" />
              </div>
              <div>
                <h3 className="font-bold">Blooming Butterflies</h3>
                <p className="text-xs text-white/80">Online Now</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-br-none'
                      : msg.isTyping 
                      ? 'bg-gray-100 text-gray-500 rounded-bl-none italic'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-3 rounded-full hover:shadow-lg transition-all"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">
              Ask about our services, hours, or locations! Or call +973 3774 8958
            </p>
          </div>
        </div>
      )}

      <style>{`
        /* Butterfly animations REMOVED */
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .animate-on-scroll {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .parallax-slow {
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .luxury-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        .image-reveal {
          overflow: hidden;
        }
        
        .image-reveal img {
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .image-reveal:hover img {
          transform: scale(1.15) rotate(2deg);
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BloomingButterfliesWebsite;