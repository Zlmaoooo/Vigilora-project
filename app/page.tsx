"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Shield, 
  AlertTriangle, 
  Brain, 
  ChartBar, 
  ArrowRight, 
  Target, 
  Users, 
  Award, 
  Globe, 
  ChevronLeft, 
  ChevronRight,
  Lock,
  Zap,
  LineChart,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

// Define types for our data structures
interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
}

interface ValueCard {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

interface FraudCard extends ValueCard {}

// Constants for reusable data
const CORE_VALUES: ValueCard[] = [
  {
    icon: Target,
    title: 'Innovation',
    description: "Constantly pushing the boundaries of what is possible in fraud detection.",
    color: 'text-yellow-500',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working closely with our clients to develop tailored security solutions.',
    color: 'text-blue-600',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Maintaining the highest standards in everything we do.',
    color: 'text-green-500',
  },
];

const FRAUD_CATEGORIES: FraudCard[] = [
  {
    icon: AlertTriangle,
    title: 'Transaction Fraud',
    description: 'Detect and prevent fraudulent transactions in real-time with our AI-powered system.',
    color: 'text-yellow-500',
  },
  {
    icon: Shield,
    title: 'Identity Theft',
    description: 'Protect customer identities with advanced verification and monitoring.',
    color: 'text-blue-600',
  },
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Leverage machine learning to identify patterns and predict potential fraud attempts.',
    color: 'text-green-500',
  },
];

const STORY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caption: 'Advanced AI Technology',
  },
  {
    url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caption: 'Real-time Threat Detection',
  },
  {
    url: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caption: 'Global Security Operations',
  },
  {
    url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    caption: 'Data Protection Excellence',
  },
];

const FEATURES = [
  {
    icon: Brain,
    title: 'AI-Powered Detection',
    description: 'Advanced machine learning algorithms that evolve with new threats',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Zap,
    title: 'Real-Time Protection',
    description: 'Instant threat detection and prevention across all channels',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security protocols',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: LineChart,
    title: 'Smart Analytics',
    description: 'Detailed insights and threat intelligence reporting',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [backgroundElements, setBackgroundElements] = useState<Array<{
    width: number;
    height: number;
    top: number;
    left: number;
    animation: string;
  }>>([]);

  // Generate background elements on client-side only
  useEffect(() => {
    const elements = Array.from({ length: 50 }, () => ({
      width: Math.random() * 4,
      height: Math.random() * 4,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animation: `float ${Math.random() * 10 + 10}s linear infinite`,
    }));
    setBackgroundElements(elements);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            setIsVisible(true);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % STORY_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % STORY_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + STORY_IMAGES.length) % STORY_IMAGES.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] 
            opacity-10 bg-cover bg-center transform scale-105 animate-subtle-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-blue-900/80" />
          
          {/* Animated Background Elements - Now client-side only */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-full">
              {backgroundElements.map((element, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/10"
                  style={{
                    width: `${element.width}px`,
                    height: `${element.height}px`,
                    top: `${element.top}%`,
                    left: `${element.left}%`,
                    animation: element.animation,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Shield className="h-20 w-20 text-blue-400 floating" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up">
            Next-Gen <span className="gradient-text">Fraud Protection</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-up animation-delay-200">
            Safeguard your business with AI-powered fraud detection that evolves faster than threats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-400">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                text-white px-8 py-6 text-lg button-hover group"
            >
              <Link href="/auth/signup" className="flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm button-hover px-8 py-6 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-up animation-delay-600">
            {[
              { value: '99.9%', label: 'Detection Rate' },
              { value: '24/7', label: 'Active Protection' },
              { value: '10M+', label: 'Threats Blocked' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-animate">
              Comprehensive Protection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced features work together to create an impenetrable shield against fraud
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={cn("p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4", feature.bgColor)}>
                  <feature.icon className={cn("h-6 w-6", feature.color)} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Pioneering AI-Powered Security</h2>
              <div className="prose prose-lg space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Since our inception in 2020, Vigilora has been at the forefront of revolutionizing cybersecurity. 
                  We combine cutting-edge artificial intelligence with deep security expertise to create a shield 
                  that adapts and evolves against emerging threats.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our journey began with a simple yet powerful vision: to make enterprise-grade security accessible 
                  to businesses of all sizes. Today, we protect millions of transactions and help thousands of 
                  organizations stay one step ahead of cyber threats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <Shield className="h-5 w-5" />
                    <span className="font-medium">24/7 Active Protection</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <Brain className="h-5 w-5" />
                    <span className="font-medium">AI-Powered Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-600">
                    <Globe className="h-5 w-5" />
                    <span className="font-medium">Global Coverage</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-on-scroll">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {STORY_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-1000",
                      currentImage === index ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <p className="text-white text-lg font-medium">{image.caption}</p>
                    </div>
                  </div>
                ))}
                
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full text-white transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full text-white transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2">
                  {STORY_IMAGES.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        currentImage === index
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/80"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: ChartBar, value: '99.9%', label: 'Detection Rate' },
              { icon: Globe, value: '50+', label: 'Countries Served' },
              { icon: Shield, value: '1B+', label: 'Transactions Protected' },
              { icon: Users, value: '10k+', label: 'Active Users' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-10 w-10 text-blue-400 mx-auto mb-4 floating" />
                <div className="text-4xl font-bold mb-2 text-gradient-animate">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
            Ready to <span className="text-gradient-animate">Secure Your Business</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto animate-on-scroll">
            Join thousands of businesses that trust Vigilora for their fraud detection needs.
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-on-scroll">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg button-hover group"
            >
              <Link href="/auth/signup" className="flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <div className="flex items-center space-x-2 text-blue-200">
              <CheckCircle2 className="h-5 w-5" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}