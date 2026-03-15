'use client';

import { CheckCircle, XCircle } from 'lucide-react';

const applicableCases = [
  { applies: true, case: 'Tuvo un embargo de salario o bienes ordenado por un juzgado' },
  { applies: true, case: 'Fue demandado en un proceso ejecutivo y realizaron descuentos de nómina' },
  { applies: true, case: 'Pagó una deuda mediante consignación judicial' },
  { applies: true, case: 'Fue parte de un proceso de alimentos donde hicieron descuentos' },
  { applies: true, case: 'El proceso judicial ya terminó pero nunca recibió el dinero sobrante' },
  { applies: true, case: 'Tuvo bienes secuestrados en un proceso judicial' },
  { applies: true, case: 'Le hicieron descuentos judiciales por deudas con cooperativas o bancos' },
  { applies: true, case: 'Tiene deudas antiguas que fueron demandadas hace más de 5 años' },
  { applies: false, case: 'Su proceso judicial todavía está activo (tampoco aplica si hay deudas pendientes)' },
  { applies: false, case: 'Nunca tuvo ningún tipo de proceso judicial o embargo' },
];

export default function ApplicableCases() {
  const validCases = applicableCases.filter(c => c.applies);
  const invalidCases = applicableCases.filter(c => !c.applies);

  return (
    <section id="casos" style={{
      background: 'linear-gradient(180deg, var(--navy-mid) 0%, var(--navy) 100%)',
      padding: '6rem 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">¿Aplica para Mí?</span>
          <h2 className="display-lg section-title" style={{ color: 'var(--white)' }}>
            Casos en los que{' '}
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>podemos ayudarle</span>
          </h2>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '540px', margin: '0 auto' }}>
            Si alguna de estas situaciones le resulta familiar, es muy probable que tenga un título judicial esperando ser reclamado.
          </p>
          <span className="gold-line" style={{ margin: '1.5rem auto 0' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2.5rem', alignItems: 'start' }} className="cases-grid">
          {/* Valid cases */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(201,169,76,0.2)',
            borderRadius: '16px',
            padding: '2.5rem',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              color: 'var(--gold)',
              marginBottom: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <CheckCircle size={22} /> Situaciones donde SÍ aplica
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {validCases.map((c) => (
                <li key={c.case} style={{
                  display: 'flex', gap: '0.85rem', alignItems: 'flex-start',
                  padding: '0.9rem 1rem',
                  background: 'rgba(201,169,76,0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(201,169,76,0.1)',
                }}>
                  <CheckCircle size={18} color="var(--gold)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.92rem', lineHeight: 1.55 }}>{c.case}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Invalid cases + CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,100,100,0.15)',
              borderRadius: '16px',
              padding: '2rem',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                color: 'rgba(255,180,180,0.9)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <XCircle size={20} /> Situaciones donde NO aplica
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {invalidCases.map((c) => (
                  <li key={c.case} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <XCircle size={16} color="rgba(255,150,150,0.7)" strokeWidth={2} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.87rem', lineHeight: 1.55 }}>{c.case}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div style={{
              background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
              borderRadius: '16px',
              padding: '2rem',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--navy)', fontWeight: '700', marginBottom: '0.5rem' }}>
                ¿No está seguro?
              </p>
              <p style={{ color: 'rgba(13,27,53,0.75)', fontSize: '0.88rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                Verificamos gratuitamente. Si no encontramos títulos, no le cobramos nada.
              </p>
              <a href="#contacto" style={{
                display: 'block',
                background: 'var(--navy)',
                color: 'var(--gold)',
                padding: '0.85rem',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#07101f')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--navy)')}
              >
                Consulta gratuita →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
