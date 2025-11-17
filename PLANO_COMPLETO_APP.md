# Plano Completo - Plataforma de Engenharia de Prompt

## Visão Geral do Aplicativo

A **Plataforma de Engenharia de Prompt** é uma aplicação web educacional desenvolvida para a Access Global Logistics. O objetivo é fornecer guias práticos e padronizados sobre engenharia de prompt (prompt engineering) para diferentes departamentos da empresa, garantindo que as equipes utilizem ferramentas de IA de forma eficaz e alinhada às necessidades de negócio.

### Propósito Principal
- Padronizar o uso de IA generativa na empresa
- Fornecer exemplos práticos de prompts por departamento
- Educar equipes sobre melhores práticas de comunicação com IA
- Facilitar o acesso rápido a templates e guias específicos

---

## Estrutura de Navegação

O aplicativo possui uma navegação principal fixa no topo da página com os seguintes itens:

1. **Início** (`/`) - Página principal com introdução e visão geral
2. **RH** (`/rh`) - Seção de Recursos Humanos
3. **Gestão de Projetos** (`/gestao-projetos`) - Seção de gestão de projetos
4. **Marketing** (`/marketing`) - Seção de Marketing
5. **Comercial** (`/comercial`) - Seção Comercial
6. **Pricing** (`/pricing`) - Seção de Pricing
7. **Logística** (`/logistica`) - Seção de Logística (pasta existe mas está vazia)

A navegação é responsiva, com menu mobile para telas menores.

---

## Página Inicial (`/`)

### Componentes Visuais

#### 1. Navegação Superior
- Logo da Access Global Logistics (com fallback SVG caso a imagem não carregue)
- Título "Engenharia de Prompt"
- Menu de navegação com links para todas as seções
- Botão de menu mobile (ícone de hambúrguer)

#### 2. Seção de Conteúdo Principal (ContentSection)

**Cabeçalho:**
- Título: "Engenharia de Prompt na Access Global Logistics"
- Descrição explicando que o guia foi criado para padronizar e aprimorar o uso de IA generativa

**Seção: O que é Engenharia de Prompt?**
- Definição: método de estruturar instruções para orientar sistemas de IA generativa com precisão
- Explicação sobre como a formulação controla direção, nível de detalhe e utilidade da resposta
- Objetivo: reduzir ambiguidade e estabelecer base clara para produção de conteúdo

**Seção: Quatro Elementos Principais**
Quatro cards explicando os elementos essenciais de um prompt:

1. **Contexto**
   - Informações que enquadram o cenário
   - Inclui descrição da situação, domínio, público e referências internas
   - Garante alinhamento conceitual

2. **Papel da IA**
   - Função que o modelo deve assumir (analista, técnico, consultor, redator, avaliador)
   - Orienta o padrão de raciocínio aplicado

3. **Tarefa**
   - Instrução direta sobre o que deve ser feito
   - Determina tipo de entrega, escopo e objetivo
   - Evita dispersão

4. **Formato de Saída**
   - Especificação da estrutura final da resposta
   - Pode ser tópicos, listas, tabelas, modelos internos
   - Reduz retrabalho

**Seção: Exemplo de Prompt Completo**
Demonstração prática dos quatro elementos com exemplo relacionado à logística:
- Contexto: Especialista em logística internacional da Access Global Logistics
- Papel da IA: Analista técnico para documentar procedimentos operacionais
- Tarefa: Produzir resumo técnico do processo de importação marítima
- Formato de Saída: Tópicos organizados por fase operacional

**Seção: Como ser claro, contextual e específico?**
Três diretrizes principais:
1. Forneça contexto: uso final do resultado, público-alvo, fluxo de trabalho e objetivo final
2. Seja específico sobre a entrega: código, resposta concisa, formato em tabela, tópicos
3. Use passos sequenciais: liste etapas com números ou marcadores

