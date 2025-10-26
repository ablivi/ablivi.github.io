import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/home/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const products = [
    {
      id: "prod-1",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      title: "Premium Wireless Headphones - Noise Cancelling Technology",
      price: "45.99",
      minOrder: "100 pieces",
      supplier: "TechGear Co.",
      rating: 4.8,
      badge: "Hot Sale"
    },
    {
      id: "prod-2",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      title: "Luxury Automatic Watch - Swiss Movement",
      price: "89.50",
      minOrder: "50 pieces",
      supplier: "TimeStyle Ltd.",
      rating: 4.9,
    },
    {
      id: "prod-3",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      title: "UV400 Protection Sunglasses - Designer Collection",
      price: "12.80",
      minOrder: "200 pieces",
      supplier: "Fashion Eye",
      rating: 4.7,
      badge: "Best Price"
    },
    {
      id: "prod-4",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      title: "Professional Running Shoes - Athletic Sport Series",
      price: "32.00",
      minOrder: "100 pieces",
      supplier: "FootStyle",
      rating: 4.6,
    },
    {
      id: "prod-5",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      title: "Wireless Laptop Computer - High Performance",
      price: "650.00",
      minOrder: "10 pieces",
      supplier: "ComputerWorld",
      rating: 4.9,
      badge: "Premium"
    },
    {
      id: "prod-6",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
      title: "4K Digital Camera - Professional Photography",
      price: "156.00",
      minOrder: "30 pieces",
      supplier: "VisionTech",
      rating: 4.8,
    },
    {
      id: "prod-7",
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
      title: "Bluetooth Wireless Speaker - Portable Audio",
      price: "35.80",
      minOrder: "80 pieces",
      supplier: "AudioMax",
      rating: 4.6,
      badge: "Hot Sale"
    },
    {
      id: "prod-8",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
      title: "Smart Watch Fitness Tracker - Health Monitor",
      price: "65.00",
      minOrder: "60 pieces",
      supplier: "WearableTech",
      rating: 4.8,
    },
    {
      id: "prod-9",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop",
      title: "Travel Backpack - Water Resistant Laptop Bag",
      price: "22.50",
      minOrder: "150 pieces",
      supplier: "BagMaster",
      rating: 4.5,
    },
    {
      id: "prod-10",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
      title: "Premium Cotton T-Shirt - Classic Design",
      price: "8.50",
      minOrder: "500 pieces",
      supplier: "FashionHub",
      rating: 4.4,
      badge: "Best Price"
    },
    {
      id: "prod-11",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=400&fit=crop",
      title: "Mountain Bicycle - Professional Grade Bike",
      price: "320.00",
      minOrder: "20 pieces",
      supplier: "BikeZone",
      rating: 4.7,
    },
    {
      id: "prod-12",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop",
      title: "LED Desk Lamp - Adjustable Brightness Control",
      price: "18.90",
      minOrder: "120 pieces",
      supplier: "LightCraft",
      rating: 4.7,
    },
    {
      id: "prod-13",
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&h=400&fit=crop",
      title: "Athletic Training Shoes - Professional Sports",
      price: "28.90",
      minOrder: "100 pieces",
      supplier: "SportPro Inc.",
      rating: 4.6,
      badge: "Hot Sale"
    },
    {
      id: "prod-14",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=400&fit=crop",
      title: "Automatic Coffee Maker - Espresso Machine",
      price: "125.00",
      minOrder: "25 pieces",
      supplier: "CafeEquip",
      rating: 4.8,
    },
    {
      id: "prod-15",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop",
      title: "RGB Gaming Mouse - Professional Gamer",
      price: "19.50",
      minOrder: "150 pieces",
      supplier: "GameTech",
      rating: 4.7,
      badge: "Best Price"
    },
    {
      id: "prod-16",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop",
      title: "Hard Shell Luggage Set - Travel Suitcase",
      price: "75.00",
      minOrder: "40 pieces",
      supplier: "TravelGear",
      rating: 4.6,
    },
    {
      id: "prod-17",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      title: "Wireless Keyboard and Mouse - Ergonomic Set",
      price: "24.99",
      minOrder: "100 pieces",
      supplier: "TechKeys",
      rating: 4.5,
    },
    {
      id: "prod-18",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      title: "Noise Cancelling Earbuds - True Wireless",
      price: "38.00",
      minOrder: "120 pieces",
      supplier: "AudioPro",
      rating: 4.7,
      badge: "New Arrival"
    },
    {
      id: "prod-19",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop",
      title: "Casual Polo Shirt - Premium Quality Fabric",
      price: "12.00",
      minOrder: "300 pieces",
      supplier: "ClothingPro",
      rating: 4.5,
    },
    {
      id: "prod-20",
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop",
      title: "Business Laptop Bag - Professional Briefcase",
      price: "45.00",
      minOrder: "80 pieces",
      supplier: "BusinessGear",
      rating: 4.6,
      badge: "Hot Sale"
    },
    {
      id: "prod-21",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      title: "Chronograph Watch - Sports Design",
      price: "75.00",
      minOrder: "60 pieces",
      supplier: "WatchMakers",
      rating: 4.8,
    },
    {
      id: "prod-22",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      title: "Polarized Sunglasses - Beach Collection",
      price: "15.50",
      minOrder: "250 pieces",
      supplier: "EyeFashion",
      rating: 4.6,
    },
    {
      id: "prod-23",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop",
      title: "Digital Smart Band - Activity Tracker",
      price: "29.00",
      minOrder: "100 pieces",
      supplier: "FitTech",
      rating: 4.4,
      badge: "Best Price"
    },
    {
      id: "prod-24",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      title: "Casual Canvas Shoes - Comfortable Walking",
      price: "18.00",
      minOrder: "200 pieces",
      supplier: "ComfortFoot",
      rating: 4.5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Filters</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Category</h3>
                <div className="space-y-2">
                  {["Electronics", "Clothing", "Home & Garden", "Beauty", "Sports"].map((cat) => (
                    <div key={cat} className="flex items-center space-x-2">
                      <Checkbox id={cat} />
                      <label htmlFor={cat} className="text-sm cursor-pointer">{cat}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Price Range</h3>
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-3"
                />
                <div className="flex items-center justify-between text-sm">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Supplier Type */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Supplier Type</h3>
                <div className="space-y-2">
                  {["Verified Supplier", "Gold Supplier", "Factory Direct"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm cursor-pointer">{type}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimum Order */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Minimum Order</h3>
                <div className="space-y-2">
                  {["1-50 pieces", "51-100 pieces", "101-500 pieces", "500+ pieces"].map((order) => (
                    <div key={order} className="flex items-center space-x-2">
                      <Checkbox id={order} />
                      <label htmlFor={order} className="text-sm cursor-pointer">{order}</label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {products.length} of 124,500 products
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select defaultValue="relevance">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <Button variant="outline" disabled>Previous</Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  className="w-10"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
