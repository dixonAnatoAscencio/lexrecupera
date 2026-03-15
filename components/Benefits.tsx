import { Search, Shield, FileCheck, Clock, HeartHandshake, BadgeCheck } from 'lucide-react';

const benefits = [
  {
    icon: <Search size={26} />,
    title: 'Búsqueda especializada',
    desc: 'Accedemos a los sistemas SIGEJ y Banco Agrario para identificar todos los títulos judiciales asociados a su nombre o empresa.',
  },
  {
    icon: <Shield size={26} />,
    title: 'Seguridad jurídica',
    desc: 'Todo el proceso se realiza dentro del marco legal colombiano por abogados matriculados. Su información está 100% protegida.',
  },
  {
    icon: <FileCheck size={26} />,
    title: 'Gestión documental completa',
    desc: 'Preparamos toda la documentación requerida, evitando rechazos por formalidades procesales. Usted solo firma lo necesario.',
  },
  {
    icon: <Clock size={26} />,
    title: 'Ahorro de tiempo',
    desc: 'Lo que a usted podría tomarle meses navegando el sistema judicial, nosotros lo gestionamos de manera eficiente y oportuna.',
  },
  {
    icon: <HeartHandshake size={26} />,
    title: 'Acompañamiento personal',
    desc: 'Tiene un abogado responsable de su caso con quien puede comunicarse directamente. No es un trámite más, es su caso.',
  },
  {
    icon: <BadgeCheck size={26} />,
    title: 'Sin pago anticipado',
    desc: 'No cobramos hasta verificar la existencia de su título. La consulta inicial es completamente gratuita y sin compromiso.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" style={{
      background: 'linear-gradient(180deg, var(--navy) 0%, var(--navy-mid) 100%)',
      padding: '6rem 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">¿Por Qué Elegirnos?</span>
          <h2 className="display-lg section-title" style={{ color: 'var(--white)' }}>
            Beneficios de trabajar con{' '}
            <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}>LexRecupera</span>
          </h2>
          <p className="body-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '560px', margin: '0 auto' }}>
            Nos especializamos exclusivamente en recuperación de títulos judiciales, lo que nos da una ventaja única en agilidad y conocimiento del proceso.
          </p>
          <span className="gold-line" style={{ margin: '1.5rem auto 0' }} />
        </div>

        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {benefits.map((b) => (
            <div key={b.title} className="card card-gold-accent" style={{ textAlign: 'center', padding: '2.5rem 2rem' }}>
              <div className="icon-box" style={{ width: '64px', height: '64px', margin: '0 auto 1.5rem', borderRadius: '50%' }}>
                {b.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.3rem',
                color: 'var(--white)',
                marginBottom: '0.75rem',
              }}>{b.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.65 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
