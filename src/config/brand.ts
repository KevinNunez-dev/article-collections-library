export type NavItem = { label: string; href: string };

export const brand = {
  name: 'RPT Clinic',
  legalName: 'RPT Clinic',
  tagline: 'Clear, practical health information for everyday decisions.',
  domain: 'www.rptclinic.com',
  // Use the logo placed in `public/images/` (filename without spaces)
  logoUrl: '/images/rpt-library-logo.png',
  logoAlt: 'Library logo',
  faviconUrl: '/favicon.svg',
  phone: '(305) 555-0199',
  phoneHref: '+12482509387',
  appointmentUrl: 'https://rptclinic.com/contact/',
  primaryColor: '#0B5FFF',
  primaryDarkColor: '#0847BF',
  accentColor: '#E8F1FF',
  inkColor: '#172033',
  mutedColor: '#5D687B',
  surfaceColor: '#F6F8FC',
  headerNav: [
    { label: 'Health Library', href: '/health' },
    { label: 'Find Care', href: '/find-care' },
    { label: 'Locations', href: '/locations' },
    { label: 'About Us', href: '/about' },
  ] satisfies NavItem[],
  footerNav: [
    { label: 'Health Library', href: '/health' },
    { label: 'Medical Review Policy', href: '/medical-review-policy' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ] satisfies NavItem[],
};
