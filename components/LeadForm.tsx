'use client';

import { useState, FormEvent } from 'react';
import { Send, MessageCircle, CheckCircle, Phone } from 'lucide-react';

type FormState = {
  nombre: string;
  cedula: string;
  telefono: string;
  email: string;
  ciudad: string;
  tipoProceso: string;
  mensaje: string;
};

export default function LeadForm() {
  const [form, setForm] = useState<FormState>({
    nombre: '', cedula: '', telefono: '', email: '',
    ciudad: '', tipoProceso: '', mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contacto" style={{
      background: 'var(--cream)',
      padding: '6rem 0',
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="form-grid">

          {/* Left – info */}
          <div>
            <span className="section-label" style={{ color: 'var(--gold-dark)' }}>
              <span style={{ background: 'var(--gold-dark)', display: 'block', width: '24px', height: '2px' }} />
              Empecemos
            </span>
            <h2 className="display-lg section-title" style={{ color: 'var(--navy)' }}>
              Solicite su{' '}
              <span style={{ color: 'var(--gold-dark)', fontStyle: 'italic' }}>consulta gratuita</span>
            </h2>
            <p className="body-lg" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Cuéntenos brevemente su situación. Uno de nuestros abogados se comunicará con usted en menos de 24 horas para realizar la búsqueda y explicarle sus opciones, sin ningún costo.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                'Sin obligación ni compromiso',
                'Respuesta en menos de 24 horas hábiles',
                'Toda su información es confidencial',
                'Sin pago hasta confirmar su título',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  <CheckCircle size={18} color="var(--gold-dark)" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Contact options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <p style={{ color: 'var(--navy)', fontWeight: '600', fontSize: '0.95rem' }}>
                ¿Prefiere contactarnos directamente?
              </p>
              <a
                href="https://wa.me/573148086411?text=Hola,%20quiero%20verificar%20si%20tengo%20t%C3%ADtulos%20judiciales%20a%20mi%20nombre"
                target="_blank" rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: 'fit-content' }}
              >
                <MessageCircle size={18} /> Escribir por WhatsApp
              </a>
              <a href="tel:+573148086411" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: 'var(--navy)', fontWeight: '600', fontSize: '0.95rem',
              }}>
                <Phone size={16} color="var(--gold-dark)" /> +57 314 8086411
              </a>
            </div>
          </div>

          {/* Right – Form */}
          <div>
            {submitted ? (
              <div style={{
                background: 'var(--white)',
                borderRadius: '20px',
                padding: '3rem',
                textAlign: 'center',
                border: '1px solid var(--gold)',
                boxShadow: '0 8px 40px rgba(201,169,76,0.15)',
              }}>
                <div style={{
                  width: '72px', height: '72px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold), var(--gold-light))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  <CheckCircle size={36} color="var(--navy)" strokeWidth={2.5} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>
                  ¡Solicitud recibida!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                  Uno de nuestros abogados revisará su caso y se comunicará con usted en las próximas <strong>24 horas hábiles</strong> para iniciar la búsqueda de sus títulos.
                </p>
                <div style={{
                  marginTop: '1.75rem',
                  padding: '1rem',
                  background: 'var(--cream)',
                  borderRadius: '10px',
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                }}>
                  ¿Va a quedar pendiente revisando? Recuerde que también puede escribirnos por WhatsApp.
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--white)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
                  border: '1px solid var(--cream-dark)',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '1.75rem' }}>
                  Solicitud de consulta gratuita
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="nombre">Nombre completo *</label>
                    <input id="nombre" name="nombre" type="text" required
                      className="form-input" placeholder="Juan Pérez García"
                      value={form.nombre} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cedula">Número de cédula *</label>
                    <input id="cedula" name="cedula" type="text" required
                      className="form-input" placeholder="1234567890"
                      value={form.cedula} onChange={handleChange} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="telefono">Teléfono / WhatsApp *</label>
                    <input id="telefono" name="telefono" type="tel" required
                      className="form-input" placeholder="+57 314 808 6411"
                      value={form.telefono} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Correo electrónico</label>
                    <input id="email" name="email" type="email"
                      className="form-input" placeholder="lexrecupera@gmail.com"
                      value={form.email} onChange={handleChange} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="ciudad">Ciudad</label>
                    <input id="ciudad" name="ciudad" type="text"
                      className="form-input" placeholder="Bogotá"
                      value={form.ciudad} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="tipoProceso">Tipo de proceso</label>
                    <select id="tipoProceso" name="tipoProceso"
                      className="form-select"
                      value={form.tipoProceso} onChange={handleChange}>
                      <option value="">Seleccionar...</option>
                      <option value="embargo-salario">Embargo de salario</option>
                      <option value="embargo-bienes">Embargo de bienes / cuenta</option>
                      <option value="descuento-nomina">Descuento de nómina judicial</option>
                      <option value="alimentos">Proceso de alimentos</option>
                      <option value="ejecutivo">Proceso ejecutivo</option>
                      <option value="otro">Otro / No sé</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="mensaje">Cuéntenos brevemente su caso</label>
                  <textarea id="mensaje" name="mensaje"
                    className="form-textarea" placeholder="¿Qué pasó? ¿Cuándo fue aproximadamente el proceso? ¿Tiene algún papel del juzgado?..."
                    value={form.mensaje} onChange={handleChange} />
                </div>

                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                  Al enviar este formulario acepta que LexRecupera use su información para contactarle sobre sus servicios. Sus datos son tratados con confidencialidad según nuestra política de privacidad.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{
                    width: '100%', justifyContent: 'center',
                    padding: '1.1rem',
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? (
                    'Enviando...'
                  ) : (
                    <><Send size={18} /> Solicitar consulta gratuita</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .form-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
