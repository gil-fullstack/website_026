export const product = {
  name: 'CIAF Emissor',
  tagline: 'Emissão de NF-e e NFC-e simples, ágil e em conformidade',
  description:
    'Solução focada na emissão de documentos fiscais eletrônicos para pequenas empresas. ' +
    'Emita NF-e, NFC-e e Carta de Correção com total conformidade tributária, ' +
    'sem a complexidade de um ERP completo.',
  icon: 'mdi-file-document-check-outline',
  meta: {
    title: 'CIAF Emissor — Emissão de NF-e e NFC-e para Pequenas Empresas | CIAF Sistemas',
    description:
      'Conheça o CIAF Emissor: solução ágil para emissão de NF-e, NFC-e e documentos fiscais. Até 100 notas por mês com conformidade tributária completa.'
  }
}

export const generalFeatures = [
  {
    id: 'nfe',
    icon: 'mdi-file-document-outline',
    title: 'Emissão de NF-e',
    description: 'Emita Notas Fiscais Eletrônicas de forma ágil e em total conformidade com a legislação tributária vigente.'
  },
  {
    id: 'nfce',
    icon: 'mdi-receipt-text-outline',
    title: 'Emissão de NFC-e',
    description: 'Gere Notas Fiscais de Consumidor Eletrônico para vendas no balcão com praticidade e agilidade.'
  },
  {
    id: 'cce',
    icon: 'mdi-file-edit-outline',
    title: 'Carta de Correção (CCe)',
    description: 'Emita Cartas de Correção Eletrônica para corrigir informações em notas já transmitidas à SEFAZ.'
  },
  {
    id: 'cad',
    icon: 'mdi-account-box-outline',
    title: 'Cadastros Centralizados',
    description: 'Gerencie clientes, produtos, transportadoras e municípios em cadastros organizados e de fácil acesso.'
  },
  {
    id: 'cfop',
    icon: 'mdi-tune-variant',
    title: 'CFOP e Tributação',
    description: 'Configure CFOP, alíquotas de ICMS, IPI, PIS e COFINS para cada tipo de operação fiscal.'
  },
  {
    id: 'sped',
    icon: 'mdi-database-export-outline',
    title: 'SPED Fiscal',
    description: 'Gere o arquivo SPED Fiscal automaticamente para envio ao escritório de contabilidade.'
  }
]

export const plans = [
  {
    slug: 'mensal',
    name: 'Plano Mensal',
    tagline: 'Sem fidelidade, cancele quando quiser',
    targetAudience: 'Para quem prefere experimentar sem compromisso de longo prazo.',
    highlight: 'Mensal',
    highlightColor: 'navy',
    icon: 'mdi-calendar-month-outline',
    price: {
      label: 'R$ 80,83',
      period: '/mês',
      note: 'sem fidelidade'
    },
    description:
      'Acesso completo ao CIAF Emissor por assinatura mensal. Ideal para quem quer conhecer o sistema antes de assumir um plano anual.',
    differentials: [
      'Até 100 emissões de NF-e / NFC-e por mês',
      'Cancele a qualquer momento, sem multa',
      'Suporte técnico gratuito incluído',
      'Atualizações do sistema inclusas'
    ]
  },
  {
    slug: 'anual-parcelado',
    name: 'Anual Parcelado',
    tagline: 'Economia anual com pagamento facilitado',
    targetAudience: 'Para quem já decidiu usar o CIAF Emissor e prefere parcelar.',
    highlight: 'Popular',
    highlightColor: 'red',
    icon: 'mdi-calendar-check-outline',
    price: {
      label: 'R$ 821,00',
      period: '/ano',
      note: 'parcelado'
    },
    description:
      'Plano anual com pagamento parcelado. Mais econômico que a assinatura mensal sem necessidade de pagamento integral à vista.',
    differentials: [
      'Até 100 emissões de NF-e / NFC-e por mês',
      'Parcelamento facilitado do valor anual',
      'Suporte técnico gratuito incluído',
      'Atualizações do sistema inclusas'
    ]
  },
  {
    slug: 'anual-avista',
    name: 'Anual à Vista',
    tagline: 'Maior desconto disponível no CIAF Emissor',
    targetAudience: 'Para quem quer o melhor custo-benefício pagando à vista.',
    highlight: 'Melhor valor',
    highlightColor: 'red',
    icon: 'mdi-crown-outline',
    price: {
      label: 'R$ 638,00',
      period: '/ano',
      note: 'à vista — economia de ~22%'
    },
    description:
      'Pagamento único à vista com o maior desconto disponível. A opção mais econômica para quem usa o CIAF Emissor ao longo do ano.',
    differentials: [
      'Até 100 emissões de NF-e / NFC-e por mês',
      'Economia de ~22% em relação ao plano mensal',
      'Suporte técnico gratuito incluído',
      'Atualizações do sistema inclusas'
    ]
  }
]
