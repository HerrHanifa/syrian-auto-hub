import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Clock, Car, HelpCircle } from 'lucide-react';

// Sample car data (in a real app, this would come from an API or state management)
const featuredCars = [
  {
    id: '1',
    title: 'Toyota Camry 2020',
    price: 20000,
    location: 'Damascus, Syria',
    year: 2020,
    mileage: 45000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1336&q=80',
    featured: true,
  },
  {
    id: '2',
    title: 'Honda Accord 2019',
    price: 18500,
    location: 'Aleppo, Syria',
    year: 2019,
    mileage: 50000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1325&q=80',
    featured: true,
  },
  {
    id: '3',
    title: 'Kia Sportage 2021',
    price: 23000,
    location: 'Damascus, Syria',
    year: 2021,
    mileage: 30000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1583267746897-2cf33717a5d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1780&q=80',
    featured: true,
  },
];

// Sample recent cars
const recentCars = [
  {
    id: '4',
    title: 'Mercedes C-Class 2018',
    price: 27000,
    location: 'Lattakia, Syria',
    year: 2018,
    mileage: 60000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1617624085810-3df2165bd11b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '5',
    title: 'BMW 3 Series 2019',
    price: 29000,
    location: 'Damascus, Syria',
    year: 2019,
    mileage: 55000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '6',
    title: 'Hyundai Tucson 2020',
    price: 21000,
    location: 'Homs, Syria',
    year: 2020,
    mileage: 40000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '7',
    title: 'Nissan X-Trail 2017',
    price: 18000,
    location: 'Damascus, Syria',
    year: 2017,
    mileage: 70000,
    fuel: 'Diesel',
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  },
];

const Index = () => {
  return (
    <MainLayout>
      <div className="flex flex-col">
        <Hero />
        
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Our Services</h2>
              <p className="subtitle mx-auto">Everything you need for your automotive journey in one place.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                {
                  icon: <Car className="h-8 w-8 text-syria-terracotta" />,
                  title: "New & Used Cars",
                  description: "Browse our extensive collection of new and pre-owned vehicles from trusted dealers.",
                  link: "/car-listings"
                },
                {
                  icon: <Clock className="h-8 w-8 text-syria-turquoise" />,
                  title: "Car Rentals",
                  description: "Rent a car for a day, week, or longer from our network of rental providers.",
                  link: "/rentals"
                },
                {
                  icon: <ShoppingBag className="h-8 w-8 text-syria-olive" />,
                  title: "Spare Parts",
                  description: "Find genuine and aftermarket parts for all makes and models.",
                  link: "/spare-parts"
                },
                {
                  icon: <HelpCircle className="h-8 w-8 text-syria-gold" />,
                  title: "Know Your Needs",
                  description: "Answer a few questions and we will help you find the perfect car.",
                  link: "/know-your-needs"
                }
              ].map((service, i) => (
                <div 
                  key={i} 
                  className="glass-card p-6 premium-hover animate-fade-up flex flex-col h-full"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-medium mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-sm font-medium text-syria-terracotta hover:text-syria-terracotta/80 transition-colors mt-auto"
                  >
                    Learn More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Cars Section */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
              <div>
                <h2 className="heading-2 mb-2">Featured Cars</h2>
                <p className="text-muted-foreground">Handpicked premium vehicles for you</p>
              </div>
              <Link 
                to="/car-listings"
                className="button-primary mt-4 sm:mt-0"
              >
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCars.map((car, i) => (
                <div key={car.id} className="animate-fade-up" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                  <CarCard {...car} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://img.freepik.com/premium-vector/arabesque-pattern-seamless-arabic-geometric-pattern-background_8580-1014.jpg')] bg-repeat bg-[length:400px_400px]"></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Why Choose Syrian Auto Hub</h2>
              <p className="subtitle mx-auto">The trusted automotive marketplace in Syria for over a decade.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Trusted Sellers',
                  description: 'All dealers and private sellers are verified to ensure a safe and secure transaction.'
                },
                {
                  title: 'Extensive Selection',
                  description: 'From luxury to economy, find the widest range of vehicles available in Syria.'
                },
                {
                  title: 'Competitive Prices',
                  description: 'Compare prices from multiple sellers to ensure you get the best deal possible.'
                },
                {
                  title: 'Expert Support',
                  description: 'Our automotive experts are available to guide you through your purchase journey.'
                },
                {
                  title: 'Quality Assurance',
                  description: 'All vehicles undergo a thorough inspection process before being listed.'
                },
                {
                  title: 'Nationwide Coverage',
                  description: 'Find cars and services across all major cities and regions in Syria.'
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="p-6 border border-border/40 rounded-lg premium-hover animate-fade-up"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Recent Listings */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
              <div>
                <h2 className="heading-2 mb-2">Recent Listings</h2>
                <p className="text-muted-foreground">The latest additions to our marketplace</p>
              </div>
              <Link 
                to="/car-listings"
                className="button-primary mt-4 sm:mt-0"
              >
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentCars.map((car, i) => (
                <div key={car.id} className="animate-fade-up" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                  <CarCard {...car} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-syria-turquoise/90 to-syria-terracotta/90 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 max-w-2xl mx-auto">Ready to sell your car? List it today and reach thousands of potential buyers.</h2>
            <Link 
              to="/list-car"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-syria-terracotta rounded-md font-medium hover:bg-white/90 transition-colors"
            >
              List Your Car
            </Link>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
