export default function ComponentsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Componentes</h1>
        <p className="text-muted-foreground mt-2">
          Catalogo de todos os componentes do Cycle Design System.
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
        <div className="rounded-lg border border-border border-dashed p-12 text-center">
          <p className="text-muted-foreground">
            Nenhum componente instalado ainda.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            O proximo a ser instalado sera o{" "}
            <span className="font-medium text-foreground">Button</span>.
          </p>
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
            <pre className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
              npx shadcn@latest add button --registry=&lt;CYCLE_REGISTRY_URL&gt;
            </pre>
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
