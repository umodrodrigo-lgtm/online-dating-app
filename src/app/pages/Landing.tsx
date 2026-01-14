import { Link } from 'react-router-dom';
import { Heart, Shield, MessageCircle, Sparkles, Check, Star } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        
        <nav className="relative px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            <span className="text-2xl font-bold">MatchWave</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>

        <div className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-primary font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Find Your Perfect Match</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Find Meaningful
              <br />
              Connections
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join millions of people discovering genuine relationships. MatchWave uses smart matching
              to connect you with compatible partners.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" className="h-12 px-8 text-lg">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/design-system">
                <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                  View Design System
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose MatchWave?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to find your perfect match
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Heart className="w-8 h-8" />}
              title="Smart Matching"
              description="Our AI-powered algorithm finds the most compatible matches based on your preferences and interests."
            />
            <FeatureCard
              icon={<MessageCircle className="w-8 h-8" />}
              title="Instant Chat"
              description="Connect instantly with your matches through our real-time messaging system."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Safe & Secure"
              description="Your privacy and safety are our top priority with verified profiles and photo verification."
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Premium Experience"
              description="Enjoy unlimited likes, see who liked you, and access exclusive features."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-white to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from couples who found love on MatchWave
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah & Mike"
              date="Matched in 2023"
              text="We matched on MatchWave and immediately hit it off. Six months later, we're still going strong!"
              rating={5}
            />
            <TestimonialCard
              name="Jessica & Tom"
              date="Matched in 2024"
              text="I never thought I'd find someone so perfect for me. Thank you MatchWave for bringing us together!"
              rating={5}
            />
            <TestimonialCard
              name="Emily & David"
              date="Matched in 2023"
              text="The best dating app I've ever used. The matches are so much better than other apps."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 fill-primary text-primary" />
                <span className="text-xl font-bold">MatchWave</span>
              </div>
              <p className="text-white/70">
                Find meaningful connections with people who share your interests.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li><Link to="#" className="hover:text-white">About Us</Link></li>
                <li><Link to="#" className="hover:text-white">Careers</Link></li>
                <li><Link to="#" className="hover:text-white">Press</Link></li>
                <li><Link to="#" className="hover:text-white">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/safety" className="hover:text-white">Safety Center</Link></li>
                <li><Link to="#" className="hover:text-white">Help Center</Link></li>
                <li><Link to="#" className="hover:text-white">Community Guidelines</Link></li>
                <li><Link to="#" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-white/70">
                <li><Link to="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2026 MatchWave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

function TestimonialCard({ name, date, text, rating }: { name: string; date: string; text: string; rating: number }) {
  return (
    <Card className="p-6">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-foreground mb-4">&ldquo;{text}&rdquo;</p>
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm text-muted-foreground">{date}</div>
      </div>
    </Card>
  );
}
