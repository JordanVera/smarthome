'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import AdminOnly from '@/components/AdminOnly';
import {
  ShoppingCart,
  Calculator,
  Home,
  Zap,
  Lightbulb,
  Thermometer,
  Wifi,
  Lock,
  Shield,
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  manufacturer: string;
}

const products: Product[] = [
  // Smart Switches
  {
    id: 'smart-switch-1',
    name: 'Smart WiFi Switch',
    category: 'Switches',
    price: 29.99,
    image: '/products/smart-switch.jpg',
    description:
      'WiFi-enabled smart switch for controlling lights and appliances',
    manufacturer: 'Phillips',
  },
  {
    id: 'smart-switch-2',
    name: 'Dimmer Switch Pro',
    category: 'Switches',
    price: 39.99,
    image: '/products/dimmer-switch.jpg',
    description: 'Smart dimmer switch with voice control and scheduling',
    manufacturer: 'Zigbee',
  },
  {
    id: 'smart-switch-3',
    name: '3-Way Smart Switch',
    category: 'Switches',
    price: 49.99,
    image: '/products/3way-switch.jpg',
    description: '3-way smart switch for multi-location control',
    manufacturer: 'Google',
  },

  // Smart Outlets
  {
    id: 'smart-outlet-1',
    name: 'Smart Power Strip',
    category: 'Outlets',
    price: 34.99,
    image: '/products/power-strip.jpg',
    description: '6-outlet smart power strip with USB charging',
    manufacturer: 'Phillips',
  },
  {
    id: 'smart-outlet-2',
    name: 'WiFi Smart Outlet',
    category: 'Outlets',
    price: 19.99,
    image: '/products/wifi-outlet.jpg',
    description: 'Single smart outlet with energy monitoring',
    manufacturer: 'Zigbee',
  },
  {
    id: 'smart-outlet-3',
    name: 'Outdoor Smart Outlet',
    category: 'Outlets',
    price: 44.99,
    image: '/products/outdoor-outlet.jpg',
    description: 'Weatherproof smart outlet for outdoor use',
    manufacturer: 'Google',
  },

  // Smart Thermostats
  {
    id: 'thermostat-1',
    name: 'Smart Learning Thermostat',
    category: 'Thermostats',
    price: 249.99,
    image: '/products/learning-thermostat.jpg',
    description: 'AI-powered thermostat that learns your preferences',
    manufacturer: 'Phillips',
  },
  {
    id: 'thermostat-2',
    name: 'WiFi Thermostat',
    category: 'Thermostats',
    price: 129.99,
    image: '/products/wifi-thermostat.jpg',
    description: 'Basic WiFi thermostat with mobile app control',
    manufacturer: 'Zigbee',
  },

  // Smart Lights
  {
    id: 'light-1',
    name: 'Smart LED Bulb Pack',
    category: 'Lights',
    price: 59.99,
    image: '/products/led-bulbs.jpg',
    description: '4-pack of color-changing smart LED bulbs',
    manufacturer: 'Google',
  },
  {
    id: 'light-2',
    name: 'Smart Light Strip',
    category: 'Lights',
    price: 79.99,
    image: '/products/light-strip.jpg',
    description: '16ft RGB smart light strip with music sync',
    manufacturer: 'Phillips',
  },
  {
    id: 'light-3',
    name: 'Smart Table Lamp',
    category: 'Lights',
    price: 89.99,
    image: '/products/table-lamp.jpg',
    description: 'Touch-controlled smart table lamp with ambient lighting',
    manufacturer: 'Zigbee',
  },

  // Smart Locks
  {
    id: 'lock-1',
    name: 'Smart Deadbolt',
    category: 'Locks',
    price: 199.99,
    image: '/products/smart-deadbolt.jpg',
    description: 'Keyless smart deadbolt with fingerprint and PIN access',
    manufacturer: 'Phillips',
  },
  {
    id: 'lock-2',
    name: 'Smart Lock Pro',
    category: 'Locks',
    price: 299.99,
    image: '/products/smart-lock-pro.jpg',
    description: 'Advanced smart lock with video camera and alerts',
    manufacturer: 'Zigbee',
  },

  // Smart Sensors
  {
    id: 'sensor-1',
    name: 'Motion Sensor',
    category: 'Sensors',
    price: 24.99,
    image: '/products/motion-sensor.jpg',
    description: 'Wireless motion sensor for automation triggers',
    manufacturer: 'Google',
  },
  {
    id: 'sensor-2',
    name: 'Door/Window Sensor',
    category: 'Sensors',
    price: 19.99,
    image: '/products/door-sensor.jpg',
    description: 'Contact sensor for doors and windows',
    manufacturer: 'Zigbee',
  },
  {
    id: 'sensor-3',
    name: 'Water Leak Sensor',
    category: 'Sensors',
    price: 34.99,
    image: '/products/water-sensor.jpg',
    description: 'Smart water leak detection sensor',
    manufacturer: 'Phillips',
  },

  // Smart Cameras
  {
    id: 'camera-1',
    name: 'Security Camera',
    category: 'Cameras',
    price: 89.99,
    image: '/products/security-camera.jpg',
    description: '1080p WiFi security camera with night vision',
    manufacturer: 'Google',
  },
  {
    id: 'camera-2',
    name: 'Doorbell Camera',
    category: 'Cameras',
    price: 149.99,
    image: '/products/doorbell-camera.jpg',
    description: 'Smart video doorbell with two-way audio',
    manufacturer: 'Phillips',
  },

  // Smart Speakers
  {
    id: 'speaker-1',
    name: 'Smart Speaker',
    category: 'Speakers',
    price: 99.99,
    image: '/products/smart-speaker.jpg',
    description: 'Voice-controlled smart speaker with premium audio',
    manufacturer: 'Zigbee',
  },
];

