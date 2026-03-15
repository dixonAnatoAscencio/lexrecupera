'use client';

import { Phone, Mail, MessageCircle, Scale, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Títulos Judiciales', href: '#que-son' },
    { label: 'Cómo Funciona', href: '#como-funciona' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Casos Aplicables', href: '#casos' },
    { label: 'Preguntas Frecuentes', href: '#faqs' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer style={{
      background: '#050e1c',
      padding: '4rem 0 0',
      borderTop: '1px solid rgba(201,169,76,0.15)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '3rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '8px',
                border: '1.5px solid var(--gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: '700',
                color: 'var(--gold)',
              }}>LR</div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: '700', letterSpacing: '0.08em', color: 'var(--white)' }}>
                  LEXRECUPERA
                </div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--gold)', textTransform: 'uppercase' }}>
                  Títulos Judiciales
                </div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '300px', marginBottom: '1.5rem' }}>
              Convertimos procesos cerrados en dinero recuperado. Especialistas en gestión y recuperación de títulos judiciales en toda Colombia.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Instagram size={17} />, href: '#' },
                { icon: <Facebook size={17} />, href: '#' },
                { icon: <Linkedin size={17} />, href: '#' },
                { icon: <MessageCircle size={17} />, href: 'https://wa.me/573001234567' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--gold)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,169,76,0.3)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(201,169,76,0.08)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--white)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              Navegación
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} style={{
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', color: 'var(--white)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              Contáctenos
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { icon: <Phone size={14} />, text: '+57 300 123 4567', href: 'tel:+573001234567' },
                { icon: <Mail size={14} />, text: 'info@lexrecupera.co', href: 'mailto:info@lexrecupera.co' },
                { icon: <MessageCircle size={14} />, text: 'WhatsApp directo', href: 'https://wa.me/573001234567' },
                { icon: <Scale size={14} />, text: 'Bogotá, Colombia', href: '#' },
              ].map((c) => (
                <a key={c.text} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    color: 'rgba(255,255,255,0.45)',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  <span style={{ color: 'var(--gold)', flexShrink: 0 }}>{c.icon}</span>
                  {c.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: '1.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem' }}>
            © {currentYear} LexRecupera. Todos los derechos reservados.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Política de Privacidad', 'Términos de Uso'].map((link) => (
              <a key={link} href="#" style={{
                color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem',
                transition: 'color 0.3s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
