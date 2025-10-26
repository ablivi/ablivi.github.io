import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryCard } from "@/components/home/CategoryCard";
import { ProductCard } from "@/components/home/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Laptop, Shirt, Home as HomeIcon, Sparkles, Dumbbell, Gamepad2, 
  Car, Package, TrendingUp, Award, Shield, Zap 
} from "lucide-react";

const Home = () => {
  const categories = [
    { icon: Laptop, title: "Electronics", count: "500K+ Products", href: "/products?category=electronics" },
    { icon: Shirt, title: "Clothing & Apparel", count: "1M+ Products", href: "/products?category=clothing" },
    { icon: HomeIcon, title: "Home & Garden", count: "300K+ Products", href: "/products?category=home" },
    { icon: Sparkles, title: "Beauty & Care", count: "250K+ Products", href: "/products?category=beauty" },
    { icon: Dumbbell, title: "Sports & Outdoors", count: "180K+ Products", href: "/products?category=sports" },
    { icon: Gamepad2, title: "Toys & Games", count: "220K+ Products", href: "/products?category=toys" },
    { icon: Car, title: "Automotive", count: "150K+ Products", href: "/products?category=automotive" },
    { icon: Package, title: "Office Supplies", count: "90K+ Products", href: "/products?category=office" },
  ];

  const featuredProducts = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      title: "Premium Wireless Headphones with Active Noise Cancellation",
      price: "45.99",
      minOrder: "100 pieces",
      supplier: "TechGear Co.",
      rating: 4.8,
      badge: "Hot Sale"
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      title: "Luxury Watch Collection - Men's Automatic Movement",
      price: "89.50",
      minOrder: "50 pieces",
      supplier: "TimeStyle Ltd.",
      rating: 4.9,
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      title: "Designer Sunglasses UV400 Protection Collection",
      price: "12.80",
      minOrder: "200 pieces",
      supplier: "Fashion Eye",
      rating: 4.7,
      badge: "Best Price"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
      title: "Athletic Running Shoes - Professional Sports Series",
      price: "28.90",
      minOrder: "100 pieces",
      supplier: "SportPro Inc.",
      rating: 4.6,
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
      title: "Smart Camera 4K - Professional Photography Equipment",
      price: "156.00",
      minOrder: "30 pieces",
      supplier: "VisionTech",
      rating: 4.9,
      badge: "New Arrival"
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=400&fit=crop",
      title: "Mountain Bike - Professional Grade Bicycle",
      price: "320.00",
      minOrder: "20 pieces",
      supplier: "BikeZone",
      rating: 4.7,
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop",
      title: "Laptop Backpack - Water Resistant Travel Bag",
      price: "22.50",
      minOrder: "150 pieces",
      supplier: "BagMaster",
      rating: 4.5,
      badge: "Hot Sale"
    },
    {
      id: "8",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
      title: "Bluetooth Speaker - Portable Wireless Sound System",
      price: "35.80",
      minOrder: "80 pieces",
      supplier: "AudioMax",
      rating: 4.6,
    },
  ];

  const recommendedProducts = [
    {
      id: "9",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
      title: "Classic T-Shirt Collection - Premium Cotton Fabric",
      price: "8.50",
      minOrder: "500 pieces",
      supplier: "FashionHub",
      rating: 4.4,
    },
    {
      id: "10",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
      title: "Modern LED Desk Lamp - Adjustable Brightness",
      price: "18.90",
      minOrder: "120 pieces",
      supplier: "LightCraft",
      rating: 4.7,
      badge: "Best Seller"
    },
    {
      id: "11",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      title: "Wireless Keyboard & Mouse Combo - Ergonomic Design",
      price: "24.99",
      minOrder: "100 pieces",
      supplier: "TechKeys",
      rating: 4.5,
    },
    {
      id: "12",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=400&fit=crop",
      title: "Coffee Maker Machine - Automatic Espresso System",
      price: "125.00",
      minOrder: "25 pieces",
      supplier: "CafeEquip",
      rating: 4.8,
      badge: "Premium"
    },
    {
      id: "13",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop",
      title: "Travel Suitcase Set - Hard Shell Luggage",
      price: "75.00",
      minOrder: "40 pieces",
      supplier: "TravelGear",
      rating: 4.6,
    },
    {
      id: "14",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
      title: "Gaming Mouse - RGB LED Professional Gaming",
      price: "19.50",
      minOrder: "150 pieces",
      supplier: "GameTech",
      rating: 4.7,
      badge: "Hot Sale"
    },
    {
      id: "15",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      title: "Sport Sneakers - Casual Running Shoes",
      price: "32.00",
      minOrder: "100 pieces",
      supplier: "FootStyle",
      rating: 4.5,
    },
    {
      id: "16",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
      title: "Smart Watch - Fitness Tracker with Heart Rate Monitor",
      price: "65.00",
      minOrder: "60 pieces",
      supplier: "WearableTech",
      rating: 4.8,
      badge: "New"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-12 h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop" 
            alt="Hero banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 flex items-center">
            <div className="container mx-auto px-12">
              <h2 className="text-5xl font-bold text-white mb-4">
                Global B2B Marketplace
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-xl">
                Connect with millions of suppliers worldwide. Best prices, quality guaranteed.
              </p>
              <Button size="lg" className="text-lg px-8">
                Start Sourcing Now
              </Button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center border-2">
            <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Buyer Protection</h3>
            <p className="text-sm text-muted-foreground">Secure payments & refund policy</p>
          </Card>
          <Card className="p-6 text-center border-2">
            <Award className="w-12 h-12 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Quality Verified</h3>
            <p className="text-sm text-muted-foreground">All suppliers are certified</p>
          </Card>
          <Card className="p-6 text-center border-2">
            <Zap className="w-12 h-12 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Fast Shipping</h3>
            <p className="text-sm text-muted-foreground">Worldwide delivery available</p>
          </Card>
          <Card className="p-6 text-center border-2">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Best Prices</h3>
            <p className="text-sm text-muted-foreground">Factory direct pricing</p>
          </Card>
        </div>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground">Browse by Category</h2>
            <Button variant="outline">View All Categories</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground">Featured Products</h2>
            <Button variant="outline">See All Products</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        {/* Hot Deals Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-12 h-[300px] bg-gradient-to-r from-primary to-accent">
          <div className="absolute inset-0 flex items-center justify-between px-12">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-4">Flash Deals Today</h2>
              <p className="text-xl mb-6">Up to 50% off on selected items</p>
              <Button size="lg" variant="secondary">Shop Now</Button>
            </div>
            <div className="hidden lg:block">
              <div className="text-white text-right">
                <div className="text-6xl font-bold mb-2">50%</div>
                <div className="text-2xl">OFF</div>
              </div>
            </div>
          </div>
        </div>

        {/* More Products */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground">Recommended for You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
