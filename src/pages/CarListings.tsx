
import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const carMockData = [
  {
    id: 1,
    title: 'مرسيدس بنز الفئة E',
    year: 2023,
    price: 40000,
    location: 'دمشق',
    kilometers: 5000,
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=400',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    featured: true,
  },
  {
    id: 2,
    title: 'بي ام دبليو الفئة 3',
    year: 2022,
    price: 35000,
    location: 'حلب',
    kilometers: 10000,
    imageUrl: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&q=80&w=400',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    featured: false,
  },
  {
    id: 3,
    title: 'تويوتا كامري',
    year: 2021,
    price: 25000,
    location: 'حمص',
    kilometers: 15000,
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=400',
    fuelType: 'هايبرد',
    transmission: 'أوتوماتيك',
    featured: false,
  },
  {
    id: 4,
    title: 'هوندا أكورد',
    year: 2023,
    price: 30000,
    location: 'اللاذقية',
    kilometers: 8000,
    imageUrl: 'https://images.unsplash.com/photo-1630990325544-33020be0e6c7?auto=format&fit=crop&q=80&w=400',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    featured: true,
  },
  {
    id: 5,
    title: 'كيا سبورتاج',
    year: 2022,
    price: 28000,
    location: 'دمشق',
    kilometers: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?auto=format&fit=crop&q=80&w=400',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    featured: false,
  },
  {
    id: 6,
    title: 'هيونداي توسان',
    year: 2021,
    price: 26000,
    location: 'حلب',
    kilometers: 18000,
    imageUrl: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&q=80&w=400',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    featured: true,
  }
];

const CarListings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <MainLayout>
      <div className="container-custom py-28">
        <h1 className="heading-2 mb-6">تصفح السيارات المتاحة</h1>
        
        {/* Search and Filters Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="ابحث عن سيارة..."
                className="w-full pr-10 py-2 pl-4 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            </div>
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              <span>فلترة</span>
              <ChevronDown size={16} className={`transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-border/50">
              <div>
                <h3 className="font-medium mb-3">نطاق السعر</h3>
                <Slider
                  defaultValue={[priceRange[0], priceRange[1]]}
                  max={100000}
                  step={1000}
                  onValueChange={(value) => setPriceRange([value[0], value[1]])}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{priceRange[0]} $</span>
                  <span>{priceRange[1]} $</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">نوع الوقود</h3>
                <div className="space-y-2">
                  {['بنزين', 'ديزل', 'هايبرد', 'كهربائي'].map((fuel) => (
                    <div className="flex items-center space-x-2 rtl:space-x-reverse" key={fuel}>
                      <Checkbox id={`fuel-${fuel}`} />
                      <label htmlFor={`fuel-${fuel}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-2">
                        {fuel}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">المدينة</h3>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المدينة" />
                  </SelectTrigger>
                  <SelectContent>
                    {['دمشق', 'حلب', 'حمص', 'اللاذقية', 'طرطوس'].map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
        
        {/* Featured Cars Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">السيارات المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carMockData.filter(car => car.featured).map((car) => (
              <div 
                key={car.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg border border-border/30"
              >
                <div className="relative h-48">
                  <img src={car.imageUrl} alt={car.title} className="h-full w-full object-cover" />
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    مميز
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{car.title}</h3>
                  <div className="flex justify-between mb-3">
                    <span className="text-primary font-bold">${car.price.toLocaleString()}</span>
                    <span className="text-muted-foreground">{car.year}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <span>{car.location}</span>
                    <span className="mx-2">•</span>
                    <span>{car.kilometers.toLocaleString()} كم</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{car.fuelType}</span>
                    <span className="mx-2">•</span>
                    <span>{car.transmission}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">عرض التفاصيل</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* All Cars Section */}
        <div>
          <h2 className="text-xl font-bold mb-6">جميع السيارات المتاحة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {carMockData.map((car) => (
              <div 
                key={car.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg border border-border/30"
              >
                <div className="relative h-48">
                  <img src={car.imageUrl} alt={car.title} className="h-full w-full object-cover" />
                  {car.featured && (
                    <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                      مميز
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{car.title}</h3>
                  <div className="flex justify-between mb-3">
                    <span className="text-primary font-bold">${car.price.toLocaleString()}</span>
                    <span className="text-muted-foreground">{car.year}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-1">
                    <span>{car.location}</span>
                    <span className="mx-2">•</span>
                    <span>{car.kilometers.toLocaleString()} كم</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{car.fuelType}</span>
                    <span className="mx-2">•</span>
                    <span>{car.transmission}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">عرض التفاصيل</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CarListings;
