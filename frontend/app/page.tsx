'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Sprout,
  TrendingUp,
  Shield,
  Smartphone,
  Globe,
  Users,
  ArrowRight,
  Menu,
  X,
  Star,
  MapPin,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeToggle } from '@/components/theme-toggle';

export default function NandiLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'हिंदी', 'বাংলা', 'தமிழ்', 'తెలుగు', 'ಕನ್ನಡ'];

  const features = [
    {
      icon: Smartphone,
      title: 'SMS & Voice Support',
      description:
        'Access financial guidance through simple SMS or voice calls in your local language',
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description:
        'Real-time mandi prices and weather forecasts to optimize your farming decisions',
    },
    {
      icon: Shield,
      title: 'Trust Score System',
      description:
        'Build your financial credibility with our AI-powered trust scoring system',
    },
    {
      icon: Globe,
      title: 'Satellite Monitoring',
      description:
        'NDVI-based crop health monitoring using satellite imagery for better yields',
    },
  ];

  const testimonials = [
    {
      name: 'राम कुमार',
      location: 'उत्तर प्रदेश',
      text: 'Nandi helped me get better prices for my wheat crop. The SMS alerts are very helpful.',
      rating: 5,
    },
    {
      name: 'Priya Devi',
      location: 'Punjab',
      text: 'The weather predictions saved my cotton crop from unexpected rain. Very accurate system.',
      rating: 5,
    },
    {
      name: 'Suresh Patel',
      location: 'Gujarat',
      text: 'My trust score improved and I got a better loan rate. Thank you Nandi!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 bg-muted/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Sprout className="w-6 h-6 text-primary-foreground" />
              </div>
              <Link href="/" className="text-2xl font-bold text-primary">
                Nandi
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="#features"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                How it Works
              </Link>
              <Link
                href="#testimonials"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/register">
                <Button
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Register
                </Button>
              </Link>
              <Link href="/trust-score">
                <Button
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  <Shield className="mr-2 w-5 h-5" />
                  Trust Score
                </Button>
              </Link>
            </div>
            <div className="md:hidden">
              <Button
                className="border-primary text-primary"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="absolute top-0 right-0 w-64 h-full bg-background p-4 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Sprout className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-primary">Nandi</span>
              </div>
              <Button
                className="border-primary text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link
                href="#testimonials"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link href="/register">
                <Button
                  className="w-full bg-primary text-primary-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Register
                </Button>
              </Link>
              <Link href="/trust-score">
                <Button
                  className="w-full border-primary text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Shield className="mr-2 w-5 h-5" />
                  Trust Score
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen py-16 bg-white bg-cover bg-center relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-primary">
              NANDI: Your AI-Powered Farming Advisor
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Instant, context-aware crop and advisory support for India’s smallholder farmers. Ask questions in your local language—by voice or text—and get personalized guidance on pest management, weather planning, subsidy schemes, and market trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/chat">
                <Button
                  className="border-primary text-primary hover:bg-primary/10 bg-white"
                >
                  Try the Demo
                </Button>
              </Link>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  10K+
                </div>
                <div className="text-sm text-muted-foreground">
                  Active Farmers
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  ₹50 Cr+
                </div>
                <div className="text-sm text-muted-foreground">
                  Loans Facilitated
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  95%
                </div>
                <div className="text-sm text-muted-foreground">
                  Advisory Accuracy
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">
                  Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">
                Accuracy Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                Support Available
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">
                Farmers Registered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful Features for Modern Farmers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access cutting-edge agricultural technology through simple SMS and
              voice interfaces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple Steps to Success
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started with Nandi in just three easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Register</h3>
              <p className="text-muted-foreground">
                Sign up with your mobile number and basic farm details
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-muted-foreground">
                Receive personalized guidance via SMS or voice calls
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow</h3>
              <p className="text-muted-foreground">
                Increase yields and income with AI-powered insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories from Our Farmers
            </h2>
            <p className="text-lg text-muted-foreground">
              Real farmers, real results with Nandi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers who are already using AI to make smarter
              financial decisions
            </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/register">
            <Button
              className="bg-white text-primary hover:bg-white/90"
            >
              Register Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/trust-score">
            <Button
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Shield className="mr-2 w-5 h-5" />
              Check Trust Score
            </Button>
          </Link>
        </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Sprout className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-primary">Nandi</span>
              </div>
              <p className="text-muted-foreground">
                Empowering farmers with AI-powered financial guidance for a
                prosperous future.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Training
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>📞 1800-NANDI (62634)</li>
                <li>📧 support@nandi.com</li>
                <li>🏢 Bangalore, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2024 Nandi. All rights reserved. Built for Indian farmers
              with ❤️
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