**Seção: Prompt Vago vs Prompt Detalhado**
Tabela comparativa mostrando:
- **Prompt Vago:** "Analise este relatório de interrupção da AcmeCloud e resuma os principais pontos."
- **Prompt Detalhado:** Versão estruturada que especifica:
  - Ignorar introdução
  - Manter resposta objetiva
  - Listar apenas: Causa, Duração, Serviços impactados, Número de usuários afetados, Perda de receita estimada

**Seção: Use delimitadores**
Explicação sobre uso de delimitadores (aspas triplas, tags XML, títulos de seção) para demarcar partes do texto.

Dois exemplos práticos:
1. Resumir texto delimitado por aspas triplas em um haicai
2. Comparar dois artigos delimitados com tags XML

#### 3. Seção de Features (Features)

**Título:** "Seções por Departamento"
**Descrição:** "Explore guias específicos desenvolvidos para as necessidades de cada área da empresa."

**Cards de Departamentos:**
Cada card contém:
- Ícone representativo do departamento
- Nome do departamento
- Descrição breve
- Botão "Explorar" com link para a seção

**Departamentos listados:**
1. **RH** (azul)
   - Ícone: Users
   - Descrição: "Guias para recrutamento, avaliações, comunicação interna e gestão de pessoas."

2. **Gestão de Projetos** (roxo)
   - Ícone: FolderKanban
   - Descrição: "Prompts para todas as fases do ciclo de vida de projetos, desde o início até o encerramento."

3. **Marketing** (rosa)
   - Ícone: Megaphone
   - Descrição: "Criação de conteúdo, redes sociais, e-mail marketing, SEO e pesquisa de mercado."

4. **Comercial** (verde)
   - Ícone: TrendingUp
   - Descrição: "Prompts para prospecção, negociação, follow-up e relacionamento com clientes."

5. **Pricing** (amarelo)
   - Ícone: DollarSign
   - Descrição: "Estratégias para análise de preços, cotações e otimização de margens."

---

## Página RH (`/rh`)

### Cabeçalho da Página
- Ícone: Users (azul)
- Título: "Recursos Humanos"
- Descrição: "Prompts práticos para recrutamento, avaliações, pesquisas e gestão de pessoas"

### Seções de Conteúdo

#### 1. Análise de currículos e seleção
**Prompts disponíveis:**
- "Analise estes currículos e gere uma matriz com: experiência técnica, certificações, histórico em logística, estabilidade e potencial de promoção."
- "Desenvolver perguntas de entrevista comportamental alinhadas aos valores da nossa empresa para uma vaga de [cargo] em [equipe/departamento]. Queremos avaliar as habilidades técnicas e a adequação à cultura. Forneça de 6 a 8 perguntas agrupadas por competência."
- "Com base nessas informações [insira as responsabilidades do trabalho, habilidades, contexto da equipe], escreva uma descrição de trabalho profissional para um [cargo]. Inclua uma breve introdução, responsabilidades, qualificações necessárias e o que torna a função atraente."

#### 2. Documentação e manuais
**Prompts disponíveis:**
- "Crie um manual de conduta operacional para colaboradores de CD, incluindo postura, EPIs, comunicação e segurança."
- "Crie um formulário de avaliação de desempenho para supervisores de logística, com competências, indicadores comportamentais e critérios de nota."

#### 3. Pesquisas e avaliações
**Prompts disponíveis:**
- "Escreva de 6 a 8 perguntas de pesquisa de funcionários projetadas para medir [por exemplo, pertencimento, confiança do gerente, equilíbrio da carga de trabalho]. Certifique-se de que as perguntas sejam neutras e fáceis de entender. Formate-os como uma pergunta por linha com sugestões de escala de classificação."
- "Desenvolva um conjunto de cinco perguntas para avaliações de desempenho que incentivem a reflexão, o estabelecimento de metas futuras e o feedback acionável. Adapte-se a [função/equipe] e mantenha o tom construtivo e orientado para o crescimento. Apresente as perguntas como uma lista para um formulário de revisão."

