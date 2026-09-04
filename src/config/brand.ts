export type NavItem = { label: string; href: string };

export const brand = {
  name: 'RPT Clinic',
  legalName: 'RPT Clinic',
  tagline: 'Clear, practical health information for everyday decisions.',
  domain: 'rptclinic.com',
  // Use the logo placed in `public/images/` (filename without spaces)
  logoUrl: '/images/rpt-library-logo.png',
  logoAlt: 'Library logo',
  socialImageUrl: 'https://rptclinic.com/images/rpt-clinic-treatment-2.jpg',
  socialImageAlt: 'RPT Clinic robotic precision therapy treatment',
  faviconUrl: '/favicon.svg',
  phone: '(305) 555-0199',
  phoneHref: '+12482509387',
  appointmentUrl: 'https://rptclinic.com/contact/',
  primaryColor: '#1E63D6',
  primaryDarkColor: '#1248A3',
  accentColor: '#EAF3FF',
  inkColor: '#17345C',
  mutedColor: '#52657D',
  surfaceColor: '#F5F8FC',
  headerNav: [
    { label: 'Health Library', href: '/health' },
    { label: 'Locations', href: '/locations' },
  ] satisfies NavItem[],
  footerNav: [
    { label: 'Health Library', href: '/health' },
    { label: 'Medical Review Policy', href: '/medical-review-policy' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ] satisfies NavItem[],
};
