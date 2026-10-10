import React, { useState } from 'react';
import { 
  Phone, MapPin, Calendar, Car, Shield, Clock, Award, Star, 
  CheckCircle2, ChevronRight, Menu, X, Users, Fuel, MessageSquare, 
  Calculator, Navigation, ArrowRight, Compass, ShieldCheck, Headphones
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [calcTripType, setCalcTripType] = useState('outstation');
  const [calcCar, setCalcCar] = useState('innova');
  const [calcDays, setCalcDays] = useState(2);

  const fleet = [
    {
      id: 1,
      name: 'Innova Crysta',
      category: 'suv',
      type: 'Executive SUV',
      seats: '7 Seater',
      transmission: 'Automatic / Manual',
      priceKm: '₹18',
      minKm: '300 km/day',
      driverBatta: '₹500 / day',
      features: ['Dual AC', 'Push Back Leather Seats', 'GPS Live Tracking', 'Carrier Available'],
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800',
      popular: true
    },
    {
      id: 2,
      name: 'BMW 5 Series',
      category: 'luxury',
      type: 'Wedding & VIP Luxury',
      seats: '4 Seater',
      transmission: 'Automatic',
      priceKm: '₹55',
      minKm: '250 km/day',
      driverBatta: '₹1,000 / day',
      features: ['Sunroof', 'Ambient Lighting', 'VIP Dressed Driver', 'Wedding Decoration Ready'],
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
      popular: true
    },
    {
      id: 3,
      name: 'Swift Dzire',
      category: 'sedan',
      type: 'Economy Sedan',
      seats: '4 Seater',
      transmission: 'Manual',
      priceKm: '₹13',
      minKm: '300 km/day',
      driverBatta: '₹400 / day',
      features: ['Clean Interior', 'Chilled AC', 'Bluetooth Audio', 'Best Fuel Efficiency'],
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800',
      popular: false
    },
    {
      id: 4,
      name: 'Mercedes-Benz E-Class',
      category: 'luxury',
      type: 'Royal Luxury',
      seats: '4 Seater',
      transmission: 'Automatic',
      priceKm: '₹65',
      minKm: '250 km/day',
      driverBatta: '₹1,200 / day',
      features: ['Panoramic Sunroof', 'Burmester Sound System', 'Ultra Smooth Ride', 'VIP Security Ready'],
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
      popular: false
    },
    {
      id: 5,
      name: 'Fortuner Legender',
      category: 'suv',
      type: 'Premium Off-Road SUV',
      seats: '7 Seater',
      transmission: 'Automatic 4x4',
      priceKm: '₹35',
      minKm: '300 km/day',
      driverBatta: '₹800 / day',
      features: ['4x4 Capability', 'JBL Sound System', 'Power Tailgate', 'High Ground Clearance'],
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
      popular: true
    },
    {
      id: 6,
      name: 'Urbania / Tempo Traveller',
      category: 'tempo',
      type: 'Luxury Group Traveller',
      seats: '12 / 17 / 26 Seater',
      transmission: 'Manual',
      priceKm: '₹26',
      minKm: '350 km/day',
      driverBatta: '₹600 / day',
      features: ['Reclining Push Back Seats', 'Individual AC Vents', 'LED TV & Karaoke', 'Huge Luggage Boot'],
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800',
      popular: false
    }
  ];

  const packages = [
    { title: 'Tirupati Pilgrimage Package', days: '2 Days / 1 Night', vehicle: 'Innova Crysta', price: '₹11,999/-', badge: 'Most Popular' },
    { title: 'Airport Pickup & Drop', days: 'Fixed Rate', vehicle: 'Swift Dzire / Etios', price: '₹1,800/-', badge: '24/7 Available' },
    { title: 'Araku & Vizag Tour', days: '3 Days / 2 Nights', vehicle: 'Innova Crysta', price: '₹17,499/-', badge: 'Best Value' },
    { title: 'Grand Wedding Luxury Fleet', days: 'Full Day (12 Hrs)', vehicle: 'BMW 5 Series + 2 Innovas', price: '₹28,000/-', badge: 'VIP Package' }
  ];

  const filteredFleet = activeTab === 'all' 
    ? fleet 
    : fleet.filter(car => car.category === activeTab);

  const handleWhatsAppBooking = (carName = 'General Enquiry') => {
    const phoneNumber = "919999999999";
    const msg = `Hello Roameo Rides! Nenu website dwara ${carName} booking details telusukovalani anukuntunnanu.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Fare Calculation Logic
  const getEstimatedPrice = () => {
    let rate = calcCar === 'dzire' ? 13 : calcCar === 'innova' ? 18 : 55;
    let minKm = calcCar === 'dzire' ? 300 : calcCar === 'innova' ? 300 : 250;
    let batta = calcCar === 'dzire' ? 400 : calcCar === 'innova' ? 500 : 1000;
    return (minKm * rate * calcDays) + (batta * calcDays);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 text-xs md:text-sm font-bold py-2 px-4 text-center tracking-wide">
        ⚡ SPECIAL OFFER: 10% Discount on Outstation Trips & Wedding Luxury Bookings This Month!
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 w-full bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="bg-amber-500 p-2.5 rounded-xl text-slate-950 font-black shadow-lg shadow-amber-500/20">
                <Car className="h-7 w-7" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-wider text-white block leading-none">
                  ROAMEO <span className="text-amber-500">RIDES</span>
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">Luxury Travels & Rentals</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider">
              <a href="#home" className="hover:text-amber-500 transition duration-200">Home</a>
              <a href="#fleet" className="hover:text-amber-500 transition duration-200">Our Fleet</a>
              <a href="#pricing" className="hover:text-amber-500 transition duration-200">Tariff Chart</a>
              <a href="#calculator" className="hover:text-amber-500 transition duration-200">Fare Estimator</a>
              <a href="#packages" className="hover:text-amber-500 transition duration-200">Tour Packages</a>
              <a href="#why-us" className="hover:text-amber-500 transition duration-200">Why Choose Us</a>
              <a 
                onClick={() => handleWhatsAppBooking('Instant Ride')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 px-6 py-3 rounded-xl font-extrabold transition shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-slate-950" /> Instant Book
              </a>
            </div>

            <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 pt-4 pb-8 space-y-4 font-bold text-sm">
            <a href="#home" className="block text-slate-300 hover:text-amber-500" onClick={()=>setIsMenuOpen(false)}>Home</a>
            <a href="#fleet" className="block text-slate-300 hover:text-amber-500" onClick={()=>setIsMenuOpen(false)}>Our Fleet</a>
            <a href="#pricing" className="block text-slate-300 hover:text-amber-500" onClick={()=>setIsMenuOpen(false)}>Tariff Chart</a>
            <a href="#calculator" className="block text-slate-300 hover:text-amber-500" onClick={()=>setIsMenuOpen(false)}>Fare Estimator</a>
            <a href="#packages" className="block text-slate-300 hover:text-amber-500" onClick={()=>setIsMenuOpen(false)}>Tour Packages</a>
            <button 
              onClick={() => { setIsMenuOpen(false); handleWhatsAppBooking('Mobile Menu'); }}
              className="w-full bg-amber-500 text-slate-950 py-3 rounded-xl font-bold mt-4"
            >
              Book Ride via WhatsApp
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920" 
            alt="Luxury Fleet" 
            className="w-full h-full object-cover opacity-25 scale-105 transform hover:scale-100 transition duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Award className="w-4 h-4" /> Andhra & Telangana's Premium Car Rental
            </div>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
              Experience Premium Comfort & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Unmatched Luxury</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed mb-8">
              Whether it’s a Pilgrimage Tour, Outstation Trip, Airport Transfer, or Wedding Event — Choose from 50+ Sanitized Luxury Vehicles with Certified Professional Drivers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleWhatsAppBooking('Hero Button')}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold px-8 py-4 rounded-xl transition shadow-xl shadow-amber-500/25 flex items-center justify-center gap-3 text-base"
              >
                Book Your Ride Now <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="#fleet"
                className="bg-slate-900/80 border border-slate-700 hover:border-amber-500/50 text-white font-bold px-8 py-4 rounded-xl transition flex items-center justify-center backdrop-blur-md"
              >
                Explore Fleet & Prices
              </a>
            </div>

            {/* Live Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-800/80 max-w-2xl">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-500">50,000+</p>
                <p className="text-xs text-slate-400 font-medium">Successful Trips</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-500">4.9 ★</p>
                <p className="text-xs text-slate-400 font-medium">Google Rating</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-amber-500">24/7</p>
                <p className="text-xs text-slate-400 font-medium">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="py-12 bg-slate-900/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Sanitized Vehicles</h4>
                <p className="text-xs text-slate-400 mt-1">Deep cleaned & disinfected before every single trip.</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Verified Drivers</h4>
                <p className="text-xs text-slate-400 mt-1">Uniformed, background checked & polite drivers.</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">100% On-Time Arrival</h4>
                <p className="text-xs text-slate-400 mt-1">Guaranteed doorstep pickup without any delays.</p>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-start gap-4">
              <div className="bg-amber-500/10 p-3 rounded-xl text-amber-500 shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">No Hidden Charges</h4>
                <p className="text-xs text-slate-400 mt-1">100% transparent billing with clear GST breakdown.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase with Category Filter */}
      <section id="fleet" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-500 text-xs font-extrabold tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
              Fleet Collection
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
              Select Your Ideal Ride
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              All vehicles are equipped with dual AC, music systems, GPS tracking, and ample luggage space.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'all', label: 'All Vehicles' },
              { id: 'suv', label: 'SUVs & Innova' },
              { id: 'sedan', label: 'Sedans' },
              { id: 'luxury', label: 'Wedding Luxury' },
              { id: 'tempo', label: 'Group Travellers' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition ${
                  activeTab === tab.id 
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' 
                    : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFleet.map((car) => (
              <div 
                key={car.id} 
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition duration-300 flex flex-col group"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={car.image} 
                    alt={car.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  
                  {car.popular && (
                    <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-black text-[10px] uppercase px-3 py-1 rounded-full shadow-md">
                      ★ Top Selected
                    </span>
                  )}

                  <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-slate-300 font-bold text-xs px-3 py-1 rounded-full border border-slate-700">
                    {car.type}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-2xl font-black text-white">{car.name}</h3>
                      <div className="text-right">
                        <span className="text-2xl font-black text-amber-500">{car.priceKm}</span>
                        <span className="text-slate-400 text-xs font-normal"> / km</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 py-3 border-y border-slate-800 my-4">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-amber-500" /> {car.seats}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-4 h-4 text-amber-500" /> {car.transmission}
                      </div>
                      <div className="flex items-center gap-1.5 col-span-2">
                        <Navigation className="w-4 h-4 text-amber-500" /> Min. Coverage: {car.minKm}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {car.features.map((feat, idx) => (
                        <li key={idx} className="text-slate-300 text-xs flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleWhatsAppBooking(car.name)}
                    className="w-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-extrabold py-3.5 rounded-xl transition duration-300 text-sm flex items-center justify-center gap-2 border border-slate-700 hover:border-amber-500"
                  >
                    Book {car.name} <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fare Estimator Interactive Calculator */}
      <section id="calculator" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-amber-500 p-3 rounded-2xl text-slate-950">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Instant Fare Estimator</h3>
                  <p className="text-xs text-slate-400">Calculate your estimated trip charges in 3 simple steps</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Select Vehicle</label>
                  <select 
                    value={calcCar}
                    onChange={(e) => setCalcCar(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white font-bold focus:border-amber-500 outline-none"
                  >
                    <option value="dzire">Swift Dzire (Sedan)</option>
                    <option value="innova">Innova Crysta (7 Seater SUV)</option>
                    <option value="bmw">BMW 5 Series (Luxury)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Number of Days</label>
                  <select 
                    value={calcDays}
                    onChange={(e) => setCalcDays(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white font-bold focus:border-amber-500 outline-none"
                  >
                    <option value={1}>1 Day Trip</option>
                    <option value={2}>2 Days Trip</option>
                    <option value={3}>3 Days Trip</option>
                    <option value={5}>5 Days Trip</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 mb-2">Trip Type</label>
                  <select 
                    value={calcTripType}
                    onChange={(e) => setCalcTripType(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white font-bold focus:border-amber-500 outline-none"
                  >
                    <option value="outstation">Outstation Round Trip</option>
                    <option value="local">Local City Rental</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs text-slate-400 font-semibold block uppercase">Estimated Tariff Total</span>
                  <span className="text-3xl sm:text-4xl font-black text-amber-500">₹{getEstimatedPrice().toLocaleString('en-IN')}*</span>
                  <span className="text-[11px] text-slate-500 block mt-1">*Includes Driver Batta & Min. Daily Kilometers. Tolls & Parking Extra.</span>
                </div>

                <button 
                  onClick={() => handleWhatsAppBooking(`Fare Calculator Quote for ${calcCar} (${calcDays} Days)`)}
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-8 py-4 rounded-xl transition whitespace-nowrap"
                >
                  Confirm Quote on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tour Packages */}
      <section id="packages" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-amber-500 text-xs font-extrabold tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
              Curated Trips
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4">Popular All-Inclusive Tour Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-amber-500 transition relative flex flex-col justify-between">
                <div>
                  <span className="bg-amber-500/20 text-amber-400 text-[10px] font-black uppercase px-2.5 py-1 rounded-md">
                    {pkg.badge}
                  </span>
                  <h4 className="text-xl font-extrabold text-white mt-4 mb-2">{pkg.title}</h4>
                  <p className="text-xs text-slate-400 font-medium">Duration: {pkg.days}</p>
                  <p className="text-xs text-slate-400 font-medium mt-1">Vehicle: {pkg.vehicle}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">Starting At</span>
                    <span className="text-xl font-black text-amber-500">{pkg.price}</span>
                  </div>
                  <button 
                    onClick={() => handleWhatsAppBooking(pkg.title)}
                    className="bg-amber-500 p-2.5 rounded-xl text-slate-950 font-bold hover:bg-amber-400 transition"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-slate-400 font-bold mb-2">ROAMEO RIDES LUXURY TRAVELS</p>
          <p className="mb-4">Hyderabad | Vijayawada | Visakhapatnam | Tirupati | Anantapur</p>
          <p>© 2026 Roameo Rides. Designed & Developed by Sunil Digital Academy.</p>
        </div>
      </footer>
    </div>
  );
}