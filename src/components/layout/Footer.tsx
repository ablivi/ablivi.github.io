import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">About Ablivi</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/about#contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/about#careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/about#press" className="hover:text-primary transition-colors">Press Center</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Buyer Center</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/orders" className="hover:text-primary transition-colors">My Orders</Link></li>
              <li><Link to="/cart" className="hover:text-primary transition-colors">Shopping Cart</Link></li>
              <li><Link to="/messages" className="hover:text-primary transition-colors">Messages</Link></li>
              <li><Link to="/help" className="hover:text-primary transition-colors">Buyer Protection</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Seller Center</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/seller" className="hover:text-primary transition-colors">Become a Seller</Link></li>
              <li><Link to="/seller#dashboard" className="hover:text-primary transition-colors">Seller Dashboard</Link></li>
              <li><Link to="/seller#tools" className="hover:text-primary transition-colors">Seller Tools</Link></li>
              <li><Link to="/seller#support" className="hover:text-primary transition-colors">Seller Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Help & Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/help#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/help#shipping" className="hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link to="/help#returns" className="hover:text-primary transition-colors">Returns & Refunds</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Ablivi Marketplace. All rights reserved.</p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <Link to="/help#privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/help#terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/help#cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
