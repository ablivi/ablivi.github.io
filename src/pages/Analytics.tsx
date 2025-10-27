
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const Analytics = () => {
  // Sample data for sales chart
  const salesData = [
    { month: "Jan", sales: 4000, orders: 240 },
    { month: "Feb", sales: 3000, orders: 198 },
    { month: "Mar", sales: 5000, orders: 320 },
    { month: "Apr", sales: 4500, orders: 278 },
    { month: "May", sales: 6000, orders: 389 },
    { month: "Jun", sales: 5500, orders: 349 },
  ];

  // Sample data for product categories
  const categoryData = [
    { category: "Electronics", value: 3500 },
    { category: "Fashion", value: 2800 },
    { category: "Home", value: 2200 },
    { category: "Sports", value: 1900 },
    { category: "Beauty", value: 1500 },
  ];

  const chartConfig = {
    sales: {
      label: "Sales ($)",
      color: "hsl(var(--primary))",
    },
    orders: {
      label: "Orders",
      color: "hsl(var(--secondary))",
    },
    value: {
      label: "Revenue ($)",
      color: "hsl(var(--primary))",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Sales Analytics</h1>

        <div className="grid gap-6 mb-8">
          {/* Sales Overview Chart */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Monthly Sales Overview</h2>
            <ChartContainer config={chartConfig} className="h-[400px]">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="var(--color-sales)" 
                  strokeWidth={2}
                  name="Sales ($)"
                />
                <Line 
                  type="monotone" 
                  dataKey="orders" 
                  stroke="var(--color-orders)" 
                  strokeWidth={2}
                  name="Orders"
                />
              </LineChart>
            </ChartContainer>
          </Card>

          {/* Category Performance Chart */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Sales by Category</h2>
            <ChartContainer config={chartConfig} className="h-[400px]">
              <BarChart data={categoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar 
                  dataKey="value" 
                  fill="var(--color-value)" 
                  radius={[8, 8, 0, 0]}
                  name="Revenue ($)"
                />
              </BarChart>
            </ChartContainer>
          </Card>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Sales</p>
            <p className="text-2xl font-bold">$28,000</p>
            <p className="text-sm text-green-600 mt-1">+12.5% from last month</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Total Orders</p>
            <p className="text-2xl font-bold">1,774</p>
            <p className="text-sm text-green-600 mt-1">+8.3% from last month</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Avg Order Value</p>
            <p className="text-2xl font-bold">$15.78</p>
            <p className="text-sm text-green-600 mt-1">+3.2% from last month</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm text-muted-foreground mb-2">Products Sold</p>
            <p className="text-2xl font-bold">4,328</p>
            <p className="text-sm text-green-600 mt-1">+15.7% from last month</p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Analytics;
