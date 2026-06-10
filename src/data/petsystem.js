export const product = {
  name: 'Petsystem',
  tagline: 'O sistema ideal para sua clínica veterinária ou pet shop',
  description:
    'Sistema de gestão completo para clínicas veterinárias e pet shops, com cadastro de clientes e animais, ' +
    'prontuário, controle de vacinas, estoque, financeiro, vendas, hospedagem e ordens de serviço em uma ' +
    'interface prática e fácil de operar. Disponível com ou sem emissão de documentos fiscais eletrônicos.',
  icon: 'mdi-paw',
  meta: {
    title: 'Petsystem — Gestão para Clínicas Veterinárias e Pet Shops | CIAF Sistemas',
    description:
      'Conheça o Petsystem: sistema de gestão para clínicas veterinárias e pet shops, com cadastro de animais, prontuário, vacinas, financeiro, vendas e emissão fiscal opcional.'
  }
}

export const generalFeatures = [
  {
    id: 'cli',
    icon: 'mdi-account-box-outline',
    title: 'Gestão de Clientes',
    description: 'Cadastro organizado por categoria, com busca por código, nome ou CPF e emissão de etiquetas.'
  },
  {
    id: 'ani',
    icon: 'mdi-paw-outline',
    title: 'Prontuário de Animais',
    description: 'Cadastro com foto, peso, controle de vacinas, receituários e histórico completo de atendimentos.'
  },
  {
    id: 'est',
    icon: 'mdi-package-variant-closed',
    title: 'Controle de Estoque',
    description: 'Cadastro e movimentação de produtos, controle de compras e cotações com fornecedores.'
  },
  {
    id: 'fin',
    icon: 'mdi-cash-multiple',
    title: 'Módulo Financeiro',
    description: 'Controle de caixa e contas bancárias, contas a pagar e receber e gestão de duplicatas.'
  },
  {
    id: 'vnd',
    icon: 'mdi-point-of-sale',
    title: 'Vendas e Comissões',
    description: 'Venda de produtos e serviços, controle de pré-vendas e comissionamento de vendedores.'
  },
  {
    id: 'orc',
    icon: 'mdi-file-document-edit-outline',
    title: 'Orçamentos',
    description: 'Controle de orçamentos por status (aberto, aprovado, pendente, cancelado) com importação para venda.'
  },
  {
    id: 'hosp',
    icon: 'mdi-home-heart',
    title: 'Hospedagem e Serviços',
    description: 'Controle de hospedagem, banho e tosa e demais serviços prestados ao animal.'
  },
  {
    id: 'rel',
    icon: 'mdi-chart-bar',
    title: 'Relatórios e Auditoria',
    description: 'Gráficos gerenciais, auditoria do sistema e controle de usuários e permissões.'
  }
]

