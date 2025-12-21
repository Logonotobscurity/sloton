
"use client";

import React, { createContext, useState, ReactNode } from 'react';
import { useChatbotStore } from '@/hooks/use-chatbot-store';

interface ChatbotContextType {
  isChatbotOpen: boolean;
  setChatbotOpen: (isOpen: boolean) => void;
}

export const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider = ({ children }: { children: ReactNode }) => {
  const { isChatbotOpen, setChatbotOpen } = useChatbotStore();

  return (
    <ChatbotContext.Provider value={{ isChatbotOpen, setChatbotOpen }}>
      {children}
    </ChatbotContext.Provider>
  );
};
