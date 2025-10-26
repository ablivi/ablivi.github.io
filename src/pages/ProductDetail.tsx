import { useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Heart, Share2, MessageCircle, Shield, Truck, Package } from "lucide-react";
import { Input } from "@/components/ui/input";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(100);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="rounded-lg overflow-hidden mb-4 aspect-square bg-muted">
              <img 
                src={images[selectedImage]} 
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-lg overflow-hidden border-2 ${
                    selectedImage === idx ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full aspect-square object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <Badge className="mb-3">Hot Sale</Badge>
            <h1 className="text-3xl font-bold mb-4">
              Premium Wireless Headphones with Active Noise Cancellation Technology
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-warning text-warning" />
                ))}
              </div>
              <span className="text-lg font-semibold">4.8</span>
              <span className="text-muted-foreground">(1,247 reviews)</span>
            </div>

            <Card className="p-6 mb-6 bg-primary/5 border-primary">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">$45.99</span>
                <span className="text-muted-foreground">/ piece</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Min. Order: 100 pieces
              </p>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="font-semibold">100-499</div>
                  <div className="text-muted-foreground">$45.99</div>
                </div>
                <div>
                  <div className="font-semibold">500-999</div>
                  <div className="text-muted-foreground">$42.99</div>
                </div>
                <div>
                  <div className="font-semibold">1000+</div>
                  <div className="text-muted-foreground">$39.99</div>
                </div>
              </div>
            </Card>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity (pieces)</label>
              <div className="flex items-center gap-4">
                <Input
                  type="number"
                  min="100"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="w-32"
                />
                <span className="text-sm text-muted-foreground">
                  Total: ${(quantity * 45.99).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Supplier
              </Button>
            </div>

            <div className="flex gap-4 mb-8">
              <Button variant="ghost" size="sm">
                <Heart className="w-5 h-5 mr-2" />
                Add to Favorites
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div>

            {/* Supplier Info */}
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4">Supplier Information</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Company:</span>
                  <span className="font-medium">TechGear Electronics Co., Ltd.</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">Shenzhen, China</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Years in Business:</span>
                  <span className="font-medium">8 years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Supplier Rating:</span>
                  <Badge variant="secondary">Verified Gold Supplier</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Payment</TabsTrigger>
            <TabsTrigger value="reviews">Reviews (1,247)</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="mt-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Product Description</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Experience premium audio quality with our state-of-the-art wireless headphones featuring advanced active noise cancellation technology. Perfect for music enthusiasts, professionals, and travelers who demand the best in audio performance.
                </p>
                <p>
                  These headphones are engineered with precision to deliver crystal-clear sound across all frequencies, ensuring you hear every detail in your favorite music, podcasts, or calls.
                </p>
                <h4 className="font-semibold text-foreground mt-6">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>Active Noise Cancellation (ANC) technology</li>
                  <li>40+ hours battery life with quick charging</li>
                  <li>Premium comfort memory foam ear cushions</li>
                  <li>Bluetooth 5.0 for stable wireless connection</li>
                  <li>Built-in microphone for hands-free calls</li>
                  <li>Foldable design for easy portability</li>
                </ul>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="specifications" className="mt-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  ["Driver Size", "40mm"],
                  ["Frequency Response", "20Hz - 20kHz"],
                  ["Impedance", "32 Ohm"],
                  ["Bluetooth Version", "5.0"],
                  ["Battery Life", "40 hours (ANC off), 30 hours (ANC on)"],
                  ["Charging Time", "2 hours"],
                  ["Weight", "250g"],
                  ["Dimensions", "18 x 16 x 8 cm"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">{label}:</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Buyer Protection</h4>
                    <p className="text-sm text-muted-foreground">Full refund if product not as described</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Fast Delivery</h4>
                    <p className="text-sm text-muted-foreground">3-7 days express shipping available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Secure Packaging</h4>
                    <p className="text-sm text-muted-foreground">Professional packaging guaranteed</p>
                  </div>
                </div>
              </div>
              <h4 className="font-semibold mb-3">Payment Methods</h4>
              <p className="text-muted-foreground">
                We accept all major payment methods including credit cards, PayPal, bank transfer, and trade assurance.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b pb-6 last:border-0">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-warning text-warning" />
                        ))}
                      </div>
                      <span className="font-medium">John Doe</span>
                      <span className="text-sm text-muted-foreground">2 weeks ago</span>
                    </div>
                    <p className="text-muted-foreground">
                      Excellent product! The sound quality is amazing and the noise cancellation works perfectly. Highly recommended for the price.
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
