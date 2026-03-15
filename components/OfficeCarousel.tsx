'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Building2, Users, FileText, Scale, Stamp } from 'lucide-react';

const slides = [
  {
    src: '/office-interior.jpg',
    title: 'Nuestra Oficina',
    desc: 'Un espacio diseñado para brindar confianza y profesionalismo en cada consulta.',
    icon: <Building2 size={18} />,
    tag: 'Instalaciones',
  },
  {
    src: '/lawyer-documents.jpg',
    title: 'Revisión de Expedientes',
    desc: 'Cada caso es analizado con detalle por nuestros abogados especializados.',
    icon: <FileText size={18} />,
    tag: 'Proceso Legal',
  },
  {
    src: '/team-meeting.jpg',
    title: 'Consultoría Personalizada',
    desc: 'Su caso recibe atención directa de un abogado responsable desde el primer día.',
    icon: <Users size={18} />,
    tag: 'Nuestro Equipo',
  },
  {
    src: '/courthouse.jpg',
    title: 'Gestión ante Juzgados',
    desc: 'Radicamos y hacemos seguimiento a sus solicitudes en juzgados de todo Colombia.',
    icon: <Scale size={18} />,
    tag: 'Trámites Judiciales',
  },
  {
    src: '/document-filing.jpg',
    title: 'Radicación Oficial',
    desc: 'Toda la documentación se gestiona correctamente ante la Rama Judicial.',
    icon: <Stamp size={18} />,
    tag: 'Proceso Oficial',
  },
];

export default function OfficeCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent((index + slides.length) % slides.length);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const next = () => goTo(current + 1);
  const prev = () => goTo(current - 1);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section id="galeria" style={{
      background: 'var(--cream)',
      padding: '6rem 0',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label" style={{ color: 'var(--gold-dark)' }}>
            <span style={{ background: 'var(--gold-dark)', display: 'block', width: '24px', height: '2px' }} />
            Conócenos
          </span>
          <h2 className="display-lg section-title" style={{ color: 'var(--navy)' }}>
            Nuestras{' '}
            <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>instalaciones y proceso</span>
          </h2>
          <p className="body-md" style={{ color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto' }}>
            Transparencia total: así trabajamos para recuperar su dinero.
          </p>
          <span className="gold-line" style={{ margin: '1.25rem auto 0', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold))' }} />
        </div>

        <div style={{ position: 'relative', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Main slide */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gap: '0',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(13,27,53,0.18)',
            minHeight: '480px',
          }} className="carousel-grid">

            {/* Image */}
            <div style={{
              position: 'relative',
              overflow: 'hidden',
              opacity: animating ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}>
              <Image
                src={slides[current].src}
                alt={slides[current].title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={current === 0}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to right, transparent 60%, rgba(249,246,238,0.3))',
              }} />
            </div>

            {/* Info panel */}
            <div style={{
              background: 'var(--navy)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              {/* Top */}
              <div>
                {/* Tag */}
                <span className="badge badge-gold" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                  {slides[current].icon}
                  {slides[current].tag}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  color: 'var(--white)',
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                  opacity: animating ? 0 : 1,
                  transform: animating ? 'translateY(10px)' : 'translateY(0)',
                  transition: 'all 0.3s ease',
                }}>
                  {slides[current].title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.7,
                  fontSize: '0.97rem',
                  opacity: animating ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                }}>
                  {slides[current].desc}
                </p>
              </div>

              {/* Bottom – controls + dots */}
              <div>
                {/* Dots */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '1.75rem' }}>
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      style={{
                        width: i === current ? '28px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.35s ease',
                        padding: 0,
                      }}
                      aria-label={`Ir a imagen ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={prev}
                    style={{
                      width: '44px', height: '44px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--white)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(201,169,76,0.2)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)';
                    }}
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={next}
                    style={{
                      width: '44px', height: '44px',
                      borderRadius: '50%',
                      background: 'var(--gold)',
                      border: '1px solid var(--gold)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--navy)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--gold-light)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--gold)'}
                    aria-label="Siguiente"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            marginTop: '1.25rem',
            overflowX: 'auto',
            paddingBottom: '4px',
          }}>
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  flexShrink: 0,
                  width: '90px',
                  height: '60px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '2px solid',
                  borderColor: i === current ? 'var(--gold)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  opacity: i === current ? 1 : 0.55,
                  padding: 0,
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = i === current ? '1' : '0.55'}
                aria-label={`Ver ${slide.title}`}
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .carousel-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
        }
      `}</style>
    </section>
  );
}
