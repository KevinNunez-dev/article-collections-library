export const clinic = {
  address: { street: '3250 W. Big Beaver Road, Suite 426', city: 'Troy', region: 'MI', postalCode: '48084', country: 'US' },
  phone: '(248) 250-9387',
  phoneHref: '+12482509387',
  email: 'info@rptclinic.com',
  mapUrl: 'https://maps.app.goo.gl/PyPstKVq9KW7SBoN9',
  hours: 'Contact RPT Clinic for current appointment availability.',
  appointmentLabel: 'Schedule an appointment',
  serviceUrl: 'https://rptclinic.com/physical-therapy-troy-michigan/',
  landingUrl: 'https://rptclinic.com/',
  // Google Ads campaign landing pages. Change a URL here and every article using it updates on rebuild.
  // `back` is used for back-pain articles, `sciatica` for sciatica articles, and `default` for everything else.
  campaignLinks: {
    label: 'Learn more',
    default: 'https://painrelief.roboticmuscletherapy.com/clinic/rmtc/',
    back: 'https://painrelief.roboticmuscletherapy.com/clinic/rmtc/',
    sciatica: 'https://painrelief.roboticmuscletherapy.com/clinic/rmtc/',
  },
  serviceAreas: ['Troy', 'Rochester', 'Warren', 'Royal Oak', 'Sterling Heights', 'Bloomfield Hills', 'Clinton Township', 'Detroit'],
  // Add real clinicians here; the credentials block renders only when this has entries.
  providers: [] as Array<{ name: string; credentials: string; bio?: string }>,
};