#### 4. Análise de dados e insights
**Prompts disponíveis:**
- "Analise este conjunto de dados de desgaste de funcionários dos últimos 12 meses. Concentre-se nos padrões por departamento, tempo de serviço e motivos de saída. Resuma os principais insights e sugira de 2 a 3 ações que o RH deve considerar. Apresente as descobertas como marcadores seguidos por um pequeno parágrafo. [Carregue seu CSV ou cole a tabela aqui]"

### Funcionalidades
- Cada prompt é exibido em um card com borda colorida à esquerda
- Botão de copiar ao lado de cada prompt
- Visualização clara e organizada por categoria

---

## Página Gestão de Projetos (`/gestao-projetos`)

### Cabeçalho da Página
- Ícone: FolderKanban (roxo)
- Título: "Gestão de Projetos"
- Descrição: "Prompts práticos para todas as fases do ciclo de vida de projetos"

### Seção: Como usar estes prompts
Card destacado com dicas:
- "Comece com um prompt simples, revise a resposta e vá refinando."
- "Sempre inclua contexto: tipo de projeto, setor, tamanho da equipe, ferramentas, prazos."
- "Teste muito, varie o pedido e compare as respostas."

### Seções de Conteúdo

#### 1. Início de projeto
**Prompts:**
- "Como posso criar um termo de abertura de projeto atraente para uma nova iniciativa de [tipo de projeto]?"
- "Que perguntas-chave devo fazer às partes interessadas para definir claramente o escopo do projeto?"
- "Gere uma lista de possíveis riscos para iniciar um [tipo de projeto] em [setor]."

**Dica:** "A coleta de informações é crucial ao iniciar um novo projeto. Usar o LLM para pesquisa pode acelerar significativamente a fase de iniciação."

#### 2. Planejamento do projeto
**Prompts:**
- "Ajude-me a criar uma estrutura analítica de trabalho para um [tipo de projeto]. Forneça uma lista hierárquica."
- "Que fatores devo considerar ao estimar a duração das tarefas de uma campanha de marketing? Forneça uma lista de pontos."
- "Sugira estratégias para alocação eficiente de recursos em um ambiente de pequena empresa iniciante. Inclua pelo menos cinco estratégias."
- "Como posso incorporar [meta específica] em meu plano de projeto? Forneça um guia passo a passo."

#### 3. Execução do projeto
**Prompts:**
- "Fornecer uma estrutura para delegar tarefas com base nos pontos fortes dos membros da equipe."
- "Quais são algumas maneiras inovadoras de acompanhar o progresso do projeto além dos métodos tradicionais? Liste pelo menos sete ideias."
- "Como posso melhorar a comunicação em uma equipe multifuncional que trabalha em um [tipo de projeto]? Ofereça dicas práticas."

#### 4. Monitoramento e controle
**Prompts:**
- "Que indicadores-chave de desempenho devo usar para medir a integridade do projeto em um ambiente ágil? Forneça uma lista com breves explicações."
- "Como posso identificar possíveis problemas antes que eles se tornem grandes problemas em meu projeto? Sugira um sistema de alerta antecipado."
- "Descreva um processo de gerenciamento de mudanças para quando o escopo do projeto precisar ser ajustado."

#### 5. Encerramento do projeto
**Prompts:**
- "Que elementos devo incluir em um documento abrangente de lições aprendidas para um [tipo de projeto]? Fornecer um esboço detalhado."
- "Como posso estruturar um relatório de encerramento de projeto para destacar tanto os sucessos quanto as áreas de melhoria? Sugira um modelo."
- "Sugira maneiras criativas de avaliar a satisfação do cliente ao final de um projeto. Inclua pelo menos cinco métodos."

#### 6. Gestão ágil de projetos
**Prompts:**
- "Como posso tornar o planejamento de sprint mais eficiente para uma equipe Scrum recém-formada? Forneça um guia passo a passo."
- "Que estratégias posso usar para refinar e priorizar efetivamente nosso backlog de produtos? Liste pelo menos seis técnicas."
- "Sugira atividades de quebra-gelo para tornar nossas retrospectivas de sprint mais envolventes e produtivas. Inclua cinco atividades com breves descrições."

