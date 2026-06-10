export const product = {
  name: 'CIAF Automotivo',
  tagline: 'Gestão completa para oficinas mecânicas e centros automotivos',
  description:
    'Sistema de gestão para empresas prestadoras de serviços automotivos, com controle de clientes, veículos, ' +
    'estoque, financeiro, vendas, orçamentos e ordens de serviço em uma interface prática e fácil de operar. ' +
    'Disponível com ou sem emissão de documentos fiscais eletrônicos.',
  icon: 'mdi-car-wrench',
  meta: {
    title: 'CIAF Automotivo — Gestão para Oficinas e Centros Automotivos | CIAF Sistemas',
    description:
      'Conheça o CIAF Automotivo: sistema de gestão para oficinas mecânicas e centros automotivos, com controle de clientes, veículos, estoque, financeiro, ordens de serviço e emissão fiscal opcional.'
  }
}

export const generalFeatures = [
  {
    id: 'cli',
    icon: 'mdi-account-box-outline',
    title: 'Gestão de Clientes',
    description: 'Cadastro completo por categoria, com foto, busca por CPF/nome e histórico financeiro e de cobrança.'
  },
  {
    id: 'vei',
    icon: 'mdi-car-outline',
    title: 'Gestão de Veículos',
    description: 'Cadastro de veículos com placa, marca, modelo, cor, quilometragem, foto e busca rápida por placa ou proprietário.'
  },
  {
    id: 'est',
    icon: 'mdi-package-variant-closed',
    title: 'Controle de Estoque',
    description: 'Produtos por grupo, matéria-prima, cotações de compra, ordem de produção e tabelas de preço para atacado e varejo.'
  },
  {
    id: 'fin',
    icon: 'mdi-cash-multiple',
    title: 'Módulo Financeiro',
    description: 'Controle de caixa e contas bancárias, contas a pagar e receber, duplicatas e levantamento diário.'
  },
  {
    id: 'vnd',
    icon: 'mdi-point-of-sale',
    title: 'Vendas e Comissões',
    description: 'Venda de produtos e serviços, pré-vendas, vendas para convênio e comissionamento de vendedores e prestadores.'
  },
  {
    id: 'orc',
    icon: 'mdi-file-document-edit-outline',
    title: 'Orçamentos',
    description: 'Controle de orçamentos por status (aberto, aprovado, pendente, cancelado) com importação direta para venda ou NF-e.'
  },
  {
    id: 'os',
    icon: 'mdi-clipboard-text-outline',
    title: 'Ordem de Serviço',
    description: 'Abertura e fechamento de O.S. por status, com comprovante em via para o cliente e para a empresa.'
  },
  {
    id: 'rel',
    icon: 'mdi-chart-bar',
    title: 'Relatórios e Auditoria',
    description: 'Gráficos gerenciais, geração de Sintegra, auditoria do sistema e controle de usuários e permissões.'
  }
]

