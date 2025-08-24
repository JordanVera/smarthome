'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import AdminOnly from '@/components/AdminOnly';
import CustomerInfoForm, {
  CustomerInfo,
} from '@/components/forms/CustomerInfoForm';
import {
  printPDF,
  downloadPDF,
  generateEstimateNumber,
  generateInvoiceNumber,
  EstimateData,
  EstimateItem,
} from '@/lib/pdf-generator';
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
  FileText,
  Download,
  User,
} from 'lucide-react';
import PRODUCTS from '@/constants/PRODUCTS';

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

const manufacturers = ['All', 'Philips', 'Zigbee', 'Google'];

const EstimatePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedManufacturer, setSelectedManufacturer] = useState('All');
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [showCustomerInfo, setShowCustomerInfo] = useState(false);
  const [notes, setNotes] = useState('');
  const [terms, setTerms] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
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

  const handleCustomerInfoSubmit = (info: CustomerInfo) => {
    setCustomerInfo(info);
    setShowCustomerInfo(false);
  };

  const handleGeneratePDF = (isInvoice: boolean = false) => {
    if (getCartItems().length === 0) {
      alert('Please add products to your cart before generating a PDF.');
      return;
    }

    const cartItems: EstimateItem[] = getCartItems().map(
      ({ product, quantity }) => ({
        id: product!.id,
        name: product!.name,
        category: product!.category,
        price: product!.price,
        quantity: quantity,
        total: product!.price * quantity,
        manufacturer: product!.manufacturer,
      })
    );

    const subtotal = getCartTotal();
    const tax = subtotal * 0.085; // 8.5% tax
    const total = subtotal + tax;

    const estimateData: EstimateData = {
      items: cartItems,
      subtotal,
      tax,
      total,
      customerInfo: customerInfo || undefined,
      estimateNumber: isInvoice
        ? generateInvoiceNumber()
        : generateEstimateNumber(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      validUntil: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      notes: notes || undefined,
      terms: terms || undefined,
    };

    const filename = isInvoice
      ? `invoice-${estimateData.estimateNumber}.pdf`
      : `estimate-${estimateData.estimateNumber}.pdf`;

    downloadPDF(estimateData, filename, isInvoice);

    // Show success message
    const message = isInvoice
      ? 'Invoice downloaded successfully!'
      : 'Estimate downloaded successfully!';
    alert(message);
  };

  const handlePrintPDF = (isInvoice: boolean = false) => {
    if (getCartItems().length === 0) {
      alert('Please add products to your cart before printing.');
      return;
    }

    const cartItems: EstimateItem[] = getCartItems().map(
      ({ product, quantity }) => ({
        id: product!.id,
        name: product!.name,
        category: product!.category,
        price: product!.price,
        quantity: quantity,
        total: product!.price * quantity,
        manufacturer: product!.manufacturer,
      })
    );

    const subtotal = getCartTotal();
    const tax = subtotal * 0.085; // 8.5% tax
    const total = subtotal + tax;

    const estimateData: EstimateData = {
      items: cartItems,
      subtotal,
      tax,
      total,
      customerInfo: customerInfo || undefined,
      estimateNumber: isInvoice
        ? generateInvoiceNumber()
        : generateEstimateNumber(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      validUntil: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1000
      ).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      notes: notes || undefined,
      terms: terms || undefined,
    };

    printPDF(estimateData, isInvoice);

    // Show success message
    const message = isInvoice
      ? 'Invoice opened for printing!'
      : 'Estimate opened for printing!';
    alert(message);
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
                            <p className="text-xs font-medium text-primary">
                              Total: ${(product!.price * quantity).toFixed(2)}
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

                    {/* Cost Breakdown */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal:</span>
                        <span className="text-foreground">
                          ${getCartTotal().toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Tax (8.5%):
                        </span>
                        <span className="text-foreground">
                          ${(getCartTotal() * 0.085).toFixed(2)}
                        </span>
                      </div>
                      <Separator className="bg-border" />
                      <div className="flex justify-between text-lg font-semibold">
                        <span className="text-foreground">Total:</span>
                        <span className="text-primary">
                          ${(getCartTotal() * 1.085).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <Separator className="bg-border" />

                    {/* Customer Information */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-foreground">
                          Customer Information
                        </Label>
                        {customerInfo && (
                          <Badge variant="secondary" className="text-xs">
                            <User className="h-3 w-3 mr-1" />
                            Added
                          </Badge>
                        )}
                      </div>

                      {customerInfo ? (
                        <div className="p-3 bg-muted/30 rounded-lg border border-border/50">
                          <p className="text-sm font-medium text-foreground">
                            {customerInfo.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {customerInfo.email}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {customerInfo.phone}
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setCustomerInfo(null)}
                            className="h-6 px-2 text-xs text-muted-foreground hover:text-foreground"
                          >
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <CustomerInfoForm
                          onSubmit={handleCustomerInfoSubmit}
                          triggerText="Add Customer Info"
                          buttonVariant="outline"
                          buttonSize="sm"
                        />
                      )}
                    </div>

                    <Separator className="bg-border" />

                    {/* Notes and Terms */}
                    <div className="space-y-3">
                      <div>
                        <Label
                          htmlFor="notes"
                          className="text-sm font-medium text-foreground"
                        >
                          Notes (Optional)
                        </Label>
                        <Textarea
                          id="notes"
                          placeholder="Add any special notes or requirements..."
                          value={notes}
                          onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>
                          ) => setNotes(e.target.value)}
                          rows={2}
                          className="mt-1 bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="terms"
                          className="text-sm font-medium text-foreground"
                        >
                          Terms & Conditions (Optional)
                        </Label>
                        <Textarea
                          id="terms"
                          placeholder="Add any specific terms or conditions..."
                          value={terms}
                          onChange={(
                            e: React.ChangeEvent<HTMLTextAreaElement>
                          ) => setTerms(e.target.value)}
                          rows={2}
                          className="mt-1 bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
                        />
                      </div>
                    </div>

                    <Separator className="bg-border" />

                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                          size="lg"
                          onClick={() => handleGeneratePDF(false)}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Download Estimate
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary/10"
                          onClick={() => handlePrintPDF(false)}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Print Estimate
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          className="bg-green-600 hover:bg-green-700 text-white"
                          size="lg"
                          onClick={() => handleGeneratePDF(true)}
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Invoice
                        </Button>
                        <Button
                          variant="outline"
                          className="border-green-600 text-green-600 hover:bg-green-50"
                          onClick={() => handlePrintPDF(true)}
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          Print Invoice
                        </Button>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full border-border hover:bg-muted text-foreground"
                        onClick={clearCart}
                      >
                        Clear Cart
                      </Button>
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
