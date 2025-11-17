import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Lightbulb, Target, Zap, Code } from "lucide-react";

const concepts = [
  {
    icon: Lightbulb,
    title: "O que é Engenharia de Prompt?",
    description:
      "A engenharia de prompt é a arte e ciência de criar instruções claras e eficazes para modelos de IA, permitindo que eles entendam exatamente o que você precisa e produzam resultados de alta qualidade.",
  },
  {
    icon: Target,
    title: "Por que é importante?",
    description:
      "Um prompt bem estruturado pode fazer a diferença entre resultados genéricos e respostas precisas e úteis. Aprender a comunicar-se efetivamente com IA é uma habilidade essencial no mundo moderno.",
  },
  {
    icon: Zap,
    title: "Benefícios para sua equipe",
    description:
      "Aumente a produtividade, reduza retrabalho e obtenha resultados mais consistentes. Equipes que dominam a engenharia de prompt trabalham de forma mais eficiente e criativa.",
  },
  {
    icon: Code,
    title: "Estrutura de um bom prompt",
    description:
      "Um prompt eficaz geralmente inclui: contexto claro, instruções específicas, exemplos quando necessário, e formatação de saída desejada. Vamos explorar cada um desses elementos.",
  },
];

export function Introduction() {
  return (
    <section id="introducao" className="py-24 sm:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Introdução à Engenharia de Prompt
          </h2>
          <p className="text-lg text-muted-foreground">
            Entenda os conceitos fundamentais antes de mergulhar nas práticas específicas
            de cada departamento.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {concepts.map((concept, index) => {
            const Icon = concept.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{concept.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {concept.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Separator className="my-16" />

        <div className="mx-auto max-w-3xl">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle>Como usar esta plataforma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Esta plataforma está organizada por departamentos para facilitar o acesso
                a guias específicos para cada área da empresa. Cada seção contém:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Exemplos práticos de prompts para tarefas comuns</li>
                <li>Melhores práticas específicas do departamento</li>
                <li>Templates prontos para uso imediato</li>
                <li>Dicas avançadas para casos específicos</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

