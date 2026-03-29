export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const SERVICES = [
  {
    title: "Casamentos",
    description:
      "Realizamos o sonho do seu grande dia com cada detalhe pensado para criar uma celebração única e inesquecível.",
    image: "/images/casamento.jpg",
    span: "col-span-2 row-span-2" as const,
  },
  {
    title: "Quinze Anos",
    description:
      "Transformamos a festa dos seus 15 anos em uma noite mágica, com decoração encantadora e momentos especiais.",
    image: "/images/quinze.jpg",
    span: "col-span-1 row-span-1" as const,
  },
  {
    title: "Eventos Corporativos",
    description:
      "Conferências, lançamentos e confraternizações com a organização e o profissionalismo que sua empresa merece.",
    image: "/images/corporativo.jpg",
    span: "col-span-1 row-span-2" as const,
  },
  {
    title: "Festas Sociais",
    description:
      "Aniversários, formaturas e celebrações especiais com planejamento impecável e criatividade sem limites.",
    image: "/images/social.jpg",
    span: "col-span-1 row-span-1" as const,
  },
  {
    title: "Decoração",
    description:
      "Ambientação e cenografia que transformam qualquer espaço em um cenário dos sonhos.",
    image: "/images/decoracao.jpg",
    span: "col-span-1 row-span-1" as const,
  },
  {
    title: "Som & Iluminação",
    description:
      "Tecnologia de ponta em áudio e iluminação para criar a atmosfera perfeita para cada momento.",
    image: "/images/som.jpg",
    span: "col-span-2 row-span-1" as const,
  },
];

export const STATS = [
  { value: 12, suffix: "+", label: "Anos de Experiência" },
  { value: 500, suffix: "+", label: "Eventos Realizados" },
  { value: 100, suffix: "%", label: "Clientes Satisfeitos" },
  { value: 50, suffix: "+", label: "Prêmios e Indicações" },
];

export const TESTIMONIALS = [
  {
    name: "Mariana & Rafael",
    event: "Casamento",
    text: "A Pro Set transformou nosso casamento em algo além do que sonhamos. Cada detalhe foi perfeito, desde a decoração até a coordenação do evento. Somos eternamente gratos!",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "Família Santos",
    event: "Quinze Anos",
    text: "A festa dos 15 anos da nossa filha foi simplesmente mágica. A equipe da Pro Set cuidou de tudo com tanto carinho que pudemos aproveitar cada segundo.",
    avatar: "/images/avatar2.jpg",
  },
  {
    name: "TechCorp Brasil",
    event: "Evento Corporativo",
    text: "Profissionalismo impecável. A Pro Set organizou nossa conferência anual com maestria, superando todas as expectativas dos nossos colaboradores e parceiros.",
    avatar: "/images/avatar3.jpg",
  },
  {
    name: "Juliana Oliveira",
    event: "Aniversário",
    text: "Minha festa de 30 anos foi absolutamente incrível! A Pro Set entendeu exatamente o que eu queria e entregou muito mais. Recomendo de olhos fechados!",
    avatar: "/images/avatar4.jpg",
  },
];

export const PORTFOLIO_ITEMS = [
  {
    title: "Casamento na Fazenda",
    category: "Casamento",
    image: "/images/portfolio1.jpg",
  },
  {
    title: "Festa Quinze Anos — Tema Enchanted",
    category: "Quinze Anos",
    image: "/images/portfolio2.jpg",
  },
  {
    title: "Conferência Anual TechCorp",
    category: "Corporativo",
    image: "/images/portfolio3.jpg",
  },
  {
    title: "Casamento Clássico",
    category: "Casamento",
    image: "/images/portfolio4.jpg",
  },
  {
    title: "Festa de Gala Beneficente",
    category: "Social",
    image: "/images/portfolio5.jpg",
  },
  {
    title: "Lançamento de Produto Premium",
    category: "Corporativo",
    image: "/images/portfolio6.jpg",
  },
];

export const MARQUEE_WORDS = [
  "Casamentos",
  "Quinze Anos",
  "Corporativo",
  "Festas Sociais",
  "Decoração",
  "Som & Iluminação",
  "Fotografia",
  "Buffet",
  "Assessoria",
  "Cerimonial",
];

export const CONTACT_INFO = {
  phone: "(00) 00000-0000",
  email: "contato@proseteventos.com.br",
  instagram: "@proseteventos",
  instagramUrl: "https://instagram.com/proseteventos",
  address: "Sua Cidade, RS",
};

export const FOOTER_LINKS = {
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfólio", href: "#portfolio" },
  ],
  services: [
    { label: "Casamentos", href: "#servicos" },
    { label: "Quinze Anos", href: "#servicos" },
    { label: "Corporativo", href: "#servicos" },
    { label: "Festas Sociais", href: "#servicos" },
  ],
};
