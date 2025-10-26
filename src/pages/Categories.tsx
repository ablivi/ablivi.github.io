import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryCard } from "@/components/home/CategoryCard";
import { 
  Laptop, Shirt, Home as HomeIcon, Sparkles, Dumbbell, Gamepad2, 
  Car, Package, Monitor, Camera, Headphones, Watch,
  ShoppingBag, Sofa, Lamp, Utensils, Baby, BookOpen,
  Wrench, PaintBucket, Scissors, Coffee, Gift, Music
} from "lucide-react";

const Categories = () => {
  const allCategories = [
    // Electronics & Technology
    { icon: Laptop, title: "Computers & Laptops", count: "120K+ Products", href: "/products?category=computers" },
    { icon: Monitor, title: "Monitors & Displays", count: "85K+ Products", href: "/products?category=monitors" },
    { icon: Camera, title: "Cameras & Photography", count: "95K+ Products", href: "/products?category=cameras" },
    { icon: Headphones, title: "Audio & Headphones", count: "150K+ Products", href: "/products?category=audio" },
    
    // Fashion & Accessories
    { icon: Shirt, title: "Clothing & Apparel", count: "1M+ Products", href: "/products?category=clothing" },
    { icon: Watch, title: "Watches & Jewelry", count: "200K+ Products", href: "/products?category=watches" },
    { icon: ShoppingBag, title: "Bags & Luggage", count: "180K+ Products", href: "/products?category=bags" },
    { icon: Scissors, title: "Fashion Accessories", count: "250K+ Products", href: "/products?category=accessories" },
    
    // Home & Living
    { icon: HomeIcon, title: "Home Improvement", count: "300K+ Products", href: "/products?category=home" },
    { icon: Sofa, title: "Furniture", count: "220K+ Products", href: "/products?category=furniture" },
    { icon: Lamp, title: "Lighting & Decor", count: "190K+ Products", href: "/products?category=lighting" },
    { icon: Utensils, title: "Kitchen & Dining", count: "280K+ Products", href: "/products?category=kitchen" },
    
    // Health & Beauty
    { icon: Sparkles, title: "Beauty & Personal Care", count: "250K+ Products", href: "/products?category=beauty" },
    { icon: Coffee, title: "Health & Wellness", count: "160K+ Products", href: "/products?category=health" },
    
    // Sports & Entertainment
    { icon: Dumbbell, title: "Sports & Outdoors", count: "180K+ Products", href: "/products?category=sports" },
    { icon: Gamepad2, title: "Toys & Games", count: "220K+ Products", href: "/products?category=toys" },
    { icon: Music, title: "Musical Instruments", count: "75K+ Products", href: "/products?category=music" },
    { icon: BookOpen, title: "Books & Education", count: "95K+ Products", href: "/products?category=books" },
    
    // Other Categories
    { icon: Car, title: "Automotive & Parts", count: "150K+ Products", href: "/products?category=automotive" },
    { icon: Package, title: "Office Supplies", count: "90K+ Products", href: "/products?category=office" },
    { icon: Baby, title: "Baby & Kids", count: "140K+ Products", href: "/products?category=baby" },
    { icon: Wrench, title: "Tools & Hardware", count: "110K+ Products", href: "/products?category=tools" },
    { icon: PaintBucket, title: "Arts & Crafts", count: "85K+ Products", href: "/products?category=arts" },
    { icon: Gift, title: "Gifts & Special Occasions", count: "120K+ Products", href: "/products?category=gifts" },
  ];

  const categoryGroups = [
    {
      title: "Electronics & Technology",
      categories: allCategories.slice(0, 4)
    },
    {
      title: "Fashion & Accessories",
      categories: allCategories.slice(4, 8)
    },
    {
      title: "Home & Living",
      categories: allCategories.slice(8, 12)
    },
    {
      title: "Health & Beauty",
      categories: allCategories.slice(12, 14)
    },
    {
      title: "Sports & Entertainment",
      categories: allCategories.slice(14, 18)
    },
    {
      title: "Other Categories",
      categories: allCategories.slice(18)
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">All Categories</h1>
          <p className="text-lg text-muted-foreground">
            Explore our wide range of product categories and find exactly what you need
          </p>
        </div>

        {/* Category Groups */}
        {categoryGroups.map((group, idx) => (
          <section key={idx} className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary">
              {group.title}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.categories.map((category, index) => (
                <CategoryCard key={index} {...category} />
              ))}
            </div>
          </section>
        ))}</main>

      <Footer />
    </div>
  );
};

export default Categories;
