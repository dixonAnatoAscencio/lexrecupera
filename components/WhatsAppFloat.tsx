'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573001234567?text=Hola,%20quiero%20verificar%20si%20tengo%20t%C3%ADtulos%20judiciales%20a%20mi%20nombre"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
      title="Escríbanos por WhatsApp"
    >
      <MessageCircle size={28} fill="white" color="white" />
    </a>
  );
}
