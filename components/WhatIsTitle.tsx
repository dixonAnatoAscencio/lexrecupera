'use client';

import { BookOpen, Banknote, FileText, Scale } from 'lucide-react';

const steps = [
  {
    icon: <Scale size={22} />,
    step: '01',
    title: '¿Qué es un proceso judicial con depósito?',
    desc: 'Cuando un juez ordena un embargo o medida cautelar, el dinero es consignado en el Banco Agrario a nombre del juzgado. Este dinero queda como un "título judicial".',
  },
  {
    icon: <Banknote size={22} />,
    step: '02',
    title: '¿Qué es exactamente un título judicial?',
    desc: 'Es un documento financiero emitido por el Banco Agrario que certifica el depósito judicial. Puede ser cobrado por la parte beneficiaria según lo ordene el juzgado.',
  },
  {
    icon: <BookOpen size={22} />,
    step: '03',
    title: '¿Cuándo puedo reclamar mi dinero?',
    desc: 'Cuando el proceso concluye, el embargo es levantado, o cuando el juzgado determina que el dinero debe ser devuelto al depositante original.',
  },
  {
    icon: <FileText size={22} />,
    step: '04',
    title: '¿Dónde se hace la solicitud?',
    desc: 'La solicitud de entrega se radica directamente ante el juzgado que tiene a cargo el proceso. Requerirá documentos específicos y seguir el procedimiento legal correspondiente.',
  },
];

export default function WhatIsTitle() {
  return (
    <section id="que-son" style={{
      background: 'var(--cream)',
      padding: '6rem 0',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="what-grid">

          {/* Left explanation */}
          <div>
            <span className="section-label" style={{ color: 'var(--gold-dark)' }}>
              <span style={{ background: 'var(--gold-dark)', display: 'block', width: '24px', height: '2px' }} />
              Conceptos Clave
            </span>
            <h2 className="display-lg section-title" style={{ color: 'var(--navy)' }}>
              ¿Qué son los{' '}
              <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>
                títulos judiciales?
              </span>
            </h2>
            <p className="body-lg" style={{ color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Un título judicial es, en términos simples, <strong style={{ color: 'var(--navy)' }}>un recibo bancario emitido por el Banco Agrario</strong> que certifica que existe dinero depositado en un juzgado a nombre de un proceso legal.
            </p>
            <p className="body-md" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Estos depósitos se generan por distintos motivos: embargos de sueldos o bienes, medidas cautelares, fianzas judiciales, descuentos en nómina ordenados por un juez, y otros mecanismos procesales.
            </p>

            {/* Highlight box */}
            <div style={{
              background: 'var(--navy)',
              borderRadius: '12px',
              padding: '1.75rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
                background: 'linear-gradient(180deg, var(--gold), var(--gold-light))',
              }} />
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.65, paddingLeft: '0.5rem' }}>
                <strong style={{ color: 'var(--gold)' }}>Dato importante:</strong> El proceso puede haber terminado hace años y el dinero sigue consignado en el juzgado. El Estado no avisa automáticamente a los beneficiarios.
              </p>
            </div>
          </div>

          {/* Right steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {steps.map((s) => (
              <div key={s.step} style={{
                display: 'flex',
                gap: '1.2rem',
                padding: '1.5rem',
                background: 'var(--white)',
                borderRadius: '12px',
                border: '1px solid var(--cream-dark)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(201,169,76,0.12)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--cream-dark)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                }}
              >
                <div style={{
                  flexShrink: 0,
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(201,169,76,0.12), rgba(201,169,76,0.05))',
                  border: '1px solid rgba(201,169,76,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-dark)',
                }}>
                  {s.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--gold-dark)', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>PASO {s.step}</div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--navy)', marginBottom: '0.4rem' }}>{s.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .what-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
