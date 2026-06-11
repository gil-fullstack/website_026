export const buyHero = {
  badge: 'Compre Online',
  title: 'Escolha o plano ideal para o seu negócio',
  description:
    'Conheça os planos dos sistemas CIAF, formas de pagamento e fale com um consultor para tirar ' +
    'suas dúvidas. Suporte gratuito incluído em todas as licenças.',
  highlights: [
    { icon: 'mdi-shield-check-outline', label: 'Suporte gratuito incluído' },
    { icon: 'mdi-credit-card-check-outline', label: 'Pagamento à vista ou parcelado' },
    { icon: 'mdi-account-voice', label: 'Atendimento consultivo' }
  ]
}

export const buySteps = [
  {
    icon: 'mdi-format-list-checks',
    title: '1. Escolha o sistema',
    description: 'Veja os planos abaixo e escolha a versão ideal para o segmento e o tamanho do seu negócio.'
  },
  {
    icon: 'mdi-whatsapp',
    title: '2. Fale com um consultor',
    description: 'Entre em contato pelo WhatsApp Comercial para tirar dúvidas, simular valores e fechar o pedido.'
  },
  {
    icon: 'mdi-credit-card-outline',
    title: '3. Escolha o pagamento',
    description: 'Pague à vista (com desconto) nos planos anual e semestral, ou parcele o plano anual no cartão de crédito.'
  },
  {
    icon: 'mdi-rocket-launch-outline',
    title: '4. Implantação e suporte',
    description: 'Receba treinamento, instalação e suporte técnico gratuito para começar a usar o sistema.'
  }
]

export const buyProducts = [
  {
    id: 'ciaf-professional',
    icon: 'mdi-briefcase-check-outline',
    name: 'CIAF Professional',
    description: 'ERP completo para gestão financeira, estoque, vendas e fiscal.',
    to: '/solucoes/ciaf-professional',
    plans: [
      { name: 'CIAF Júnior', priceMonthly: 'R$ 82,83', priceAnnual: 'R$ 857,15', priceSemester: 'R$ 603,20' },
      { name: 'CIAF Júnior Fiscal', priceMonthly: 'R$ 126,75', priceAnnual: 'R$ 1.311,80', priceSemester: 'R$ 926,60' },
      { name: 'CIAF Master', priceMonthly: 'R$ 139,58', priceAnnual: 'R$ 1.444,15', priceSemester: 'R$ 1.019,90' },
      { name: 'CIAF Master Fiscal', priceMonthly: 'R$ 244,17', priceAnnual: 'R$ 2.525,90', priceSemester: 'R$ 1.782,70' }
    ]
  },
  {
    id: 'ciaf-emissor',
    icon: 'mdi-file-document-check-outline',
    name: 'CIAF Emissor',
    description: 'Emissão de NF-e e NFC-e para pequenas empresas.',
    to: '/solucoes/ciaf-emissor',
    plans: [
      { name: 'Emissor NF-e + NFC-e', priceMonthly: 'R$ 80,83', priceAnnual: 'R$ 821,00', priceSemester: 'R$ 638,00' }
    ]
  },
  {
    id: 'petsystem',
    icon: 'mdi-paw',
    name: 'Petsystem',
    description: 'Gestão para clínicas veterinárias e pet shops.',
    to: '/solucoes/petsystem',
    plans: [
      { name: 'Petsystem', priceMonthly: 'R$ 136,33', priceAnnual: 'R$ 1.636,00', priceSemester: 'R$ 993,80' },
      { name: 'Petsystem Fiscal', priceMonthly: 'R$ 240,33', priceAnnual: 'R$ 2.486,80', priceSemester: 'R$ 1.755,50' }
    ]
  },
  {
    id: 'ciaf-automotivo',
    icon: 'mdi-car-wrench',
    name: 'CIAF Automotivo',
    description: 'Gestão para oficinas mecânicas e centros automotivos.',
    to: '/solucoes/ciaf-automotivo',
    plans: [
      { name: 'CIAF Auto', priceMonthly: 'R$ 132,67', priceAnnual: 'R$ 1.372,50', priceSemester: 'R$ 967,80' },
      { name: 'CIAF Auto Fiscal', priceMonthly: 'R$ 236,67', priceAnnual: 'R$ 2.448,85', priceSemester: 'R$ 1.728,40' }
    ]
  },
  {
    id: 'ciaf-essencial',
    icon: 'mdi-rocket-launch-outline',
    name: 'CIAF Essencial',
    description: 'A maneira mais rápida de alavancar a gestão do seu negócio, 100% online.',
    to: '/solucoes/ciaf-essencial',
    plans: [
      { name: 'CIAF Essencial Fiscal', priceMonthly: 'R$ 118,58' }
    ]
  }
]

export const buyPayment = {
  heading: 'Formas de pagamento',
  description: 'Escolha a opção que melhor se encaixa no seu orçamento. Sem taxa de implantação.',
  methods: [
    {
      icon: 'mdi-credit-card-outline',
      title: 'Cartão de crédito (parcelado)',
      description: 'Plano anual parcelado no cartão de crédito, sem juros.'
    },
    {
      icon: 'mdi-cash-multiple',
      title: 'À vista',
      description: 'Desconto especial para pagamento à vista nos planos anual e semestral.'
    }
  ]
}

export const buyChannels = [
  {
    icon: 'mdi-whatsapp',
    label: 'WhatsApp Comercial',
    value: '(35) 98469-8908',
    href: 'https://wa.me/5535984698908?text=' + encodeURIComponent('Olá! Gostaria de saber mais sobre os planos CIAF.')
  },
  {
    icon: 'mdi-phone-outline',
    label: 'Renovações',
    value: '(35) 3721-3306',
    href: 'tel:+553537213306'
  },
  {
    icon: 'mdi-headset',
    label: 'Suporte técnico',
    value: '(35) 3712-2201',
    href: 'tel:+553537122201'
  },
  {
    icon: 'mdi-clock-outline',
    label: 'Horário de atendimento',
    value: 'Seg. a sex., 8h–12h e 13h30–18h'
  }
]