#### 7. Gestão de riscos
**Prompts:**
- "Ajude-me a criar uma matriz de avaliação de riscos para um [tipo de projeto]. Forneça um modelo e uma explicação de como usá-lo."
- "Quais são alguns dos riscos frequentemente negligenciados em projetos de [tipo de projeto]? Liste pelo menos 10 com breves explicações."
- "Sugira estratégias de mitigação para [tipo de risco específico] em um [tipo de projeto]. Forneça um plano de ação detalhado."

#### 8. Gestão de recursos
**Prompts:**
- "Como posso identificar lacunas de habilidades na minha equipe para um próximo [tipo de projeto]? Descreva uma abordagem sistemática."
- "Sugira técnicas para nivelamento de recursos em um ambiente de vários projetos. Forneça os prós e os contras de cada técnica."
- "Que fatores devo considerar ao planejar a capacidade de um [tipo de projeto]? Crie uma lista de verificação abrangente."

#### 9. Partes interessadas
**Prompts:**
- "Ajude-me a criar um modelo de análise de partes interessadas para um [tipo de projeto]. Inclua categorias e critérios de avaliação."
- "Como posso desenvolver uma estratégia de comunicação para um grupo diversificado de participantes do projeto? Forneça uma estrutura."
- "Sugira maneiras de gerenciar as expectativas quando os resultados do projeto precisarem ser ajustados. Inclua modelos de comunicação."

#### 10. Orçamento do projeto
**Prompts:**
- "Que métodos posso usar para melhorar a precisão das estimativas iniciais de custo do meu projeto? Liste e explique pelo menos cinco métodos."
- "Como posso configurar um sistema eficaz para acompanhar as despesas do projeto em tempo real? Forneça um guia de implementação passo a passo."
- "Sugira estratégias para apresentar as variações orçamentárias à gerência sênior. Inclua um esboço de apresentação."

#### 11. Gestão da qualidade
**Prompts:**
- "Ajude-me a desenvolver um plano de gerenciamento de qualidade para um [tipo de projeto]. Forneça um modelo detalhado."
- "Quais são algumas técnicas eficazes de garantia de qualidade para projetos do [setor]? Liste e explique pelo menos sete técnicas."
- "Como posso implementar um processo de melhoria contínua na minha equipe de projeto? Descreva uma abordagem prática."

#### 12. Gestão do tempo
**Prompts:**
- "Sugira estratégias para otimizar o cronograma de nosso projeto para cumprir um prazo agressivo. Forneça pelo menos oito dicas práticas."
- "Como posso realizar uma análise de caminho crítico para um [tipo de projeto] complexo? Forneça um guia passo a passo com um exemplo."
- "Quais são algumas técnicas inovadoras e que economizam tempo para gerenciar vários projetos simultaneamente? Liste e explique pelo menos seis técnicas."

#### 13. Liderança de equipe
**Prompts:**
- "Como posso motivar uma equipe que está mostrando sinais de esgotamento no meio de um [tipo de projeto]? Sugira um plano de ação detalhado."
- "Sugira estratégias para resolver conflitos entre membros da equipe com diferentes estilos de trabalho. Forneça cenários e soluções específicos."
- "Quais são algumas maneiras eficazes de fornecer feedback construtivo a membros da equipe com desempenho insatisfatório? Inclua modelos de comunicação."

#### 14. Documentação do projeto
**Prompts:**
- "Ajude-me a criar um modelo para um relatório abrangente de status do projeto. Inclua todas as seções essenciais e explicações breves."
- "Como posso melhorar a clareza e a eficácia da documentação de nosso projeto? Forneça uma lista de verificação de práticas recomendadas."
- "Que estratégias posso usar para garantir que todos os membros da equipe atualizem consistentemente os documentos do projeto? Sugira um plano de implementação."

