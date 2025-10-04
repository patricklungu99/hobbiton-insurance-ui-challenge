import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Car, Clock, Star, ChevronRight, Users, Award, Zap } from 'lucide-react';
import Swal from 'sweetalert2';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isVisible] = useState(true);
  // const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // useEffect(() => {
  //   setIsVisible(true);
  //   const interval = setInterval(() => {
  //     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "Get Quote in 60 Seconds",
      description: "Lightning-fast quote generation with our smart algorithm"
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-600" />,
      title: "Comprehensive Coverage",
      description: "Full protection for your vehicle with customizable options"
    },
    {
      icon: <Star className="w-8 h-8 text-emerald-600" />,
      title: "Best Market Rates",
      description: "Competitive pricing with transparent, no-hidden-fees policy"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs"
    }
  ];

  // const testimonials = [
  //   {
  //     name: "Sarah Mwansa",
  //     location: "Lusaka",
  //     text: "Got my motor insurance quote in under a minute! The process was so smooth and transparent.",
  //     rating: 5
  //   },
  //   {
  //     name: "James Banda",
  //     location: "Ndola",
  //     text: "Best rates I've found in Zambia. The coverage options are exactly what I needed.",
  //     rating: 5
  //   },
  //   {
  //     name: "Grace Phiri",
  //     location: "Kitwe",
  //     text: "Finally, an insurance platform that actually works! Clean interface and great service.",
  //     rating: 5
  //   }
  // ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "60s", label: "Average Quote Time" }
  ];

  const handleGetQuote = () => {
    navigate('/quote');
  };

  const handlePopup = () => {
    Swal.fire({
      icon: 'info',
      title: 'Feature Coming Soon',
      text: 'I’d love to, but due to time and scope... I couldn’t.',
      confirmButtonText: 'Understood',
    });
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img
                src="https://www.hobbiton.tech/assets/logo2-7db998ca.png"
                alt="Hobbiton Technologies"
                className="w-12 h-12 object-contain"
              />
              <div className="text-xl font-bold text-emerald-800">
                Motor<span className="text-red-600">Guard</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">Features</a>
              {/* <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a> */}
              <a href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
              <button
                onClick={handleGetQuote}
                className="bg-emerald-600 text-white px-6 py-2 cursor-pointer rounded-full hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                Powered by Hobbiton Technologies
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Motor Insurance
                <span className="block text-emerald-600">Made Simple</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get comprehensive motor insurance coverage in Zambia with our intelligent quote system.
                Fast, reliable, and tailored to your needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={handleGetQuote}
                  className="bg-emerald-600 text-white px-8 py-4 cursor-pointer  rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Get My Quote Now
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handlePopup}
                  className="border-2 border-emerald-600 cursor-pointer  text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">4.9/5 rating</span>
                </div>
                <div className="text-gray-600">
                  Trusted by 50,000+ drivers
                </div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Car className="w-8 h-8 text-emerald-600" />
                      <h3 className="text-xl font-bold text-gray-900">Quick Quote Preview</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Make</label>
                        <div className="bg-gray-50 rounded-lg p-3 text-gray-900">Toyota Corolla</div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Coverage Type</label>
                        <div className="bg-gray-50 rounded-lg p-3 text-gray-900">Comprehensive</div>
                      </div>

                      <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Estimated Monthly Premium</span>
                          <span className="text-2xl font-bold text-emerald-600">K450</span>
                        </div>
                      </div>

                      <button className="w-full bg-emerald-600 text-white cursor-pointer  py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                        Get Detailed Quote
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                  <Award className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MotorGuard?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of motor insurance with our innovative platform designed for Zambian drivers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-xl mb-8 text-emerald-100">
            Join thousands of satisfied customers who trust MotorGuard for their insurance needs
          </p>
          <button
            onClick={handleGetQuote}
            className="bg-white text-emerald-600 px-8 py-4 rounded-full cursor-pointer text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Your Free Quote Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 MotorGuard by Hobbiton Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;