const categories = [
  'All',
  'Switches',
  'Outlets',
  'Thermostats',
  'Lights',
  'Locks',
  'Sensors',
  'Cameras',
  'Speakers',
];

const manufacturers = ['All', 'Phillips', 'Zigbee', 'Google'];

const EstimatePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedManufacturer, setSelectedManufacturer] = useState('All');
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory;
    const matchesManufacturer =
      selectedManufacturer === 'All' ||
      product.manufacturer === selectedManufacturer;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesManufacturer && matchesSearch;
  });

  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => {
        const newCart = { ...prev };
        delete newCart[productId];
        return newCart;
      });
    } else {
      setCart((prev) => ({
        ...prev,
        [productId]: quantity,
      }));
    }
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = products.find((p) => p.id === productId);
      return total + (product?.price || 0) * quantity;
    }, 0);
  };

  const getCartItems = () => {
    return Object.entries(cart)
      .map(([productId, quantity]) => {
        const product = products.find((p) => p.id === productId);
        return { product, quantity };
      })
      .filter((item) => item.product);
  };

  const clearCart = () => {
    setCart({});
  };

  return (
    <AdminOnly
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4 pt-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Access Denied
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                You don't have permission to access this page. Only
                administrators can view the estimate calculator.
              </p>
            </div>
          </div>
        </div>
      }
    >
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4 pt-32">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Smart Home Estimate Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Select your smart home products and get an instant estimate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Product Selection */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card shadow-sm">
              <CardHeader className="border-b border-border/50">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Home className="h-5 w-5" />
                  Product Selection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                {/* Search and Filter */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="search" className="text-foreground">
                      Search Products
                    </Label>
                    <Input
                      id="search"
                      placeholder="Search by name or description..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="mt-1 bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                    />
                  </div>

                  <div>
                    <Label className="text-foreground">Category Filter</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant={
                            selectedCategory === category
                              ? 'default'
                              : 'secondary'
                          }
                          className="cursor-pointer hover:bg-primary/80 transition-colors"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-foreground">
                      Manufacturer Filter
                    </Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {manufacturers.map((manufacturer) => (
                        <Badge
                          key={manufacturer}
                          variant={
                            selectedManufacturer === manufacturer
                              ? 'default'
                              : 'secondary'
                          }
                          className="cursor-pointer hover:bg-primary/80 transition-colors"
                          onClick={() => setSelectedManufacturer(manufacturer)}
                        >
                          {manufacturer}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator className="bg-border" />

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                  {filteredProducts.map((product) => (
                    <Card
                      key={product.id}
                      className="hover:shadow-md transition-all duration-200 border-border bg-card hover:bg-card/80"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 border border-border">
                            <div className="text-muted-foreground text-xs text-center">
                              {product.category === 'Switches' && (
                                <Zap className="h-6 w-6 mx-auto" />
                              )}
                              {product.category === 'Outlets' && (
                                <Wifi className="h-6 w-6 mx-auto" />
                              )}
                              {product.category === 'Thermostats' && (
                                <Thermometer className="h-6 w-6 mx-auto" />
                              )}
                              {product.category === 'Lights' && (
                                <Lightbulb className="h-6 w-6 mx-auto" />
                              )}
                              {product.category === 'Locks' && (
                                <Lock className="h-6 w-6 mx-auto" />
                              )}
                              {product.category === 'Sensors' && (
                                <div className="h-6 w-6 mx-auto bg-muted-foreground/30 rounded-full" />
                              )}
                              {product.category === 'Cameras' && (
                                <div className="h-6 w-6 mx-auto bg-muted-foreground/30 rounded-full" />
                              )}
                              {product.category === 'Speakers' && (
                                <div className="h-6 w-6 mx-auto bg-muted-foreground/30 rounded-full" />
                              )}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm text-foreground truncate">
                              {product.name}
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">
                              {product.manufacturer}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                              {product.description}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-lg font-bold text-primary">
                                ${product.price.toFixed(2)}
                              </span>
                              <Button
                                size="sm"
                                onClick={() => addToCart(product.id)}
                                className="h-8 px-3 bg-primary hover:bg-primary/90 text-primary-foreground"
                              >
                                Add
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cart and Estimate */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4 border-border bg-card shadow-sm">
              <CardHeader className="border-b border-border/50">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <ShoppingCart className="h-5 w-5" />
                  Your Estimate
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                {getCartItems().length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <ShoppingCart className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-foreground">No products selected</p>
                    <p className="text-sm text-muted-foreground">
                      Add products to see your estimate
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Cart Items */}
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {getCartItems().map(({ product, quantity }) => (
                        <div
                          key={product!.id}
                          className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border border-border/50"
                        >
                          <div className="w-10 h-10 bg-muted rounded flex items-center justify-center flex-shrink-0 border border-border">
                            <div className="text-muted-foreground text-xs">
                              {product!.category === 'Switches' && (
                                <Zap className="h-4 w-4" />
                              )}
                              {product!.category === 'Outlets' && (
                                <Wifi className="h-4 w-4" />
                              )}
                              {product!.category === 'Thermostats' && (
                                <Thermometer className="h-4 w-4" />
                              )}
                              {product!.category === 'Lights' && (
                                <Lightbulb className="h-4 w-4" />
                              )}
                              {product!.category === 'Locks' && (
                                <Lock className="h-4 w-4" />
                              )}
                              {product!.category === 'Sensors' && (
                                <div className="h-4 w-4 bg-muted-foreground/30 rounded-full" />
                              )}
                              {product!.category === 'Cameras' && (
                                <div className="h-4 w-4 bg-muted-foreground/30 rounded-full" />
                              )}
                              {product!.category === 'Speakers' && (
                                <div className="h-4 w-4 bg-muted-foreground/30 rounded-full" />
                              )}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm text-foreground truncate">
                              {product!.name}
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              {product!.manufacturer}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              ${product!.price.toFixed(2)} each
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0 border-border hover:bg-muted"
                              onClick={() => removeFromCart(product!.id)}
                            >
                              -
                            </Button>
                            <Input
                              type="number"
                              value={quantity}
                              onChange={(e) =>
                                updateQuantity(
                                  product!.id,
                                  parseInt(e.target.value) || 0
                                )
                              }
                              className="w-12 h-6 text-center text-xs bg-background border-border text-foreground"
                              min="0"
                            />
                            <Button
                              size="sm"
                              variant="outline"
                              className="h-6 w-6 p-0 border-border hover:bg-muted"
                              onClick={() => addToCart(product!.id)}
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator className="bg-border" />

                    {/* Total */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span className="text-foreground">Total:</span>
                        <span className="text-primary text-2xl">
                          ${getCartTotal().toFixed(2)}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                          size="lg"
                          onClick={() => {
                            // Here you could add functionality to save estimate, send to email, etc.
                            alert(
                              'Estimate saved! Total: $' +
                                getCartTotal().toFixed(2)
                            );
                          }}
                        >
                          <Calculator className="h-4 w-4 mr-2" />
                          Save Estimate
                        </Button>

                        <Button
                          variant="outline"
                          className="w-full border-border hover:bg-muted text-foreground"
                          onClick={clearCart}
                        >
                          Clear Cart
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminOnly>
  );
};

export default EstimatePage;