#### 15. Tomada de decisão
**Prompts:**
- "Sugira uma estrutura para analisar opções ao enfrentar uma decisão crítica de projeto. Forneça um processo passo a passo."
- "Como posso criar uma árvore de decisão para avaliar os possíveis riscos e respostas do projeto? Forneça um exemplo com explicações."
- "Que técnicas posso usar para priorizar recursos para um [entregável de projeto]? Liste e explique pelo menos cinco métodos."

#### 16. Comunicação do projeto
**Prompts:**
- "Ajude-me a elaborar um modelo de e-mail para informar as partes interessadas sobre mudanças significativas no projeto. Inclua os principais elementos a serem abordados."
- "Como posso criar slides de apresentação do projeto mais envolventes para as reuniões das partes interessadas? Forneça dicas de design e conteúdo."
- "Sugira atividades de quebra-gelo para tornar as reuniões de projetos virtuais mais interativas e produtivas. Liste cinco atividades com instruções."

#### 17. Integração de projetos
**Prompts:**
- "Como posso melhorar a coordenação entre os diferentes departamentos envolvidos em nosso [tipo de projeto] em toda a empresa? Forneça uma estratégia detalhada."

---

## Página Marketing (`/marketing`)

### Cabeçalho da Página
- Ícone: Megaphone (rosa)
- Título: "Marketing"
- Descrição: "Prompts práticos para criação de conteúdo, redes sociais, e-mail marketing e muito mais"

### Seções de Conteúdo

#### 1. Prompts para criação de conteúdo
**Prompts:**
- "Escreva uma introdução envolvente seguindo o framework PAS de copywriting para um post de blog sobre [tópico] e como as empresas podem se adaptar a [tendência/desafio]. Utilize dados interessantes de pesquisas, estudos ou notícias recentes para começar com um gancho chamativo."
- "Liste 10 dicas de marketing de conteúdo para empresas do setor [indústria] melhorarem a taxa de abertura de e-mails em 10%."
- "Crie um calendário de conteúdo para o lançamento de [produto/serviço] nos próximos três meses. O calendário deve incluir uma mistura de posts de blog, e-books, estudos de caso e whitepapers, distribuídos para gerar o máximo impacto. Foque em uma proporção de 3:1 entre conteúdo educativo e conteúdo de vendas."

#### 2. Prompts para engajamento em redes sociais
**Prompts:**
- "Escreva uma legenda para redes sociais anunciando um novo [produto/serviço], destacando [benefício 1], [benefício 2] e [diferencial único]. Finalize com um CTA incentivando a experimentação do produto com 20% de desconto pelos próximos 7 dias."
- "Gere cinco postagens para o X (antigo Twitter) promovendo nosso evento sobre [tópico], direcionadas ao público [audiência-alvo]."
- "Sugira três perguntas envolventes para o LinkedIn que iniciem conversas sobre [tema do setor] entre [profissionais-alvo]."
- "Escreva um post para o Facebook promovendo nosso novo [e-book] sobre [tópico] e incentivando os seguidores a baixá-lo. Dê um spoiler do conteúdo para torná-lo irresistível: [Ponto 1], [Ponto 2], [Ponto 3]."

#### 3. Prompts para atendimento ao cliente
**Prompts:**
- "Redija uma resposta profissional para um cliente que enfrentou [problema], focando na resolução da questão e na retenção da lealdade do cliente. Seja empático e gentil, oferecendo uma solução eficaz."
- "Crie um template de agradecimento para clientes que deixarem avaliações, oferecendo um desconto de 10% na próxima compra."
- "Escreva um roteiro para um chatbot responder perguntas frequentes sobre [tipo de produto], incluindo [característica 1], [característica 2] e [política]."

