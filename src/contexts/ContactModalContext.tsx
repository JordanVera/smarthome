'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ContactModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(
  undefined
);

interface ContactModalProviderProps {
  children: ReactNode;
}

export function ContactModalProvider({ children }: ContactModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <ContactModalContext.Provider
      value={{ isOpen, openModal, closeModal, toggleModal }}
    >
      {children}
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error(
      'useContactModal must be used within a ContactModalProvider'
    );
  }
  return context;
}
