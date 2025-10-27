import { Search, ShoppingCart, MessageSquare, User, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-border">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Find Factory
            </Link>
            <Link to="/seller" className="text-muted-foreground hover:text-foreground transition-colors">
              Seller Center
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/orders" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingCart className="w-4 h-4" />
              My Orders
            </Link>
            <Link to="/cart" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </Link>
            <Link to="/messages" className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
              <MessageSquare className="w-4 h-4" />
              Messages
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-1" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center gap-8 py-4">
          <Link to="/" className="flex items-center">
            <h1 className="text-4xl font-bold text-primary">ablivi</h1>
          </Link>

          <div className="flex-1 max-w-3xl">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Input 
                  placeholder="Search for products, suppliers, categories..." 
                  className="w-full pr-10 h-11"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
              <Button className="h-11 px-8">Search</Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 py-3 overflow-x-auto">
          <Link to="/categories" className="text-sm font-medium text-primary hover:text-accent transition-colors whitespace-nowrap">
            All Categories
          </Link>
          <Link to="/products?category=electronics" className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap">
            Electronics
          </Link>
          <Link to="/products?category=clothing" className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap">
            Clothing & Apparel
          </Link>
          <Link to="/products?category=home" className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap">
            Home & Garden
          </Link>
          <Link to="/products?category=beauty" className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap">
            Beauty & Personal Care
          </Link>
          <Link to="/products?category=sports" className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap">
            Sports & Outdoors
          </Link>
          <Link to="/products?category=toys" className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap">
            Toys & Games
          </Link>
          <Link to="/products?category=automotive" className="text-sm text-foreground hover:text-primary transition-colors whitespace-nowrap">
            Automotive
          </Link>
        </nav>
      </div>
    </header>
  );
};
