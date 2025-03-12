
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import CarCard from '@/components/CarCard';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Search, Filter, ChevronDown, ChevronRight, Check } from 'lucide-react';

// Sample car data (in a real app, this would come from an API or state management)
const allCars = [
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
  {
    id: '8',
    title: 'Mazda CX-5 2019',
    price: 22500,
    location: 'Aleppo, Syria',
    year: 2019,
    mileage: 48000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1574648856236-a33652582aba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
  },
  {
    id: '9',
    title: 'Volkswagen Tiguan 2018',
    price: 19800,
    location: 'Damascus, Syria',
    year: 2018,
    mileage: 52000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1632183042539-b4df424cae44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1372&q=80',
  },
  {
    id: '10',
    title: 'Chevrolet Malibu 2019',
    price: 17500,
    location: 'Homs, Syria',
    year: 2019,
    mileage: 55000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80',
  },
  {
    id: '11',
    title: 'Ford Explorer 2018',
    price: 26000,
    location: 'Lattakia, Syria',
    year: 2018,
    mileage: 62000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1536044557280-6322b8b1965c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
  },
  {
    id: '12',
    title: 'Mitsubishi Outlander 2020',
    price: 24000,
    location: 'Damascus, Syria',
    year: 2020,
    mileage: 35000,
    fuel: 'Petrol',
    imageUrl: 'https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80',
  },
];

// Filter accordions
const filterCategories = [
  {
    name: 'Make',
    options: ['Toyota', 'Honda', 'Kia', 'Mercedes', 'BMW', 'Hyundai', 'Nissan', 'Mazda', 'Volkswagen', 'Chevrolet', 'Ford', 'Mitsubishi'],
  },
  {
    name: 'Year',
    options: ['2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', 'Older'],
  },
  {
    name: 'Fuel Type',
    options: ['Petrol', 'Diesel', 'Hybrid', 'Electric'],
  },
  {
    name: 'Body Type',
    options: ['Sedan', 'SUV', 'Hatchback', 'Coupe', 'Convertible', 'Wagon', 'Van', 'Truck'],
  },
  {
    name: 'Location',
    options: ['Damascus', 'Aleppo', 'Homs', 'Lattakia', 'Tartus', 'Hama'],
  },
];

const sortOptions = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'price_low', label: 'Price: Low to High' },
  { value: 'price_high', label: 'Price: High to Low' },
];

const CarListings = () => {
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({});
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [priceRange, setPriceRange] = useState<[number, number]>([5000, 40000]);
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (category: string) => {
    setOpenFilters({
      ...openFilters,
      [category]: !openFilters[category],
    });
  };

  const toggleFilterOption = (category: string, option: string) => {
    const currentOptions = selectedFilters[category] || [];
    const newOptions = currentOptions.includes(option)
      ? currentOptions.filter(item => item !== option)
      : [...currentOptions, option];
    
    setSelectedFilters({
      ...selectedFilters,
      [category]: newOptions,
    });
  };

  // This is a simplified filter - in a real app, this would be more complex
  const filteredCars = allCars;

  return (
    <MainLayout>
      <section className="pt-28 pb-16 bg-muted/30">
        <div className="container-custom mb-8">
          <h1 className="heading-2 mb-4">Cars for Sale in Syria</h1>
          <p className="subtitle max-w-3xl">
            Browse our extensive collection of new and used vehicles from trusted dealers across Syria.
          </p>
        </div>

        <div className="container-custom">
          {/* Search and filter bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search by make, model, or keyword..."
                className="w-full h-11 pl-10 pr-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <Button
              variant="outline"
              className="flex items-center gap-2 md:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
            <div className="flex gap-3">
              <select
                className="h-11 pl-3 pr-8 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters sidebar */}
            <aside 
              className={`w-full lg:w-72 flex-shrink-0 glass-card p-6 ${
                showFilters ? 'block' : 'hidden lg:block'
              }`}
            >
              <h2 className="text-lg font-medium mb-4">Filters</h2>

              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <Slider
                  defaultValue={[5000, 40000]}
                  min={0}
                  max={50000}
                  step={1000}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-4">
                {filterCategories.map((category) => (
                  <div key={category.name} className="border-b border-border/50 pb-4">
                    <button
                      className="flex items-center justify-between w-full text-left font-medium"
                      onClick={() => toggleFilter(category.name)}
                    >
                      <span>{category.name}</span>
                      {openFilters[category.name] ? (
                        <ChevronDown size={18} />
                      ) : (
                        <ChevronRight size={18} />
                      )}
                    </button>
                    {openFilters[category.name] && (
                      <div className="mt-2 space-y-1 pl-1">
                        {category.options.map((option) => (
                          <label 
                            key={option} 
                            className="flex items-center gap-2 text-sm cursor-pointer py-1"
                          >
                            <input 
                              type="checkbox"
                              checked={(selectedFilters[category.name] || []).includes(option)}
                              onChange={() => toggleFilterOption(category.name, option)}
                              className="rounded border-gray-300 text-primary focus:ring-primary/50"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Button 
                className="w-full mt-6 bg-muted hover:bg-muted/80 text-foreground"
                variant="outline"
              >
                Clear All Filters
              </Button>
            </aside>

            {/* Car listings grid */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <div key={car.id} className="animate-fade-up">
                    <CarCard {...car} />
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <div className="flex">
                  <Button variant="outline" className="rounded-l-md rounded-r-none" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" className="rounded-none bg-primary/10">
                    1
                  </Button>
                  <Button variant="outline" className="rounded-none">
                    2
                  </Button>
                  <Button variant="outline" className="rounded-none">
                    3
                  </Button>
                  <Button variant="outline" className="rounded-l-none rounded-r-md">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CarListings;
