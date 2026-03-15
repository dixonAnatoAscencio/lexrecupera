import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'María Fernanda Ríos',
    location: 'Bogotá, D.C.',
    text: 'Llevaba años sin saber que tenía dinero en un juzgado por un embargo que me hicieron en 2016. LexRecupera encontró el título en menos de una semana y gestionaron todo. Recuperé 4.8 millones de pesos que ya había dado por perdidos.',
    stars: 5,
    process: 'Proceso ejecutivo bancario',
  },
  {
    name: 'Jorge Andrés Castillo',
    location: 'Medellín, Antioquia',
    text: 'Mi caso era complicado porque el proceso tenía muchos años. El equipo de LexRecupera fue muy profesional, me explicó cada paso con claridad y nunca me prometió lo que no podía cumplir. Al final recuperé el dinero. La honestidad de ellos me generó mucha confianza.',
    stars: 5,
    process: 'Proceso de alimentos',
  },
  {
    name: 'Claudia Patricia Moreno',
    location: 'Cali, Valle del Cauca',
    text: 'Estaba escéptica al principio, pero la consulta gratuita me convenció. Ellos hicieron la búsqueda sin cobrarme nada y encontraron un título por descuentos de nómina de hace 8 años. El proceso duró 4 meses y recuperé casi 2 millones. Excelente servicio.',
    stars: 5,
    process: 'Descuento de nómina judicial',
  },
  {
    name: 'Hernando Suárez Gómez',
    location: 'Bucaramanga, Santander',
    text: 'El embargaron mi cuenta hace años y cuando la deuda quedó saldada nunca me devolvieron el sobrante. LexRecupera lo identificó rápido. La gestión fue completamente virtual y muy eficiente. Los recomiendo sin dudarlo.',
    stars: 5,
    process: 'Embargo de cuenta bancaria',
  },
  {
    name: 'Luz Marina Pedraza',
    location: 'Pereira, Risaralda',
    text: 'Pensé que era muy tarde para reclamar porque el proceso terminó hace casi 10 años. El abogado asignado me explicó que aún era posible y lo logramos. Recuperé 1.6 millones. Para mí fue un regalo inesperado.',
    stars: 5,
    process: 'Proceso ejecutivo hipotecario',
  },
  {
    name: 'Carlos Enrique Vargas',
    location: 'Barranquilla, Atlántico',
    text: 'LexRecupera me asesoró desde el inicio con claridad y transparencia. La comunicación fue excelente en todo momento. El resultado fue positivo y quedé muy satisfecho con el servicio. Los volvería a contratar sin dudarlo.',
    stars: 5,
    process: 'Medida cautelar',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={15} fill="var(--gold)" color="var(--gold)" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" style={{
      background: 'linear-gradient(180deg, var(--navy) 0%, var(--navy-mid) 100%)',
      padding: '6rem 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Clientes que Confiaron en Nosotros</span>
          <h2 className="display-lg section-title" style={{ color: 'var(--white)' }}>
            Sus historias de{' '}
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>recuperación</span>
          </h2>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '520px', margin: '0 auto' }}>
            Personas reales que recuperaron dinero que creían perdido para siempre.
          </p>
          <span className="gold-line" style={{ margin: '1.5rem auto 0' }} />
        </div>

        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {testimonials.map((t) => (
            <div key={t.name} className="card card-gold-accent" style={{ position: 'relative' }}>
              {/* Quote icon */}
              <div style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem',
                color: 'rgba(201,169,76,0.15)',
              }}>
                <Quote size={36} />
              </div>

              <Stars count={t.stars} />

              <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                fontStyle: 'italic',
              }}>
                "{t.text}"
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                borderTop: '1px solid rgba(201,169,76,0.1)',
                paddingTop: '1.25rem',
              }}>
                {/* Avatar initials */}
                <div style={{
                  width: '42px', height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-dark))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--navy)',
                  fontWeight: '700',
                  fontSize: '0.9rem',
                  flexShrink: 0,
                }}>
                  {t.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--white)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gold)', opacity: 0.8 }}>{t.location}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', marginTop: '1px' }}>{t.process}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary */}
        <div style={{
          marginTop: '4rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
        }}>
          {[
            { value: '500+', label: 'casos gestionados' },
            { value: '4.9/5', label: 'calificación promedio' },
            { value: '100%', label: 'confidencialidad garantizada' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: '700', color: 'var(--gold)' }}>{s.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
