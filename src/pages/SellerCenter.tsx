import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, TrendingUp, Users, DollarSign, BarChart3, Settings, MessageSquare } from "lucide-react";

const SellerCenter = () => {
  const stats = [
    { icon: DollarSign, label: "Total Sales", value: "$45,890", change: "+12.5%", color: "text-green-600" },
    { icon: Package, label: "Active Products", value: "234", change: "+8", color: "text-blue-600" },
    { icon: Users, label: "Total Customers", value: "1,247", change: "+45", color: "text-purple-600" },
    { icon: TrendingUp, label: "Revenue Growth", value: "28%", change: "+5.2%", color: "text-orange-600" },
  ];

  const recentOrders = [
    { id: "ORD-001", customer: "John Electronics Ltd.", amount: "$4,599.00", status: "Processing" },
    { id: "ORD-002", customer: "Global Imports Inc.", amount: "$8,950.00", status: "Shipped" },
    { id: "ORD-003", customer: "TechBuy Corp.", amount: "$2,890.00", status: "Delivered" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Seller Center</h1>
            <p className="text-muted-foreground">Manage your store and track your performance</p>
          </div>
          <Button size="lg">
            <Package className="w-4 h-4 mr-2" />
            Add New Product
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => (
            <Card key={idx} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Package className="w-4 h-4 mr-2" />
                Manage Products
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Store Settings
              </Button>
            </div>
          </Card>

          {/* Recent Orders */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Orders</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <h3 className="font-semibold mb-1">{order.id}</h3>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg mb-1">{order.amount}</p>
                    <span className="text-sm text-muted-foreground">{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Product Management</h3>
            <p className="text-muted-foreground">
              Easy-to-use tools to add, edit, and manage your product catalog with bulk upload support.
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Sales Analytics</h3>
            <p className="text-muted-foreground">
              Track your sales performance with detailed analytics and insights to grow your business.
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Customer Management</h3>
            <p className="text-muted-foreground">
              Build relationships with buyers and manage all your customer communications in one place.
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SellerCenter;
