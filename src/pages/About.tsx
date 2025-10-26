import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Globe, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Ablivi Marketplace</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting global buyers with trusted suppliers since 1999. 
            We're the world's leading B2B e-commerce platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: "200M+", label: "Products Listed" },
            { value: "100K+", label: "Verified Suppliers" },
            { value: "190+", label: "Countries Served" },
            { value: "25+", label: "Years of Excellence" },
          ].map((stat, idx) => (
            <Card key={idx} className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Global Reach</h3>
            <p className="text-sm text-muted-foreground">
              Connecting businesses across 190+ countries worldwide
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Community First</h3>
            <p className="text-sm text-muted-foreground">
              Building trust between buyers and suppliers every day
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
            <p className="text-sm text-muted-foreground">
              Rigorous verification process for all suppliers
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Target className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Innovation Driven</h3>
            <p className="text-sm text-muted-foreground">
              Constantly improving our platform with cutting-edge tech
            </p>
          </Card>
        </div>

        {/* Our Story */}
        <Card className="p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Founded in 1999, Ablivi Marketplace began with a simple mission: to make it easy for 
              businesses anywhere to buy and sell online. What started as a small B2B platform 
              has grown into the world's largest wholesale marketplace.
            </p>
            <p>
              Today, we serve millions of buyers and sellers across the globe, facilitating 
              billions of dollars in trade annually. Our platform connects small businesses 
              with manufacturers, helping them source quality products at competitive prices.
            </p>
            <p>
              We're proud to be at the forefront of digital commerce innovation, constantly 
              developing new tools and services to make global trade more accessible, efficient, 
              and secure for businesses of all sizes.
            </p>
          </div>
        </Card>

        {/* Contact Section */}
        <Card className="p-8" id="contact">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-2">Headquarters</h3>
              <p className="text-muted-foreground">
                Ablivi Commerce Tower<br />
                No. 969 West Wen Yi Road<br />
                Hangzhou, Zhejiang 311121<br />
                China
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                Email: support@ablivi.com<br />
                Phone: +86 571 8502 2088<br />
                Business Hours: 9:00 AM - 6:00 PM (GMT+8)
              </p>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default About;
