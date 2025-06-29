
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Heart, MapPin, Calendar, Gauge, Fuel, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface CarCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  year: number;
  mileage: number;
  fuel: string;
  imageUrl: string;
  featured?: boolean;
  warrantyIncluded?: boolean;
  inspectedBy?: string;
  className?: string;
}

const CarCard = ({
  id,
  title,
  price,
  location,
  year,
  mileage,
  fuel,
  imageUrl,
  featured = false,
  warrantyIncluded = false,
  inspectedBy,
  className,
}: CarCardProps) => {
  return (
    <div 
      className={cn(
        'glass-card premium-hover overflow-hidden transition-all duration-300',
        featured ? 'border-syria-gold/30 shadow-lg' : 'border-border/50 shadow-sm',
        className
      )}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {featured && (
          <div className="absolute top-3 left-3 bg-syria-gold/90 text-white text-xs font-medium px-2 py-1 rounded-md">
            مميز
          </div>
        )}
        
        {warrantyIncluded && (
          <div className="absolute bottom-3 left-3 bg-green-600/90 text-white text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1.5">
            <ShieldCheck size={14} />
            <span>ضمان مشمول</span>
          </div>
        )}
        
        <div className="absolute top-3 right-3 flex gap-2">
          <button 
            className="bg-white/80 hover:bg-white p-1.5 rounded-full text-muted-foreground hover:text-syria-terracotta transition-colors"
            aria-label="حفظ في المفضلة"
          >
            <Heart size={18} />
          </button>
          <button 
            className="bg-white/80 hover:bg-white p-1.5 rounded-full text-muted-foreground hover:text-syria-terracotta transition-colors"
            aria-label="عرض سريع"
          >
            <Eye size={18} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-medium text-lg leading-tight">{title}</h3>
          <span className="font-semibold text-lg text-syria-terracotta whitespace-nowrap">
            ${price.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
          <MapPin size={14} />
          <span>{location}</span>
        </div>

        {warrantyIncluded && inspectedBy && (
          <div className="mb-3">
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex gap-1 items-center">
              <ShieldCheck size={12} />
              <span>تم فحصه بواسطة {inspectedBy}</span>
            </Badge>
          </div>
        )}

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex flex-col items-center p-2 bg-muted/50 rounded-md">
            <Calendar size={16} className="text-muted-foreground mb-1" />
            <span className="text-xs font-medium">{year}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-muted/50 rounded-md">
            <Gauge size={16} className="text-muted-foreground mb-1" />
            <span className="text-xs font-medium">{mileage.toLocaleString()} كم</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-muted/50 rounded-md">
            <Fuel size={16} className="text-muted-foreground mb-1" />
            <span className="text-xs font-medium">{fuel}</span>
          </div>
        </div>

        <Link 
          to={`/car/${id}`}
          className="block w-full button-primary text-center text-sm"
        >
          عرض التفاصيل
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
