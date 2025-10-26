import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  minOrder: string;
  supplier: string;
  rating: number;
  badge?: string;
}

export const ProductCard = ({ id, image, title, price, minOrder, supplier, rating, badge }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border hover:border-primary group">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {badge && (
            <Badge className="absolute top-2 left-2 bg-accent">{badge}</Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-2xl font-bold text-primary">${price}</span>
            <span className="text-sm text-muted-foreground">/ piece</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">Min. Order: {minOrder}</p>
          <div className="flex items-center justify-between pt-3 border-t border-border">
            <span className="text-sm text-muted-foreground truncate">{supplier}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
