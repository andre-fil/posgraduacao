import type { Course } from "@/data/courses";

import imgDocenciaCampoQuilombola from "@/app/img/Docência-da-Educação-de-Campo,-Quilombola-e-Afro-brasileira-femaf.png";
import imgDocenciaHistoria from "@/app/img/Docência-de-História-para-Educação-Básica-femaf.png";
import imgDocenciaGeografia from "@/app/img/Docência-do-Ensino-de-Geografia-para-Educação-Básica-femaf.png";
import imgDocenciaMatematica from "@/app/img/Docência-do-Ensino-de-Matemática-para-Educação-Básica-femaf.png";
import imgEducacaoInfantilNeuro from "@/app/img/Educação-Infantil-e-Neurociência-femaf.png";
import imgAlfabetizacaoLetramento from "@/app/img/Fundamentos-da-Alfabetização-e-Letramento-para-o-Ensino-Fundamental-femaf.png";
import imgTecnologiasEducacao from "@/app/img/Tecnologias-para-educação-femaf.png";
import imgGestaoPessoas from "@/app/img/Gestão-de-Pessoas-femaf.png";

const commonEducacaoDocencia = [
  { name: "Políticas Educacionais e Legislação", workload: 40 },
  { name: "Teorias da Aprendizagem e Desenvolvimento", workload: 40 },
  { name: "Didática do Ensino Superior", workload: 40 },
  { name: "Direitos Humanos", workload: 30 },
  { name: "Metodologia da Pesquisa", workload: 40 },
  { name: "Libras", workload: 30 },
  { name: "Inovações Tecnológicas", workload: 30 },
  { name: "Ética Geral e Profissional", workload: 30 },
] as const;

const commonMbaBase = [
  { name: "Direitos Humanos", workload: 30 },
  { name: "Metodologia da Pesquisa", workload: 40 },
  { name: "Libras", workload: 30 },
  { name: "Ética Geral e Profissional", workload: 30 },
  { name: "Inovações Tecnológicas", workload: 30 },
] as const;

const commonTecnologiaBase = [...commonMbaBase];

