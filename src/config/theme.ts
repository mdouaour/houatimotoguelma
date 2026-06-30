export const THEME = {
  fonts: {
    display: '"Plus Jakarta Sans", sans-serif',
    body: '"Inter", ui-sans-serif, system-ui, sans-serif',
  },
  colors: {
    brand: '#DC2626',
    brandHover: '#B91C1C',
    neon: '#00FF88',
    cyan: '#00D4FF',
    ink: '#09090B',
    inkSecondary: '#18181B',
    inkTertiary: '#3F3F46',
  },
  radii: {
    card: '2.5rem',
    cardLg: '4rem',
    button: '1rem',
  },
  shadows: {
    soft: '0 10px 40px -10px rgba(0,0,0,0.04)',
    elegant: '0 20px 60px -12px rgba(0,0,0,0.08)',
    brand: '0 20px 60px -12px rgba(220,38,38,0.15)',
  },
} as const;