#### 4. Prompts para copy de anúncios
**Prompts:**
- "Escreva um anúncio do Google para [produto/serviço], destacando como ele ajuda [público-alvo] a resolver [problema]. Mantenha o texto claro, conciso e envolvente. Gere 5 versões diferentes para testes A/B."
- "Crie um anúncio para o Facebook com um título e um texto promocional destacando [característica] do [produto] para [público-alvo]. Certifique-se de começar com um gancho atrativo e incluir um CTA forte."
- "Escreva um anúncio para o LinkedIn promovendo um webinar sobre [tópico], focando no valor para líderes do setor [indústria]. Destaque o [palestrante] e enfatize sua experiência e conquistas para construir credibilidade."
- "Redija um anúncio promocional para a liquidação de fim de temporada de [tipo de produto], enfatizando [benefício 1] e [benefício 2]."
- "Escreva um título chamativo para um anúncio de retargeting direcionado a clientes que visitaram a página de preços de [produto] mas não converteram. Foque em oferecer um valor adicional ou incentivo. Gere 3 versões, cada uma com um incentivo diferente."

#### 5. Prompts para e-mail marketing
**Prompts:**
- "Escreva um assunto criativo e um corpo de e-mail envolvente para agradecer um cliente pela compra de [produto] e incentivá-lo a deixar uma avaliação em [site]."
- "Crie um e-mail promocional para uma oferta por tempo limitado de [produto], gerando urgência com duas mensagens de CTA diferentes para um teste A/B."
- "Gere um e-mail de follow-up para reengajar clientes que não abriram e-mails recentes, oferecendo um desconto/conteúdo exclusivo."
- "Escreva um e-mail de nutrição de leads para potenciais clientes que demonstraram interesse em [produto], mas ainda não compraram."

#### 6. Prompts para pesquisa de mercado
**Prompts:**
- "Crie uma pesquisa com 10 perguntas para coletar feedback dos clientes sobre [produto/serviço], focando em sua experiência."
- "Liste as principais tendências do setor para este ano e dê dicas sobre como líderes empresariais do setor [indústria] podem se manter à frente da concorrência."
- "Forneça uma análise comparativa do [produto] em relação ao [produto do concorrente], detalhando prós, contras, preços e avaliações."

#### 7. Prompts para SEO e análise de palavras-chave
**Prompts:**
- "Gere uma lista de palavras-chave de cauda longa relacionadas a [produto] para aumentar o tráfego na página do produto."
- "Escreva uma meta description para um post de blog sobre [tópico], direcionado a [público específico] e incentivando cliques."
- "Sugira títulos otimizados para SEO para um blog sobre [tópico] voltado para [persona-alvo]."
- "Gere uma lista de perguntas que as pessoas costumam fazer sobre [produto] para otimizar a seção de FAQ e melhorar a visibilidade nos mecanismos de busca."

---

## Página Comercial (`/comercial`)

### Cabeçalho da Página
- Ícone: TrendingUp (verde)
- Título: "Comercial"
- Descrição: "Prompts práticos para qualificação de leads, propostas comerciais e análise de vendas"

### Seções de Conteúdo

#### 1. Qualificar Leads
**Prompts:**
- "Sou executivo comercial de uma empresa de logística. Tenho o perfil de cliente: indústria de alimentos que exporta para América Latina. Gere uma lista de 10 perguntas para qualificar esse lead (sobre volume, frequência, rotas, armazenagem etc.)."

#### 2. Criar proposta comercial
**Prompts:**
- "Crie um rascunho de proposta comercial para transporte internacional e armazenagem no Brasil para uma empresa de e-commerce. Inclua: escopo de serviço, prazos, SLA, condições de pagamento, diferencial competitivo."

#### 3. Análise de dados de vendas
**Prompts:**
- "Envio o .xlsx com os últimos 12 meses de vendas de serviços de logística. Gere análise: top 5 clientes, tendência por região, serviços mais vendidos, sugerir foco para próximos 3 meses."

#### 4. Aprender novo tema (ex: incorporação de "last mile")
**Prompts:**
- "Explique o que é 'last mile logistics', quais são os desafios no Brasil, e como isso impacta o comercial de uma empresa de logística."

