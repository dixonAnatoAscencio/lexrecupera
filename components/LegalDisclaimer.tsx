export default function LegalDisclaimer() {
  return (
    <section style={{
      background: '#07101f',
      padding: '2.5rem 0',
      borderTop: '1px solid rgba(201,169,76,0.1)',
    }}>
      <div className="container">
        <div style={{
          background: 'rgba(201,169,76,0.04)',
          border: '1px solid rgba(201,169,76,0.12)',
          borderRadius: '10px',
          padding: '1.75rem 2rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, textAlign: 'justify' }}>
            <strong style={{ color: 'rgba(255,255,255,0.6)' }}>Aviso Legal y Disclaimer:</strong> La información contenida en este sitio web tiene carácter meramente informativo y no constituye asesoramiento jurídico formal. LexRecupera es un servicio de gestión y acompañamiento legal prestado por abogados titulados ante la solicitud de entrega de títulos judiciales. Los resultados obtenidos en casos anteriores no garantizan resultados similares en casos futuros, ya que la decisión final sobre la entrega de títulos judiciales es competencia exclusiva del juzgado correspondiente. LexRecupera no ofrece garantías de resultado. Los honorarios se acordarán contractualmente antes del inicio de cualquier gestión. Para los efectos del manejo de datos personales, la información suministrada a través de este sitio será tratada con estricta confidencialidad conforme a la Ley 1581 de 2012 y sus decretos reglamentarios. El uso de este sitio implica la aceptación de estos términos.
          </p>
        </div>
      </div>
    </section>
  );
}
