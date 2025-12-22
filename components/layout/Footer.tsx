'use client';

import Image from 'next/image';

export function Footer() {
  return (
    <footer style={{
      background: 'var(--surface-page)',
      borderTop: '1px solid var(--border-subtle)',
      padding: 'var(--foundation-space-16) var(--foundation-space-6)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--foundation-space-12)',
          marginBottom: 'var(--foundation-space-12)',
        }}
        className="footer-grid"
        >
          {/* Logo and Description */}
          <div style={{
            maxWidth: '400px',
          }}>
            <a href="/" style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--foundation-space-2)',
              marginBottom: 'var(--foundation-space-6)',
            }}>
              <Image
                src="/assets/logo.png"
                alt="Blimpify Logo"
                width={48}
                height={20}
                style={{ objectFit: 'contain' }}
              />
              <span style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}>
                blimpify
              </span>
            </a>
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}>
              Vi skapar anpassade hemsidor som du enkelt kan uppdatera utan att förstöra designen.
            </p>
          </div>

          {/* Navigation Links */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--foundation-space-8)',
          }}>
            {/* Sidor Column */}
            <div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 'var(--foundation-space-4)',
              }}>
                Sidor
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--foundation-space-3)',
              }}>
                <li>
                  <a href="#how-it-works" style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                  }}>
                    Så fungerar det
                  </a>
                </li>
                <li>
                  <a href="#portfolio" style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                  }}>
                    Våra projekt
                  </a>
                </li>
                <li>
                  <a href="#testimonials" style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                  }}>
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                  }}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#priser" style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                  }}>
                    Priser
                  </a>
                </li>
              </ul>
            </div>

            {/* Kontakt Column */}
            <div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 'var(--foundation-space-4)',
              }}>
                Kontakt
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--foundation-space-3)',
              }}>
                <li>
                  <a
                    href="https://calendly.com/admin-blimpify/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s',
                    }}
                  >
                    Boka möte
                  </a>
                </li>
                <li>
                  <a href="/contact" style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                  }}>
                    Kontakta oss
                  </a>
                </li>
                <li>
                  <a
                    href="https://builder.blimpify-im.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s',
                    }}
                  >
                    Starta projekt
                  </a>
                </li>
                <li>
                  <a href="mailto:admin@blimpify-im.com" style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s',
                  }}>
                    Skicka email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          paddingTop: 'var(--foundation-space-8)',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--foundation-space-4)',
          }}
          className="footer-bottom-flex"
          >
            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-tertiary)',
            }}>
              © 2024 Blimpify AB Org.nr: 559519-2377. Alla rättigheter förbehållna.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--foundation-space-4)',
            }}>
              <a href="/terms" style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
              }}>
                Villkor
              </a>
              <a href="/privacy" style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
              }}>
                Integritet
              </a>
              <a href="/cookies" style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                transition: 'color 0.2s',
              }}>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 2fr !important;
          }
          .footer-bottom-flex {
            flex-direction: row !important;
            justify-content: space-between !important;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
