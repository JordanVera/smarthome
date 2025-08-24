import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export interface EstimateItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  total: number;
  manufacturer: string;
}

export interface EstimateData {
  items: EstimateItem[];
  subtotal: number;
  tax: number;
  total: number;
  customerInfo?: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  estimateNumber: string;
  date: string;
  validUntil: string;
  notes?: string;
  terms?: string;
}

export const generateEstimateNumber = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  return `EST-${year}${month}${day}-${random}`;
};

export const generateInvoiceNumber = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0');
  return `INV-${year}${month}${day}-${random}`;
};

const generatePDF = (data: EstimateData, isInvoice: boolean = false): jsPDF => {
  const doc = new jsPDF();
  const documentType = isInvoice ? 'INVOICE' : 'ESTIMATE';

  // Set document properties
  doc.setProperties({
    title: `Smart Home ${documentType}`,
    subject: `Smart Home Solutions ${documentType}`,
    author: 'Smart Home Solutions',
    keywords: 'estimate, invoice, smart home',
    creator: 'Smart Home Solutions',
  });

  // Add company header
  doc.setFontSize(24);
  doc.setTextColor(59, 130, 246); // Blue color
  doc.text('Smart Home Solutions', 20, 20);

  doc.setFontSize(18);
  doc.setTextColor(75, 85, 99); // Gray color
  doc.text(documentType, 20, 30);

  // Add company info
  doc.setFontSize(10);
  doc.setTextColor(107, 114, 128); // Light gray
  doc.text('123 Smart Street', 20, 40);
  doc.text('Tech City, TC 12345', 20, 45);
  doc.text('Phone: (555) 123-4567', 20, 50);
  doc.text('Email: info@smarthomesolutions.com', 20, 55);

  // Add document details
  doc.setFontSize(10);
  doc.setTextColor(75, 85, 99);
  doc.text(`Document #: ${data.estimateNumber}`, 120, 40);
  doc.text(`Date: ${data.date}`, 120, 45);
  doc.text(`Valid Until: ${data.validUntil}`, 120, 50);

  let yPos = 70;

  // Add customer info if available
  if (data.customerInfo) {
    doc.setFontSize(12);
    doc.setTextColor(75, 85, 99);
    doc.text('Bill To:', 20, yPos);

    doc.setFontSize(10);
    doc.text(data.customerInfo.name, 20, yPos + 7);
    doc.text(data.customerInfo.email, 20, yPos + 12);
    doc.text(data.customerInfo.phone, 20, yPos + 17);
    doc.text(data.customerInfo.address, 20, yPos + 22);

    yPos += 35;
  }

  // Add items table
  autoTable(doc, {
    startY: yPos,
    head: [['Item', 'Category', 'Manufacturer', 'Price', 'Qty', 'Total']],
    body: data.items.map((item) => [
      item.name,
      item.category,
      item.manufacturer,
      `$${item.price.toFixed(2)}`,
      item.quantity,
      `$${item.total.toFixed(2)}`,
    ]),
    styles: {
      fontSize: 9,
      cellPadding: 3,
    },
    headStyles: {
      fillColor: [59, 130, 246],
      textColor: 255,
      fontStyle: 'bold',
    },
    alternateRowStyles: {
      fillColor: [248, 250, 252],
    },
    columnStyles: {
      0: { cellWidth: 50 }, // Item name
      1: { cellWidth: 25 }, // Category
      2: { cellWidth: 25 }, // Manufacturer
      3: { cellWidth: 20 }, // Price
      4: { cellWidth: 15 }, // Quantity
      5: { cellWidth: 25 }, // Total
    },
  });

  // Get the Y position after the table
  const finalY = (doc as any).lastAutoTable.finalY + 10;

  // Add totals
  doc.setFontSize(10);
  doc.setTextColor(75, 85, 99);
  doc.text('Subtotal:', 140, finalY);
  doc.text(`$${data.subtotal.toFixed(2)}`, 170, finalY);

  doc.text('Tax (8.5%):', 140, finalY + 7);
  doc.text(`$${data.tax.toFixed(2)}`, 170, finalY + 7);

  doc.setFontSize(12);
  doc.setTextColor(59, 130, 246);
  doc.text('Total:', 140, finalY + 17);
  doc.text(`$${data.total.toFixed(2)}`, 170, finalY + 17);

  let notesY = finalY + 30;

  // Add notes if available
  if (data.notes) {
    doc.setFontSize(11);
    doc.setTextColor(75, 85, 99);
    doc.text('Notes:', 20, notesY);
    doc.setFontSize(9);
    doc.text(data.notes, 20, notesY + 7, { maxWidth: 170 });
    notesY += 20;
  }

  // Add terms if available
  if (data.terms) {
    doc.setFontSize(11);
    doc.setTextColor(75, 85, 99);
    doc.text('Terms & Conditions:', 20, notesY);
    doc.setFontSize(9);
    doc.text(data.terms, 20, notesY + 7, { maxWidth: 170 });
  }

  // Add footer
  doc.setFontSize(8);
  doc.setTextColor(107, 114, 128);
  doc.text('Thank you for choosing Smart Home Solutions!', 20, 280);
  doc.text(
    `This ${documentType.toLowerCase()} is valid for 30 days from the date of issue.`,
    20,
    285
  );
  if (isInvoice) {
    doc.text('Payment is due within 30 days of invoice date.', 20, 290);
  }

  return doc;
};

export const printPDF = (data: EstimateData, isInvoice: boolean = false) => {
  const doc = generatePDF(data, isInvoice);
  doc.autoPrint();
  doc.output('dataurlnewwindow');
};

export const downloadPDF = (
  data: EstimateData,
  filename: string,
  isInvoice: boolean = false
) => {
  const doc = generatePDF(data, isInvoice);
  doc.save(filename);
};
