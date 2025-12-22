'use client';

import Image from 'next/image';

export function HeroSection() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--foundation-space-24) var(--foundation-space-6)',
      overflow: 'hidden',
    }}>
      {/* Video Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}>
        <video
          className="video-background"
          src="/assets/waves.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Hero Content */}
      <div style={{
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto',
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: 'var(--foundation-space-6)',
            lineHeight: 1.1,
          }}>
            Digitala platsen för att växa.
          </h1>
          <p style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
            color: 'var(--text-secondary)',
            marginBottom: 'var(--foundation-space-8)',
            lineHeight: 1.5,
          }}>
            Hemsida och affärsverktyg – på ett ställe.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--foundation-space-4)',
            marginBottom: 'var(--foundation-space-12)',
            paddingTop: 'var(--foundation-space-4)',
          }}>
            <a
              href="https://builder.blimpify-im.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--foundation-space-4) var(--foundation-space-8)',
                background: 'var(--action-primary-default)',
                color: 'var(--action-primary-text)',
                borderRadius: 'var(--radius-lg)',
                fontSize: '1.125rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--action-primary-hovered)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--action-primary-default)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Starta ditt projekt
            </a>
          </div>
        </div>

        {/* Dashboard Mockup Image */}
        <div style={{
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          <div style={{
            position: 'relative',
          }}>
            <Image
              src="/assets/Mockupdashboard.jpg"
              alt="Website Builder Interface"
              width={1200}
              height={675}
              priority
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: 'var(--radius-3xl)',
                boxShadow: 'var(--shadow-strong)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
