export const product = {
  name: 'CIAF Essencial',
  tagline: 'A maneira mais rápida de alavancar seu negócio com um sistema de gestão fácil de usar',
  description:
    'Sistema de gestão 100% online para pequenos negócios e microempresas, reunindo financeiro, vendas, ' +
    'estoque e emissão fiscal completa em uma interface simples e prática — sem abrir mão dos recursos ' +
    'essenciais para o seu dia a dia.',
  icon: 'mdi-rocket-launch-outline',
  meta: {
    title: 'CIAF Essencial — Gestão Online para Pequenos Negócios | CIAF Sistemas',
    description:
      'Conheça o CIAF Essencial: sistema de gestão 100% online com financeiro, vendas, estoque e emissão fiscal completa (NF-e, NFC-e, NFS-e e MDF-e) para pequenas empresas e microempresas.'
  }
}

export const generalFeatures = [
  {
    id: 'cad',
    icon: 'mdi-account-box-outline',
    title: 'Cadastros Centralizados',
    description: 'Organize clientes, fornecedores, produtos e vendedores em cadastros completos e de fácil acesso.'
  },
  {
    id: 'fin',
    icon: 'mdi-cash-multiple',
    title: 'Módulo Financeiro',
    description: 'Controle bancário, contas a pagar e a receber sempre em dia, sem precisar de planilhas paralelas.'
  },
  {
    id: 'vnd',
    icon: 'mdi-point-of-sale',
    title: 'Venda Rápida',
    description: 'Frente de caixa ágil para o atendimento do dia a dia, do orçamento até a finalização da venda.'
  },
  {
    id: 'est',
    icon: 'mdi-package-variant-closed',
    title: 'Controle de Estoque',
    description: 'Acompanhe entradas, saídas e níveis de estoque para nunca ficar sem produto na hora da venda.'
  },
  {
    id: 'rel',
    icon: 'mdi-chart-bar',
    title: 'Relatórios Gerenciais',
    description: 'Comissão por vendedor, vendas por período e movimento de caixa para decisões mais seguras.'
  },
  {
    id: 'fis',
    icon: 'mdi-file-document-check-outline',
    title: 'Emissão Fiscal Completa',
    description: 'Emita NF-e, NFC-e, NFS-e e MDF-e diretamente do sistema, com total conformidade tributária.'
  },
  {
    id: 'onl',
    icon: 'mdi-cloud-check-outline',
    title: '100% Online',
    description: 'Acesse de qualquer lugar e dispositivo, com seus dados sempre seguros na nuvem.'
  },
  {
    id: 'sup',
    icon: 'mdi-lifebuoy',
    title: 'Suporte e Atualizações Gratuitas',
    description: 'Durante a vigência da licença, atualizações e suporte técnico não têm custo adicional.'
  }
]

export const plans = [
  {
    slug: 'anual-parcelado',
    name: 'Plano Anual',
    tagline: 'Pagamento facilitado, parcelado no cartão',
    targetAudience: 'Para pequenos negócios e microempresas que querem começar com o essencial.',
    highlight: 'Fiscal',
    highlightColor: 'red',
    icon: 'mdi-rocket-launch-outline',
    price: {
      label: 'R$ 118,58',
      period: '/mês',
      note: 'Plano Anual parcelado no cartão'
    },
    description:
      'Acesso completo ao CIAF Essencial, com licença válida por 1 ano, controle 100% online, financeiro, ' +
      'vendas, estoque e emissão fiscal completa em um sistema fácil de usar.',
    differentials: [
      'Cadastros completos de clientes, fornecedores, produtos e vendedores',
      'Emissão de NF-e, NFC-e, NFS-e e MDF-e',
      'Controle financeiro com contas a pagar e a receber',
      'Suporte técnico e atualizações gratuitas durante a licença'
    ]
  }
]
