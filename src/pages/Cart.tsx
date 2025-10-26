import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const cartItems = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
      title: "Premium Wireless Headphones",
      supplier: "TechGear Co.",
      price: 45.99,
      quantity: 100,
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
      title: "Luxury Watch Collection",
      supplier: "TimeStyle Ltd.",
      price: 89.50,
      quantity: 50,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 150;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 p-4 bg-muted font-semibold text-sm">
                <div className="col-span-1">
                  <Checkbox />
                </div>
                <div className="col-span-5">Product</div>
                <div className="col-span-2">Price</div>
                <div className="col-span-2">Quantity</div>
                <div className="col-span-2">Total</div>
              </div>

              {/* Cart Items */}
              <div className="divide-y">
                {cartItems.map((item) => (
                  <div key={item.id} className="grid grid-cols-12 gap-4 p-4 items-center">
                    <div className="col-span-1">
                      <Checkbox />
                    </div>
                    <div className="col-span-5 flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-20 h-20 rounded object-cover"
                      />
                      <div>
                        <h3 className="font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.supplier}</p>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span className="font-semibold">${item.price}</span>
                    </div>
                    <div className="col-span-2">
                      <Input 
                        type="number" 
                        value={item.quantity}
                        className="w-20"
                      />
                    </div>
                    <div className="col-span-1 font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="col-span-1 text-right">
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-4 border-t flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <span className="text-sm">Select All</span>
                </div>
                <Button variant="destructive" size="sm">
                  Delete Selected
                </Button>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Have a coupon code?</h3>
                <div className="flex gap-2">
                  <Input placeholder="Enter code" />
                  <Button variant="outline">Apply</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
