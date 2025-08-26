'use client';

import { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';

interface DeviceCategory {
  id: string;
  title: string;
  description: string;
  image: string;
}

const deviceCategories: DeviceCategory[] = [
  {
    id: 'smartbulbs',
    title: 'Smart bulbs',
    description:
      'Brighten up your home with smart bulbs. Set a mood, party hard or conjure up chill vibes.',
    image: '/images/compatible/smartbulbs.avif',
  },
  {
    id: 'switches',
    title: 'Switches',
    description:
      'Control lights in your home from the convenience of your phone.',
    image: '/images/compatible/switches.webp',
  },
  {
    id: 'hubs',
    title: 'Hub & sensors',
    description:
      'Make your home react to your every whim. Add sensors for that personal touch.',
    image: '/images/compatible/hubs.avif',
  },
  {
    id: 'doorbells',
    title: 'Doorbells & doorlocks',
    description: "The smarter way to see who's at the door.",
    image: '/images/compatible/doorbells.avif',
  },
  {
    id: 'plugs',
    title: 'Smart plugs',
    description: 'Control your devices remotely and automate your home.',
    image: '/images/compatible/smartplugs.avif',
  },
  {
    id: 'pets',
    title: 'Pet Feeders',
    description:
      "Don't play fetch with your pet's food. Refill their bowl with a tap.",
    image: '/images/compatible/petfeeders.avif',
  },
];

export default function CompatibleDevices() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('reInit', onInit);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-geist mb-6 gradient-header">
            Compatible Devices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the wide range of smart home devices that work seamlessly
            with our platform
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {deviceCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="flex-[0_0_280px]"
                  style={{
                    marginRight:
                      index === deviceCategories.length - 1 ? '0px' : '24px',
                  }}
                >
                  <Card className="h-[320px] transition-all duration-300 relative overflow-hidden">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${category.image})` }}
                    />

                    {/* Dark Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Content */}
                    <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                          {category.title}
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed drop-shadow-md">
                          {category.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border-border hover:bg-accent hover:text-accent-foreground rounded-full w-10 h-10 shadow-lg z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollPrev}
            disabled={selectedIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border-border hover:bg-accent hover:text-accent-foreground rounded-full w-10 h-10 shadow-lg z-10 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={scrollNext}
            disabled={selectedIndex === scrollSnaps.length - 1}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === selectedIndex
                    ? 'bg-foreground'
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
