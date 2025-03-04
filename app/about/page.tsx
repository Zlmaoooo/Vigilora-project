"use client";

import React from 'react';
import { Shield, Target, Users, Award, ChartBar, Globe } from 'lucide-react';
import { useScrollAnimation } from '@/components/scroll-animation';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const AboutPage = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-blue-900/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-blue-400 mx-auto mb-8 floating" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
            Protecting Businesses Since <span className="gradient-text">2020</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Leading the fight against fraud with cutting-edge AI technology and unwavering commitment to security.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg">
                <p>
                  Vigilora was founded with a clear mission: to protect businesses from the ever-evolving threat of fraud. 
                  In an increasingly digital world, we recognized the need for sophisticated, AI-powered solutions that could 
                  stay one step ahead of fraudsters.
                </p>
                <p>
                  What started as a small team of security experts and AI researchers has grown into a global leader in fraud 
                  detection and prevention. Today, we serve thousands of businesses across multiple industries, protecting 
                  millions of transactions daily.
                </p>
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover image-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Innovation',
                description: 'Constantly pushing the boundaries of what's possible in fraud detection.',
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
            ].map((value, index) => (
              <Card 
                key={index}
                className={cn("p-6 card-hover animate-on-scroll")}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-gray-100 rounded-lg -z-10 transform rotate-6 transition-transform duration-300 group-hover:rotate-12" />
                  <value.icon className={cn("h-12 w-12 mb-4", value.color)} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: ChartBar, value: '99.9%', label: 'Detection Rate' },
              { icon: Globe, value: '50+', label: 'Countries Served' },
              { icon: Shield, value: '1B+', label: 'Transactions Protected' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-4 floating" />
                <div className="text-4xl font-bold mb-2 text-gradient-animate">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;