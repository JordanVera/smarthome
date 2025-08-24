import { ServiceData } from '@/types/service';

export const servicesData: Record<string, ServiceData> = {
  'shades-blinds': {
    title: 'Smart Shades & Blinds',
    subtitle: 'Automated Window Treatments',
    description:
      'Transform your home with intelligent window treatments that respond to light, temperature, and your daily routine.',
    heroImage: '/images/heroes/shades.webp',
    features: [
      {
        title: 'Automated Light Control',
        description:
          'Automatically adjust based on time of day and sunlight levels',
        icon: '☀️',
      },
      {
        title: 'Energy Efficiency',
        description:
          'Reduce heating and cooling costs by optimizing natural light',
        icon: '🌱',
      },
      {
        title: 'Privacy on Demand',
        description:
          'Instant privacy control with scheduled or manual operation',
        icon: '🔒',
      },
      {
        title: 'Voice Control',
        description: 'Control with Alexa, Google Assistant, or Siri',
        icon: '🗣️',
      },
    ],
    benefits: [
      {
        title: 'Enhanced Comfort',
        description:
          'Maintain optimal lighting and temperature throughout the day',
      },
      {
        title: 'Increased Security',
        description: 'Create the illusion of occupancy when away from home',
      },
      {
        title: 'UV Protection',
        description: 'Protect furniture and flooring from harmful UV rays',
      },
    ],
    products: [
      {
        name: 'Motorized Roller Shades',
        description: 'Sleek, quiet motor with battery backup',
        image: '/placeholder.jpg',
        price: 'Starting at $299',
        features: [
          'Whisper-quiet operation',
          'Battery backup',
          'Custom sizing',
          'Multiple fabric options',
        ],
      },
      {
        name: 'Smart Venetian Blinds',
        description: 'Precise tilt control for optimal light management',
        image: '/placeholder.jpg',
        price: 'Starting at $399',
        features: [
          'Precise tilt control',
          'Aluminum slats',
          'Remote control',
          'Schedule programming',
        ],
      },
      {
        name: 'Cellular Smart Shades',
        description: 'Energy-efficient honeycomb design',
        image: '/placeholder.jpg',
        price: 'Starting at $249',
        features: [
          'Insulating design',
          'Light filtering options',
          'Cordless operation',
          'Easy installation',
        ],
      },
    ],
    ctaTitle: 'Ready to Upgrade Your Windows?',
    ctaDescription:
      'Get a free consultation and discover how smart shades can transform your home.',
  },
  'smart-lighting': {
    title: 'Smart Lighting Solutions',
    subtitle: 'Intelligent Illumination',
    description:
      'Create the perfect ambiance with smart lighting that adapts to your lifestyle and saves energy.',
    heroImage: '/images/heroes/smartlighting.webp',
    features: [
      {
        title: 'Color & Brightness Control',
        description: 'Millions of colors and dimming options for any mood',
        icon: '🎨',
      },
      {
        title: 'Scheduling & Automation',
        description:
          'Set lights to turn on/off automatically based on your routine',
        icon: '⏰',
      },
      {
        title: 'Motion Detection',
        description:
          'Lights that respond to movement for convenience and security',
        icon: '👋',
      },
      {
        title: 'Energy Monitoring',
        description: 'Track and optimize your energy usage in real-time',
        icon: '⚡',
      },
    ],
    benefits: [
      {
        title: 'Reduced Energy Bills',
        description:
          'LED technology and smart controls can reduce lighting costs by up to 75%',
      },
      {
        title: 'Enhanced Security',
        description:
          'Automated lighting patterns deter intruders and improve safety',
      },
      {
        title: 'Improved Wellness',
        description: 'Circadian lighting supports better sleep and mood',
      },
    ],
    products: [
      {
        name: 'Smart LED Bulbs',
        description: 'Color-changing bulbs with app control',
        image: '/placeholder.jpg',
        price: 'Starting at $19',
        features: [
          '16 million colors',
          'Voice control',
          'Energy monitoring',
          '25,000 hour lifespan',
        ],
      },
      {
        name: 'Smart Light Switches',
        description: 'Replace existing switches with smart controls',
        image: '/placeholder.jpg',
        price: 'Starting at $29',
        features: [
          'Dimming control',
          'Schedule programming',
          'Remote access',
          'Easy installation',
        ],
      },
      {
        name: 'LED Light Strips',
        description: 'Flexible lighting for accent and ambient lighting',
        image: '/placeholder.jpg',
        price: 'Starting at $39',
        features: [
          'Cuttable strips',
          'Adhesive backing',
          'Music sync',
          'Weather resistant options',
        ],
      },
    ],
    ctaTitle: 'Illuminate Your Smart Home',
    ctaDescription:
      'Schedule a consultation to design the perfect lighting solution for your space.',
  },
  'smart-thermostats': {
    title: 'Smart Thermostats',
    subtitle: 'Intelligent Climate Control',
    description:
      "Optimize your home's temperature and energy usage with learning thermostats that adapt to your schedule.",
    heroImage: '/images/heroes/thermostats.webp',
    features: [
      {
        title: 'Learning Algorithm',
        description:
          'Learns your preferences and automatically adjusts temperature',
        icon: '🧠',
      },
      {
        title: 'Geofencing',
        description:
          'Adjusts temperature based on your location and arrival time',
        icon: '📍',
      },
      {
        title: 'Multi-Zone Control',
        description: 'Control different areas of your home independently',
        icon: '🏠',
      },
      {
        title: 'Energy Reports',
        description: 'Detailed insights into your heating and cooling usage',
        icon: '📊',
      },
    ],
    benefits: [
      {
        title: 'Energy Savings',
        description: 'Save up to 23% on heating and cooling costs annually',
      },
      {
        title: 'Perfect Comfort',
        description: 'Maintain ideal temperature without manual adjustments',
      },
      {
        title: 'Remote Control',
        description: 'Adjust temperature from anywhere using your smartphone',
      },
    ],
    products: [
      {
        name: 'Learning Thermostat Pro',
        description: 'AI-powered thermostat with advanced features',
        image: '/placeholder.jpg',
        price: 'Starting at $279',
        features: [
          'Machine learning',
          'Room sensors',
          'Professional installation',
          '7-day scheduling',
        ],
      },
      {
        name: 'WiFi Thermostat',
        description: 'Connected thermostat with essential smart features',
        image: '/placeholder.jpg',
        price: 'Starting at $179',
        features: [
          'WiFi connectivity',
          'Mobile app',
          'Energy reports',
          'Easy DIY installation',
        ],
      },
      {
        name: 'Multi-Zone Controller',
        description: 'Control multiple HVAC zones independently',
        image: '/placeholder.jpg',
        price: 'Starting at $499',
        features: [
          'Zone-based control',
          'Individual sensors',
          'Advanced scheduling',
          'Professional setup',
        ],
      },
    ],
    ctaTitle: 'Upgrade Your Climate Control',
    ctaDescription:
      'Get a free energy assessment and see how much you can save with a smart thermostat.',
  },
};
