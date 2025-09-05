'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedBackground } from '@/components/ui/animated-background';
import {
  ArrowRight,
  Lightbulb,
  Users,
  Award,
  Zap,
  Shield,
  Target,
  Heart,
  Rocket,
  Globe,
  Brain,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { number: '10,000+', label: 'Smart Homes Transformed' },
    { number: '500+', label: 'Happy Families' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation First',
      description:
        'We stay ahead of the curve, bringing you the latest smart home technologies before they become mainstream.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Family-Centered',
      description:
        "Every solution we design puts your family's comfort, safety, and happiness at the center.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security & Privacy',
      description:
        'Your data and privacy are sacred to us. We implement military-grade security in every installation.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Precision Excellence',
      description:
        'From consultation to installation, we deliver with meticulous attention to detail.',
    },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      image: '/placeholder-user.jpg',
      description:
        'Former Tesla engineer with 15+ years in IoT and automation systems.',
    },
    {
      name: 'Sarah Martinez',
      role: 'Head of Design',
      image: '/placeholder-user.jpg',
      description:
        'UX architect who makes complex technology feel beautifully simple.',
    },
    {
      name: 'David Kim',
      role: 'Lead Engineer',
      image: '/placeholder-user.jpg',
      description:
        'Smart home wizard who can integrate anything with everything.',
    },
  ];

  const milestones = [
    {
      year: '2019',
      title: 'The Vision',
      description:
        'Founded with a mission to make smart homes accessible to everyone.',
    },
    {
      year: '2020',
      title: 'First 100 Homes',
      description:
        'Transformed our first 100 homes, learning and perfecting our process.',
    },
    {
      year: '2022',
      title: 'AI Integration',
      description:
        'Pioneered AI-driven automation that learns from your daily routines.',
    },
    {
      year: '2024',
      title: 'Industry Leaders',
      description:
        'Recognized as the fastest-growing smart home company in the region.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-6 overflow-hidden">
        <AnimatedBackground />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">
            About Our Mission
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold font-geist mb-6 gradient-header">
            Pioneering the Future
            <br />
            of Smart Living
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-manrope leading-relaxed max-w-4xl mx-auto">
            We're not just installing smart devices – we're architecting
            intelligent ecosystems that transform houses into intuitive,
            responsive homes that anticipate your needs.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="frosted-glass-dark p-6 rounded-2xl">
                <div className="text-3xl lg:text-4xl font-bold gradient-header mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-manrope">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold font-geist mb-6">
                Born from a Simple
                <span className="gradient-header"> Frustration</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  It started in 2019 when our founder, Alex Chen, came home from
                  a long day at Tesla to find his "smart" home anything but
                  intelligent. Lights that didn't respond, a thermostat that
                  ignored his schedule, and security cameras that sent false
                  alarms.
                </p>
                <p>
                  "There has to be a better way," he thought. And there was.
                </p>
                <p>
                  What began as a weekend project to fix his own home evolved
                  into a mission to revolutionize how families interact with
                  their living spaces. We believe technology should be
                  invisible, intuitive, and incredibly powerful.
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-8">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-lg">
                  Trusted by over 10,000 families nationwide
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <Image
                src="/smart-home.jpg"
                alt="Smart home technology"
                width={600}
                height={400}
                className="relative rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-geist mb-6">
              What Drives Us
              <span className="gradient-header"> Forward</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide every decision we make and every home
              we transform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Journey
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-geist mb-6">
              Milestones That
              <span className="gradient-header"> Define Us</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary rounded-full opacity-30"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'
                    }`}
                  >
                    <Card className="frosted-glass-dark border-0 shadow-xl">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-primary/20 text-primary border-primary/30">
                            {milestone.year}
                          </Badge>
                          <Rocket className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">
                          {milestone.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {milestone.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative z-10 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Meet the Team
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold font-geist mb-6">
              The Minds Behind
              <span className="gradient-header"> the Magic</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate team of engineers, designers, and innovators
              dedicated to your smart home success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {member.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">
            Our Vision
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold font-geist mb-8">
            Shaping Tomorrow's
            <span className="gradient-header"> Living Experience</span>
          </h2>

          <div className="frosted-glass-dark p-12 rounded-3xl mb-12">
            <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
              "By 2030, we envision a world where every home is an intelligent
              sanctuary – learning, adapting, and caring for its inhabitants
              while contributing to a sustainable, connected global community."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">
                Alex Chen, Founder & CEO
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Energy Positive Homes
              </h3>
              <p className="text-muted-foreground">
                Homes that generate more energy than they consume
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Community Connected
              </h3>
              <p className="text-muted-foreground">
                Neighborhoods that share resources and insights
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Wellness Optimized</h3>
              <p className="text-muted-foreground">
                Homes that actively promote health and wellbeing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-geist mb-6">
            Ready to Join the
            <span className="gradient-header"> Smart Revolution?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's transform your house into the intelligent home of your dreams.
            Your journey to the future starts with a single conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted px-8 py-4 bg-transparent"
            >
              <Link href="/estimate">Get Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
