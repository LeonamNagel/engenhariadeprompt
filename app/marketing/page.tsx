import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Megaphone } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

const marketingSections = [
  {
    title: "Prompts para criação de conteúdo",
    prompts: [
      "Escreva uma introdução envolvente seguindo o framework PAS de copywriting para um post de blog sobre [tópico] e como as empresas podem se adaptar a [tendência/desafio]. Utilize dados interessantes de pesquisas, estudos ou notícias recentes para começar com um gancho chamativo.",
      "Liste 10 dicas de marketing de conteúdo para empresas do setor [indústria] melhorarem a taxa de abertura de e-mails em 10%.",
      "Crie um calendário de conteúdo para o lançamento de [produto/serviço] nos próximos três meses. O calendário deve incluir uma mistura de posts de blog, e-books, estudos de caso e whitepapers, distribuídos para gerar o máximo impacto. Foque em uma proporção de 3:1 entre conteúdo educativo e conteúdo de vendas.",
    ],
  },
  {
    title: "Prompts para engajamento em redes sociais",
    prompts: [
      "Escreva uma legenda para redes sociais anunciando um novo [produto/serviço], destacando [benefício 1], [benefício 2] e [diferencial único]. Finalize com um CTA incentivando a experimentação do produto com 20% de desconto pelos próximos 7 dias.",
      "Gere cinco postagens para o X (antigo Twitter) promovendo nosso evento sobre [tópico], direcionadas ao público [audiência-alvo].",
      "Sugira três perguntas envolventes para o LinkedIn que iniciem conversas sobre [tema do setor] entre [profissionais-alvo].",
      "Escreva um post para o Facebook promovendo nosso novo [e-book] sobre [tópico] e incentivando os seguidores a baixá-lo. Dê um spoiler do conteúdo para torná-lo irresistível: [Ponto 1], [Ponto 2], [Ponto 3].",
    ],
  },
  {
    title: "Prompts para atendimento ao cliente",
    prompts: [
      "Redija uma resposta profissional para um cliente que enfrentou [problema], focando na resolução da questão e na retenção da lealdade do cliente. Seja empático e gentil, oferecendo uma solução eficaz.",
      "Crie um template de agradecimento para clientes que deixarem avaliações, oferecendo um desconto de 10% na próxima compra.",
      "Escreva um roteiro para um chatbot responder perguntas frequentes sobre [tipo de produto], incluindo [característica 1], [característica 2] e [política].",
    ],
  },
  {
    title: "Prompts para copy de anúncios",
    prompts: [
      "Escreva um anúncio do Google para [produto/serviço], destacando como ele ajuda [público-alvo] a resolver [problema]. Mantenha o texto claro, conciso e envolvente. Gere 5 versões diferentes para testes A/B.",
      "Crie um anúncio para o Facebook com um título e um texto promocional destacando [característica] do [produto] para [público-alvo]. Certifique-se de começar com um gancho atrativo e incluir um CTA forte.",
      "Escreva um anúncio para o LinkedIn promovendo um webinar sobre [tópico], focando no valor para líderes do setor [indústria]. Destaque o [palestrante] e enfatize sua experiência e conquistas para construir credibilidade.",
      "Redija um anúncio promocional para a liquidação de fim de temporada de [tipo de produto], enfatizando [benefício 1] e [benefício 2].",
      "Escreva um título chamativo para um anúncio de retargeting direcionado a clientes que visitaram a página de preços de [produto] mas não converteram. Foque em oferecer um valor adicional ou incentivo. Gere 3 versões, cada uma com um incentivo diferente.",
    ],
  },
  {
    title: "Prompts para e-mail marketing",
    prompts: [
      "Escreva um assunto criativo e um corpo de e-mail envolvente para agradecer um cliente pela compra de [produto] e incentivá-lo a deixar uma avaliação em [site].",
      "Crie um e-mail promocional para uma oferta por tempo limitado de [produto], gerando urgência com duas mensagens de CTA diferentes para um teste A/B.",
      "Gere um e-mail de follow-up para reengajar clientes que não abriram e-mails recentes, oferecendo um desconto/conteúdo exclusivo.",
      "Escreva um e-mail de nutrição de leads para potenciais clientes que demonstraram interesse em [produto], mas ainda não compraram.",
    ],
  },
  {
    title: "Prompts para pesquisa de mercado",
    prompts: [
      "Crie uma pesquisa com 10 perguntas para coletar feedback dos clientes sobre [produto/serviço], focando em sua experiência.",
      "Liste as principais tendências do setor para este ano e dê dicas sobre como líderes empresariais do setor [indústria] podem se manter à frente da concorrência.",
      "Forneça uma análise comparativa do [produto] em relação ao [produto do concorrente], detalhando prós, contras, preços e avaliações.",
    ],
  },
  {
    title: "Prompts para SEO e análise de palavras-chave",
    prompts: [
      "Gere uma lista de palavras-chave de cauda longa relacionadas a [produto] para aumentar o tráfego na página do produto.",
      "Escreva uma meta description para um post de blog sobre [tópico], direcionado a [público específico] e incentivando cliques.",
      "Sugira títulos otimizados para SEO para um blog sobre [tópico] voltado para [persona-alvo].",
      "Gere uma lista de perguntas que as pessoas costumam fazer sobre [produto] para otimizar a seção de FAQ e melhorar a visibilidade nos mecanismos de busca.",
    ],
  },
];

export default function MarketingPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-pink-100 text-pink-600">
            <Megaphone className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Marketing</h1>
            <p className="text-muted-foreground mt-2">
              Prompts práticos para criação de conteúdo, redes sociais, e-mail marketing e muito mais
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {marketingSections.map((section, sectionIdx) => (
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

