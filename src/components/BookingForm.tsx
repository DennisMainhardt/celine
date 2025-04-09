
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Check, Clock, Phone, MapPin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({ ...prev, time }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, this would send the booking to a backend
    console.log("Booking submitted:", formData);
    
    toast({
      title: "Booking Requested",
      description: "We've received your appointment request. We'll confirm shortly!",
      duration: 5000,
    });
    
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Appointment</h2>
            <p className="text-muted-foreground mb-8">
              Schedule your visit in just a few clicks. Choose your preferred service, date, and time.
            </p>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Select Service*
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    required
                  >
                    <option value="">Choose a service</option>
                    <option value="Classic Haircut">Classic Haircut - $30</option>
                    <option value="Beard Trim & Shape">Beard Trim & Shape - $25</option>
                    <option value="Premium Package">Premium Package - $50</option>
                    <option value="Hot Towel Shave">Hot Towel Shave - $35</option>
                    <option value="Hair & Beard Coloring">Hair & Beard Coloring - $45+</option>
                    <option value="Kids Haircut">Kids Haircut - $20</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    Preferred Date*
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]} // Today's date as minimum
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Time*
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={cn(
                          "py-2 px-2 text-sm border rounded-md transition-colors",
                          formData.time === time 
                            ? "bg-secondary text-white border-secondary" 
                            : "border-input hover:border-secondary/50"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                  Book Appointment
                </Button>
              </form>
            ) : (
              <div className="bg-secondary/10 p-8 rounded-lg border border-secondary/30 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-secondary/20 mb-4">
                  <Check className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Booking Request Received!</h3>
                <p className="text-muted-foreground mb-6">
                  Thanks for your booking request. We'll confirm your appointment for {formData.service} on {formData.date} at {formData.time} shortly via email or phone.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline" 
                  className="mt-4"
                >
                  Book Another Appointment
                </Button>
              </div>
            )}
          </div>
          
          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">123 Main Street, Downtown</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-secondary text-sm underline-hover mt-1 inline-block">
                    Get Directions
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full flex-shrink-0">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <div className="grid grid-cols-2 gap-x-4 text-muted-foreground">
                    <p>Monday - Friday</p>
                    <p>9:00 AM - 6:00 PM</p>
                    <p>Saturday</p>
                    <p>9:00 AM - 4:00 PM</p>
                    <p>Sunday</p>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+15551234567" className="text-muted-foreground underline-hover">
                    (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:info@sharpcut.com" className="text-muted-foreground underline-hover">
                    info@sharpcut.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 relative h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="SharpCut Barbershop interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
