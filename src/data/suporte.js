export const supportHero = {
  badge: 'Central de Suporte',
  title: 'Estamos aqui para ajudar',
  description:
    'Fale com nosso time, abra um chamado, acesse o suporte remoto ou baixe os manuais dos sistemas CIAF. ' +
    'Suporte gratuito incluído em todos os planos.',
  highlights: [
    { icon: 'mdi-shield-check-outline', label: 'Suporte gratuito incluído' },
    { icon: 'mdi-account-voice', label: 'Atendimento humano' },
    { icon: 'mdi-clock-fast', label: 'Resposta rápida' }
  ]
}

export const supportOptions = [
  {
    id: 'acesso-remoto',
    icon: 'mdi-monitor-share',
    title: 'Acesso Remoto',
    description:
      'Baixe o AnyDesk para que nossa equipe acesse seu computador remotamente e resolva seu problema com agilidade.',
    actionLabel: 'Baixar AnyDesk',
    href: 'https://download.anydesk.com/AnyDesk.exe'
  },
  {
    id: 'chat-online',
    icon: 'mdi-chat-processing-outline',
    title: 'Chat Online',
    description:
      'Fale com nosso time de suporte em tempo real. Atendimento de segunda a sexta, das 8h às 12h e das 13h30 às 18h.',
    actionLabel: 'Iniciar chat',
    href: 'https://servidorseguro.mysuite.com.br/client/chatan.php?sl=tvs&h='
  },
  {
    id: 'abrir-chamado',
    icon: 'mdi-ticket-confirmation-outline',
    title: 'Abrir Chamado',
    description:
      'Abra um chamado de suporte com seu login e senha de cliente e acompanhe o atendimento pelo Help Desk 24h.',
    actionLabel: 'Abrir chamado',
    href: 'http://tvsistemas.mysuite.com.br/central.php'
  },
  {
    id: 'manuais',
    icon: 'mdi-file-pdf-box',
    title: 'Manuais PDF',
    description:
      'Baixe os manuais dos nossos sistemas com instruções passo a passo para aproveitar todos os recursos.',
    actionLabel: 'Ver manuais',
    href: 'https://site.ciaf.com.br/manuais'
  }
]

export const supportChannels = [
  {
    icon: 'mdi-headset',
    label: 'Suporte técnico',
    value: '(35) 3712-2201',
    href: 'tel:+553537122201'
  },
  {
    icon: 'mdi-whatsapp',
    label: 'WhatsApp Comercial',
    value: '(35) 98469-8908',
    href: 'https://wa.me/5535984698908'
  },
  {
    icon: 'mdi-credit-card-outline',
    label: 'Renovações',
    value: '(35) 3721-3306',
    href: 'tel:+553537213306'
  },
  {
    icon: 'mdi-clock-outline',
    label: 'Horário de atendimento',
    value: 'Seg. a sex., 8h–12h e 13h30–18h'
  }
]

export const supportFaq = [
  {
    question: 'Como abro um chamado de suporte?',
    answer:
      'Clique em "Abrir Chamado" nesta página e acesse o Help Desk com seu login e senha de cliente. ' +
      'Você pode acompanhar o status do atendimento a qualquer momento, 24 horas por dia.'
  },
  {
    question: 'Qual o horário de atendimento do suporte?',
    answer:
      'Nosso time de suporte atende de segunda a sexta-feira, das 8h às 12h e das 13h30 às 18h. ' +
      'O Help Desk para abertura de chamados fica disponível 24 horas por dia.'
  },
  {
    question: 'Como funciona o acesso remoto via AnyDesk?',
    answer:
      'Baixe e instale o AnyDesk pelo botão "Acesso Remoto", informe o código gerado para o nosso atendente ' +
      'e autorize a conexão. Assim, conseguimos visualizar e ajudar diretamente na tela do seu computador.'
  },
  {
    question: 'O suporte técnico tem custo adicional?',
    answer:
      'Não. O suporte técnico é gratuito e está incluso em todos os planos e licenças dos sistemas CIAF, sem taxas extras.'
  },
  {
    question: 'Esqueci minha senha de acesso ao sistema. O que faço?',
    answer:
      'Entre em contato pelo chat online ou abra um chamado informando seus dados de cadastro. ' +
      'Nossa equipe valida suas informações e ajuda na recuperação do acesso com segurança.'
  },
  {
    question: 'Onde encontro os manuais dos sistemas CIAF?',
    answer:
      'Na seção "Manuais PDF" desta página você encontra a documentação completa, com instruções ' +
      'passo a passo para os principais módulos de cada sistema.'
  }
]
