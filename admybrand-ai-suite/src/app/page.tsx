// src/app/page.tsx
"use client"; // Required for Framer Motion animations

import { motion } from "framer-motion";
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
import { ArrowRight, Check, Star } from "lucide-react";

export default function HomePage() {
  // Animation variants for Framer Motion
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background-dark p-4 md:p-12">

      {/* ========== Hero Section ========== */}
      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="w-full max-w-4xl text-center flex flex-col items-center space-y-8 my-24"
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

      {/* ========== Pricing Section ========== */}
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-h2-m md:text-h2-d text-text-primary">Flexible Pricing for Teams of All Sizes</h2>
          <p className="text-text-secondary mt-2">Choose the plan that's right for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter Plan */}
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
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Basic AI Tools</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Email Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Choose Starter</Button>
            </CardFooter>
          </Card>

          {/* Professional Plan (Featured) */}
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
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Smart Campaign Optimization</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Predictive Analytics</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Priority Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="primary" className="w-full">Start Free Trial</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>Custom solutions for large-scale operations.</CardDescription>
              <p className="text-4xl font-bold font-heading pt-4">Custom</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3 text-text-secondary">
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> White-Labeling</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Dedicated Account Manager</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> Custom Integrations</li>
                <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-success" /> 24/7 Premium Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}