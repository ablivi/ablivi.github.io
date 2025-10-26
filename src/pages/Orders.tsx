import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 4599.00,
      items: 2,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-20",
      status: "In Transit",
      total: 8950.00,
      items: 3,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop",
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-22",
      status: "Processing",
      total: 2890.00,
      items: 1,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "In Transit":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Processing":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-bold text-lg">{order.id}</h3>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Order Date: {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">
                        ${order.total.toFixed(2)}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {order.items} item{order.items > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg mb-4">
                    <img 
                      src={order.image}
                      alt="Product"
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium mb-1">Premium Wireless Headphones</p>
                      <p className="text-sm text-muted-foreground">Quantity: 100 pieces</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                    {order.status === "Delivered" && (
                      <Button variant="outline" className="flex-1">
                        Write Review
                      </Button>
                    )}
                    {order.status === "Processing" && (
                      <Button variant="destructive" className="flex-1">
                        Cancel Order
                      </Button>
                    )}
                    {order.status === "In Transit" && (
                      <Button variant="outline" className="flex-1">
                        <Package className="w-4 h-4 mr-2" />
                        Track Package
                      </Button>
                    )}
                    <Button className="flex-1">
                      Contact Supplier
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {["processing", "shipped", "delivered", "cancelled"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No {tab} orders found</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
