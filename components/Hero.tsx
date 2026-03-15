'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle, MessageCircle, Scale } from 'lucide-react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #07101f 0%, #0D1B35 45%, #152342 70%, #0a1628 100%)',
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
      }}>
        {/* Gold radial glow */}
        <div style={{
          position: 'absolute', top: '20%', right: '-5%',
          width: '600px', height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,169,76,0.12) 0%, transparent 70%)',
        }} />
        {/* Bottom left glow */}
        <div style={{
          position: 'absolute', bottom: '-10%', left: '-10%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,169,76,0.07) 0%, transparent 70%)',
        }} />
        {/* Grid lines overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(201,169,76,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,76,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
        {/* Balance scale decorative SVG */}
        <div style={{
          position: 'absolute', right: '5%', bottom: '10%',
          opacity: 0.04,
        }}>
          <Scale size={280} color="#C9A94C" />
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '8rem', paddingBottom: '5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{ marginBottom: '1.75rem' }}>
              <span className="badge badge-gold" style={{ gap: '0.4rem' }}>
                <CheckCircle size={13} /> Servicio Especializado en Colombia
              </span>
            </div>

            {/* Headline */}
            <h1 className="display-xl" style={{ marginBottom: '1.5rem', color: 'var(--white)' }}>
              ¿Tiene dinero{' '}
              <span style={{
                display: 'block',
                background: 'linear-gradient(90deg, var(--gold), var(--gold-light), var(--gold))',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
              }}>
                consignado
              </span>
              en un juzgado?
            </h1>

            <p className="body-lg" style={{
              color: 'rgba(255,255,255,0.75)',
              marginBottom: '2.5rem',
              maxWidth: '520px',
            }}>
              Si tuvo un embargo, medida cautelar o descuento judicial, puede existir un <strong style={{ color: 'var(--gold-light)' }}>título judicial</strong> con su dinero en el Banco Agrario. Lo buscamos, gestionamos y radicamos la solicitud de entrega ante el juzgado.
            </p>

            {/* Checklist */}
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Búsqueda gratuita de títulos a su nombre',
                'Gestión completa ante el juzgado',
                'Seguimiento hasta la entrega',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.85)', fontSize: '0.97rem' }}>
                  <CheckCircle size={18} color="var(--gold)" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contacto" className="btn btn-primary btn-lg">
                Verificar mis títulos <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/573001234567?text=Hola,%20quiero%20verificar%20si%20tengo%20t%C3%ADtulos%20judiciales%20a%20mi%20nombre"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right – Stats panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} className="hero-stats">
            {/* Large card */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(201,169,76,0.2)',
              borderRadius: '20px',
              padding: '2.5rem',
              backdropFilter: 'blur(20px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
              }} />
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '4rem', fontWeight: '700', color: 'var(--gold)', lineHeight: 1 }}>
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                Títulos recuperados con éxito
              </p>
            </div>

            {/* Two small cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[
                { value: 95, suffix: '%', label: 'Satisfacción de clientes' },
                { value: 10, suffix: '+', label: 'Años de experiencia legal' },
              ].map((stat) => (
                <div key={stat.label} style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(201,169,76,0.15)',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: '700', color: 'var(--gold)', lineHeight: 1 }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.4rem', fontSize: '0.8rem' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div style={{
              background: 'rgba(201,169,76,0.08)',
              border: '1px solid rgba(201,169,76,0.25)',
              borderRadius: '12px',
              padding: '1.1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <Scale size={22} color="var(--gold)" />
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--gold)' }}>Abogados titulados</strong> — Servicio legal transparente y ético
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: 'rgba(255,255,255,0.35)', fontSize: '0.7rem', letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, transparent, var(--gold))',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .hero-stats { display: none !important; }
        }
      `}</style>
    </section>
  );
}
