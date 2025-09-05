'use client';

import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { useContactModal } from '@/contexts/ContactModalContext';

const HomePageCta = () => {
  const { openModal } = useContactModal();
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="frosted-glass-dark p-12 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-muted-foreground font-manrope mb-8">
            Join thousands of homeowners who have already stepped into the
            future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-8 py-4"
              onClick={openModal}
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted px-8 py-4 bg-transparent"
              onClick={openModal}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageCta;
