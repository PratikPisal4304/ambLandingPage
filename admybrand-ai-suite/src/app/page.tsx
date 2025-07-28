// src/app/page.tsx
"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  ArrowRight,
  Check,
  BrainCircuit,
  Zap,
  BarChart,
  Component,
  TestTube2,
  Target,
  Star, // New Icon
} from "lucide-react";

// Feature data
const features = [
  {
    icon: <BrainCircuit size={28} className="text-secondary" />,
    title: "AI Content Generator",
    description: "Create high-converting copy, blog posts, and emails in seconds with our advanced AI.",
  },
  {
    icon: <Zap size={28} className="text-secondary" />,
    title: "Smart Campaign Optimization",
    description: "Automatically optimize your ad campaigns across platforms for maximum return on investment.",
  },
  {
    icon: <BarChart size={28} className="text-secondary" />,
    title: "Predictive Analytics",
    description: "Forecast your campaign performance with over 95% accuracy using our predictive models.",
  },
  {
    icon: <Component size={28} className="text-secondary" />,
    title: "Multi-Channel Automation",
    description: "Sync and automate your marketing efforts across email, social media, and ad networks.",
  },
  {
    icon: <TestTube2 size={28} className="text-secondary" />,
    title: "Real-Time A/B Testing",
    description: "Continuously test and optimize your creatives and copy without any manual intervention.",
  },
  {
    icon: <Target size={28} className="text-secondary" />,
    title: "Advanced Audience Targeting",
    description: "Leverage AI to discover and target your most valuable customer segments precisely.",
  },
];

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "CEO, Innovate Inc.",
    image: "/avatars/sarah.jpg",
    rating: 5,
    quote: "ADmyBRAND AI Suite is a game-changer. We've increased our lead conversion rate by 287% in just three months. The predictive analytics are astonishingly accurate.",
  },
  {
    name: "Michael Chen",
    company: "Marketing Director, QuantumLeap",
    image: "/avatars/michael.jpg",
    rating: 5,
    quote: "The AI content generator saved our team over 20 hours per week. The quality of the copy is excellent, allowing us to focus on strategy instead of execution.",
  },
  {
    name: "Jessica Rodriguez",
    company: "Founder, Bloom & Branch",
    image: "/avatars/jessica.jpg",
    rating: 5,
    quote: "As a small business, maximizing ROI is crucial. The smart campaign optimization tool cut our ad spend by 40% while simultaneously increasing engagement.",
  },
  {
    name: "David Lee",
    company: "Head of Growth, Apex Solutions",
    image: "/avatars/david.jpg",
    rating: 5,
    quote: "The multi-channel automation is seamless. We've unified our marketing efforts, resulting in a 150% lift in customer lifetime value. I can't recommend it enough.",
  },
    {
    name: "Emily White",
    company: "E-commerce Manager, Stellar Goods",
    image: "/avatars/emily.jpg",
    rating: 5,
    quote: "The real-time A/B testing feature allowed us to find winning ad creatives 5x faster than our old methods. Our ROAS has never been higher.",
  },
  {
    name: "Chris Green",
    company: "CTO, TechFrontier",
    image: "/avatars/chris.jpg",
    rating: 5,
    quote: "I was impressed by the advanced audience targeting. The AI identified new, high-value segments we had completely overlooked, opening up a major revenue stream.",
  },
];

export default function HomePage() {
  const FADE_UP_ANIMATION_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start bg-background-dark p-4 md:p-12 space-y-24 my-16">
      
      {/* ========== Hero Section ========== */}
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="w-full max-w-4xl text-center flex flex-col items-center space-y-8"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Badge variant="secondary">Trusted by 10,000+ marketers worldwide</Badge>
        </motion.div>
        <motion.h1
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-heading text-h1-m md:text-h1-d font-bold tracking-tight bg-gradient-to-br from-text-primary to-text-secondary bg-clip-text text-transparent"
        >
          Transform Your Marketing with AI-Powered Automation
        </motion.h1>
        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-lg md:text-xl text-text-secondary max-w-2xl"
        >
          ADmyBRAND AI Suite helps businesses increase conversions by 300% with intelligent campaign optimization, automated content creation, and predictive analytics.
        </motion.p>
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" size="xl">Start Free Trial</Button>
          <Button variant="outline" size="xl" icon={ArrowRight}>Watch Demo</Button>
        </motion.div>
      </motion.div>

      {/* ========== Features Section ========== */}
      <section className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-h2-m md:text-h2-d text-text-primary">Unlock Your Marketing Potential</h2>
          <p className="text-text-secondary mt-2">Everything you need to automate, optimize, and grow.</p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={FADE_UP_ANIMATION_VARIANTS}>
              <Card className="h-full bg-glass/50">
                <CardHeader className="flex flex-row items-center gap-4">
                  {feature.icon}
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========== Testimonials Section ========== */}
      <section className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-h2-m md:text-h2-d text-text-primary">Loved by Marketers Worldwide</h2>
          <p className="text-text-secondary mt-2">Don't just take our word for it. Here's what our customers say.</p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={FADE_UP_ANIMATION_VARIANTS}>
              <Card className="h-full flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-text-primary text-lg italic">"{testimonial.quote}"</blockquote>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold text-text-primary">{testimonial.name}</p>
                      <p className="text-sm text-text-secondary">{testimonial.company}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========== Pricing Section ========== */}
      <section className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-h2-m md:text-h2-d text-text-primary">Flexible Pricing for Teams of All Sizes</h2>
          <p className="text-text-secondary mt-2">Choose the plan that's right for you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pricing Cards */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Starter</CardTitle>
              <CardDescription>Basic AI tools for individuals and small teams.</CardDescription>
              <p className="text-4xl font-bold font-heading pt-4">$29<span className="text-lg font-normal text-text-secondary">/month</span></p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> 1 User</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> 10 Campaigns</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Choose Starter</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col border-secondary shadow-secondary/20 relative">
            <Badge variant="secondary" className="absolute -top-4 self-center">Most Popular</Badge>
            <CardHeader>
              <CardTitle>Professional</CardTitle>
              <CardDescription>Advanced features for growing businesses.</CardDescription>
              <p className="text-4xl font-bold font-heading pt-4">$99<span className="text-lg font-normal text-text-secondary">/month</span></p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> 5 Users</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Unlimited Campaigns</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Priority Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="primary" className="w-full">Start Free Trial</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>Custom solutions for large-scale operations.</CardDescription>
              <p className="text-4xl font-bold font-heading pt-4">Custom</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Dedicated Account Manager</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Custom Integrations</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}