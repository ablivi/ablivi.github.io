import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle, Phone, Mail } from "lucide-react";

const Help = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Browse products, add items to your cart, and proceed to checkout. You'll need to create an account or sign in to complete your order. Follow the prompts to enter shipping information and payment details."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and trade assurance payments. Payment methods may vary by supplier."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping times vary by product and destination. Standard shipping typically takes 7-15 business days, while express shipping takes 3-7 business days. Check the product page for specific shipping estimates."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most products. Items must be unused and in original packaging. Contact the supplier or our customer service team to initiate a return. Refunds are processed within 7-10 business days."
    },
    {
      question: "How do I become a verified supplier?",
      answer: "To become a verified supplier, you'll need to complete our supplier verification process, which includes business license verification, product quality inspection, and trade history review. Visit the Seller Center for more information."
    },
    {
      question: "What is buyer protection?",
      answer: "Buyer protection ensures that you receive your order as described or get your money back. If there's a dispute, our team will mediate and ensure fair resolution. Your payment is held securely until you confirm receipt."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Input 
              placeholder="Search for help articles..." 
              className="pl-12 h-14 text-lg"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </div>

        {/* Quick Contact */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Chat with our support team in real-time
            </p>
            <Button>Start Chat</Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Phone Support</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Call us: +86 571 8502 2088
            </p>
            <Button variant="outline">Call Now</Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-4">
              support@ablivi.com
            </p>
            <Button variant="outline">Send Email</Button>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="p-8 mb-12" id="faq">
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Popular Topics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Getting Started", topics: ["Create Account", "First Order", "Navigation Guide"] },
            { title: "Orders & Shipping", topics: ["Track Order", "Shipping Info", "Delivery Times"] },
            { title: "Payments", topics: ["Payment Methods", "Invoices", "Refunds"] },
            { title: "Seller Support", topics: ["List Products", "Manage Store", "Seller Tools"] },
          ].map((category, idx) => (
            <Card key={idx} className="p-6">
              <h3 className="font-bold text-lg mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.topics.map((topic, topicIdx) => (
                  <li key={topicIdx}>
                    <a href="#" className="text-sm text-primary hover:underline">
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
