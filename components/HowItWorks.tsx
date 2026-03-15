'use client';

import { PhoneCall, Search, FileText, Send, Eye, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <PhoneCall size={24} />,
    number: '01',
    title: 'Consulta inicial gratuita',
    desc: 'Contáctenos por formulario, WhatsApp o teléfono. Recogemos su información básica: nombre completo, cédula y datos del proceso judicial si los tiene.',
    color: '#C9A94C',
  },
  {
    icon: <Search size={24} />,
    number: '02',
    title: 'Búsqueda de títulos',
    desc: 'Realizamos la búsqueda en los sistemas del Banco Agrario y el SIGEJ para identificar todos los títulos judiciales asociados a su cédula.',
    color: '#d4b86a',
  },
  {
    icon: <FileText size={24} />,
    number: '03',
    title: 'Diagnóstico y propuesta',
    desc: 'Le informamos qué títulos existen, en qué juzgado están, de cuánto dinero se trata y cuáles son los pasos para su recuperación. Si no hay títulos, no hay ningún costo.',
    color: '#e0c880',
  },
  {
    icon: <Send size={24} />,
    number: '04',
    title: 'Preparación y radicación',
    desc: 'Preparamos la solicitud de entrega con todos los requisitos legales y la radicamos ante el juzgado correspondiente en su nombre.',
    color: '#C9A94C',
  },
  {
    icon: <Eye size={24} />,
    number: '05',
    title: 'Seguimiento del proceso',
    desc: 'Hacemos seguimiento activo ante el juzgado y el Banco Agrario. Lo mantenemos informado de cada avance a través de nuestros canales de comunicación.',
    color: '#b8942e',
  },
  {
    icon: <CheckCircle size={24} />,
    number: '06',
    title: 'Entrega del dinero',
    desc: 'Una vez el juzgado emite la orden de pago, coordinamos el cobro del título en el Banco Agrario. Su dinero llega a sus manos.',
    color: '#C9A94C',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" style={{
      background: 'var(--cream)',
      padding: '6rem 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label" style={{ color: 'var(--gold-dark)' }}>
            <span style={{ background: 'var(--gold-dark)', display: 'block', width: '24px', height: '2px' }} />
            El Proceso
          </span>
          <h2 className="display-lg section-title" style={{ color: 'var(--navy)' }}>
            Así funciona nuestro{' '}
            <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>proceso paso a paso</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto' }}>
            Un proceso claro, transparente y completamente gestionado por nuestro equipo jurídico especializado.
          </p>
          <span className="gold-line" style={{ margin: '1.5rem auto 0', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold))' }} />
        </div>

        {/* Steps grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="steps-grid">
          {steps.map((s, i) => (
            <div key={s.number} style={{
              background: 'var(--white)',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid var(--cream-dark)',
              boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-4px)';
                el.style.borderColor = 'var(--gold)';
                el.style.boxShadow = '0 12px 40px rgba(201,169,76,0.12)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'var(--cream-dark)';
                el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)';
              }}
            >
              {/* Step number bg */}
              <div style={{
                position: 'absolute', top: '1.25rem', right: '1.25rem',
                fontFamily: 'var(--font-heading)', fontSize: '4rem', fontWeight: '700',
                color: 'rgba(201,169,76,0.06)', lineHeight: 1, userSelect: 'none',
              }}>{s.number}</div>

              {/* Icon */}
              <div style={{
                width: '52px', height: '52px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(201,169,76,0.12), rgba(201,169,76,0.04))',
                border: '1px solid rgba(201,169,76,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold-dark)',
                marginBottom: '1.25rem',
              }}>
                {s.icon}
              </div>

              <div style={{
                fontSize: '0.7rem', color: 'var(--gold-dark)', fontWeight: '700',
                letterSpacing: '0.12em', marginBottom: '0.5rem',
              }}>
                PASO {s.number}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                color: 'var(--navy)',
                marginBottom: '0.75rem',
                lineHeight: 1.3,
              }}>{s.title}</h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA under steps */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a href="#contacto" className="btn btn-primary btn-lg">
            Iniciar mi consulta gratuita →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .steps-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { .steps-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
