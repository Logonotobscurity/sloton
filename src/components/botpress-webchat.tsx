
"use client"

import dynamic from 'next/dynamic';

// Dynamically import the BotpressWebchatInternal component with SSR disabled
const BotpressWebchatInternal = dynamic(
  () => import('./botpress-webchat-internal'),
  { 
    ssr: false,
    loading: () => <div className="fixed bottom-5 right-5 h-16 w-16 rounded-full bg-muted animate-pulse z-50" />
  }
);

export function BotpressWebchat() {
  return <BotpressWebchatInternal />;
}