#### 5. Preparar roteiro de ligação de vendas
**Prompts:**
- "Crie um roteiro de pré-chamada para ligar a um lead da indústria automotiva, perguntando sobre suas necessidades logísticas, gargalos, orçamento e prazo."

#### 6. Diagnóstico rápido de necessidade do cliente
**Prompts:**
- "Vou colar abaixo a descrição do meu cliente. Gere um diagnóstico: desafios logísticos prováveis, gargalos, dores e oportunidades de upsell."

#### 7. Análise de contrato do cliente
**Prompts:**
- "Analise este PDF do contrato atual do cliente e identifique pontos críticos, prazos, multas e onde podemos propor melhoria logística."

### Seção de Dica
Card destacado com dica:
- "Teste o prompt e vá otimizando conforme necessário."

---

## Página Pricing (`/pricing`)

### Cabeçalho da Página
- Ícone: DollarSign (amarelo)
- Título: "Pricing"
- Descrição: "Prompts práticos para análise de preços, cotações e otimização de margens"

### Prompts Disponíveis

1. "Veja o contrato PDF do fornecedor logístico (upload). Identifique cláusulas relacionadas a penalidades por atraso, variação cambial, revisão de tarifa, responsabilidades."

2. "Preciso de 5 argumentos comerciais para justificar uma tarifa 8% acima do padrão para uma rota especial (Itajaí → Ásia) com serviço expresso, explicando valor agregado."

3. "Como especialista em negociação de serviços logísticos, redija uma proposta de preço para o cliente X que solicita serviço de transporte marítimo Itajaí → Rotterdam, 20 TEUs, prazo de 35 dias. Inclua escopo, valores, condições de pagamento."

4. "Sou do setor de pricing da Access Global Logistics. Vou enviar um arquivo .xlsx com custos por rota e modalidade. Gere uma matriz que mostre: margem atual, margem ideal, gap e prioridade de ajuste por rota. Recomendação final: quais rotas devem ter revisão imediata de preço e por quê."

---

## Página Logística (`/logistica`)

**Status:** A pasta existe no projeto mas está vazia (sem conteúdo implementado)

---

## Funcionalidades Principais

### 1. Sistema de Cópia de Prompts
- Cada prompt possui um botão de copiar ao lado
- Ao clicar, o texto do prompt é copiado para a área de transferência
- Feedback visual: ícone muda de "Copiar" para "Check" (verde) por 2 segundos após copiar
- Funcionalidade implementada via componente CopyButton

### 2. Navegação Responsiva
- Menu desktop: links horizontais visíveis em telas médias e grandes
- Menu mobile: botão hambúrguer em telas pequenas
- Navegação fixa no topo (sticky) com backdrop blur
- Indicador visual da página atual (botão destacado)

### 3. Organização Visual
- Cards para cada seção de prompts
- Bordas coloridas à esquerda dos prompts (destaque visual)
- Ícones representativos para cada departamento
- Cores temáticas por departamento:
  - RH: Azul
  - Gestão de Projetos: Roxo
  - Marketing: Rosa
  - Comercial: Verde
  - Pricing: Amarelo

