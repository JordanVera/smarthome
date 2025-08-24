'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { User, Mail, Phone, MapPin } from 'lucide-react';

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface CustomerInfoFormProps {
  onSubmit: (customerInfo: CustomerInfo) => void;
  triggerText?: string;
  buttonVariant?:
    | 'default'
    | 'outline'
    | 'secondary'
    | 'destructive'
    | 'ghost'
    | 'link';
  buttonSize?: 'default' | 'sm' | 'lg' | 'icon';
}

const CustomerInfoForm: React.FC<CustomerInfoFormProps> = ({
  onSubmit,
  triggerText = 'Add Customer Info',
  buttonVariant = 'default',
  buttonSize = 'default',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', phone: '', address: '' });
    setIsOpen(false);
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size={buttonSize}>
          <User className="h-4 w-4 mr-2" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Customer Information</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              <User className="h-4 w-4 inline mr-2" />
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter customer's full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
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
              placeholder="Enter customer's email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground">
              <Phone className="h-4 w-4 inline mr-2" />
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter customer's phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-foreground">
              <MapPin className="h-4 w-4 inline mr-2" />
              Address
            </Label>
            <Textarea
              id="address"
              placeholder="Enter customer's full address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              required
              rows={3}
              className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 border-border hover:bg-muted text-foreground"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Save Customer Info
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerInfoForm;
