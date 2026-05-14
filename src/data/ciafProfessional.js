export const product = {
  name: 'CIAF Professional',
  tagline: 'ERP completo para a gestão da sua empresa',
  description:
    'Sistema integrado de gestão empresarial com módulos financeiro, estoque, vendas, compras e fiscal. ' +
    'Escalável do microempreendedor ao médio porte, com suporte gratuito incluído em todos os planos.',
  icon: 'mdi-briefcase-check-outline',
  meta: {
    title: 'CIAF Professional — ERP Desktop para Gestão Empresarial | CIAF Sistemas',
    description:
      'Conheça o CIAF Professional: ERP completo com módulos financeiro, fiscal, estoque e vendas. Planos para micro e médias empresas.'
  }
}

export const generalFeatures = [
  {
    id: 'fin',
    icon: 'mdi-cash-multiple',
    title: 'Gestão Financeira',
    description: 'Contas a pagar e receber, fluxo de caixa, conciliação bancária e DRE simplificado.'
  },
  {
    id: 'est',
    icon: 'mdi-package-variant-closed',
    title: 'Controle de Estoque',
    description: 'Entradas, saídas, inventário, rastreabilidade por lote e alertas de ruptura.'
  },
  {
    id: 'vnd',
    icon: 'mdi-point-of-sale',
    title: 'Módulo de Vendas (PDV)',
    description: 'Frente de caixa rápida com suporte a múltiplas formas de pagamento e sangria.'
  },
  {
    id: 'cmp',
    icon: 'mdi-cart-check',
    title: 'Compras e Fornecedores',
    description: 'Ordem de compra, cotação, entrada de mercadorias e controle de fornecedores.'
  },
  {
    id: 'fsc',
    icon: 'mdi-file-document-check-outline',
    title: 'Módulo Fiscal',
    description: 'Emissão de NF-e, NFC-e, NFS-e e XML com conformidade tributária e SPED.'
  },
  {
    id: 'rel',
    icon: 'mdi-chart-bar',
    title: 'Relatórios Gerenciais',
    description: 'Dashboard com KPIs em tempo real, curva ABC, margem de lucro e muito mais.'
  },
  {
    id: 'usr',
    icon: 'mdi-account-group-outline',
    title: 'Multi-usuário',
    description: 'Controle de acesso por perfil, log de auditoria e permissões granulares por módulo.'
  },
  {
    id: 'upd',
    icon: 'mdi-update',
    title: 'Atualizações Inclusas',
    description: 'Todas as atualizações legislativas e de sistema incluídas no plano, sem custo extra.'
  }
]

