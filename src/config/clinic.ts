export const clinic = {
  address: { street: '3250 W. Big Beaver Road, Suite 426', city: 'Troy', region: 'MI', postalCode: '48084', country: 'US' },
  phone: '(248) 250-9387',
  phoneHref: '+12482509387',
  email: 'info@rptclinic.com',
  mapUrl: 'https://maps.app.goo.gl/PyPstKVq9KW7SBoN9',
  hours: 'Contact RPT Clinic for current appointment availability.',
  appointmentLabel: 'Schedule an appointment',
  serviceUrl: 'https://rptclinic.com/physical-therapy-troy-michigan/',
  landingUrl: 'https://treatment.rptclinic.com/clinic/rpt/',
  serviceAreas: ['Troy', 'Rochester', 'Warren', 'Royal Oak', 'Sterling Heights', 'Bloomfield Hills', 'Clinton Township', 'Detroit'],
  // Add real clinicians here; the credentials block renders only when this has entries.
  providers: [] as Array<{ name: string; credentials: string; bio?: string }>,
};
