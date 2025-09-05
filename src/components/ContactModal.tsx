'use client';

import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Send, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useContactModal } from '@/contexts/ContactModalContext';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface ContactModalProps {
  trigger?: React.ReactNode;
}

export default function ContactModal({ trigger }: ContactModalProps) {
  const { user } = useUser();
  const { toast } = useToast();
  const { isOpen, closeModal } = useContactModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Update form data when user data becomes available
  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.fullName || '',
        email: user.primaryEmailAddress?.emailAddress || '',
      }));
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
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

      // Close the modal
      closeModal();
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? undefined : closeModal())}
    >
      <DialogTrigger asChild>
        {trigger || (
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-header">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Have questions about smart home automation? We're here to help
            transform your home into a more comfortable and efficient space.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
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
      </DialogContent>
    </Dialog>
  );
}
