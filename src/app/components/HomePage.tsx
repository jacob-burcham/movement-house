import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Coffee, Home, Users, Dumbbell, MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import WaitlistBanner from './WaitlistBanner';
import logo from '@/assets/a8269d17c5866bc6a6d515c1fb2f6649e366ef00.png';
import heroBackground from '@/assets/Dance_210.jpg';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Waitlist Banner */}
      <WaitlistBanner />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="The Station Logo" className="h-30" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-brand-red transition">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-brand-red transition">
                About
              </button>
              <button onClick={() => scrollToSection('classes')} className="text-gray-700 hover:text-brand-red transition">
                Classes
              </button>
              <button onClick={() => scrollToSection('membership')} className="text-gray-700 hover:text-brand-red transition">
                Membership
              </button>
              <button onClick={() => scrollToSection('amenities')} className="text-gray-700 hover:text-brand-red transition">
                Amenities
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-brand-red transition">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red transition">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red transition">
                About
              </button>
              <button onClick={() => scrollToSection('classes')} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red transition">
                Classes
              </button>
              <button onClick={() => scrollToSection('membership')} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red transition">
                Membership
              </button>
              <button onClick={() => scrollToSection('amenities')} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red transition">
                Amenities
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-brand-red transition">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl text-white mb-6">
            Move Your Body.<br />
            <span className="text-brand-yellow">Build your community.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            A community of adults who love to move, express themselves, and connect with others. Join us at The Station.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist">
              <Button 
                className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-6 rounded-full"
              >
                Join the Waitlist
              </Button>
            </Link>
            <Button 
              onClick={() => scrollToSection('classes')}
              className="bg-brand-purple hover:bg-brand-purple-dark text-white px-8 py-6 rounded-full"
            >
              Explore Classes
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
                Welcome to <span className="text-brand-purple">The Station</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded by a professional dancer and instructor, The Station is more than just a studio — it's a community dedicated to movement, expression, and wellness.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that movement is for everyone. Whether you're a seasoned dancer, a yoga enthusiast, or just beginning your movement journey, you'll find a home here.
              </p>
              <p className="text-lg text-gray-700">
                Our state-of-the-art studio spaces are designed to inspire creativity and foster connection, while our welcoming lounge and coffee bar create the perfect environment to relax and build community.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1760542939833-9c5acf4c5203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsZXQlMjBkYW5jZXIlMjBtb3ZlbWVudHxlbnwxfHx8fDE3NjY0ODY5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dancer in motion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-20 px-4 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Our <span className="text-brand-yellow">Classes</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Discover a variety of movement-centered classes designed for all levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dance Classes */}
            <Card className="overflow-hidden hover:shadow-xl transition group border-none">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1686172164593-626f19be951c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYW5jZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjY1MTYwNDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dance Classes"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center mb-4">
                  <Dumbbell className="text-white" size={24} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">Dance</h3>
                <p className="text-gray-700">
                  Contemporary, ballet, hip-hop, and more. Express yourself through movement with our expert instructors.
                </p>
              </CardContent>
            </Card>

            {/* Yoga Classes */}
            <Card className="overflow-hidden hover:shadow-xl transition group border-none">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1651077837628-52b3247550ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3MlMjBzdHVkaW98ZW58MXx8fHwxNzY2NDQ1MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Yoga Classes"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-purple rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">Yoga</h3>
                <p className="text-gray-700">
                  Find balance and strength through vinyasa, hatha, and restorative yoga practices for all levels.
                </p>
              </CardContent>
            </Card>

            {/* Calisthenics Classes */}
            <Card className="overflow-hidden hover:shadow-xl transition group border-none">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1650091902075-9447b0b5d893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMHdvcmtvdXQlMjBhcHBhcmVsfGVufDF8fHx8MTc2NjUxNjA0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Calisthenics"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center mb-4">
                  <Dumbbell className="text-white" size={24} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">Calisthenics</h3>
                <p className="text-gray-700">
                  Build functional strength and mobility using bodyweight exercises in our guided sessions.
                </p>
              </CardContent>
            </Card>

            {/* Private Events */}
            <Card className="overflow-hidden hover:shadow-xl transition group border-none">
              <div className="h-48 bg-gradient-to-br from-brand-red to-brand-red-dark flex items-center justify-center">
                <Home className="text-white" size={64} />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">Private Events</h3>
                <p className="text-gray-700">
                  Book a dance party or private event for your team, family, or friends. We offer a variety of options to suit your needs.
                </p>
              </CardContent>
            </Card>

            {/* Workshops */}
            <Card className="overflow-hidden hover:shadow-xl transition group border-none">
              <div className="h-48 bg-gradient-to-br from-brand-purple to-brand-purple-dark flex items-center justify-center">
                <Users className="text-white" size={64} />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">Workshops</h3>
                <p className="text-gray-700">
                  Join special events and workshops with guest instructors and explore new movement styles.
                </p>
              </CardContent>
            </Card>

            {/* Private Sessions */}
            <Card className="overflow-hidden hover:shadow-xl transition group border-none">
              <div className="h-48 bg-gradient-to-br from-brand-yellow to-brand-yellow-dark flex items-center justify-center">
                <Dumbbell className="text-white" size={64} />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-3 text-gray-900">Private Sessions</h3>
                <p className="text-gray-700">
                  Book one-on-one or small group sessions for personalized instruction and focused training.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 px-4 bg-gradient-to-br from-brand-red to-brand-yellow text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Membership Options
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Choose the plan that fits your lifestyle and movement goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Membership */}
            <Card className="bg-white text-gray-900 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl">$40</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>4 classes per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Access to coffee lounge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>1 workshop per month</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-red hover:bg-brand-red-dark text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Premium Membership */}
            <Card className="bg-white text-gray-900 border-4 border-[#FFD700] relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FFD700] text-gray-900 px-4 py-1 text-sm">
                Popular
              </div>
              <CardContent className="p-8 pt-12">
                <h3 className="text-2xl mb-2">Unlimited</h3>
                <div className="mb-6">
                  <span className="text-4xl">$80</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Unlimited classes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Unlimited workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>1 guest pass per month</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* VIP Membership */}
            <Card className="bg-white text-gray-900 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-2">Elite</h3>
                <div className="mb-6">
                  <span className="text-4xl">$120</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Unlimited classes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Unlimited workshops</span>
                  </li>
                                    <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>3 guest passes per month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>10% off merchandise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>2 private sessions/month</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-yellow hover:bg-brand-yellow-dark text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              More Than Just a <span className="text-brand-purple">Studio</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The Station is designed to be a welcoming community space where you can relax, connect, and refuel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Lounge and Coffee Bar */}
            <div className="space-y-6">
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1671363728782-7446c1772bc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBlc3ByZXNzbyUyMGJhcnxlbnwxfHx8fDE3NjY1MTYwNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Lounge and Coffee Bar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center">
                    <Coffee className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl text-gray-900">Lounge & Coffee Bar</h3>
                </div>
                <p className="text-gray-700">
                  Relax in our welcoming lounge with premium coffee and espresso drinks. The perfect spot to unwind and connect with fellow members.
                </p>
              </div>
            </div>

            {/* Curated Merchandise */}
            <div className="space-y-6">
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1650091902075-9447b0b5d893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMHdvcmtvdXQlMjBhcHBhcmVsfGVufDF8fHx8MTc2NjUxNjA0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Curated Merchandise"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-purple rounded-lg flex items-center justify-center">
                    <Dumbbell className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl text-gray-900">Curated Merchandise</h3>
                </div>
                <p className="text-gray-700">
                  Shop our carefully selected collection of workout and dance apparel, designed for movement and style. Members enjoy exclusive discounts.
                </p>
              </div>
            </div>

            {/* An Inclusive Community */}
            <div className="space-y-6">
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="An Inclusive Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl text-gray-900">An Inclusive Community</h3>
                </div>
                <p className="text-gray-700">
                  Join a welcoming space where everyone belongs. We celebrate diversity and create connections through the joy of movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-gray-900">
              Visit <span className="text-brand-red">The Station</span>
            </h2>
            <p className="text-xl text-gray-700">
              Come see our space and join our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-red rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Location</h3>
                  <p className="text-gray-700">
                    123 Movement Street<br />
                    Downtown District<br />
                    Your City, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Phone</h3>
                  <p className="text-gray-700">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">Email</h3>
                  <p className="text-gray-700">hello@thestation.studio</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 text-gray-900">Studio Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                  <p>Saturday: 8:00 AM - 7:00 PM</p>
                  <p>Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl mb-4 text-gray-900">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-brand-red transition">
                    <Instagram className="text-white" size={24} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-brand-purple transition">
                    <Facebook className="text-white" size={24} />
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-6 text-gray-900">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block mb-2 text-gray-700">Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700">Email</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-gray-700">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
                      placeholder="Tell us about your movement goals..."
                    />
                  </div>
                  <Button className="w-full bg-brand-red hover:bg-brand-red-dark text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <img src={logo} alt="The Station Logo" className="h-36" />
          </div>
          <p className="text-gray-400 mb-4">
            A movement studio where creativity, wellness, and community come together.
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 The Station. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