export const plans = [
  {
    slug: 'petsystem',
    name: 'Petsystem',
    tagline: 'Gestão completa para sua clínica ou pet shop, sem emissão fiscal',
    targetAudience: 'Clínicas veterinárias e pet shops que não emitem NF-e, NFC-e ou SAT.',
    highlight: 'Padrão',
    highlightColor: 'navy',
    icon: 'mdi-paw',
    description:
      'O Petsystem reúne em um só sistema o cadastro de clientes e animais, prontuário, vacinas, estoque, ' +
      'financeiro, vendas e orçamentos da sua clínica ou pet shop, com interface prática e poucos cliques no dia a dia.',
    differentials: [
      'Prontuário do animal com vacinas, peso e histórico de atendimentos',
      'Cadastro de clientes e animais com foto e busca rápida',
      'Suporte gratuito e atualizações inclusas durante a vigência',
      '5 dias de avaliação gratuita'
    ],
    features: [
      { icon: 'mdi-account-box-outline',       label: 'Cadastro de clientes por categoria, com busca por CPF' },
      { icon: 'mdi-paw-outline',                label: 'Cadastro de animais com foto, peso e controle de vacinas' },
      { icon: 'mdi-file-document-outline',      label: 'Prontuário externo e receituários' },
      { icon: 'mdi-history',                    label: 'Histórico completo de atendimentos' },
      { icon: 'mdi-package-variant-closed',     label: 'Controle de estoque e compras de produtos' },
      { icon: 'mdi-cash-multiple',              label: 'Controle de caixa, bancos e contas a pagar/receber' },
      { icon: 'mdi-receipt-text-outline',       label: 'Controle de duplicatas' },
      { icon: 'mdi-point-of-sale',              label: 'Vendas com comissão de vendedores' },
      { icon: 'mdi-cart-outline',               label: 'Controle de pré-vendas' },
      { icon: 'mdi-file-document-edit-outline', label: 'Orçamentos com controle de status' },
      { icon: 'mdi-chart-bar',                  label: 'Geração de gráficos gerenciais' },
      { icon: 'mdi-shield-account-outline',     label: 'Auditoria do sistema' }
    ],
    prices: [
      { slug: 'anual-parcelado', label: 'Anual Parcelado',  price: 'R$ 136,33', period: '/mês',      note: 'no cartão de crédito',                         highlight: 'Sem entrada',  highlightColor: 'navy' },
      { slug: 'semestral-avista', label: 'Semestral à Vista', price: 'R$ 993,80',  period: '/semestre', note: 'pagamento único' },
      { slug: 'anual-avista',     label: 'Anual à Vista',     price: 'R$ 1.636,00', period: '/ano',     note: 'pagamento único — melhor custo-benefício',     highlight: 'Melhor valor', highlightColor: 'red' }
    ],
    meta: {
      title: 'Petsystem — Gestão para Clínicas Veterinárias e Pet Shops | CIAF Sistemas',
      description:
        'Petsystem: sistema de gestão para clínicas veterinárias e pet shops com cadastro de animais, prontuário, vacinas, financeiro e vendas.'
    }
  },
  {
    slug: 'petsystem-fiscal',
    name: 'Petsystem Fiscal',
    tagline: 'Tudo do Petsystem, com emissão de NF-e, NFC-e e SAT',
    targetAudience: 'Clínicas veterinárias e pet shops que precisam emitir documentos fiscais eletrônicos.',
    highlight: 'Fiscal',
    highlightColor: 'red',
    icon: 'mdi-file-document-check-outline',
    description:
      'O Petsystem Fiscal acrescenta ao Petsystem a emissão de NF-e, NFC-e e SAT, com envio automático ' +
      'por e-mail, controle de compras, romaneio de entrega e Sintegra, mantendo total conformidade tributária.',
    differentials: [
      'Tudo do Petsystem, com emissão de NF-e, NFC-e e SAT',
      'Envio automático de notas por e-mail',
      'Suporte gratuito e atualizações inclusas durante a vigência',
      '5 dias de avaliação gratuita'
    ],
    features: [
      { icon: 'mdi-account-box-outline',       label: 'Cadastro de clientes por categoria, com busca por CPF' },
      { icon: 'mdi-paw-outline',                label: 'Cadastro de animais com foto, peso e controle de vacinas' },
      { icon: 'mdi-file-document-outline',      label: 'Prontuário com histórico de atendimentos e receitas' },
      { icon: 'mdi-package-variant-closed',     label: 'Controle de estoque e compras de produtos' },
      { icon: 'mdi-cash-multiple',              label: 'Controle de caixa, bancos e contas a pagar/receber' },
      { icon: 'mdi-point-of-sale',              label: 'Vendas com comissão de vendedores' },
      { icon: 'mdi-file-document-edit-outline', label: 'Orçamentos com importação para venda ou NF-e' },
      { icon: 'mdi-file-document-check-outline', label: 'Emissão de NF-e, NFC-e e SAT' },
      { icon: 'mdi-email-send-outline',         label: 'Envio automático de notas por e-mail' },
      { icon: 'mdi-truck-outline',              label: 'Romaneio de entrega' },
      { icon: 'mdi-chart-bar',                  label: 'Gráficos gerenciais e auditoria do sistema' },
      { icon: 'mdi-database-export-outline',    label: 'Geração de arquivo Sintegra' }
    ],
    prices: [
      { slug: 'anual-parcelado', label: 'Anual Parcelado',  price: 'R$ 240,33', period: '/mês',      note: 'no cartão de crédito',                         highlight: 'Sem entrada',  highlightColor: 'navy' },
      { slug: 'semestral-avista', label: 'Semestral à Vista', price: 'R$ 1.755,50', period: '/semestre', note: 'pagamento único' },
      { slug: 'anual-avista',     label: 'Anual à Vista',     price: 'R$ 2.486,80', period: '/ano',     note: 'pagamento único — melhor custo-benefício',     highlight: 'Melhor valor', highlightColor: 'red' }
    ],
    meta: {
      title: 'Petsystem Fiscal — Gestão e Emissão Fiscal para Pet Shops | Petsystem',
      description:
        'Petsystem Fiscal: gestão completa para clínicas veterinárias e pet shops com emissão de NF-e, NFC-e e SAT, conformidade tributária e controle total do negócio.'
    }
  }
]
