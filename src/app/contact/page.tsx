'use client';

import { useUser } from '@clerk/nextjs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { AnimatedBackground } from '@/components/ui/animated-background';

export default function ContactPage() {
  const { user } = useUser();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: user?.fullName || '',
    email: user?.primaryEmailAddress?.emailAddress || '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log('Form submitted, attempting to show toast...');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      console.log('About to show success toast');
      toast({
        title: 'Message Sent!',
        description: "We'll get back to you as soon as possible.",
        variant: 'success',
      });

      // Clear form
      if (!user) {
        setFormData({ ...formData, name: '', email: '' });
      }
      setFormData((prev) => ({ ...prev, subject: '', message: '' }));
    } catch (error) {
      console.error('Error sending message:', error);
      console.log('About to show error toast');
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background pt-[68px]">
      <section className="relative py-16 px-6 overflow-hidden">
        <AnimatedBackground />

        <div className="text-center mb-12 z-50 relative">
          <h1 className="text-4xl font-bold gradient-header mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about smart home automation? We're here to help
            transform your home into a more comfortable and efficient space.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto mt-12">
        <Card className="p-6 bg-card/30 backdrop-blur-xl border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  <User className="h-4 w-4 inline mr-2" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Your name"
                  required
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-foreground">
                <MessageSquare className="h-4 w-4 inline mr-2" />
                Subject
              </Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    subject: e.target.value,
                  }))
                }
                placeholder="What's this about?"
                required
                className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                <MessageSquare className="h-4 w-4 inline mr-2" />
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                placeholder="Tell us how we can help you..."
                required
                rows={5}
                className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            <div className="space-y-3">
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