### 4. Design System
- Tema claro e escuro suportado (variáveis CSS)
- Cores primárias: Azul (#3B82F6 aproximadamente)
- Espaçamento consistente
- Tipografia: Inter (Google Fonts)
- Componentes reutilizáveis (Cards, Buttons, Separators)

---

## Elementos Visuais e Design

### Logo
- Logo da Access Global Logistics
- Fallback SVG caso a imagem não carregue
- SVG mostra um design com letra "A" estilizada em vermelho (#DC2626)
- Tamanho padrão: 32x32px

### Paleta de Cores por Departamento
- **RH:** Azul (bg-blue-100, text-blue-600)
- **Gestão de Projetos:** Roxo (bg-purple-100, text-purple-600)
- **Marketing:** Rosa (bg-pink-100, text-pink-600)
- **Comercial:** Verde (bg-green-100, text-green-600)
- **Pricing:** Amarelo (bg-yellow-100, text-yellow-600)

### Componentes de UI
- Cards com hover effect (sombra e leve escala)
- Botões com variantes (primary, outline, ghost, secondary)
- Separadores visuais entre seções
- Backgrounds alternados (muted/50) para melhor legibilidade

---

## Estrutura de Conteúdo

### Hierarquia de Informação

1. **Nível 1: Página Inicial**
   - Introdução conceitual
   - Fundamentos de engenharia de prompt
   - Exemplos práticos
   - Links para departamentos

2. **Nível 2: Páginas de Departamento**
   - Cabeçalho com ícone e descrição
   - Seções temáticas
   - Prompts práticos organizados por categoria

3. **Nível 3: Prompts Individuais**
   - Texto completo do prompt
   - Botão de cópia
   - Visualização em card destacado

---

## Fluxo de Uso do Aplicativo

### Cenário 1: Usuário Novo
1. Acessa página inicial
2. Lê introdução sobre engenharia de prompt
3. Entende os quatro elementos principais
4. Vê exemplo prático completo
5. Navega para departamento de interesse
6. Encontra prompts relevantes
7. Copia prompt para usar em ferramenta de IA

### Cenário 2: Usuário Experiente
1. Acessa diretamente página do departamento
2. Navega pelas seções
3. Encontra prompt específico
4. Copia e utiliza

### Cenário 3: Exploração
1. Navega entre diferentes departamentos
2. Compara tipos de prompts
3. Aprende padrões e estruturas
4. Adapta prompts para suas necessidades

---

## Características Especiais

### 1. Contexto Empresarial
- Todos os prompts são contextualizados para Access Global Logistics
- Exemplos específicos de logística internacional
- Referências a processos internos da empresa

### 2. Padronização
- Estrutura consistente em todas as páginas
- Formato uniforme de apresentação de prompts
- Nomenclatura padronizada

### 3. Praticidade
- Prompts prontos para uso
- Fácil cópia com um clique
- Organização por categoria facilita busca

### 4. Educacional
- Explicações conceituais na página inicial
- Dicas e orientações em seções específicas
- Exemplos comparativos (vago vs detalhado)

---

## Conteúdo Total por Seção

### Página Inicial
- 1 seção de introdução
- 4 cards de elementos principais
- 1 exemplo completo de prompt
- 1 tabela comparativa
- 2 exemplos de delimitadores
- 5 cards de departamentos

### RH
- 4 seções temáticas
- 7 prompts no total

### Gestão de Projetos
- 17 seções temáticas
- 1 seção de dicas
- 50+ prompts no total

### Marketing
- 7 seções temáticas
- 20+ prompts no total

### Comercial
- 7 seções temáticas
- 7 prompts no total
- 1 card de dica

### Pricing
- 1 seção
- 4 prompts no total

---

## Observações Importantes

1. **Seção Logística:** A pasta existe mas não possui conteúdo implementado. Seria necessário criar página similar às outras seções.

2. **Responsividade:** O design é responsivo, adaptando-se a diferentes tamanhos de tela.

3. **Acessibilidade:** Uso de componentes Shadcn UI que seguem padrões de acessibilidade.

4. **Internacionalização:** Todo o conteúdo está em português brasileiro (pt-BR).

5. **Tema Escuro:** Suporte a tema escuro através de variáveis CSS, embora não haja toggle visível na interface atual.

---

## Resumo Executivo

A Plataforma de Engenharia de Prompt é uma aplicação web educacional focada em ensinar e padronizar o uso de IA generativa na Access Global Logistics. O aplicativo organiza prompts práticos por departamento, oferece explicações conceituais sobre engenharia de prompt, e facilita o acesso rápido a templates prontos para uso. A interface é limpa, moderna e focada na usabilidade, com funcionalidade de cópia de prompts e navegação intuitiva entre seções.

O conteúdo é extenso e cobre desde conceitos básicos até aplicações práticas específicas de cada área da empresa, sempre contextualizado para o setor de logística internacional.

