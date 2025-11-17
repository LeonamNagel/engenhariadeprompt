import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Lightbulb } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

const comercialSections = [
  {
    title: "Qualificar Leads",
    prompts: [
      "Sou executivo comercial de uma empresa de logística. Tenho o perfil de cliente: indústria de alimentos que exporta para América Latina. Gere uma lista de 10 perguntas para qualificar esse lead (sobre volume, frequência, rotas, armazenagem etc.).",
    ],
  },
  {
    title: "Criar proposta comercial",
    prompts: [
      "Crie um rascunho de proposta comercial para transporte internacional e armazenagem no Brasil para uma empresa de e-commerce. Inclua: escopo de serviço, prazos, SLA, condições de pagamento, diferencial competitivo.",
    ],
  },
  {
    title: "Análise de dados de vendas",
    prompts: [
      "Envio o .xlsx com os últimos 12 meses de vendas de serviços de logística. Gere análise: top 5 clientes, tendência por região, serviços mais vendidos, sugerir foco para próximos 3 meses.",
    ],
  },
  {
    title: "Aprender novo tema (ex: incorporação de \"last mile\")",
    prompts: [
      "Explique o que é 'last mile logistics', quais são os desafios no Brasil, e como isso impacta o comercial de uma empresa de logística.",
    ],
  },
  {
    title: "Preparar roteiro de ligação de vendas",
    prompts: [
      "Crie um roteiro de pré-chamada para ligar a um lead da indústria automotiva, perguntando sobre suas necessidades logísticas, gargalos, orçamento e prazo.",
    ],
  },
  {
    title: "Diagnóstico rápido de necessidade do cliente",
    prompts: [
      "Vou colar abaixo a descrição do meu cliente. Gere um diagnóstico: desafios logísticos prováveis, gargalos, dores e oportunidades de upsell.",
    ],
  },
  {
    title: "Análise de contrato do cliente",
    prompts: [
      "Analise este PDF do contrato atual do cliente e identifique pontos críticos, prazos, multas e onde podemos propor melhoria logística.",
    ],
  },
];

export default function ComercialPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-100 text-green-600">
            <TrendingUp className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Comercial</h1>
            <p className="text-muted-foreground mt-2">
              Prompts práticos para qualificação de leads, propostas comerciais e análise de vendas
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {comercialSections.map((section, sectionIdx) => (
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

          {/* Dica */}
          <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
                <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Dica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-blue-900 dark:text-blue-100">
                Teste o prompt e vá otimizando conforme necessário.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

