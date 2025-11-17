import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

const pricingPrompts = [
  "Veja o contrato PDF do fornecedor logístico (upload). Identifique cláusulas relacionadas a penalidades por atraso, variação cambial, revisão de tarifa, responsabilidades.",
  "Preciso de 5 argumentos comerciais para justificar uma tarifa 8% acima do padrão para uma rota especial (Itajaí → Ásia) com serviço expresso, explicando valor agregado.",
  "Como especialista em negociação de serviços logísticos, redija uma proposta de preço para o cliente X que solicita serviço de transporte marítimo Itajaí → Rotterdam, 20 TEUs, prazo de 35 dias. Inclua escopo, valores, condições de pagamento.",
  "Sou do setor de pricing da Access Global Logistics. Vou enviar um arquivo .xlsx com custos por rota e modalidade. Gere uma matriz que mostre: margem atual, margem ideal, gap e prioridade de ajuste por rota. Recomendação final: quais rotas devem ter revisão imediata de preço e por quê.",
];

export default function PricingPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
            <DollarSign className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Pricing</h1>
            <p className="text-muted-foreground mt-2">
              Prompts práticos para análise de preços, cotações e otimização de margens
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Prompts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pricingPrompts.map((prompt, promptIdx) => (
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
        </div>
      </div>
    </div>
  );
}

