import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FolderKanban, Lightbulb } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

const sections = [
  {
    title: "Como usar estes prompts",
    content: [
      "Comece com um prompt simples, revise a resposta e vá refinando.",
      "Sempre inclua contexto: tipo de projeto, setor, tamanho da equipe, ferramentas, prazos.",
      "Teste muito, varie o pedido e compare as respostas.",
    ],
  },
  {
    title: "Início de projeto",
    prompts: [
      "Como posso criar um termo de abertura de projeto atraente para uma nova iniciativa de [tipo de projeto]?",
      "Que perguntas-chave devo fazer às partes interessadas para definir claramente o escopo do projeto?",
      "Gere uma lista de possíveis riscos para iniciar um [tipo de projeto] em [setor].",
    ],
    tip: "A coleta de informações é crucial ao iniciar um novo projeto. Usar o LLM para pesquisa pode acelerar significativamente a fase de iniciação.",
  },
  {
    title: "Planejamento do projeto",
    prompts: [
      "Ajude-me a criar uma estrutura analítica de trabalho para um [tipo de projeto]. Forneça uma lista hierárquica.",
      "Que fatores devo considerar ao estimar a duração das tarefas de uma campanha de marketing? Forneça uma lista de pontos.",
      "Sugira estratégias para alocação eficiente de recursos em um ambiente de pequena empresa iniciante. Inclua pelo menos cinco estratégias.",
      "Como posso incorporar [meta específica] em meu plano de projeto? Forneça um guia passo a passo.",
    ],
  },
  {
    title: "Execução do projeto",
    prompts: [
      "Fornecer uma estrutura para delegar tarefas com base nos pontos fortes dos membros da equipe.",
      "Quais são algumas maneiras inovadoras de acompanhar o progresso do projeto além dos métodos tradicionais? Liste pelo menos sete ideias.",
      "Como posso melhorar a comunicação em uma equipe multifuncional que trabalha em um [tipo de projeto]? Ofereça dicas práticas.",
    ],
  },
  {
    title: "Monitoramento e controle",
    prompts: [
      "Que indicadores-chave de desempenho devo usar para medir a integridade do projeto em um ambiente ágil? Forneça uma lista com breves explicações.",
      "Como posso identificar possíveis problemas antes que eles se tornem grandes problemas em meu projeto? Sugira um sistema de alerta antecipado.",
      "Descreva um processo de gerenciamento de mudanças para quando o escopo do projeto precisar ser ajustado.",
    ],
  },
  {
    title: "Encerramento do projeto",
    prompts: [
      "Que elementos devo incluir em um documento abrangente de lições aprendidas para um [tipo de projeto]? Fornecer um esboço detalhado.",
      "Como posso estruturar um relatório de encerramento de projeto para destacar tanto os sucessos quanto as áreas de melhoria? Sugira um modelo.",
      "Sugira maneiras criativas de avaliar a satisfação do cliente ao final de um projeto. Inclua pelo menos cinco métodos.",
    ],
  },
  {
    title: "Gestão ágil de projetos",
    prompts: [
      "Como posso tornar o planejamento de sprint mais eficiente para uma equipe Scrum recém-formada? Forneça um guia passo a passo.",
      "Que estratégias posso usar para refinar e priorizar efetivamente nosso backlog de produtos? Liste pelo menos seis técnicas.",
      "Sugira atividades de quebra-gelo para tornar nossas retrospectivas de sprint mais envolventes e produtivas. Inclua cinco atividades com breves descrições.",
    ],
  },
  {
    title: "Gestão de riscos",
    prompts: [
      "Ajude-me a criar uma matriz de avaliação de riscos para um [tipo de projeto]. Forneça um modelo e uma explicação de como usá-lo.",
      "Quais são alguns dos riscos frequentemente negligenciados em projetos de [tipo de projeto]? Liste pelo menos 10 com breves explicações.",
      "Sugira estratégias de mitigação para [tipo de risco específico] em um [tipo de projeto]. Forneça um plano de ação detalhado.",
    ],
  },
  {
    title: "Gestão de recursos",
    prompts: [
      "Como posso identificar lacunas de habilidades na minha equipe para um próximo [tipo de projeto]? Descreva uma abordagem sistemática.",
      "Sugira técnicas para nivelamento de recursos em um ambiente de vários projetos. Forneça os prós e os contras de cada técnica.",
      "Que fatores devo considerar ao planejar a capacidade de um [tipo de projeto]? Crie uma lista de verificação abrangente.",
    ],
  },
  {
    title: "Partes interessadas",
    prompts: [
      "Ajude-me a criar um modelo de análise de partes interessadas para um [tipo de projeto]. Inclua categorias e critérios de avaliação.",
      "Como posso desenvolver uma estratégia de comunicação para um grupo diversificado de participantes do projeto? Forneça uma estrutura.",
      "Sugira maneiras de gerenciar as expectativas quando os resultados do projeto precisarem ser ajustados. Inclua modelos de comunicação.",
    ],
  },
  {
    title: "Orçamento do projeto",
    prompts: [
      "Que métodos posso usar para melhorar a precisão das estimativas iniciais de custo do meu projeto? Liste e explique pelo menos cinco métodos.",
      "Como posso configurar um sistema eficaz para acompanhar as despesas do projeto em tempo real? Forneça um guia de implementação passo a passo.",
      "Sugira estratégias para apresentar as variações orçamentárias à gerência sênior. Inclua um esboço de apresentação.",
    ],
  },
  {
    title: "Gestão da qualidade",
    prompts: [
      "Ajude-me a desenvolver um plano de gerenciamento de qualidade para um [tipo de projeto]. Forneça um modelo detalhado.",
      "Quais são algumas técnicas eficazes de garantia de qualidade para projetos do [setor]? Liste e explique pelo menos sete técnicas.",
      "Como posso implementar um processo de melhoria contínua na minha equipe de projeto? Descreva uma abordagem prática.",
    ],
  },
  {
    title: "Gestão do tempo",
    prompts: [
      "Sugira estratégias para otimizar o cronograma de nosso projeto para cumprir um prazo agressivo. Forneça pelo menos oito dicas práticas.",
      "Como posso realizar uma análise de caminho crítico para um [tipo de projeto] complexo? Forneça um guia passo a passo com um exemplo.",
      "Quais são algumas técnicas inovadoras e que economizam tempo para gerenciar vários projetos simultaneamente? Liste e explique pelo menos seis técnicas.",
    ],
  },
  {
    title: "Liderança de equipe",
    prompts: [
      "Como posso motivar uma equipe que está mostrando sinais de esgotamento no meio de um [tipo de projeto]? Sugira um plano de ação detalhado.",
      "Sugira estratégias para resolver conflitos entre membros da equipe com diferentes estilos de trabalho. Forneça cenários e soluções específicos.",
      "Quais são algumas maneiras eficazes de fornecer feedback construtivo a membros da equipe com desempenho insatisfatório? Inclua modelos de comunicação.",
    ],
  },
  {
    title: "Documentação do projeto",
    prompts: [
      "Ajude-me a criar um modelo para um relatório abrangente de status do projeto. Inclua todas as seções essenciais e explicações breves.",
      "Como posso melhorar a clareza e a eficácia da documentação de nosso projeto? Forneça uma lista de verificação de práticas recomendadas.",
      "Que estratégias posso usar para garantir que todos os membros da equipe atualizem consistentemente os documentos do projeto? Sugira um plano de implementação.",
    ],
  },
  {
    title: "Tomada de decisão",
    prompts: [
      "Sugira uma estrutura para analisar opções ao enfrentar uma decisão crítica de projeto. Forneça um processo passo a passo.",
      "Como posso criar uma árvore de decisão para avaliar os possíveis riscos e respostas do projeto? Forneça um exemplo com explicações.",
      "Que técnicas posso usar para priorizar recursos para um [entregável de projeto]? Liste e explique pelo menos cinco métodos.",
    ],
  },
  {
    title: "Comunicação do projeto",
    prompts: [
      "Ajude-me a elaborar um modelo de e-mail para informar as partes interessadas sobre mudanças significativas no projeto. Inclua os principais elementos a serem abordados.",
      "Como posso criar slides de apresentação do projeto mais envolventes para as reuniões das partes interessadas? Forneça dicas de design e conteúdo.",
      "Sugira atividades de quebra-gelo para tornar as reuniões de projetos virtuais mais interativas e produtivas. Liste cinco atividades com instruções.",
    ],
  },
  {
    title: "Integração de projetos",
    prompts: [
      "Como posso melhorar a coordenação entre os diferentes departamentos envolvidos em nosso [tipo de projeto] em toda a empresa? Forneça uma estratégia detalhada.",
    ],
  },
];

export default function GestaoProjetosPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
            <FolderKanban className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Gestão de Projetos</h1>
            <p className="text-muted-foreground mt-2">
              Prompts práticos para todas as fases do ciclo de vida de projetos
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Como usar */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Como usar estes prompts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {sections[0].content?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Seções de prompts */}
          {sections.slice(1).map((section, sectionIdx) => (
            <Card key={sectionIdx} className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.prompts && (
                  <div className="space-y-3">
                    {section.prompts.map((prompt, promptIdx) => (
                      <div
                        key={promptIdx}
                        className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary flex items-start gap-3"
                      >
                        <p className="text-foreground flex-1">{prompt}</p>
                        <CopyButton text={prompt} />
                      </div>
                    ))}
                  </div>
                )}
                {section.tip && (
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-2">
                      <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-blue-900 dark:text-blue-100">
                        <strong className="font-semibold">💡 Dica:</strong> {section.tip}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

