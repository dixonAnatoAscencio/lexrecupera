import { AlertCircle, TrendingDown, Clock, HelpCircle } from 'lucide-react';

const problems = [
  {
    icon: <AlertCircle size={26} />,
    title: 'Dinero invisible',
    desc: 'Cuando se levanta un embargo o termina un proceso judicial, el dinero queda depositado en el juzgado. Muchas personas nunca saben que ese dinero sigue allí, esperando ser reclamado.',
  },
  {
    icon: <TrendingDown size={26} />,
    title: 'Sin información clara',
    desc: 'El sistema judicial colombiano no notifica activamente a los titulares. Los juzgados tampoco publican listas de dinero no reclamado. La información es difícil de encontrar sin asesoría especializada.',
  },
  {
    icon: <Clock size={26} />,
    title: 'El tiempo corre',
    desc: 'Existen plazos y procedimientos específicos para solicitar la entrega. Si no se actúa a tiempo, la gestión se complica y puede requerir trámites adicionales.',
  },
  {
    icon: <HelpCircle size={26} />,
    title: '¿Cómo saber si tengo dinero?',
    desc: 'Sin conocimiento técnico-jurídico y acceso a los sistemas del SIGEJ y el Banco Agrario, es casi imposible realizar la búsqueda de manera autónoma y efectiva.',
  },
];

export default function ProblemSection() {
  return (
    <section id="problema" style={{
      background: 'linear-gradient(180deg, #0a1628 0%, var(--navy) 100%)',
      padding: '6rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative lines */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
        opacity: 0.3,
      }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">El Problema</span>
          <h2 className="display-lg section-title" style={{ color: 'var(--white)' }}>
            ¿Por qué muchos colombianos <br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>pierden su propio dinero?</em>
          </h2>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '620px', margin: '0 auto' }}>
            Miles de pesos quedan olvidados en juzgados cada año. El proceso judicial termina, pero el dinero depositado como título judicial permanece sin ser reclamado.
          </p>
          <span className="gold-line" style={{ margin: '1.5rem auto 0' }} />
        </div>

        {/* Stats banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(201,169,76,0.1), rgba(201,169,76,0.04))',
          border: '1px solid rgba(201,169,76,0.2)',
          borderRadius: '16px',
          padding: '2rem 3rem',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '3.5rem',
        }}>
          {[
            { value: '$80B+', label: 'en títulos judiciales sin reclamar en Colombia' },
            { value: '40%', label: 'de personas embargadas desconocen que pueden recuperar dinero' },
            { value: '3-6', label: 'meses promedio para obtener la entrega del título' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.4rem',
                fontWeight: '700',
                color: 'var(--gold)',
                lineHeight: 1,
              }}>{s.value}</div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', maxWidth: '180px', marginTop: '0.4rem', lineHeight: 1.4 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Problem cards */}
        <div className="grid-2" style={{ gap: '1.25rem' }}>
          {problems.map((p) => (
            <div key={p.title} className="card card-gold-accent" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <div className="icon-box" style={{ flexShrink: 0 }}>
                {p.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: 'var(--white)', marginBottom: '0.6rem' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
