'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#que-son', label: 'Títulos' },
    { href: '#como-funciona', label: 'Cómo Funciona' },
    { href: '#galeria', label: 'Galería' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        backgroundColor: scrolled ? 'rgba(13,27,53,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,169,76,0.2)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '68px' : '84px',
          transition: 'height 0.4s ease',
        }}>

          {/* Logo */}
          <Link href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexShrink: 0 }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1.5px solid var(--gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-heading)',
              fontSize: '1rem',
              fontWeight: '700',
              color: 'var(--gold)',
            }}>LR</div>
            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.15rem',
                fontWeight: '700',
                letterSpacing: '0.06em',
                color: 'var(--white)',
                lineHeight: '1',
                whiteSpace: 'nowrap',
              }}>LEXRECUPERA</div>
              <div style={{
                fontSize: '0.58rem',
                letterSpacing: '0.1em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                fontWeight: '500',
              }}>Títulos Judiciales</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul style={{
            display: 'flex',
            gap: '1.5rem',
            listStyle: 'none',
            alignItems: 'center',
            margin: '0 1.5rem',
          }} className="desktop-nav">
            {navLinks.map((link) => (
              <li key={link.href} style={{ whiteSpace: 'nowrap' }}>
                <a href={link.href} style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '0.83rem',
                  fontWeight: '500',
                  letterSpacing: '0.01em',
                  transition: 'color 0.3s ease',
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                >{link.label}</a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }} className="desktop-nav">
            <a href="tel:+573001234567" style={{
              display: 'flex', alignItems: 'center', gap: '0.35rem',
              color: 'var(--gold)', fontSize: '0.82rem', fontWeight: '600',
              whiteSpace: 'nowrap',
            }}>
              <Phone size={14} />
              +57 314 808 6411
            </a>
            <a href="#contacto" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.82rem', whiteSpace: 'nowrap' }}>
              Consulta Gratis
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: 'var(--white)', padding: '0.5rem' }}
            className="mobile-menu-btn"
            aria-label="Menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{
            background: 'rgba(13,27,53,0.98)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid rgba(201,169,76,0.2)',
            padding: '1.5rem',
          }}>
            <ul style={{ listStyle: 'none', marginBottom: '1.5rem' }}>
              {navLinks.map((link) => (
                <li key={link.href} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <a href={link.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.9rem 0',
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '1rem',
                      fontWeight: '500',
                    }}>{link.label}</a>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href="tel:+573001234567" style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                color: 'var(--gold)', fontWeight: '600',
              }}>
                <Phone size={16} /> +57 300 123 4567
              </a>
              <a href="#contacto" className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}
                onClick={() => setMenuOpen(false)}>
                Consulta Gratuita
              </a>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
