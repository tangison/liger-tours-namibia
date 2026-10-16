'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FAF7F0',
          color: '#2B2614',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '1.5rem',
        }}
      >
        <div style={{ maxWidth: 420 }}>
          <p style={{ fontFamily: 'cursive', fontSize: 44, color: '#B37471', margin: '0 0 8px' }}>500</p>
          <h1 style={{ fontSize: 22, margin: '0 0 12px' }}>Liger Tours Namibia is briefly unavailable</h1>
          <p style={{ color: '#5D5339', fontSize: 14, lineHeight: 1.6, margin: '0 0 24px' }}>
            A server error occurred. Please try again in a moment, or call us on
            +264 81 472 2552 between 7:30 AM and 11:00 PM.
          </p>
          <button
            onClick={reset}
            style={{
              background: '#473E21',
              color: '#FAF7F0',
              border: 'none',
              borderRadius: 8,
              padding: '12px 24px',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
