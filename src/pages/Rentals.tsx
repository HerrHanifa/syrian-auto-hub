
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Calendar, Clock, Car, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const rentalCars = [
  {
    id: 1,
    name: 'تويوتا كورولا',
    category: 'سيدان',
    pricePerDay: 50,
    image: 'https://images.unsplash.com/photo-1623869675184-d9ec98537a2d?auto=format&fit=crop&q=80&w=400',
    features: ['5 مقاعد', 'أوتوماتيك', 'تكييف هواء', 'بنزين'],
    available: true
  },
  {
    id: 2,
    name: 'هيونداي توسان',
    category: 'دفع رباعي',
    pricePerDay: 75,
    image: 'https://images.unsplash.com/photo-1634807064328-78bc82b3f8e9?auto=format&fit=crop&q=80&w=400',
    features: ['5 مقاعد', 'أوتوماتيك', 'تكييف هواء', 'بنزين'],
    available: true
  },
  {
    id: 3,
    name: 'مرسيدس بنز الفئة C',
    category: 'فاخرة',
    pricePerDay: 120,
    image: 'https://images.unsplash.com/photo-1563720223523-110fd0a81c2e?auto=format&fit=crop&q=80&w=400',
    features: ['5 مقاعد', 'أوتوماتيك', 'تكييف هواء', 'بنزين'],
    available: true
  },
  {
    id: 4,
    name: 'كيا سبورتاج',
    category: 'دفع رباعي',
    pricePerDay: 65,
    image: 'https://images.unsplash.com/photo-1631144482731-a19b0f78f98c?auto=format&fit=crop&q=80&w=400',
    features: ['5 مقاعد', 'أوتوماتيك', 'تكييف هواء', 'بنزين'],
    available: true
  },
  {
    id: 5,
    name: 'فولكس فاجن جولف',
    category: 'هاتشباك',
    pricePerDay: 55,
    image: 'https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?auto=format&fit=crop&q=80&w=400',
    features: ['5 مقاعد', 'أوتوماتيك', 'تكييف هواء', 'بنزين'],
    available: false
  },
  {
    id: 6,
    name: 'رينو داستر',
    category: 'دفع رباعي',
    pricePerDay: 60,
    image: 'https://images.unsplash.com/photo-1609561772631-2b9ca63fe1ca?auto=format&fit=crop&q=80&w=400',
    features: ['5 مقاعد', 'أوتوماتيك', 'تكييف هواء', 'ديزل'],
    available: true
  }
];

const locations = ['دمشق', 'حلب', 'حمص', 'اللاذقية', 'طرطوس'];

const Rentals = () => {
  return (
    <MainLayout>
      <div className="container-custom py-28">
        <div className="text-center mb-12">
          <h1 className="heading-2 mb-4">استئجار سيارة في سوريا</h1>
          <p className="subtitle mx-auto">أفضل الأسعار وأكبر مجموعة من السيارات للإيجار في جميع أنحاء سوريا. سهولة الحجز والدفع ودعم على مدار الساعة.</p>
        </div>
        
        {/* Search Box */}
        <Card className="mb-12 shadow-lg bg-white/95 backdrop-blur border border-border/60">
          <CardContent className="p-6">
            <Tabs defaultValue="daily" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="daily">إيجار يومي</TabsTrigger>
                <TabsTrigger value="monthly">إيجار شهري</TabsTrigger>
              </TabsList>
              
              <TabsContent value="daily" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">موقع الاستلام</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المدينة" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map(location => (
                          <SelectItem key={location} value={location}>{location}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">تاريخ الاستلام</label>
                    <div className="relative">
                      <Input type="date" className="pr-10" />
                      <Calendar className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground" size={16} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">تاريخ الإعادة</label>
                    <div className="relative">
                      <Input type="date" className="pr-10" />
                      <Calendar className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground" size={16} />
                    </div>
                  </div>
                  
                  <Button className="self-end">بحث</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="monthly" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">موقع الاستلام</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المدينة" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map(location => (
                          <SelectItem key={location} value={location}>{location}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">تاريخ البدء</label>
                    <div className="relative">
                      <Input type="date" className="pr-10" />
                      <Calendar className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground" size={16} />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">عدد الأشهر</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المدة" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 6, 12].map(month => (
                          <SelectItem key={month} value={month.toString()}>
                            {month} {month === 1 ? 'شهر' : 'أشهر'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button className="self-end">بحث</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">لماذا تختار خدمة التأجير لدينا؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-border/20">
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Car className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">أسطول متنوع</h3>
              <p className="text-muted-foreground">نقدم مجموعة واسعة من السيارات لتناسب جميع الاحتياجات والميزانيات.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-border/20">
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">توصيل مجاني</h3>
              <p className="text-muted-foreground">نقدم خدمة توصيل السيارة إلى موقعك مجانًا في المدن الرئيسية.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md border border-border/20">
              <div className="mx-auto w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">خدمة 24/7</h3>
              <p className="text-muted-foreground">فريق دعم متاح على مدار الساعة لمساعدتك في أي طوارئ أو استفسارات.</p>
            </div>
          </div>
        </div>
        
        {/* Available Cars */}
        <div>
          <h2 className="text-2xl font-bold mb-8">السيارات المتاحة للإيجار</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rentalCars.map((car) => (
              <div 
                key={car.id} 
                className={`bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg border ${!car.available ? 'opacity-75' : ''}`}
              >
                <div className="relative h-48">
                  <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
                  <div className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full">
                    {car.category}
                  </div>
                  {!car.available && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white font-bold">غير متاح حاليًا</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{car.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-bold text-lg">${car.pricePerDay}</span>
                    <span className="text-sm text-muted-foreground">في اليوم</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {car.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Check size={14} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant={car.available ? "default" : "outline"} 
                    className="w-full"
                    disabled={!car.available}
                  >
                    {car.available ? 'حجز الآن' : 'غير متاح'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Rentals;
