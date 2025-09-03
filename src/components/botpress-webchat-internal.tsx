
"use client"

import { Fab, Webchat } from '@botpress/webchat'
import { useState } from 'react'

// This component contains the actual Botpress logic.
// It is only ever rendered on the client.
function BotpressWebchatInternal() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false)
  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState)
  }
  
  return (
    <div className="z-[100]">
      <Webchat
        clientId="e4afc858-7ff1-4470-bfce-a0211273c737" // Your client ID here
        style={{
          width: '400px',
          height: '600px',
          display: isWebchatOpen ? 'flex' : 'none',
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          borderRadius: '1rem',
          boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
        }}
      />
      <Fab
        onClick={() => toggleWebchat()}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '64px',
          height: '64px',
        }}
      />
    </div>
  )
}

export default BotpressWebchatInternal;