export const plans = [
  {
    slug: 'ciaf-auto',
    name: 'CIAF Auto',
    tagline: 'Gestão completa para sua oficina, sem emissão fiscal',
    targetAudience: 'Oficinas mecânicas, centros automotivos e lojas de autopeças que não emitem NF-e, NFC-e ou SAT.',
    highlight: 'Padrão',
    highlightColor: 'navy',
    icon: 'mdi-car-cog',
    description:
      'O CIAF Auto reúne em um só sistema o controle de clientes, veículos, estoque, financeiro, vendas, ' +
      'orçamentos e ordens de serviço da sua oficina, com interface prática e poucos cliques no dia a dia.',
    differentials: [
      'Controle total de clientes, veículos e ordens de serviço',
      'Estoque com matéria-prima, ordem de produção e cotações',
      'Suporte gratuito e atualizações inclusas durante a vigência',
      '5 dias de avaliação gratuita'
    ],
    features: [
      { icon: 'mdi-account-box-outline',       label: 'Cadastro de clientes por categoria, com foto e busca por CPF' },
      { icon: 'mdi-car-outline',                label: 'Cadastro de veículos com placa, modelo, cor e km' },
      { icon: 'mdi-package-variant-closed',     label: 'Estoque com produtos, matéria-prima e cotações' },
      { icon: 'mdi-factory',                    label: 'Controle de ordem de produção' },
      { icon: 'mdi-truck-outline',              label: 'Romaneio de carga e entrega' },
      { icon: 'mdi-tag-multiple-outline',       label: 'Tabelas de preço para atacado e varejo' },
      { icon: 'mdi-cash-multiple',              label: 'Controle de caixa, bancos e contas a pagar/receber' },
      { icon: 'mdi-point-of-sale',              label: 'Vendas com comissão de vendedores e prestadores' },
      { icon: 'mdi-file-document-edit-outline', label: 'Orçamentos com importação para venda' },
      { icon: 'mdi-clipboard-text-outline',     label: 'Ordem de serviço com comprovante para o cliente' },
      { icon: 'mdi-chart-bar',                  label: 'Gráficos gerenciais e auditoria do sistema' },
      { icon: 'mdi-account-key-outline',        label: 'Controle de usuários e permissões' }
    ],
    prices: [
      { slug: 'anual-parcelado', label: 'Anual Parcelado',  price: 'R$ 132,67', period: '/mês',      note: 'no cartão de crédito',                         highlight: 'Sem entrada',  highlightColor: 'navy' },
      { slug: 'semestral-avista', label: 'Semestral à Vista', price: 'R$ 967,80',  period: '/semestre', note: 'pagamento único' },
      { slug: 'anual-avista',     label: 'Anual à Vista',     price: 'R$ 1.372,50', period: '/ano',     note: 'pagamento único — melhor custo-benefício',     highlight: 'Melhor valor', highlightColor: 'red' }
    ],
    meta: {
      title: 'CIAF Auto — Gestão para Oficinas Mecânicas | CIAF Automotivo',
      description:
        'CIAF Auto: sistema de gestão para oficinas mecânicas e centros automotivos com controle de clientes, veículos, estoque, financeiro e ordens de serviço.'
    }
  },
  {
    slug: 'ciaf-auto-fiscal',
    name: 'CIAF Auto Fiscal',
    tagline: 'Tudo do CIAF Auto, com emissão de NF-e, NFC-e e SAT',
    targetAudience: 'Oficinas e centros automotivos que precisam emitir documentos fiscais eletrônicos.',
    highlight: 'Fiscal',
    highlightColor: 'red',
    icon: 'mdi-file-document-check-outline',
    description:
      'O CIAF Auto Fiscal acrescenta ao CIAF Auto a emissão de NF-e, NFC-e e SAT (SP), com envio automático ' +
      'por e-mail e salvamento de PDF/XML, mantendo total conformidade tributária.',
    differentials: [
      'Tudo do CIAF Auto, com emissão de NF-e, NFC-e e SAT (SP)',
      'Envio automático de notas por e-mail com PDF e XML',
      'Suporte gratuito e atualizações inclusas durante a vigência',
      '5 dias de avaliação gratuita'
    ],
    features: [
      { icon: 'mdi-account-box-outline',       label: 'Cadastro de clientes por categoria, com foto e busca por CPF' },
      { icon: 'mdi-car-outline',                label: 'Cadastro de veículos com placa, modelo, cor e km' },
      { icon: 'mdi-package-variant-closed',     label: 'Estoque com produtos, matéria-prima e cotações' },
      { icon: 'mdi-truck-outline',              label: 'Romaneio de carga e entrega' },
      { icon: 'mdi-cash-multiple',              label: 'Controle de caixa, bancos e contas a pagar/receber' },
      { icon: 'mdi-point-of-sale',              label: 'Vendas com comissão de vendedores e prestadores' },
      { icon: 'mdi-file-document-edit-outline', label: 'Orçamentos com importação para venda ou NF-e' },
      { icon: 'mdi-clipboard-text-outline',     label: 'Ordem de serviço com comprovante para o cliente' },
      { icon: 'mdi-file-document-check-outline', label: 'Emissão de NF-e, NFC-e e SAT (SP)' },
      { icon: 'mdi-email-send-outline',         label: 'Envio automático de notas por e-mail' },
      { icon: 'mdi-folder-zip-outline',         label: 'Salvamento automático de PDF e XML' },
      { icon: 'mdi-database-export-outline',    label: 'Geração de arquivo Sintegra' }
    ],
    prices: [
      { slug: 'anual-parcelado', label: 'Anual Parcelado',  price: 'R$ 236,67', period: '/mês',      note: 'no cartão de crédito',                         highlight: 'Sem entrada',  highlightColor: 'navy' },
      { slug: 'semestral-avista', label: 'Semestral à Vista', price: 'R$ 1.728,40', period: '/semestre', note: 'pagamento único' },
      { slug: 'anual-avista',     label: 'Anual à Vista',     price: 'R$ 2.448,85', period: '/ano',     note: 'pagamento único — melhor custo-benefício',     highlight: 'Melhor valor', highlightColor: 'red' }
    ],
    meta: {
      title: 'CIAF Auto Fiscal — Gestão e Emissão Fiscal para Oficinas | CIAF Automotivo',
      description:
        'CIAF Auto Fiscal: gestão completa para oficinas mecânicas com emissão de NF-e, NFC-e e SAT, conformidade tributária e controle total do negócio.'
    }
  }
]