export const plans = [
  {
    slug: 'ciaf-junior',
    name: 'CIAF Júnior',
    tagline: 'A porta de entrada para a gestão profissional',
    targetAudience: 'Ideal para MEI, microempresas e comércios de pequeno porte iniciando a gestão informatizada.',
    highlight: 'Entrada',
    highlightColor: 'navy',
    icon: 'mdi-sprout-outline',
    description:
      'Versão enxuta e acessível do CIAF Professional. Concentra os módulos essenciais para quem está ' +
      'iniciando uma gestão mais organizada, sem complexidade e com suporte gratuito incluído.',
    differentials: [
      'Sem limite de cadastros de produtos e clientes',
      'Suporte gratuito incluído em todos os planos',
      'Atualizações de sistema sem custo adicional',
      'Treinamento online incluso na implantação'
    ],
    features: [
      { icon: 'mdi-cash-multiple',          label: 'Contas a pagar e receber' },
      { icon: 'mdi-package-variant-closed', label: 'Controle de estoque básico' },
      { icon: 'mdi-point-of-sale',          label: 'PDV — frente de caixa' },
      { icon: 'mdi-account-outline',        label: 'Cadastro de clientes e fornecedores' },
      { icon: 'mdi-chart-bar',              label: 'Relatórios básicos de vendas' },
      { icon: 'mdi-account-key-outline',    label: 'Acesso single-user (1 usuário)' },
      { icon: 'mdi-backup-restore',         label: 'Backup local automático' },
      { icon: 'mdi-update',                 label: 'Atualizações de sistema inclusas' }
    ],
    meta: {
      title: 'CIAF Júnior — ERP de Entrada para Microempresas | CIAF Professional',
      description:
        'CIAF Júnior: ERP acessível para MEI e microempresas com controle financeiro, estoque e PDV. Suporte gratuito incluído.'
    }
  },
  {
    slug: 'ciaf-junior-fiscal',
    name: 'CIAF Júnior Fiscal',
    tagline: 'Tudo do Júnior com emissão completa de documentos fiscais',
    targetAudience: 'Para empresas de pequeno porte que emitem NF-e, NFC-e e precisam de conformidade fiscal.',
    highlight: 'Popular',
    highlightColor: 'red',
    icon: 'mdi-file-document-check-outline',
    description:
      'O CIAF Júnior Fiscal adiciona ao plano de entrada um módulo fiscal completo com emissão de NF-e e NFC-e, ' +
      'gerenciamento de XML e conformidade com a legislação tributária vigente.',
    differentials: [
      'Emissão de NF-e e NFC-e ilimitada',
      'Gerenciamento de XML recebidos',
      'Conformidade com legislação fiscal vigente',
      'Suporte fiscal especializado incluído'
    ],
    features: [
      { icon: 'mdi-cash-multiple',             label: 'Contas a pagar e receber' },
      { icon: 'mdi-package-variant-closed',    label: 'Controle de estoque básico' },
      { icon: 'mdi-point-of-sale',             label: 'PDV — frente de caixa' },
      { icon: 'mdi-file-document-outline',     label: 'Emissão de NF-e' },
      { icon: 'mdi-receipt-text-outline',      label: 'Emissão de NFC-e' },
      { icon: 'mdi-xml',                       label: 'Gerenciamento de XML' },
      { icon: 'mdi-shield-check-outline',      label: 'Conformidade tributária' },
      { icon: 'mdi-account-key-outline',       label: 'Acesso single-user (1 usuário)' }
    ],
    meta: {
      title: 'CIAF Júnior Fiscal — ERP com NF-e para Pequenas Empresas | CIAF Professional',
      description:
        'CIAF Júnior Fiscal: todos os recursos do plano Júnior mais emissão de NF-e, NFC-e e conformidade fiscal completa.'
    }
  },
  {
    slug: 'ciaf-master',
    name: 'CIAF Master',
    tagline: 'Gestão completa para empresas em crescimento',
    targetAudience: 'Médias empresas, distribuidoras e negócios com múltiplos usuários e filiais.',
    highlight: 'Multi-usuário',
    highlightColor: 'navy',
    icon: 'mdi-domain',
    description:
      'O CIAF Master é a versão completa do ERP para empresas de médio porte. Suporta múltiplos usuários ' +
      'simultâneos, controle por filial e módulos gerenciais avançados com dashboards em tempo real.',
    differentials: [
      'Múltiplos usuários simultâneos sem limite de licenças',
      'Controle por filial ou departamento',
      'Módulo de compras avançado com cotação multi-fornecedor',
      'Relatórios gerenciais completos com DRE'
    ],
    features: [
      { icon: 'mdi-cash-multiple',           label: 'Gestão financeira completa com DRE' },
      { icon: 'mdi-package-variant-closed',  label: 'Estoque avançado com rastreabilidade por lote' },
      { icon: 'mdi-point-of-sale',           label: 'PDV multi-caixa' },
      { icon: 'mdi-cart-check',              label: 'Módulo de compras e cotações' },
      { icon: 'mdi-account-group-outline',   label: 'Multi-usuário com perfis de acesso' },
      { icon: 'mdi-office-building-outline', label: 'Controle de filiais e departamentos' },
      { icon: 'mdi-chart-bar',               label: 'Relatórios gerenciais avançados' },
      { icon: 'mdi-shield-account-outline',  label: 'Log de auditoria por usuário' }
    ],
    meta: {
      title: 'CIAF Master — ERP Multi-usuário para Médias Empresas | CIAF Professional',
      description:
        'CIAF Master: ERP completo multi-usuário para médias empresas com gestão financeira, estoque avançado, compras e relatórios gerenciais.'
    }
  },
  {
    slug: 'ciaf-master-fiscal',
    name: 'CIAF Master Fiscal',
    tagline: 'O ERP mais completo da CIAF, com suíte fiscal total',
    targetAudience: 'Empresas de médio porte com alto volume fiscal: distribuidoras, indústrias e varejistas.',
    highlight: 'Completo',
    highlightColor: 'red',
    icon: 'mdi-star-circle-outline',
    description:
      'O CIAF Master Fiscal reúne todos os recursos do Master e adiciona a suíte fiscal total: NF-e, NFC-e, NFS-e, ' +
      'CT-e, MDF-e, SPED Fiscal, SPED Contribuições e EFD ICMS/IPI. A solução definitiva para gestão fiscal.',
    differentials: [
      'Suíte fiscal completa: NF-e, NFC-e, NFS-e, CT-e, MDF-e',
      'SPED Fiscal, SPED Contribuições e EFD ICMS/IPI',
      'Escrituração fiscal automatizada',
      'Suporte fiscal e tributário prioritário'
    ],
    features: [
      { icon: 'mdi-cash-multiple',                   label: 'Gestão financeira completa com DRE' },
      { icon: 'mdi-package-variant-closed',          label: 'Estoque avançado com rastreabilidade' },
      { icon: 'mdi-point-of-sale',                   label: 'PDV multi-caixa' },
      { icon: 'mdi-file-document-check-outline',     label: 'Suíte: NF-e, NFC-e, NFS-e, CT-e, MDF-e' },
      { icon: 'mdi-database-check-outline',          label: 'SPED Fiscal e SPED Contribuições' },
      { icon: 'mdi-account-group-outline',           label: 'Multi-usuário com perfis de acesso' },
      { icon: 'mdi-office-building-outline',         label: 'Controle de filiais e departamentos' },
      { icon: 'mdi-headset',                         label: 'Suporte fiscal e tributário prioritário' }
    ],
    meta: {
      title: 'CIAF Master Fiscal — ERP Completo com Suíte Fiscal Total | CIAF Professional',
      description:
        'CIAF Master Fiscal: o ERP mais completo da CIAF com suíte fiscal total, SPED, multi-usuário e gestão para médias empresas.'
    }
  }
]