export const newCourses: Course[] = [
  {
    slug: "docencia-educacao-campo-quilombola-afro-brasileira",
    title: "Docência da Educação de Campo, Quilombola e Afro-Brasileira",
    price: "R$ 89,90/mês",
    area: "educacao",
    fullDescription:
      "Formação para docentes atuarem com perspectiva étnico-racial, educação do campo e comunidades quilombolas na educação básica.",
    syllabus:
      "Políticas educacionais, relações étnio-raciais, educação do campo e quilombola, literatura afro-brasileira e práticas docentes.",
    image: imgDocenciaCampoQuilombola,
    disciplines: [
      ...commonEducacaoDocencia,
      { name: "Direitos Culturais das Minorias", workload: 45 },
      { name: "Educação e Relações Étnio-raciais", workload: 40 },
      { name: "Educação do Campo e Quilombola", workload: 40 },
      {
        name: "História da Escravidão e da Abolição no Brasil",
        workload: 35,
      },
      { name: "Literatura Africana e Afro-brasileira", workload: 40 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "docencia-ensino-historia-educacao-basica",
    title: "Docência do Ensino de História para a Educação Básica",
    price: "R$ 89,90/mês",
    area: "educacao",
    fullDescription:
      "Especialização para professores de História desenvolverem fundamentos teóricos e práticas de ensino na educação básica.",
    syllabus:
      "Fundamentos da docência em História, temas do Brasil e contemporaneidade, metodologia de ensino e formação continuada.",
    image: imgDocenciaHistoria,
    disciplines: [
      ...commonEducacaoDocencia,
      {
        name: "Fundamentos Teóricos e Práticos da Docência no Ensino de História",
        workload: 50,
      },
      { name: "Tópicos Especiais em História do Brasil", workload: 40 },
      { name: "História, Política e Sociedade", workload: 50 },
      { name: "História Contemporânea", workload: 45 },
      {
        name: "Metodologia do Ensino de História na Educação Básica",
        workload: 45,
      },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "docencia-ensino-geografia-educacao-basica",
    title: "Docência do Ensino de Geografia para Educação Básica",
    price: "R$ 89,90/mês",
    area: "educacao",
    fullDescription:
      "Capacita docentes de Geografia com base teórica e práticas pedagógicas para a educação básica.",
    syllabus:
      "Cartografia, geografia urbana, econômica, população, biogeografia e práticas pedagógicas em sala de aula.",
    image: imgDocenciaGeografia,
    disciplines: [
      ...commonEducacaoDocencia,
      { name: "Práticas Pedagógicas em Geografia", workload: 45 },
      { name: "Cartografia", workload: 60 },
      { name: "Geografia Urbana e de Serviços", workload: 40 },
      { name: "Geografia Econômica", workload: 50 },
      { name: "Geografia da População", workload: 45 },
      { name: "Tópicos de Biogeografia e Meio Ambiente", workload: 40 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "docencia-ensino-matematica-educacao-basica",
    title: "Docência do Ensino de Matemática para Educação Básica",
    price: "R$ 89,90/mês",
    area: "educacao",
    fullDescription:
      "Formação docente em Matemática com foco em práticas de ensino, ludicidade e uso de tecnologias na educação básica.",
    syllabus:
      "Prática de ensino, tendências pedagógicas, aprendizagem da Matemática, história da disciplina e novas tecnologias.",
    image: imgDocenciaMatematica,
    disciplines: [
      ...commonEducacaoDocencia,
      { name: "Prática de Ensino de Matemática", workload: 45 },
      { name: "Formação Docente e Tendências Pedagógicas", workload: 45 },
      { name: "O Lúdico e o Contexto Educacional", workload: 40 },
      { name: "Aprendizagem da Matemática", workload: 40 },
      { name: "História da Matemática", workload: 60 },
      { name: "Novas Tecnologias no Ensino da Matemática", workload: 30 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "educacao-infantil-neurociencia",
    title: "Educação Infantil e Neurociência",
    price: "R$ 89,90/mês",
    area: "educacao",
    fullDescription:
      "Integra fundamentos da educação infantil com neurociências aplicadas à aprendizagem e ao desenvolvimento na primeira infância.",
    syllabus:
      "Práticas da educação infantil, linguagem e escrita, neurociência, estratégias lúdicas e formação docente.",
    image: imgEducacaoInfantilNeuro,
    disciplines: [
      { name: "Políticas Educacionais e Legislação", workload: 36 },
      { name: "Teorias da Aprendizagem e Desenvolvimento", workload: 36 },
      { name: "Didática do Ensino Superior", workload: 36 },
      { name: "Direitos Humanos", workload: 30 },
      { name: "Metodologia da Pesquisa", workload: 36 },
      { name: "Libras", workload: 30 },
      { name: "Inovações Tecnológicas", workload: 30 },
      { name: "Ética Geral e Profissional", workload: 30 },
      { name: "Aspectos Socioantropológicos", workload: 36 },
      { name: "Teorias e Práticas da Educação Infantil", workload: 36 },
      { name: "Educação infantil na Contemporaneidade", workload: 36 },
      { name: "A Linguagem e a Escrita nos Anos Iniciais", workload: 36 },
      { name: "Ciências Neurológicas", workload: 36 },
      { name: "Neurociência e Aprendizagem", workload: 36 },
      { name: "Estratégias de Ensino pelo Lúdico", workload: 36 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "fundamentos-alfabetizacao-letramento",
    title:
      "Fundamentos da Alfabetização e Letramento para o Ensino Fundamental",
    price: "R$ 89,90/mês",
    area: "educacao",
    fullDescription:
      "Formação para atuação em alfabetização e letramento no ensino fundamental, com foco em metodologias e contextos diversos.",
    syllabus:
      "Linguagem oral e escrita, letramento bilíngue, alfabetização de jovens e adultos, planejamento e avaliação.",
    image: imgAlfabetizacaoLetramento,
    disciplines: [
      { name: "Teorias da Aprendizagem e Desenvolvimento", workload: 40 },
      { name: "Didática do Ensino Superior", workload: 40 },
      { name: "Direitos Humanos", workload: 30 },
      { name: "Metodologia da Pesquisa", workload: 40 },
      { name: "Libras", workload: 30 },
      { name: "Inovações Tecnológicas", workload: 30 },
      { name: "Ética Geral e Profissional", workload: 30 },
      { name: "Linguagem Oral, Escrita e Literatura", workload: 30 },
      { name: "Letramento na Educação Bilíngue para Surdos", workload: 30 },
      {
        name: "Alfabetização de Jovens e Adultos: fundamentos metodológicos",
        workload: 30,
      },
      {
        name: "Planejamento, Didática e Avaliação na Alfabetização",
        workload: 30,
      },
      {
        name: "A Função Social da Escrita e a Alfabetização em Contextos Tecnológicos",
        workload: 30,
      },
      {
        name: "Psicogênese da Linguagem Oral e Escrita: subsídios para alfabetização e letramento",
        workload: 30,
      },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "tecnologias-educacionais-ensino-hibrido",
    title: "Tecnologias Educacionais e Ensino Híbrido",
    price: "R$ 89,90/mês",
    area: "educacao",
    fullDescription:
      "Capacita profissionais para planejar, gerir e ofertar cursos com tecnologias educacionais e modalidade híbrida.",
    syllabus:
      "Educação a distância, tecnologias educacionais, gestão educacional, ensino híbrido e marketing educacional.",
    image: imgTecnologiasEducacao,
    disciplines: [
      { name: "Didática do Ensino Superior", workload: 40 },
      { name: "Direitos Humanos", workload: 30 },
      { name: "Metodologia da Pesquisa", workload: 40 },
      { name: "Libras", workload: 30 },
      { name: "Ética Geral e Profissional", workload: 30 },
      { name: "Inovações Tecnológicas", workload: 30 },
      { name: "Fundamentos da Educação a Distância", workload: 40 },
      { name: "Tecnologias Educacionais e Acessibilidade", workload: 40 },
      { name: "Tecnologias para Gestão Educacional", workload: 40 },
      { name: "Planejamento de Cursos para o Ensino Híbrido", workload: 30 },
      { name: "Marketing para Produtos de Educação", workload: 40 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "mba-gestao-pessoas-rh",
    title: "MBA em Gestão de Pessoas (RH)",
    price: "R$ 89,90/mês",
    area: "administracao",
    fullDescription:
      "Formação em gestão de pessoas, processos de RH, legislação trabalhista e desenvolvimento por competências.",
    syllabus:
      "Marketing, diagnóstico de mercado, processos, carreiras, remuneração, competências e mediação de conflitos.",
    image: imgGestaoPessoas,
    disciplines: [
      ...commonMbaBase,
      { name: "Gestão de Marketing", workload: 36 },
      { name: "Cenários e Diagnósticos Setoriais de Mercado", workload: 36 },
      { name: "Gestão de Processos e Qualidade", workload: 48 },
      { name: "Legislação e Relações Trabalhistas", workload: 36 },
      { name: "Cargos, Carreiras e Remuneração", workload: 36 },
      { name: "Gestão por Competências", workload: 36 },
      { name: "Gestão e Mediação de Conflitos", workload: 36 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "mba-gestao-empresarial",
    title: "MBA em Gestão Empresarial / Administração",
    price: "R$ 89,90/mês",
    area: "administracao",
    fullDescription:
      "MBA voltado à gestão empresarial com governança, informação, marketing, projetos, produção, finanças e contabilidade.",
    syllabus:
      "Governança corporativa, BI, marketing estratégico, gestão ágil, produção, finanças e contabilidade societária.",
    disciplines: [
      ...commonMbaBase,
      { name: "Dimensão Humana na Governança Corporativa", workload: 40 },
      { name: "Gestão estratégica da Informação", workload: 40 },
      { name: "BI: a inteligência de Negócios", workload: 40 },
      {
        name: "Marketing Estratégico e Inteligência Competitiva",
        workload: 40,
      },
      { name: "Gestão ágil de projetos", workload: 60 },
      { name: "Gestão de produção", workload: 48 },
      { name: "Gestão financeira", workload: 48 },
      { name: "Contabilidade Societária", workload: 40 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "mba-financas-controladoria",
    title: "MBA em Finanças e Controladoria",
    price: "R$ 89,90/mês",
    area: "administracao",
    fullDescription:
      "MBA com foco em finanças, contabilidade e controle na administração pública e gestão de recursos institucionais.",
    syllabus:
      "Estado e poderes, finanças públicas, contabilidade, licitações, administração pública, controle e auditoria.",
    disciplines: [
      ...commonMbaBase,
      { name: "Organização do Estado e dos Poderes", workload: 45 },
      { name: "Finanças Públicas", workload: 55 },
      { name: "Contabilidade Geral", workload: 45 },
      { name: "Gestão de Contratos, Convênios e Licitações", workload: 45 },
      { name: "Administração Pública", workload: 45 },
      { name: "Contabilidade Pública", workload: 45 },
      {
        name: "Controle na Administração - Interno e Externo",
        workload: 45,
      },
      { name: "Auditoria Governamental", workload: 45 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "mba-marketing-digital",
    title: "MBA em Marketing Digital",
    price: "R$ 89,90/mês",
    area: "administracao",
    fullDescription:
      "Formação em estratégias digitais, mídias, e-commerce, métricas de performance e experiência do usuário.",
    syllabus:
      "Negócios e BI, marketing digital, design thinking, mídias digitais, e-commerce, branded content, UX e campanhas.",
    disciplines: [
      ...commonMbaBase,
      { name: "Gestão Estratégica de Negócios e BI", workload: 36 },
      {
        name: "Estratégias de Marketing Digital e Comunicação Integrada",
        workload: 36,
      },
      { name: "Design Thinking", workload: 36 },
      { name: "Comportamento do Consumidor Digital", workload: 30 },
      { name: "Planejamento de Mídias Digitais", workload: 36 },
      { name: "Empreendedorismo Digital", workload: 24 },
      { name: "E-commerce e Canal Distribuição", workload: 36 },
      { name: "Branded Content", workload: 24 },
      { name: "Performance e Métricas de Controle", workload: 36 },
      { name: "Experiência do Usuário (UX)", workload: 36 },
      { name: "Ferramentas e Análise de campanhas digitais", workload: 24 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "mba-gestao-comercial-vendas",
    title: "MBA em Gestão Comercial e Vendas",
    price: "R$ 89,90/mês",
    area: "administracao",
    fullDescription:
      "MBA para líderes comerciais com foco em vendas, marketing, finanças corporativas, big data e comportamento do consumidor.",
    syllabus:
      "Liderança, finanças, big data, marketing, sustentabilidade, e-commerce, varejo e neuromarketing.",
    disciplines: [
      ...commonMbaBase,
      { name: "Coaching e Liderança", workload: 36 },
      { name: "Finanças Corporativas", workload: 48 },
      { name: "Fundamentos e Projeto de Big Data", workload: 42 },
      { name: "Gestão de Marketing", workload: 36 },
      { name: "Gestão Estratégica Sustentável", workload: 36 },
      { name: "Gestão e Mediação de Conflitos", workload: 36 },
      { name: "E-commerce e Canal Distribuição", workload: 36 },
      { name: "Marketing de Varejo", workload: 36 },
      { name: "Neuromarketing e Comportamento do Consumidor", workload: 36 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "mba-lideranca-inovacao",
    title: "MBA em Liderança e Inovação",
    price: "R$ 89,90/mês",
    area: "administracao",
    fullDescription:
      "Desenvolve competências de liderança, inovação organizacional, gestão de mudanças e transformação digital.",
    syllabus:
      "Liderança contemporânea, inteligência emocional, cultura organizacional, design thinking, projetos ágeis e empreendedorismo.",
    disciplines: [
      ...commonMbaBase,
      { name: "Fundamentos da Liderança Contemporânea", workload: 30 },
      {
        name: "Inteligência Emocional e Competências Socioemocionais",
        workload: 30,
      },
      { name: "Gestão Estratégica nas Organizações", workload: 36 },
      { name: "Cultura Organizacional e Gestão da Mudança", workload: 30 },
      { name: "Gestão de Pessoas e Desenvolvimento de Equipes", workload: 30 },
      {
        name: "Inovação Organizacional e Gestão da Criatividade",
        workload: 30,
      },
      { name: "Design Thinking e Metodologias de Inovação", workload: 30 },
      {
        name: "Transformação Digital e Tecnologias Emergentes",
        workload: 24,
      },
      { name: "Gestão de Projetos e Metodologias Ágeis", workload: 30 },
      { name: "Empreendedorismo e Novos Modelos de Negócio", workload: 30 },
      {
        name: "Marketing Estratégico e Inteligência Competitiva",
        workload: 40,
      },
      { name: "Liderança para Inovação e Tomada de Decisão", workload: 24 },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "mba-gestao-estrategica-negocios",
    title: "MBA em Gestão Estratégica de Negócios",
    price: "R$ 89,90/mês",
    area: "administracao",
    fullDescription:
      "Formação em planejamento estratégico, finanças, marketing, operações, inovação e tomada de decisão.",
    syllabus:
      "Gestão estratégica, planejamento, finanças, marketing, pessoas, operações, inovação e projetos.",
    disciplines: [
      ...commonMbaBase,
      { name: "Fundamentos da Gestão Estratégica", workload: 30 },
      { name: "Planejamento Estratégico e Vantagem Competitiva", workload: 36 },
      {
        name: "Gestão Financeira e Análise de Investimentos",
        workload: 30,
      },
      {
        name: "Marketing Estratégico e Inteligência Competitiva",
        workload: 40,
      },
      { name: "Gestão de Pessoas e Liderança Organizacional", workload: 30 },
      {
        name: "Gestão de Operações e Processos Organizacionais",
        workload: 30,
      },
      { name: "Inovação e Modelos de Negócios", workload: 30 },
      {
        name: "Gestão de Projetos e Tomada de Decisão Estratégica",
        workload: 30,
      },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "pos-inteligencia-artificial",
    title: "Pós em Inteligência Artificial",
    price: "R$ 89,90/mês",
    area: "tecnologia",
    fullDescription:
      "Formação em fundamentos de IA, machine learning, deep learning, NLP, ciência de dados e aplicações inteligentes.",
    syllabus:
      "Fundamentos de IA, lógica computacional, aprendizado de máquina, redes neurais, NLP e automação.",
    disciplines: [
      ...commonTecnologiaBase,
      { name: "Fundamentos da Inteligência Artificial", workload: 30 },
      {
        name: "Lógica Computacional e Representação do Conhecimento",
        workload: 30,
      },
      { name: "Aprendizado de Máquina (Machine Learning)", workload: 18 },
      { name: "Deep Learning e Redes Neurais Artificiais", workload: 42 },
      { name: "Processamento de Linguagem Natural", workload: 24 },
      { name: "Ciência de Dados e Análise Inteligente de Dados", workload: 30 },
      {
        name: "Aplicações da Inteligência Artificial e Automação Inteligente",
        workload: 18,
      },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "pos-seguranca-informacao",
    title: "Pós em Segurança da Informação",
    price: "R$ 89,90/mês",
    area: "tecnologia",
    fullDescription:
      "Capacita profissionais em segurança da informação, governança, criptografia, redes e conformidade.",
    syllabus:
      "Fundamentos de segurança, gestão de riscos, criptografia, redes, desenvolvimento seguro e auditoria.",
    disciplines: [
      ...commonTecnologiaBase,
      { name: "Fundamentos da Segurança da Informação", workload: 30 },
      {
        name: "Gestão de Riscos e Governança em Segurança da Informação",
        workload: 30,
      },
      { name: "Criptografia e Proteção de Dados", workload: 36 },
      { name: "Segurança de Redes e Sistemas", workload: 30 },
      {
        name: "Segurança em Aplicações e Desenvolvimento Seguro",
        workload: 24,
      },
      {
        name: "Auditoria e Conformidade em Segurança da Informação",
        workload: 30,
      },
      { name: "TCC", workload: 30 },
    ],
  },
  {
    slug: "pos-analise-sistemas-ti",
    title: "Pós em Análise de Sistemas / TI",
    price: "R$ 89,90/mês",
    area: "tecnologia",
    fullDescription:
      "Formação em fundamentos de TI, arquitetura de sistemas, banco de dados, segurança e transformação digital.",
    syllabus:
      "Infraestrutura, gestão de serviços de TI, banco de dados, segurança corporativa e inovação tecnológica.",
    disciplines: [
      ...commonTecnologiaBase,
      { name: "Fundamentos da Tecnologia da Informação", workload: 24 },
      { name: "Infraestrutura e Arquitetura de Sistemas de TI", workload: 30 },
      {
        name: "Gestão de Serviços de Tecnologia da Informação",
        workload: 24,
      },
      { name: "Banco de Dados e Gestão da Informação", workload: 30 },
      {
        name: "Segurança da Informação em Ambientes Corporativos",
        workload: 30,
      },
      { name: "Transformação Digital e Inovação Tecnológica", workload: 30 },
      { name: "TCC", workload: 30 },
    ],
  },
];
