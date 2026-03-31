export type Course = {
  slug: string;
  title: string;
  price: string;
  fullDescription: string;
  syllabus: string;
  image: string;
  disciplines: {
    name: string;
    workload?: number;
  }[];
};

export const courses: Course[] = [
  {
    slug: "educacao-inclusiva",
    title: "Educação Inclusiva",
    price: "R$ 160,00/mês",
    fullDescription:
      "Curso voltado à formação de profissionais para atuação na educação inclusiva, abordando políticas públicas, práticas pedagógicas e uso de tecnologias educacionais.",
    syllabus:
      "Fundamentos da educação inclusiva, políticas educacionais, práticas pedagógicas inclusivas, avaliação, tecnologia aplicada e direitos humanos.",
    image: "/images/cursos/educacao-inclusiva.jpg",
    disciplines: [
      { name: "Política Nacional de Educação Especial", workload: 30 },
      { name: "Diretrizes para a Educação Inclusiva no Brasil", workload: 30 },
      { name: "Educação Inclusiva", workload: 30 },
      { name: "Educação inclusiva na educação infantil", workload: 30 },
      { name: "Tecnologia e Educação Inclusiva", workload: 30 },
      { name: "Ensino integrado e ensino inclusivo", workload: 25 },
      { name: "Educação especial na contemporaneidade", workload: 40 },
      { name: "Educação Inclusiva e processo de Avaliação", workload: 25 },
      { name: "Identidade e Atendimento", workload: 20 },
      { name: "Metodologia da Pesquisa Científica", workload: 40 },
      { name: "Ética Geral e Profissional", workload: 30 },
      { name: "Direitos Humanos", workload: 30 },
      { name: "Inovações Tecnológicas", workload: 30 },
      { name: "LIBRAS", workload: 30 },
      { name: "Trabalho de Conclusão de Curso - TCC", workload: 30 },
    ],
  },
  {
    slug: "gestao-supervisao-escolar",
    title: "Gestão e Supervisão Escolar",
    price: "R$ 160,00/mês",
    fullDescription:
      "Formação voltada à gestão educacional, abordando liderança, organização escolar e processos administrativos.",
    syllabus:
      "Legislação educacional, gestão escolar, liderança, processos educacionais e inovação.",
    image: "/images/cursos/gestao.jpg",
    disciplines: [
      { name: "Legislação Educacional", workload: 30 },
      { name: "Organização e Gestão Escolar", workload: 30 },
      { name: "Gestão Participativa", workload: 20 },
      { name: "Gestão documental", workload: 30 },
      { name: "Gestão de Pessoas", workload: 30 },
      { name: "Liderança Educacional", workload: 30 },
      { name: "Gestão de Processos Educacionais", workload: 30 },
      { name: "Direitos Humanos", workload: 30 },
      { name: "Metodologia da Pesquisa", workload: 40 },
      { name: "LIBRAS", workload: 30 },
      { name: "Inovações Tecnológicas", workload: 30 },
      { name: "Ética Geral e Profissional", workload: 30 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "libras",
    title: "LIBRAS",
    price: "R$ 160,00/mês",
    fullDescription:
      "Capacita profissionais para atuação com a Língua Brasileira de Sinais no contexto educacional.",
    syllabus:
      "Fundamentos da linguagem, educação de surdos, inclusão e prática em LIBRAS.",
    image: "/images/cursos/libras.jpg",
    disciplines: [
      {
        name: "Introdução aos Ambientes Virtuais de Aprendizagem",
        workload: 40,
      },
      { name: "Fundamentos da Aquisição da Linguagem", workload: 30 },
      { name: "História e Fundamentos da Educação de Surdos", workload: 30 },
      { name: "Libras I", workload: 30 },
      { name: "Libras II", workload: 30 },
      { name: "Libras e a língua portuguesa", workload: 30 },
      { name: "Educação Inclusiva", workload: 40 },
      { name: "Tecnologia e Educação Inclusiva", workload: 30 },
      { name: "Direitos Humanos", workload: 30 },
      { name: "Inovações Tecnológicas", workload: 30 },
      { name: "Ética Geral e Profissional", workload: 30 },
      { name: "Metodologia da Pesquisa", workload: 40 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "psicologia-desenvolvimento-personalidade",
    title: "Psicologia do Desenvolvimento e da Personalidade",
    price: "R$ 160,00/mês",
    fullDescription:
      "Estuda os processos de desenvolvimento humano e formação da personalidade.",
    syllabus:
      "Teorias do desenvolvimento, aprendizagem, personalidade e psicologia educacional.",
    image: "/images/cursos/psicologia.jpg",
    disciplines: [
      { name: "Histórico e conceito da psicologia do desenvolvimento", workload: 30 },
      { name: "Psicologia da Educação", workload: 30 },
      {
        name: "Desenvolvimento, Transtornos e Distúrbios da Aprendizagem",
        workload: 30,
      },
      { name: "Teoria da Personalidade", workload: 30 },
      { name: "Teorias Humanista e Cognitiva da Personalidade", workload: 30 },
      { name: "Desenvolvimento e Aprendizagem", workload: 20 },
      { name: "LIBRAS", workload: 30 },
      { name: "Direitos Humanos", workload: 30 },
      { name: "Inovações Tecnológicas", workload: 30 },
      { name: "Ética Geral e Profissional", workload: 30 },
      { name: "Metodologia da Pesquisa", workload: 40 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "transtornos-aprendizagem",
    title: "Transtornos de Aprendizagem",
    price: "R$ 160,00/mês",
    fullDescription:
      "Aborda identificação e intervenção em dificuldades e transtornos de aprendizagem.",
    syllabus: "Teorias da aprendizagem, diagnóstico, intervenção e inclusão.",
    image: "/images/cursos/transtornos.jpg",
    disciplines: [
      { name: "Desenvolvimento e Aprendizagem", workload: 30 },
      { name: "Distúrbios de Aprendizagem", workload: 30 },
      {
        name: "Desenvolvimento, Transtornos e Distúrbios da Aprendizagem",
        workload: 30,
      },
      { name: "Educação Inclusiva", workload: 30 },
      {
        name: "Necessidade curricular frente às dificuldades de aprendizagem",
        workload: 20,
      },
      { name: "Transtornos de Aprendizagem", workload: 30 },
      { name: "Teorias e Abordagens da Aprendizagem", workload: 30 },
      { name: "LIBRAS", workload: 30 },
      { name: "Inovações Tecnológicas", workload: 30 },
      { name: "Direitos Humanos", workload: 30 },
      { name: "Ética Geral e Profissional", workload: 30 },
      { name: "Metodologia da Pesquisa", workload: 40 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "docencia-ensino-fundamental-medio",
    title: "Docência do Ensino Fundamental e Médio",
    price: "R$ 160,00/mês",
    fullDescription:
      "Formação docente com foco em práticas pedagógicas e organização do ensino.",
    syllabus: "Didática, planejamento, avaliação e práticas educativas.",
    image: "/images/cursos/docencia.jpg",
    disciplines: [
      { name: "Políticas públicas na educação", workload: 30 },
      { name: "Relação entre aprendizagem e desenvolvimento", workload: 40 },
      { name: "Teoria e fatos na pesquisa educacional", workload: 35 },
      { name: "Tecnologias da informação e comunicação", workload: 30 },
      { name: "História da Educação", workload: 40 },
      { name: "Didática", workload: 30 },
      { name: "Relação professor-aluno", workload: 40 },
      { name: "Organização do ensino médio", workload: 40 },
      { name: "Organização do ensino fundamental", workload: 40 },
      { name: "Instrumentos de avaliação", workload: 35 },
      { name: "Prática inclusiva", workload: 35 },
      { name: "Metodologia do ensino de artes", workload: 30 },
      { name: "Projeto de pesquisa", workload: 50 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "psicomotricidade",
    title: "Psicomotricidade",
    price: "R$ 160,00/mês",
    fullDescription:
      "Curso voltado ao desenvolvimento psicomotor e suas aplicações educacionais.",
    syllabus: "Bases neurológicas, avaliação psicomotora e práticas pedagógicas.",
    image: "/images/cursos/psicomotricidade.jpg",
    disciplines: [
      { name: "Metodologia da Pesquisa Científica", workload: 40 },
      { name: "Psicomotricidade: conceito e histórico", workload: 30 },
      { name: "Desenvolvimento Psicomotor", workload: 30 },
      { name: "Psicomotricidade e Aprendizagem", workload: 40 },
      { name: "O Corpo, o Movimento e a Ludicidade", workload: 30 },
      { name: "Avaliação Psicomotora", workload: 30 },
      { name: "Educação Psicomotora", workload: 40 },
      { name: "Ética Geral e Profissional", workload: 30 },
      { name: "Direitos Humanos", workload: 30 },
      { name: "Inovações Tecnológicas", workload: 30 },
      { name: "LIBRAS", workload: 30 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "psicopedagogia",
    title: "Psicopedagogia Clínica e Institucional",
    price: "R$ 160,00/mês",
    fullDescription:
      "Forma profissionais para atuação psicopedagógica em contextos clínicos e institucionais.",
    syllabus: "Diagnóstico, intervenção e práticas psicopedagógicas.",
    image: "/images/cursos/psicopedagogia.jpg",
    disciplines: [
      { name: "Metodologia da Pesquisa Científica", workload: 40 },
      { name: "Psicologia da Educação", workload: 20 },
      { name: "Dificuldades de aprendizagem", workload: 20 },
      { name: "Manutenção e generalização da aprendizagem", workload: 20 },
      { name: "Direitos Humanos", workload: 30 },
      { name: "TDAH", workload: 20 },
      { name: "Ação docente subjetiva", workload: 20 },
      { name: "Ética Geral e Profissional", workload: 30 },
      { name: "Necessidades curriculares", workload: 20 },
      { name: "Intervenção psicopedagógica", workload: 20 },
      { name: "Ferramentas psicopedagógicas", workload: 20 },
      { name: "Diagnóstico psicopedagógico", workload: 20 },
      { name: "Transtorno do Espectro Autista", workload: 20 },
      { name: "LIBRAS", workload: 30 },
      { name: "Inovações Tecnológicas", workload: 30 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "assistencia-social-saude-publica",
    title: "Assistência Social e Saúde Pública",
    price: "R$ 160,00/mês",
    fullDescription:
      "Capacita profissionais para atuação na gestão e execução de políticas públicas em saúde e assistência social.",
    syllabus: "Gestão em saúde, políticas públicas e atuação interdisciplinar.",
    image: "/images/cursos/assistencia.jpg",
    disciplines: [
      { name: "Didática do ensino superior" },
      { name: "Metodologia da Pesquisa Científica" },
      { name: "Introdução ao Serviço Social" },
      { name: "Ética e Responsabilidade Social" },
      { name: "Legislação para Assistência Social" },
      { name: "Gestão em Saúde e Assistência Social" },
      { name: "Empreendedorismo" },
      { name: "Epidemiologia e Saúde Pública" },
      { name: "Estado e Sociedade" },
      { name: "Saúde Reprodutiva" },
      { name: "Políticas Públicas em Saúde" },
    ],
  },
  {
    slug: "instrumentalidade-servico-social",
    title: "Instrumentalidade do Serviço Social",
    price: "R$ 160,00/mês",
    fullDescription:
      "Formação voltada ao desenvolvimento de competências técnicas e práticas no serviço social.",
    syllabus: "Instrumentos de atuação, políticas públicas e intervenção social.",
    image: "/images/cursos/servico-social.jpg",
    disciplines: [
      { name: "LIBRAS" },
      { name: "Didática do Ensino Superior" },
      { name: "Metodologia da Pesquisa Científica" },
      { name: "Políticas Públicas" },
      { name: "Gestão em Serviços Sociais" },
      { name: "Projetos Sociais" },
      { name: "Instrumentalidade do Serviço Social" },
      { name: "Competências profissionais" },
      { name: "Empreendedorismo" },
      { name: "Serviço Social no contexto jurídico" },
      { name: "Legislação da Assistência Social" },
      { name: "Políticas de Saúde" },
      { name: "TCC" },
    ],
  },
];

