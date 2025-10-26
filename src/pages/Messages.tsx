import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);

  const conversations = [
    {
      id: 1,
      supplier: "TechGear Electronics Co.",
      lastMessage: "The shipment will arrive next week",
      time: "2 hours ago",
      unread: 2,
      initials: "TG",
    },
    {
      id: 2,
      supplier: "TimeStyle Watches Ltd.",
      lastMessage: "Thank you for your order!",
      time: "1 day ago",
      unread: 0,
      initials: "TS",
    },
    {
      id: 3,
      supplier: "Fashion Eye Accessories",
      lastMessage: "We can offer a 10% discount for bulk orders",
      time: "2 days ago",
      unread: 1,
      initials: "FE",
    },
  ];

  const messages = [
    { id: 1, sender: "supplier", text: "Hello! How can I help you today?", time: "10:30 AM" },
    { id: 2, sender: "me", text: "I'd like to inquire about bulk pricing", time: "10:32 AM" },
    { id: 3, sender: "supplier", text: "Of course! For orders over 500 pieces, we can offer a 15% discount", time: "10:35 AM" },
    { id: 4, sender: "me", text: "That sounds great! What about shipping?", time: "10:36 AM" },
    { id: 5, sender: "supplier", text: "The shipment will arrive next week", time: "10:38 AM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Messages</h1>

        <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <Card className="lg:col-span-1 overflow-y-auto">
            <div className="p-4 border-b">
              <Input placeholder="Search conversations..." />
            </div>
            <div className="divide-y">
              {conversations.map((conv, idx) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(idx)}
                  className={`w-full p-4 text-left hover:bg-muted transition-colors ${
                    selectedChat === idx ? "bg-muted" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {conv.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold truncate">{conv.supplier}</h3>
                        {conv.unread > 0 && (
                          <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                      <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-2 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {conversations[selectedChat].initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{conversations[selectedChat].supplier}</h3>
                  <p className="text-sm text-muted-foreground">Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.sender === "me"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {msg.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input placeholder="Type your message..." className="flex-1" />
                <Button>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Messages;
