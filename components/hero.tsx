import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-24 sm:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">
              Guias práticos para sua equipe
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Engenharia de{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Prompt
            </span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Aprenda as melhores práticas e técnicas para criar prompts eficazes
            que maximizam o potencial das ferramentas de IA em seu trabalho diário.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/#introducao">
              <Button size="lg" className="w-full sm:w-auto">
                Começar Agora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/rh">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explorar Seções
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

