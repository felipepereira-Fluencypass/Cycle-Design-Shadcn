import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <div className="rounded-lg border border-border border-dashed p-12 text-center">
          <p className="text-muted-foreground">
            Nenhum composite criado ainda.
          </p>
        </div>
      </section>

      {/* Como usar */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Como instalar</h2>
        <div className="space-y-3">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Via Registry
            </h3>
            <div className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto space-y-1">
              {["button", "input", "tabs"].map((name) => (
                <p key={name}>
                  npx shadcn@latest add {name} --registry=&lt;CYCLE_REGISTRY_URL&gt;
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Manual
            </h3>
            <p className="text-sm text-muted-foreground">
              Copie o arquivo do componente de{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">
                src/components/ui/
              </code>{" "}
              do repositorio Cycle para o seu projeto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
