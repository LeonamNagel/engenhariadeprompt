import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FileText, List, CheckCircle2, Code2 } from "lucide-react";

export function ContentSection() {
  return (
    <div className="container px-4 py-12">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Cabeçalho */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Engenharia de Prompt na Access Global Logistics
          </h1>
          <p className="text-lg text-muted-foreground">
            Este guia foi criado para padronizar e aprimorar o uso de IA generativa em diferentes 
            setores da empresa, garantindo respostas alinhadas às nossas necessidades de negócio.
          </p>
        </div>

        <Separator />

        {/* O que é Engenharia de Prompt */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">O que é Engenharia de Prompt?</h2>
          <p className="text-muted-foreground leading-7">
            Engenharia de prompt é o método de estruturar instruções para orientar sistemas de IA 
            generativa com precisão. A formulação controla direção, nível de detalhe e utilidade 
            da resposta. O objetivo é reduzir ambiguidade e estabelecer uma base clara para a 
            produção de conteúdo alinhado às necessidades da empresa.
          </p>
        </section>

        <Separator />

        {/* Quatro elementos principais */}
        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Quatro elementos principais</h2>
            <p className="text-muted-foreground">
              Sempre que for escrever um prompt, pense nesses blocos.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Contexto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Informações que enquadram o cenário. Inclui descrição da situação, domínio, 
                  público e referências internas. O contexto garante alinhamento conceitual e 
                  reduz interpretações divergentes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Papel da IA</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Função que o modelo deve assumir (analista, técnico, consultor, redator, 
                  avaliador etc.). A definição orienta o padrão de raciocínio aplicado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <List className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Tarefa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Instrução direta sobre o que deve ser feito. Determina o tipo de entrega, 
                  o escopo e o objetivo. Evita dispersão e mantém a produção dentro dos limites 
                  esperados.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Formato de saída</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Especificação da estrutura final da resposta (tópicos, listas, tabelas, 
                  modelos internos etc.). Reduz retrabalho e facilita integração nos processos 
                  corporativos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Exemplo de prompt completo */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Exemplo de prompt completo</h2>
          
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Contexto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Você é um especialista em logística internacional atuando dentro da Access Global 
                Logistics. Seu foco é produzir materiais técnicos claros para equipes internas de 
                operação.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Papel da IA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Assuma a função de analista técnico responsável por documentar procedimentos 
                operacionais padrão.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Tarefa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Produzir um resumo técnico do processo de importação marítima desde o booking até 
                a entrega final ao cliente. O texto deve ser objetivo e baseado em etapas 
                operacionais reais.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Formato de saída</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Forneça a saída em tópicos organizados por fase operacional.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Como ser claro, contextual e específico */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Como ser claro, contextual e específico?</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Forneça contexto:</h3>
              <p className="text-muted-foreground">
                uso final do resultado, público-alvo, fluxo de trabalho e objetivo final.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Seja específico sobre a entrega:</h3>
              <p className="text-muted-foreground">
                somente código, resposta concisa, formato em tabela, tópicos etc.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Use passos sequenciais:</h3>
              <p className="text-muted-foreground">
                liste as etapas que o modelo deve seguir com números ou marcadores.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Tabela comparativa */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Prompt Vago vs Prompt Detalhado</h2>
          
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="p-4 text-left font-semibold w-1/2">Prompt Vago</th>
                  <th className="p-4 text-left font-semibold w-1/2">Prompt Detalhado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 align-top bg-muted/20">
                    <div className="space-y-2">
                      <p className="text-foreground font-medium">
                        Analise este relatório de interrupção da AcmeCloud e resuma os principais pontos.
                      </p>
                      <p className="text-sm text-muted-foreground italic">Relatório:</p>
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    <div className="space-y-3">
                      <p className="text-foreground font-medium">
                        Analise este relatório de interrupção da AcmeCloud. Ignore a introdução. 
                        Mantenha a resposta objetiva e inclua apenas as informações essenciais.
                      </p>
                      <p className="text-foreground font-medium">Liste apenas:</p>
                      <ol className="list-decimal list-inside space-y-1 text-muted-foreground ml-2">
                        <li>Causa</li>
                        <li>Duração</li>
                        <li>Serviços impactados</li>
                        <li>Número de usuários afetados</li>
                        <li>Perda de receita estimada</li>
                      </ol>
                      <p className="text-sm text-muted-foreground italic mt-2">Aqui está o relatório:</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Separator />

        {/* Uso de delimitadores */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Use delimitadores para indicar claramente partes distintas da entrada</h2>
          
          <p className="text-muted-foreground">
            Delimitadores como aspas triplas, tags XML, títulos de seção etc. podem ajudar a 
            demarcar partes do texto que devem ser tratadas de forma diferente.
          </p>

          <div className="space-y-4">
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">Exemplo 1:</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="p-4 bg-background rounded border text-sm overflow-x-auto">
                  <code>Resuma o texto delimitado por aspas triplas em um haicai. &quot;&quot;&quot;Texto&quot;&quot;&quot;</code>
                </pre>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-lg">Exemplo 2:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Você receberá um par de artigos (delimitados com tags XML) sobre o mesmo tópico. 
                  Primeiro, resuma os argumentos de cada artigo. Em seguida, indique qual deles 
                  apresenta um argumento melhor e explique o motivo.
                </p>
                <pre className="p-4 bg-background rounded border text-sm overflow-x-auto">
                  <code>{`<artigo> insira o primeiro artigo aqui </artigo>

<artigo2> insira o segundo artigo aqui </artigo2>`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

