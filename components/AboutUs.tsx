'use client';

import { Target, Eye, Heart, Award, Users, Scale } from 'lucide-react';

const values = [
  { icon: <Scale size={20} />, title: 'Ética jurídica', desc: 'Actuamos siempre dentro del marco legal, sin prometer lo que no podemos garantizar.' },
  { icon: <Heart size={20} />, title: 'Empatía', desc: 'Entendemos que detrás de cada caso hay una persona con una necesidad real.' },
  { icon: <Award size={20} />, title: 'Excelencia', desc: 'Cada solicitud se gestiona con el mismo rigor que merecen todos nuestros clientes.' },
  { icon: <Users size={20} />, title: 'Transparencia', desc: 'Le mantenemos informado en cada etapa. No hay letras pequeñas en nuestro servicio.' },
];

export default function AboutUs() {
  return (
    <section id="nosotros" style={{
      background: 'var(--navy)',
      padding: '6rem 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Quiénes Somos</span>
          <h2 className="display-lg section-title" style={{ color: 'var(--white)' }}>
            Conoce a{' '}
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>LexRecupera</span>
          </h2>
          <span className="gold-line" style={{ margin: '1.5rem auto 0' }} />
        </div>

        {/* Mission / Vision */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }} className="mv-grid">
          {/* Mission */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(201,169,76,0.2)',
            borderRadius: '16px',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
              background: 'linear-gradient(90deg, var(--gold), var(--gold-light))',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: 'rgba(201,169,76,0.12)',
                border: '1px solid rgba(201,169,76,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)',
              }}>
                <Target size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--white)' }}>
                Nuestra Misión
              </h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontSize: '0.97rem', textAlign: 'justify' }}>
              Gestionar de manera eficiente la recuperación de títulos judiciales correspondientes a procesos en los cuales nuestros clientes ostentan derechos legales frente a la parte demandada, mediante la aplicación de procedimientos jurídicos especializados y el ejercicio de altos estándares éticos y profesionales. Nuestra labor se orienta a garantizar la correcta administración, protección y restitución de los recursos derivados de procesos judiciales terminados.
            </p>
          </div>

          {/* Vision */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(201,169,76,0.2)',
            borderRadius: '16px',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '4px',
              background: 'linear-gradient(90deg, var(--gold-dark), var(--gold))',
            }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '10px',
                background: 'rgba(201,169,76,0.12)',
                border: '1px solid rgba(201,169,76,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--gold)',
              }}>
                <Eye size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--white)' }}>
                Nuestra Visión
              </h3>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontSize: '0.97rem', textAlign: 'justify' }}>
              Consolidarnos como una empresa líder y referente a nivel nacional en la gestión, recuperación y administración de títulos judiciales, reconocida por su eficiencia operativa, transparencia, rigor jurídico y estricto cumplimiento del marco normativo vigente; proyectándonos, a mediano y largo plazo, hacia la ampliación de nuestro campo de actuación mediante la estructuración y ejecución de operaciones de compra y gestión de cesiones de derechos litigiosos y créditos derivados de decisiones judiciales, así como la incorporación y fortalecimiento de nuestros servicios en el área del derecho civil, especialmente en procesos ejecutivos, asuntos de derecho de familia y procesos sucesorales, con el propósito de ofrecer soluciones jurídicas integrales y posicionarnos como un referente confiable y especializado dentro del sector legal.
            </p>
          </div>
        </div>

        {/* About text */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(201,169,76,0.12)',
          borderRadius: '16px',
          padding: '3rem',
          marginBottom: '3.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="about-inner-grid">
          <div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--white)', marginBottom: '1.25rem' }}>
              Más de <span style={{ color: 'var(--gold)' }}>10 años</span> de experiencia jurídica
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
              LexRecupera nació de la experiencia directa de abogados que trabajando en litigio descubrieron que cientos de personas tenían dinero retenido en juzgados sin saberlo. Decidimos especializarnos en resolver exactamente este problema.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Nuestro equipo está conformado por abogados titulados, con tarjeta profesional vigente y experiencia en derecho procesal civil y laboral. Nos respaldo una amplia red de corresponsales en todo el país.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { n: '500+', t: 'Títulos recuperados' },
              { n: '50+', t: 'Ciudades atendidas en Colombia' },
              { n: '10+', t: 'Años de experiencia jurídica' },
              { n: '100%', t: 'Clientes con atención personalizada' },
            ].map(s => (
              <div key={s.t} style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                background: 'rgba(201,169,76,0.05)',
                borderRadius: '8px',
                border: '1px solid rgba(201,169,76,0.1)',
              }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '700', color: 'var(--gold)', lineHeight: 1, minWidth: '60px' }}>{s.n}</span>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem' }}>{s.t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid-4" style={{ gap: '1.25rem' }}>
          {values.map((v) => (
            <div key={v.title} className="card card-gold-accent" style={{ padding: '1.75rem' }}>
              <div className="icon-box" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}>{v.icon}</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--white)', marginBottom: '0.5rem' }}>{v.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .mv-grid, .about-inner-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
