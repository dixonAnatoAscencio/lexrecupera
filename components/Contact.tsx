'use client';

import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, var(--navy-mid) 0%, #07101f 100%)',
      padding: '5rem 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">Estamos Aquí para Ayudarle</span>
          <h2 className="display-md section-title" style={{ color: 'var(--white)' }}>
            Múltiples formas de{' '}
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>contactarnos</span>
          </h2>
          <span className="gold-line" style={{ margin: '1rem auto 0' }} />
        </div>

        <div className="grid-4" style={{ gap: '1.5rem' }}>
          {[
            {
              icon: <Phone size={24} />,
              title: 'Teléfono',
              value: '+57 300 123 4567',
              sub: 'Lun–Vie · 8am–6pm',
              href: 'tel:+573001234567',
            },
            {
              icon: <MessageCircle size={24} />,
              title: 'WhatsApp',
              value: '+57 300 123 4567',
              sub: 'Respuesta en menos de 2h',
              href: 'https://wa.me/573001234567',
            },
            {
              icon: <Mail size={24} />,
              title: 'Correo electrónico',
              value: 'info@lexrecupera.co',
              sub: 'Respondemos en 24h',
              href: 'mailto:info@lexrecupera.co',
            },
            {
              icon: <MapPin size={24} />,
              title: 'Oficina',
              value: 'Bogotá, Colombia',
              sub: 'Atención virtual a todo el país',
              href: '#',
            },
          ].map((c) => (
            <a key={c.title} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              style={{
                display: 'block',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,169,76,0.15)',
                borderRadius: '14px',
                padding: '2rem 1.5rem',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--gold)';
                el.style.transform = 'translateY(-4px)';
                el.style.background = 'rgba(201,169,76,0.07)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(201,169,76,0.15)';
                el.style.transform = 'translateY(0)';
                el.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '50%',
                background: 'rgba(201,169,76,0.1)',
                border: '1px solid rgba(201,169,76,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)',
                margin: '0 auto 1.1rem',
              }}>{c.icon}</div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: '600', marginBottom: '0.4rem' }}>{c.title}</div>
              <div style={{ color: 'var(--white)', fontWeight: '600', fontSize: '0.97rem', marginBottom: '0.3rem' }}>{c.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '0.3rem', justifyContent: 'center' }}>
                <Clock size={11} /> {c.sub}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
