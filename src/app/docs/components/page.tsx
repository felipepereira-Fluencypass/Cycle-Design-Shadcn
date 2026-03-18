import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function ComponentsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Componentes</h1>
        <p className="text-muted-foreground mt-2">
          Catalogo de todos os componentes do Cycle Design.
        </p>
      </div>

      {/* Primitives */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Primitives{" "}
          <span className="text-sm font-normal text-muted-foreground">
            src/components/ui/
          </span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/docs/components/button"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h3 className="heading-sm mb-2">Button</h3>
            <p className="text-sm text-muted-foreground mb-4">
              6 variants, 8 sizes, suporte a temas de cor.
            </p>
            <div className="flex gap-2">
              <Button size="xs">Default</Button>
              <Button size="xs" variant="outline">Outline</Button>
              <Button size="xs" className="theme-brand">Brand</Button>
            </div>
          </Link>

          <Link
            href="/docs/components/input"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h3 className="heading-sm mb-2">Input</h3>
            <p className="text-sm text-muted-foreground mb-4">
              3 tamanhos, estados de erro, disabled e focus.
            </p>
            <div className="flex flex-col gap-2">
              <Input inputSize="sm" placeholder="Small" className="max-w-[180px]" />
              <Input placeholder="Default" className="max-w-[180px]" />
            </div>
          </Link>

          <Link
            href="/docs/components/sheet"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h3 className="heading-sm mb-2">Sheet</h3>
            <p className="text-sm text-muted-foreground">
              Painel deslizante (lateral ou bottom). Usado em menus e acoes mobile.
            </p>
          </Link>

          <Link
            href="/docs/components/video-player"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h3 className="heading-sm mb-2">Video Player</h3>
            <p className="text-sm text-muted-foreground">
              Player de video com controles customizados. Suporta MP4, WebM e HLS.
            </p>
          </Link>

          <Link
            href="/docs/components/tabs"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h3 className="heading-sm mb-2">Tabs</h3>
            <p className="text-sm text-muted-foreground mb-4">
              2 variants (default, line), orientacao horizontal e vertical.
            </p>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Ativa</TabsTrigger>
                <TabsTrigger value="tab2">Inativa</TabsTrigger>
              </TabsList>
            </Tabs>
          </Link>

          <Link
            href="/docs/components/accordion"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h3 className="heading-sm mb-2">Accordion</h3>
            <p className="text-sm text-muted-foreground">
              Secoes colapsaveis com animacao. Suporta single e multiple.
            </p>
          </Link>

          <Link
            href="/docs/components/badge"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h3 className="heading-sm mb-2">Badge</h3>
            <p className="text-sm text-muted-foreground mb-4">
              8 variantes, 3 tamanhos, suporte a temas de cor.
            </p>
            <div className="flex gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
            </div>
          </Link>

          <Link
            href="/docs/components/progress"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h3 className="heading-sm mb-2">Progress</h3>
            <p className="text-sm text-muted-foreground mb-4">
              4 tamanhos, 4 variantes, suporte a temas de cor.
            </p>
            <div className="flex flex-col gap-2 w-full">
              <Progress value={70} size="sm" />
              <Progress value={45} size="sm" variant="secondary" />
            </div>
          </Link>

          <Link
            href="/docs/components/scroll-area"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h3 className="heading-sm mb-2">Scroll Area</h3>
            <p className="text-sm text-muted-foreground">
              Area de scroll customizada com scrollbar estilizado.
            </p>
          </Link>
        </div>
      </section>

      {/* Layout */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Layout{" "}
          <span className="text-sm font-normal text-muted-foreground">
            src/components/layout/
          </span>
        </h2>
        <div className="rounded-lg border border-border border-dashed p-12 text-center">
          <p className="text-muted-foreground">
            Nenhum componente de layout criado ainda.
          </p>
        </div>
      </section>

      {/* Composites */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Composites{" "}
          <span className="text-sm font-normal text-muted-foreground">
            src/components/composites/
          </span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/docs/components/headers"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h3 className="heading-sm mb-2">Headers</h3>
            <p className="text-sm text-muted-foreground">
              Headers de pagina dos produtos. Responsivos com bottom sheet no mobile.
            </p>
          </Link>
        </div>
      </section>

      {/* Como usar */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Como instalar</h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Primitives (via Registry)
            </h3>
            <p className="text-sm text-muted-foreground">
              Componentes base que podem ser instalados individualmente:
            </p>
            <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto space-y-1">
              {["accordion", "badge", "button", "input", "progress", "scroll-area", "sheet", "tabs", "video-player"].map((name) => (
                <p key={name}>
                  npx shadcn@latest add {name} -r https://cycle-design.vercel.app/r
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Composites (via Registry)
            </h3>
            <p className="text-sm text-muted-foreground">
              Blocos maiores que combinam primitives. As dependencias de primitives sao instaladas automaticamente.
            </p>
            <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto space-y-1">
              {["header-class"].map((name) => (
                <p key={name}>
                  npx shadcn@latest add {name} -r https://cycle-design.vercel.app/r
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
