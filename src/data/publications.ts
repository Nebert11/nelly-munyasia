export interface Publication {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  body?: string[];
}

export const publications: Publication[] = [
  {
    id: 'reproductive-health-policy',
    category: 'Opinion',
    date: '2024',
    title: 'Why Reproductive Health Rights Are Central to Universal Health Coverage',
    excerpt:
      'Universal health coverage cannot be achieved without centering reproductive health and rights. Here is what it will take.',
    image: '/images/Her-Health-Launch-2026-3.jpg',
    imageAlt: 'Group of African women professionals collaborating around a laptop',
    featured: true,
    body: [
      'Universal Health Coverage (UHC) is built on a simple but powerful principle: everyone should be able to access the quality healthcare they need, when they need it, without suffering financial hardship. But that goal cannot be achieved if sexual and reproductive health and rights (SRHR) are treated as an optional component of healthcare.',
      'Reproductive health is not a separate issue from universal health coverage. It is one of its foundations.',
      'The World Health Organization (WHO) describes sexual and reproductive health as encompassing a broad range of services, including contraception, maternal and newborn care, fertility and infertility care, prevention and treatment of sexually transmitted infections, and protection from sexual and gender-based violence.',
      'For organisations such as the Reproductive Health Network Kenya (RHNK), advancing access to comprehensive SRHR is therefore central to building a health system that truly leaves no one behind.',
      'Health Coverage Must Include Reproductive Health',
      'A health system cannot be considered universal if millions of women, adolescents and other populations continue to face barriers to contraception, maternal healthcare, safe reproductive health services, STI prevention and treatment, or accurate reproductive health information.',
      'At the heart of reproductive health is the ability of individuals to make informed decisions about their bodies and reproductive lives.',
      'This includes decisions about whether and when to have children, contraception, pregnancy and childbirth, and access to appropriate reproductive healthcare.',
      'When people can make informed reproductive decisions and access the services they need, the benefits extend beyond individual health.',
      'Maternal and newborn health remains one of the clearest areas where reproductive health and universal health coverage intersect.',
      'Women need access to quality antenatal care, skilled birth attendance, emergency obstetric services, postnatal care and appropriate referrals. These services must be available regardless of a person\'s income, location or social circumstances.',
      'For RHNK, improving maternal health outcomes is an important part of our work. The organisation identifies reducing maternal morbidity and mortality, including challenges associated with postpartum haemorrhage and unsafe abortion as among our priorities.',
      'A health system that protects women throughout pregnancy, childbirth and the postnatal period is taking a critical step towards UHC.',
      'If people cannot access the reproductive healthcare they need, they are not receiving universal healthcare.',
      'The work of RHNK and its partners demonstrates why reproductive health must remain at the centre of this conversation.',
    ],
  },
  {
    id: 'community-health-workers',
    category: 'Article',
    date: '2023',
    title: 'Community Health Workers: The Backbone of Resilient Health Systems',
    excerpt:
      'How investing in community health workers transforms outcomes and builds trust at the last mile.',
    image: '/images/article.jpg',
    imageAlt: 'Female healthcare worker smiling with two children outside',
    body: [
      'When health systems are tested by outbreaks, emergencies, economic pressures or persistent gaps in access, one group often remains closest to the people who need care most: Community Health Workers (CHWs) and Community Health Volunteers (CHVs).',
      'They are the bridge between households and health facilities, translating health information into action, identifying people who need care, supporting referrals and helping communities navigate services that can sometimes feel distant or inaccessible.',
      'For organisations such as the Reproductive Health Network Kenya (RHNK), strengthening community-level health systems is central to improving access to quality sexual and reproductive health and rights (SRHR) services across Kenya.',
      'RHNK recognises community participation as an important component of service delivery. Our programmes strengthen the capacity of healthcare providers while engaging community health volunteers and youth peer providers to increase awareness, improve referrals and expand access to youth-friendly SRHR services.',
      'For many people, particularly those living in rural and underserved communities, accessing healthcare is not simply a matter of choosing to visit a facility. Distance, transport costs, social stigma, lack of information and shortages of health workers and commodities can all stand between individuals and the services they need.',
      'This is where community health workers make a difference.',
      'Working within their communities, they can provide health education, identify emerging needs, encourage timely care-seeking, support referrals and connect families with health facilities and other available services.',
      'In reproductive health, that connection is particularly important.',
      'A resilient health system is not built only inside hospitals and health centres. It begins in homes and communities.',
      'RHNK identifies several barriers to SRH service delivery in Kenya, including commodity shortages, long distances to reproductive health facilities, inadequate provider capacity, weak referral pathways and gaps in policy implementation. Its response includes strengthening healthcare provider capacity, improving community participation and developing referral pathways that connect communities to essential services.',
      'RHNK\'s model places emphasis on training, supportive supervision, peer support, quality assurance and continuous capacity building for healthcare providers and community-based actors.',
      'RHNK\'s work illustrates a broader principle: healthcare becomes more resilient when communities are active participants in delivering and shaping health services.',
      'As Kenya continues to strengthen its health system, investment in community health must remain a priority.',
      'Because resilient health systems are not built only when a crisis arrives.',
      'They are built every day, in homes, in villages, in neighbourhoods and in the relationships between communities and the health workers who serve them.',
    ],
  },
];
