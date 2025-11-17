import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

const rhSections = [
  {
    title: "Análise de currículos e seleção",
    prompts: [
      "Analise estes currículos e gere uma matriz com: experiência técnica, certificações, histórico em logística, estabilidade e potencial de promoção.",
      "Desenvolver perguntas de entrevista comportamental alinhadas aos valores da nossa empresa para uma vaga de [cargo] em [equipe/departamento]. Queremos avaliar as habilidades técnicas e a adequação à cultura. Forneça de 6 a 8 perguntas agrupadas por competência.",
      "Com base nessas informações [insira as responsabilidades do trabalho, habilidades, contexto da equipe], escreva uma descrição de trabalho profissional para um [cargo]. Inclua uma breve introdução, responsabilidades, qualificações necessárias e o que torna a função atraente.",
    ],
  },
  {
    title: "Documentação e manuais",
    prompts: [
      "Crie um manual de conduta operacional para colaboradores de CD, incluindo postura, EPIs, comunicação e segurança.",
      "Crie um formulário de avaliação de desempenho para supervisores de logística, com competências, indicadores comportamentais e critérios de nota.",
    ],
  },
  {
    title: "Pesquisas e avaliações",
    prompts: [
      "Escreva de 6 a 8 perguntas de pesquisa de funcionários projetadas para medir [por exemplo, pertencimento, confiança do gerente, equilíbrio da carga de trabalho]. Certifique-se de que as perguntas sejam neutras e fáceis de entender. Formate-os como uma pergunta por linha com sugestões de escala de classificação.",
      "Desenvolva um conjunto de cinco perguntas para avaliações de desempenho que incentivem a reflexão, o estabelecimento de metas futuras e o feedback acionável. Adapte-se a [função/equipe] e mantenha o tom construtivo e orientado para o crescimento. Apresente as perguntas como uma lista para um formulário de revisão.",
    ],
  },
  {
    title: "Análise de dados e insights",
    prompts: [
      "Analise este conjunto de dados de desgaste de funcionários dos últimos 12 meses. Concentre-se nos padrões por departamento, tempo de serviço e motivos de saída. Resuma os principais insights e sugira de 2 a 3 ações que o RH deve considerar. Apresente as descobertas como marcadores seguidos por um pequeno parágrafo. [Carregue seu CSV ou cole a tabela aqui]",
    ],
  },
];

export default function RHPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
            <Users className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Recursos Humanos</h1>
            <p className="text-muted-foreground mt-2">
              Prompts práticos para recrutamento, avaliações, pesquisas e gestão de pessoas
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {rhSections.map((section, sectionIdx) => (
            <Card key={sectionIdx} className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

