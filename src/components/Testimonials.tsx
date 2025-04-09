
import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: 5,
    text: "James is the best barber I've ever had. He takes the time to understand exactly what I want and delivers every time. The atmosphere is relaxed and professional. Highly recommend!",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "David Rodriguez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: 5,
    text: "I've been going to SharpCut for over a year now. The attention to detail is unmatched and I always leave feeling confident. Worth every penny.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Thomas Wright",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 5,
    text: "Finally found a barber who really listens. James took his time to understand what I was looking for and gave expert advice. The hot towel treatment is a game changer!",
    date: "3 weeks ago"
  }
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className={`h-5 w-5 ${
        index < rating ? "text-secondary fill-secondary" : "text-gray-300"
      }`}
    />
  ));
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-primary/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Read what our satisfied clients have to say about their experiences at SharpCut Barbershop.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-sm border border-border relative">
              <div className="absolute top-8 right-8 text-secondary/20">
                <Quote className="h-12 w-12" />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <div className="flex">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
              
              <p className="text-xs text-muted-foreground/80">
                {testimonial.date}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center p-8 bg-white rounded-lg shadow-sm border border-border max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-muted-foreground mb-8">
            Join hundreds of satisfied clients who trust SharpCut for their grooming needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-secondary">
              Book Your Appointment
            </a>
            <a href="tel:+15551234567" className="btn-primary">
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
