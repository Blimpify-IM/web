'use client';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      padding: '2rem',
      fontFamily: 'var(--font-roboto), sans-serif',
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'relative',
          width: '180px',
          height: '180px',
          margin: '0 auto 2rem',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(132, 0, 255, 0.1) 0%, rgba(180, 0, 255, 0.1) 100%)',
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '4rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #8400ff 0%, #a020f0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>404</div>
        </div>
        
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #8400ff 0%, #a020f0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>Sidan kunde inte hittas</h1>
        
        <p style={{
          fontSize: '1.125rem',
          color: 'var(--text-secondary, #888)',
          marginBottom: '2rem',
          lineHeight: 1.6,
        }}>
          Tyvärr kunde vi inte hitta sidan du letar efter. Den kan ha flyttats, 
          tagits bort eller så har du skrivit in fel adress.
        </p>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '2rem',
        }}>
          <a href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 500,
            background: 'linear-gradient(135deg, #8400ff 0%, #a020f0 100%)',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Tillbaka till startsidan</span>
          </a>
          
          <button 
            onClick={() => window.history.back()} 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 500,
              background: 'transparent',
              color: 'var(--text-primary, #333)',
              border: '1px solid var(--border-color, #ddd)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Gå tillbaka</span>
          </button>
        </div>
        
        <div style={{
          fontSize: '0.875rem',
          color: 'var(--text-secondary, #888)',
        }}>
          <p>Behöver du hjälp? <a href="/contact" style={{
            color: '#8400ff',
            textDecoration: 'none',
            fontWeight: 500,
          }}>Kontakta oss</a></p>
        </div>
      </div>
    </div>
  );
} 