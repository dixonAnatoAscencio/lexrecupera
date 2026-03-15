'use client';

import { useState } from 'react';
import { ChevronDown, Plus } from 'lucide-react';

const faqs = [
  {
    question: '¿Qué es exactamente un título judicial?',
    answer: 'Un título judicial es un documento financiero emitido por el Banco Agrario de Colombia que representa dinero depositado en un proceso judicial. Se genera cuando un juzgado ordena consignar dinero por concepto de embargos, medidas cautelares, fianzas u otras medidas procesales. Es, en términos simples, dinero que está guardado en el banco a nombre de un juzgado esperando ser entregado a quien corresponda.',
  },
  {
    question: '¿Cómo sé si tengo dinero consignado en un juzgado?',
    answer: 'La única forma confiable de saberlo es realizando una búsqueda en el SIGEJ (Sistema de Información de Gestión y Estadísticas de la Jurisdicción) y en el Banco Agrario de Colombia, cruzando el número de su cédula con los depósitos judiciales existentes. Nosotros realizamos esta búsqueda de forma gratuita. Si usted tuvo un embargo, descuento de nómina judicial o cualquier proceso ejecutivo, hay buenas probabilidades de que exista un título a su nombre.',
  },
  {
    question: '¿Cuánto tiempo tarda el proceso de recuperación?',
    answer: 'El tiempo varía según el juzgado y la complejidad del caso. En promedio, desde la radicación de la solicitud hasta el cobro efectivo del dinero pueden transcurrir entre 3 y 6 meses. Algunos casos con documentación clara se resuelven en 2 meses; otros casos más complejos o con juzgados congestionados pueden tomar hasta 8 meses. Le mantenemos informado durante todo el proceso.',
  },
  {
    question: '¿El servicio tiene algún costo?',
    answer: 'La consulta inicial y la búsqueda de títulos son completamente gratuitas. Si no encontramos ningún título a su nombre, no le cobramos absolutamente nada. Solo cobramos honorarios en caso de que exista un título y usted decida contratarnos para gestionar su recuperación. Nuestros honorarios se acuerdan por contrato antes de iniciar y son transparentes y proporcionales al valor del título.',
  },
  {
    question: '¿Qué documentos necesito para iniciar el proceso?',
    answer: 'Para la búsqueda inicial solo necesita su cédula de ciudadanía. Para el trámite de recuperación necesitará: copia de la cédula, cualquier documentación del proceso judicial que tenga (sentencias, autos, notificaciones), certificado bancario de su cuenta, y si es posible, el número del proceso judicial. No se preocupe si no tiene todos los documentos; nosotros le ayudamos a ubicar la información en el sistema judicial.',
  },
  {
    question: '¿Qué pasa si mi proceso judicial ya terminó hace años?',
    answer: 'Esta es precisamente la situación más común y el escenario donde más ayudamos. El proceso puede haber terminado hace 5, 10 o más años y el dinero seguir esperando en el juzgado. Los títulos judiciales no tienen fecha de vencimiento inmediata, aunque entre más tiempo pase, más compleja puede ser la gestión. Si su proceso terminó hace tiempo, le recomendamos verificar cuanto antes si existe algún título.',
  },
  {
    question: '¿Pueden garantizar que recuperaré mi dinero?',
    answer: 'Como abogados éticos, no podemos prometer resultados garantizados, ya que la decisión final depende siempre del criterio del juzgado. Lo que sí garantizamos es un servicio profesional, diligente y transparente: preparamos su solicitud de la manera más sólida posible, hacemos seguimiento activo, y trabajamos para obtener el mejor resultado. Si no existe el título o el juzgado niega la solicitud por razones legales válidas, lo informamos con claridad.',
  },
  {
    question: '¿Trabajan en todo Colombia o solo en ciertas ciudades?',
    answer: 'Prestamos servicios en todo el territorio nacional. Gestionamos títulos judiciales ante juzgados en Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, Pereira, Manizales y todas las ciudades y municipios de Colombia. Los trámites ante juzgados de ciudades distintas a la nuestra se gestionan de manera remota o con corresponsales locales.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" style={{
      background: 'var(--cream)',
      padding: '6rem 0',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label" style={{ color: 'var(--gold-dark)' }}>
            <span style={{ background: 'var(--gold-dark)', display: 'block', width: '24px', height: '2px' }} />
            Preguntas Frecuentes
          </span>
          <h2 className="display-lg section-title" style={{ color: 'var(--navy)' }}>
            Todo lo que necesita{' '}
            <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>saber</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto' }}>
            Resolvemos las dudas más comunes sobre nuestro servicio y el proceso de recuperación de títulos judiciales.
          </p>
          <span className="gold-line" style={{ margin: '1.5rem auto 0', background: 'linear-gradient(90deg, var(--gold-dark), var(--gold))' }} />
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: 'var(--white)',
                borderRadius: '12px',
                border: '1px solid',
                borderColor: openIndex === i ? 'var(--gold)' : 'var(--cream-dark)',
                boxShadow: openIndex === i ? '0 4px 24px rgba(201,169,76,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '1.4rem 1.75rem',
                  textAlign: 'left',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.1rem',
                  color: openIndex === i ? 'var(--navy)' : 'var(--text-dark)',
                  fontWeight: openIndex === i ? '600' : '500',
                  lineHeight: 1.35,
                }}>
                  {faq.question}
                </span>
                <div style={{
                  flexShrink: 0,
                  width: '32px', height: '32px',
                  borderRadius: '50%',
                  background: openIndex === i ? 'var(--gold)' : 'var(--cream)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                }}>
                  <Plus size={16} color={openIndex === i ? 'var(--navy)' : 'var(--text-muted)'} />
                </div>
              </button>

              {openIndex === i && (
                <div style={{
                  padding: '0 1.75rem 1.4rem',
                  borderTop: '1px solid var(--cream-dark)',
                }}>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    paddingTop: '1.1rem',
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* More questions CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem' }}>
            ¿Tiene alguna pregunta que no está aquí?
          </p>
          <a href="#contacto" className="btn btn-primary">
            Escríbanos directamente →
          </a>
        </div>
      </div>
    </section>
  );
}
