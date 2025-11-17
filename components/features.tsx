import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Users, TrendingUp, DollarSign, FolderKanban, Megaphone, ArrowRight } from "lucide-react";

const departments = [
  {
    name: "RH",
    description: "Guias para recrutamento, avaliações, comunicação interna e gestão de pessoas.",
    href: "/rh",
    icon: Users,
    color: "text-blue-600",
  },
  {
    name: "Gestão de Projetos",
    description: "Prompts para todas as fases do ciclo de vida de projetos, desde o início até o encerramento.",
    href: "/gestao-projetos",
    icon: FolderKanban,
    color: "text-purple-600",
  },
  {
    name: "Marketing",
    description: "Criação de conteúdo, redes sociais, e-mail marketing, SEO e pesquisa de mercado.",
    href: "/marketing",
    icon: Megaphone,
    color: "text-pink-600",
  },
  {
    name: "Comercial",
    description: "Prompts para prospecção, negociação, follow-up e relacionamento com clientes.",
    href: "/comercial",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    name: "Pricing",
    description: "Estratégias para análise de preços, cotações e otimização de margens.",
    href: "/pricing",
    icon: DollarSign,
    color: "text-yellow-600",
  },
];

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Seções por Departamento
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore guias específicos desenvolvidos para as necessidades de cada área da empresa.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <Card key={dept.name} className="group transition-all hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-background ${dept.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle>{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={dept.href}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

