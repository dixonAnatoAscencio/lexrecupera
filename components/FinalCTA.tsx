'use client';

import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 50%, var(--gold-light) 100%)',
      backgroundSize: '200% 200%',
      animation: 'gradientShift 6s ease infinite',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* BG decorative circles */}
      <div style={{
        position: 'absolute', top: '-50%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-30%', left: '-5%',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(255,255,255,0.06)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{ color: 'rgba(13,27,53,0.65)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          ¡No espere más!
        </p>
        <h2 className="display-lg" style={{ color: 'var(--navy)', marginBottom: '1.25rem' }}>
          Su dinero puede estar esperándolo
          <br />en un juzgado ahora mismo
        </h2>
        <p style={{ color: 'rgba(13,27,53,0.7)', fontSize: '1.1rem', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          La consulta es gratuita y sin compromiso. Si no encontramos ningún título, no le cobramos absolutamente nada.
        </p>
        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contacto" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'var(--navy)',
            color: 'var(--gold)',
            padding: '1.1rem 2.5rem',
            borderRadius: '9999px',
            fontWeight: '700',
            fontSize: '1.05rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(13,27,53,0.3)',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Verificar mis títulos <ArrowRight size={18} />
          </a>
          <a
            href="https://wa.me/573001234567?text=Hola,%20quiero%20verificar%20si%20tengo%20títulos%20judiciales%20a%20mi%20nombre"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(13,27,53,0.15)',
              color: 'var(--navy)',
              padding: '1.1rem 2.5rem',
              borderRadius: '9999px',
              fontWeight: '700',
              fontSize: '1.05rem',
              border: '2px solid rgba(13,27,53,0.2)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(13,27,53,0.25)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(13,27,53,0.15)';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
