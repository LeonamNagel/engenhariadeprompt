import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen } from "lucide-react";
import { CopyButton } from "@/components/copy-button";

export default function GuiaMarkdownPage() {
  return (
    <div className="container px-4 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho */}
        <div className="mb-12 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
            <BookOpen className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Guia de Markdown para Prompts</h1>
            <p className="text-muted-foreground mt-2">
              Aprenda a usar markdown para estruturar prompts de forma clara e organizada
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Seção 1: O que é Markdown? */}
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>O que é Markdown?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                Markdown é uma linguagem de formatação de texto simples e intuitiva que permite 
                criar documentos estruturados usando símbolos e caracteres especiais. Foi criada 
                para ser fácil de ler e escrever, tanto em formato texto puro quanto quando renderizada.
              </p>
              <p className="text-muted-foreground leading-7">
                <strong className="text-foreground">Por que usar markdown em prompts?</strong> Ao 
                estruturar seus prompts com markdown, você cria documentos mais organizados, fáceis 
                de ler e manter. A formatação ajuda tanto você quanto a IA a entender melhor a 
                hierarquia e importância das informações.
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Benefícios:</strong> Organização visual, 
                  facilita leitura pela IA, reutilização de templates, clareza nas instruções e 
                  facilita manutenção e atualização.
                </p>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Seção 2: Conceitos Básicos - Títulos */}
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Títulos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                Títulos criam hierarquia visual no seu prompt. Use <code className="bg-muted px-1 py-0.5 rounded">#</code> para 
                títulos principais, <code className="bg-muted px-1 py-0.5 rounded">##</code> para subtítulos, 
                e <code className="bg-muted px-1 py-0.5 rounded">###</code> para sub-subtítulos.
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-2 text-foreground">Código Markdown:</p>
                  <pre className="p-4 bg-muted rounded-lg border text-sm overflow-x-auto">
                    <code>{`# Título Principal
## Subtítulo
### Sub-subtítulo`}</code>
                  </pre>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2 text-foreground">Resultado:</p>
                  <div className="p-4 bg-muted/50 rounded-lg border">
                    <h1 className="text-2xl font-bold mb-2">Título Principal</h1>
                    <h2 className="text-xl font-semibold mb-2">Subtítulo</h2>
                    <h3 className="text-lg font-semibold">Sub-subtítulo</h3>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Por que usar?</strong> Títulos ajudam a 
                  organizar informações em seções claras, facilitando tanto a leitura humana quanto 
                  o processamento pela IA. Eles criam uma estrutura lógica que guia o entendimento 
                  do prompt.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Seção 2: Conceitos Básicos - Negrito */}
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Negrito</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                Use <code className="bg-muted px-1 py-0.5 rounded">**texto**</code> ou 
                <code className="bg-muted px-1 py-0.5 rounded"> __texto__</code> para destacar 
                informações importantes em negrito.
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-2 text-foreground">Código Markdown:</p>
                  <pre className="p-4 bg-muted rounded-lg border text-sm overflow-x-auto">
                    <code>{`Este é um texto **muito importante** que precisa ser destacado.`}</code>
                  </pre>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2 text-foreground">Resultado:</p>
                  <div className="p-4 bg-muted/50 rounded-lg border">
                    <p>Este é um texto <strong>muito importante</strong> que precisa ser destacado.</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Quando usar?</strong> Destaque informações 
                  críticas, requisitos obrigatórios ou pontos-chave que não devem ser esquecidos 
                  pela IA ao processar o prompt.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Seção 2: Conceitos Básicos - Itálico */}
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Itálico</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                Use <code className="bg-muted px-1 py-0.5 rounded">*texto*</code> ou 
                <code className="bg-muted px-1 py-0.5 rounded"> _texto_</code> para dar ênfase 
                sutil ao texto.
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-2 text-foreground">Código Markdown:</p>
                  <pre className="p-4 bg-muted rounded-lg border text-sm overflow-x-auto">
                    <code>{`Este é um exemplo de texto com *ênfase* em itálico.`}</code>
                  </pre>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2 text-foreground">Resultado:</p>
                  <div className="p-4 bg-muted/50 rounded-lg border">
                    <p>Este é um exemplo de texto com <em>ênfase</em> em itálico.</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Quando usar?</strong> Use itálico para 
                  exemplos, termos técnicos, ou quando quiser dar uma ênfase mais suave do que 
                  o negrito.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Seção 2: Conceitos Básicos - Listas */}
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Listas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                Listas ajudam a organizar informações de forma clara. Use <code className="bg-muted px-1 py-0.5 rounded">-</code> ou 
                <code className="bg-muted px-1 py-0.5 rounded"> *</code> para listas não ordenadas, 
                e números seguidos de ponto para listas ordenadas.
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-2 text-foreground">Código Markdown:</p>
                  <pre className="p-4 bg-muted rounded-lg border text-sm overflow-x-auto">
                    <code>{`Lista não ordenada:
- Item 1
- Item 2
- Item 3

Lista ordenada:
1. Primeiro passo
2. Segundo passo
3. Terceiro passo`}</code>
                  </pre>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2 text-foreground">Resultado:</p>
                  <div className="p-4 bg-muted/50 rounded-lg border space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Lista não ordenada:</p>
                      <ul className="list-disc list-inside space-y-1 ml-2">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Lista ordenada:</p>
                      <ol className="list-decimal list-inside space-y-1 ml-2">
                        <li>Primeiro passo</li>
                        <li>Segundo passo</li>
                        <li>Terceiro passo</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Por que usar?</strong> Listas tornam 
                  informações complexas mais digeríveis, facilitam a leitura sequencial e ajudam 
                  a IA a processar múltiplos pontos de forma estruturada.
                </p>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Seção 3: Usando Placeholders */}
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Usando Placeholders em Prompts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                Placeholders são marcadores que indicam onde informações específicas devem ser 
                preenchidas. Eles tornam seus prompts reutilizáveis e claros sobre o que precisa 
                ser fornecido.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Colchetes []</h3>
                  <p className="text-muted-foreground mb-3">
                    Use <code className="bg-muted px-1 py-0.5 rounded">[texto]</code> para indicar 
                    campos que devem ser preenchidos com instruções claras.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold mb-2 text-foreground">Código Markdown:</p>
                      <pre className="p-4 bg-muted rounded-lg border text-sm overflow-x-auto">
                        <code>{`Crie um relatório sobre [tipo de projeto] para [departamento].`}</code>
                      </pre>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2 text-foreground">Como usar:</p>
                      <div className="p-4 bg-muted/50 rounded-lg border">
                        <p>Crie um relatório sobre <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono text-sm">[tipo de projeto]</span> para <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono text-sm">[departamento]</span>.</p>
                        <p className="text-sm text-muted-foreground mt-2 italic">
                          Exemplo: "Crie um relatório sobre implementação de sistema ERP para TI."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Chaves {}</h3>
                  <p className="text-muted-foreground mb-3">
                    Use <code className="bg-muted px-1 py-0.5 rounded">{`{texto}`}</code> como 
                    alternativa aos colchetes, especialmente quando quiser diferenciar tipos de 
                    placeholders.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold mb-2 text-foreground">Código Markdown:</p>
                      <pre className="p-4 bg-muted rounded-lg border text-sm overflow-x-auto">
                        <code>{`Analise os dados de {métrica} para o período {data inicial} até {data final}.`}</code>
                      </pre>
                    </div>

                    <div>
                      <p className="text-sm font-semibold mb-2 text-foreground">Como usar:</p>
                      <div className="p-4 bg-muted/50 rounded-lg border">
                        <p>Analise os dados de <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono text-sm">{`{métrica}`}</span> para o período <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono text-sm">{`{data inicial}`}</span> até <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono text-sm">{`{data final}`}</span>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Por que usar placeholders?</strong> Eles 
                  tornam seus prompts templates reutilizáveis, deixam claro quais informações 
                  são necessárias e facilitam a personalização para diferentes contextos sem 
                  reescrever o prompt inteiro.
                </p>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Seção 4: Exemplo Prático Completo */}
          <Card className="transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>Exemplo Prático Completo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                Veja como combinar todos os conceitos em um prompt estruturado e profissional:
              </p>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-2 text-foreground">Código Markdown:</p>
                  <pre className="p-4 bg-muted rounded-lg border text-sm overflow-x-auto">
                    <code>{`# INFORMACOES

–  Setor de Atuação: [Descreva o setor em que a empresa opera (ex: tecnologia, saúde, varejo) e o segmento específico de mercado]

– Produtos/Serviços Oferecidos: [Descreva de forma clara os principais produtos ou serviços, destacando os benefícios e diferenciais.]

– Posicionamento de Mercado: [Como a empresa se posiciona em relação aos concorrentes e o que a diferencia no mercado.]

– Principais diferenciais competitivos: [Informe os principais diferenciais competitivos da sua empresa]`}</code>
                  </pre>
                </div>

                <div>
                  <p className="text-sm font-semibold mb-2 text-foreground">Resultado:</p>
                  <div className="p-4 bg-muted/50 rounded-lg border">
                    <h1 className="text-2xl font-bold mb-4">INFORMACOES</h1>
                    <ul className="space-y-3 list-none">
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">–</span>
                        <span>
                          <strong>Setor de Atuação:</strong>{" "}
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono text-sm">
                            [Descreva o setor em que a empresa opera (ex: tecnologia, saúde, varejo) e o segmento específico de mercado]
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">–</span>
                        <span>
                          <strong>Produtos/Serviços Oferecidos:</strong>{" "}
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono text-sm">
                            [Descreva de forma clara os principais produtos ou serviços, destacando os benefícios e diferenciais.]
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">–</span>
                        <span>
                          <strong>Posicionamento de Mercado:</strong>{" "}
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono text-sm">
                            [Como a empresa se posiciona em relação aos concorrentes e o que a diferencia no mercado.]
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-muted-foreground">–</span>
                        <span>
                          <strong>Principais diferenciais competitivos:</strong>{" "}
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded font-mono text-sm">
                            [Informe os principais diferenciais competitivos da sua empresa]
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary space-y-2">
                <p className="text-sm font-semibold text-foreground">Análise do exemplo:</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                  <li><code className="bg-muted px-1 py-0.5 rounded">#</code> cria um título principal que organiza toda a seção</li>
                  <li><code className="bg-muted px-1 py-0.5 rounded">–</code> cria uma lista visual clara de itens</li>
                  <li><strong>Negrito</strong> destaca os campos principais (Setor, Produtos, etc.)</li>
                  <li><code className="bg-muted px-1 py-0.5 rounded">[]</code> indica claramente onde preencher, com instruções detalhadas dentro</li>
                  <li>A estrutura facilita tanto a leitura quanto o preenchimento do prompt</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Seção 5: Por que estruturar prompts dessa forma? */}
          <Card className="transition-all hover:shadow-md bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>Por que estruturar prompts dessa forma?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                Usar markdown para estruturar seus prompts traz diversos benefícios práticos:
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-background rounded-lg border">
                  <h3 className="font-semibold mb-2 text-foreground">📊 Organização Visual</h3>
                  <p className="text-sm text-muted-foreground">
                    A hierarquia clara facilita a leitura rápida e o entendimento da estrutura 
                    do prompt, tanto para humanos quanto para IAs.
                  </p>
                </div>

                <div className="p-4 bg-background rounded-lg border">
                  <h3 className="font-semibold mb-2 text-foreground">🤖 Facilita Leitura pela IA</h3>
                  <p className="text-sm text-muted-foreground">
                    IAs processam melhor informações estruturadas. Títulos, listas e formatação 
                    ajudam o modelo a entender a hierarquia e importância das informações.
                  </p>
                </div>

                <div className="p-4 bg-background rounded-lg border">
                  <h3 className="font-semibold mb-2 text-foreground">♻️ Reutilização de Templates</h3>
                  <p className="text-sm text-muted-foreground">
                    Com placeholders bem definidos, você cria templates que podem ser reutilizados 
                    em diferentes contextos, economizando tempo e mantendo consistência.
                  </p>
                </div>

                <div className="p-4 bg-background rounded-lg border">
                  <h3 className="font-semibold mb-2 text-foreground">✨ Clareza nas Instruções</h3>
                  <p className="text-sm text-muted-foreground">
                    A formatação deixa explícito o que é título, o que é lista, o que precisa 
                    ser preenchido, reduzindo ambiguidade e erros.
                  </p>
                </div>

                <div className="p-4 bg-background rounded-lg border md:col-span-2">
                  <h3 className="font-semibold mb-2 text-foreground">🔧 Facilita Manutenção</h3>
                  <p className="text-sm text-muted-foreground">
                    Prompts estruturados são mais fáceis de atualizar, corrigir e melhorar. 
                    Você pode modificar seções específicas sem reescrever tudo, e outros membros 
                    da equipe conseguem entender e usar seus prompts rapidamente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Seção 6: Exemplo Completo para Copiar */}
          <Card className="transition-all hover:shadow-md bg-amber-50/50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900">
            <CardHeader>
              <CardTitle>Exemplo Completo - Pronto para Usar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                Aqui está um exemplo completo de prompt estruturado com markdown. Você pode copiar 
                este template e personalizá-lo com suas próprias informações para criar prompts 
                profissionais e organizados.
              </p>

              <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-amber-500 flex items-start gap-3">
                <pre className="flex-1 text-sm overflow-x-auto whitespace-pre-wrap font-mono text-foreground">
                  <code>{`# INFORMACOES

–  Setor de Atuação: [Descreva o setor em que a empresa opera (ex: tecnologia, saúde, varejo) e o segmento específico de mercado]

– Produtos/Serviços Oferecidos: [Descreva de forma clara os principais produtos ou serviços, destacando os benefícios e diferenciais.]

– Posicionamento de Mercado: [Como a empresa se posiciona em relação aos concorrentes e o que a diferencia no mercado.]

– Principais diferenciais competitivos: [Informe os principais diferenciais competitivos da sua empresa] 

# PÚBLICO-ALVO:

– Setor/Indústria: [Especifique os setores ou indústrias que são o foco da prospecção, por exemplo, tecnologia, manufatura, saúde, etc.]

– Tamanho da Empresa: [Defina o tamanho das empresas-alvo, como pequenas e médias empresas (PMEs), grandes corporações, etc.]

– Cargo dos Decisores: [Identifique os cargos dos principais tomadores de decisão ou influenciadores no processo de compra, como CEOs, Diretores de Compras, Gerentes de TI, etc.]

– Necessidades Específicas: [Descreva as necessidades específicas ou pontos de dor que sua empresa pode resolver para esses clientes.]

– Localização Geográfica: [Defina se o foco é local, regional, nacional ou internacional.]

– Fatores de Qualificação: [Inclua critérios específicos para qualificar leads, como orçamento disponível, prontidão para compra, compatibilidade tecnológica, etc.]`}</code>
                </pre>
                <CopyButton 
                  text={`# INFORMACOES

–  Setor de Atuação: [Descreva o setor em que a empresa opera (ex: tecnologia, saúde, varejo) e o segmento específico de mercado]

– Produtos/Serviços Oferecidos: [Descreva de forma clara os principais produtos ou serviços, destacando os benefícios e diferenciais.]

– Posicionamento de Mercado: [Como a empresa se posiciona em relação aos concorrentes e o que a diferencia no mercado.]

– Principais diferenciais competitivos: [Informe os principais diferenciais competitivos da sua empresa] 

# PÚBLICO-ALVO:

– Setor/Indústria: [Especifique os setores ou indústrias que são o foco da prospecção, por exemplo, tecnologia, manufatura, saúde, etc.]

– Tamanho da Empresa: [Defina o tamanho das empresas-alvo, como pequenas e médias empresas (PMEs), grandes corporações, etc.]

– Cargo dos Decisores: [Identifique os cargos dos principais tomadores de decisão ou influenciadores no processo de compra, como CEOs, Diretores de Compras, Gerentes de TI, etc.]

– Necessidades Específicas: [Descreva as necessidades específicas ou pontos de dor que sua empresa pode resolver para esses clientes.]

– Localização Geográfica: [Defina se o foco é local, regional, nacional ou internacional.]

– Fatores de Qualificação: [Inclua critérios específicos para qualificar leads, como orçamento disponível, prontidão para compra, compatibilidade tecnológica, etc.]`}
                />
              </div>

              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Como usar:</strong> Copie o prompt acima, 
                  substitua os placeholders <code className="bg-muted px-1 py-0.5 rounded">[]</code> 
                  pelas informações reais da sua empresa ou projeto, e use em qualquer ferramenta 
                  de IA. Este template demonstra o uso prático de títulos, listas e placeholders 
                  para criar prompts profissionais e organizados.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

