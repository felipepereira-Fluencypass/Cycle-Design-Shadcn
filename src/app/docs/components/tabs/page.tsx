import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { SpecTable } from "@/components/docs/spec-table"
import { ColorTokenList } from "@/components/docs/color-token-list"
import { FigmaNamingSection } from "@/components/docs/figma-naming"
import { tabsSpec } from "./specs"

/* ============================================
 * DEVELOPER DOCS
 * ============================================ */
function DeveloperDocs() {
  return (
    <>
      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Instalacao</h2>
        <CodeBlock
          code={`npx shadcn@latest add tabs`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"`}
          language="tsx"
          showLineNumbers={false}
        />
        <ComponentPreview
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="conta">
      <TabsList>
        <TabsTrigger value="conta">Conta</TabsTrigger>
        <TabsTrigger value="senha">Senha</TabsTrigger>
        <TabsTrigger value="notificacoes">Notificacoes</TabsTrigger>
      </TabsList>
      <TabsContent value="conta">
        <p className="text-sm text-muted-foreground pt-4">
          Gerencie as configuracoes da sua conta.
        </p>
      </TabsContent>
      <TabsContent value="senha">
        <p className="text-sm text-muted-foreground pt-4">
          Altere sua senha aqui.
        </p>
      </TabsContent>
      <TabsContent value="notificacoes">
        <p className="text-sm text-muted-foreground pt-4">
          Gerencie suas preferencias de notificacao.
        </p>
      </TabsContent>
    </Tabs>
  )
}`}
        >
          <Tabs defaultValue="conta">
            <TabsList>
              <TabsTrigger value="conta">Conta</TabsTrigger>
              <TabsTrigger value="senha">Senha</TabsTrigger>
              <TabsTrigger value="notificacoes">Notificacoes</TabsTrigger>
            </TabsList>
            <TabsContent value="conta">
              <p className="text-sm text-muted-foreground pt-4">
                Gerencie as configuracoes da sua conta.
              </p>
            </TabsContent>
            <TabsContent value="senha">
              <p className="text-sm text-muted-foreground pt-4">
                Altere sua senha aqui.
              </p>
            </TabsContent>
            <TabsContent value="notificacoes">
              <p className="text-sm text-muted-foreground pt-4">
                Gerencie suas preferencias de notificacao.
              </p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      {/* Examples header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Line variant */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variant Line</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">variant=&quot;line&quot;</code> na TabsList para um estilo com linha indicadora.
        </p>
        <ComponentPreview
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function TabsLine() {
  return (
    <Tabs defaultValue="geral">
      <TabsList variant="line">
        <TabsTrigger value="geral">Geral</TabsTrigger>
        <TabsTrigger value="avancado">Avancado</TabsTrigger>
        <TabsTrigger value="notificacoes">Notificacoes</TabsTrigger>
      </TabsList>
      <TabsContent value="geral">
        <p className="text-sm text-muted-foreground pt-4">
          Configuracoes gerais do sistema.
        </p>
      </TabsContent>
      <TabsContent value="avancado">
        <p className="text-sm text-muted-foreground pt-4">
          Opcoes avancadas para usuarios experientes.
        </p>
      </TabsContent>
      <TabsContent value="notificacoes">
        <p className="text-sm text-muted-foreground pt-4">
          Gerencie suas preferencias de notificacao.
        </p>
      </TabsContent>
    </Tabs>
  )
}`}
        >
          <Tabs defaultValue="geral">
            <TabsList variant="line">
              <TabsTrigger value="geral">Geral</TabsTrigger>
              <TabsTrigger value="avancado">Avancado</TabsTrigger>
              <TabsTrigger value="notificacoes">Notificacoes</TabsTrigger>
            </TabsList>
            <TabsContent value="geral">
              <p className="text-sm text-muted-foreground pt-4">
                Configuracoes gerais do sistema.
              </p>
            </TabsContent>
            <TabsContent value="avancado">
              <p className="text-sm text-muted-foreground pt-4">
                Opcoes avancadas para usuarios experientes.
              </p>
            </TabsContent>
            <TabsContent value="notificacoes">
              <p className="text-sm text-muted-foreground pt-4">
                Gerencie suas preferencias de notificacao.
              </p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      {/* Vertical */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Vertical</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">orientation=&quot;vertical&quot;</code> no Tabs para empilhar as abas na lateral.
        </p>
        <ComponentPreview
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function TabsVertical() {
  return (
    <Tabs defaultValue="perfil" orientation="vertical">
      <TabsList>
        <TabsTrigger value="perfil">Perfil</TabsTrigger>
        <TabsTrigger value="plano">Plano</TabsTrigger>
        <TabsTrigger value="faturamento">Faturamento</TabsTrigger>
      </TabsList>
      <TabsContent value="perfil">
        <p className="text-sm text-muted-foreground">
          Edite seu perfil publico.
        </p>
      </TabsContent>
      <TabsContent value="plano">
        <p className="text-sm text-muted-foreground">
          Gerencie seu plano de assinatura.
        </p>
      </TabsContent>
      <TabsContent value="faturamento">
        <p className="text-sm text-muted-foreground">
          Veja seu historico de faturamento.
        </p>
      </TabsContent>
    </Tabs>
  )
}`}
        >
          <Tabs defaultValue="perfil" orientation="vertical">
            <TabsList>
              <TabsTrigger value="perfil">Perfil</TabsTrigger>
              <TabsTrigger value="plano">Plano</TabsTrigger>
              <TabsTrigger value="faturamento">Faturamento</TabsTrigger>
            </TabsList>
            <TabsContent value="perfil">
              <p className="text-sm text-muted-foreground">
                Edite seu perfil publico.
              </p>
            </TabsContent>
            <TabsContent value="plano">
              <p className="text-sm text-muted-foreground">
                Gerencie seu plano de assinatura.
              </p>
            </TabsContent>
            <TabsContent value="faturamento">
              <p className="text-sm text-muted-foreground">
                Veja seu historico de faturamento.
              </p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      {/* With Form */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Formulario</h3>
        <ComponentPreview
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function TabsWithForm() {
  return (
    <Tabs defaultValue="conta" className="max-w-md">
      <TabsList>
        <TabsTrigger value="conta">Conta</TabsTrigger>
        <TabsTrigger value="senha">Senha</TabsTrigger>
        <TabsTrigger value="preferencias">Preferencias</TabsTrigger>
      </TabsList>
      <TabsContent value="conta" className="space-y-4 pt-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Nome</label>
          <Input placeholder="Seu nome" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="email@exemplo.com" />
        </div>
        <Button>Salvar</Button>
      </TabsContent>
      <TabsContent value="senha" className="space-y-4 pt-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Senha atual</label>
          <Input type="password" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Nova senha</label>
          <Input type="password" />
        </div>
        <Button>Alterar senha</Button>
      </TabsContent>
      <TabsContent value="preferencias" className="space-y-4 pt-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Idioma</label>
          <Input placeholder="Portugues" />
        </div>
        <Button>Salvar preferencias</Button>
      </TabsContent>
    </Tabs>
  )
}`}
        >
          <Tabs defaultValue="conta" className="max-w-md">
            <TabsList>
              <TabsTrigger value="conta">Conta</TabsTrigger>
              <TabsTrigger value="senha">Senha</TabsTrigger>
              <TabsTrigger value="preferencias">Preferencias</TabsTrigger>
            </TabsList>
            <TabsContent value="conta" className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Nome</label>
                <Input placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="email@exemplo.com" />
              </div>
              <Button>Salvar</Button>
            </TabsContent>
            <TabsContent value="senha" className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Senha atual</label>
                <Input type="password" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Nova senha</label>
                <Input type="password" />
              </div>
              <Button>Alterar senha</Button>
            </TabsContent>
            <TabsContent value="preferencias" className="space-y-4 pt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Idioma</label>
                <Input placeholder="Portugues" />
              </div>
              <Button>Salvar preferencias</Button>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled</h3>
        <ComponentPreview
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function TabsDisabled() {
  return (
    <Tabs defaultValue="ativa">
      <TabsList>
        <TabsTrigger value="ativa">Ativa</TabsTrigger>
        <TabsTrigger value="outra">Outra</TabsTrigger>
        <TabsTrigger value="desabilitada" disabled>Desabilitada</TabsTrigger>
      </TabsList>
      <TabsContent value="ativa">
        <p className="text-sm text-muted-foreground pt-4">
          Esta aba esta ativa.
        </p>
      </TabsContent>
      <TabsContent value="outra">
        <p className="text-sm text-muted-foreground pt-4">
          Conteudo da outra aba.
        </p>
      </TabsContent>
    </Tabs>
  )
}`}
        >
          <Tabs defaultValue="ativa">
            <TabsList>
              <TabsTrigger value="ativa">Ativa</TabsTrigger>
              <TabsTrigger value="outra">Outra</TabsTrigger>
              <TabsTrigger value="desabilitada" disabled>Desabilitada</TabsTrigger>
            </TabsList>
            <TabsContent value="ativa">
              <p className="text-sm text-muted-foreground pt-4">
                Esta aba esta ativa.
              </p>
            </TabsContent>
            <TabsContent value="outra">
              <p className="text-sm text-muted-foreground pt-4">
                Conteudo da outra aba.
              </p>
            </TabsContent>
          </Tabs>
        </ComponentPreview>
      </section>

      {/* Color Themes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variacoes de Cor</h3>
        <p className="text-muted-foreground">
          Aplique <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code> no container pai. O estado default permanece neutro — a cor do tema aparece apenas no hover, active (linha) e focus.
        </p>
        <ComponentPreview
          code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function TabsThemes() {
  return (
    <div className="flex flex-col gap-8">
      <div className="theme-brand">
        <span className="text-xs font-mono text-muted-foreground">.theme-brand</span>
        <Tabs defaultValue="aulas">
          <TabsList variant="line">
            <TabsTrigger value="aulas">Aulas</TabsTrigger>
            <TabsTrigger value="materiais">Materiais</TabsTrigger>
            <TabsTrigger value="notas">Notas</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="theme-class">
        <span className="text-xs font-mono text-muted-foreground">.theme-class</span>
        <Tabs defaultValue="aulas">
          <TabsList variant="line">
            <TabsTrigger value="aulas">Aulas</TabsTrigger>
            <TabsTrigger value="materiais">Materiais</TabsTrigger>
            <TabsTrigger value="notas">Notas</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="theme-positive">
        <span className="text-xs font-mono text-muted-foreground">.theme-positive</span>
        <Tabs defaultValue="aulas">
          <TabsList variant="line">
            <TabsTrigger value="aulas">Aulas</TabsTrigger>
            <TabsTrigger value="materiais">Materiais</TabsTrigger>
            <TabsTrigger value="notas">Notas</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-8">
            <div className="theme-brand">
              <span className="text-xs font-mono text-muted-foreground">.theme-brand</span>
              <Tabs defaultValue="aulas">
                <TabsList variant="line">
                  <TabsTrigger value="aulas">Aulas</TabsTrigger>
                  <TabsTrigger value="materiais">Materiais</TabsTrigger>
                  <TabsTrigger value="notas">Notas</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="theme-class">
              <span className="text-xs font-mono text-muted-foreground">.theme-class</span>
              <Tabs defaultValue="aulas">
                <TabsList variant="line">
                  <TabsTrigger value="aulas">Aulas</TabsTrigger>
                  <TabsTrigger value="materiais">Materiais</TabsTrigger>
                  <TabsTrigger value="notas">Notas</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="theme-positive">
              <span className="text-xs font-mono text-muted-foreground">.theme-positive</span>
              <Tabs defaultValue="aulas">
                <TabsList variant="line">
                  <TabsTrigger value="aulas">Aulas</TabsTrigger>
                  <TabsTrigger value="materiais">Materiais</TabsTrigger>
                  <TabsTrigger value="notas">Notas</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference</h2>

        <h3 className="text-base font-semibold mt-6">Tabs</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Tipo</th>
                <th className="text-left p-3 font-medium">Default</th>
                <th className="text-left p-3 font-medium">Descricao</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Valor da tab ativa inicial</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">orientation</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;horizontal&quot; | &quot;vertical&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;horizontal&quot;</td>
                <td className="p-3 text-muted-foreground">Orientacao das abas</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">value / onValueChange</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string / (value: string) =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Controlado: tab ativa e callback</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold mt-6">TabsList</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Tipo</th>
                <th className="text-left p-3 font-medium">Default</th>
                <th className="text-left p-3 font-medium">Descricao</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;line&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Estilo visual: pill com fundo ou linha indicadora</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold mt-6">TabsTrigger</h3>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Tipo</th>
                <th className="text-left p-3 font-medium">Default</th>
                <th className="text-left p-3 font-medium">Descricao</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Identificador unico da tab (obrigatorio)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Desabilita a tab</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * DESIGNER DOCS
 * ============================================ */
function DesignerDocs() {
  return (
    <>
      {/* Figma Naming */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Nomenclatura no Figma</h2>
        <p className="text-muted-foreground">
          Para que a IA identifique corretamente o componente, siga esta convencao de nomes e propriedades no Figma.
        </p>
        <FigmaNamingSection naming={tabsSpec.figmaNaming} />
      </section>

      {/* Size Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Altura da TabsList", "36px (h-9)"],
            ["Padding interno TabsList", "3px"],
            ["Padding TabsTrigger", "8px horizontal, 4px vertical"],
            ["Border radius TabsList", "8px (rounded-lg)"],
            ["Border radius TabsTrigger", "6px (rounded-md)"],
            ["Font size", "14px (text-sm)"],
            ["Font weight", "500 (Medium)"],
            ["Icone", "16px (size-4)"],
            ["Gap icone-texto", "6px (gap-1.5)"],
          ]}
        />
      </section>

      {/* Visual reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Referencia Visual</h2>
        <p className="text-muted-foreground">
          Preview das duas variants para comparacao no Figma.
        </p>
        <div className="rounded-lg border border-border p-8 bg-background space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-muted-foreground">variant=&quot;default&quot;</span>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Ativa</TabsTrigger>
                <TabsTrigger value="tab2">Inativa</TabsTrigger>
                <TabsTrigger value="tab3">Inativa</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono text-muted-foreground">variant=&quot;line&quot;</span>
            <Tabs defaultValue="tab1">
              <TabsList variant="line">
                <TabsTrigger value="tab1">Ativa</TabsTrigger>
                <TabsTrigger value="tab2">Inativa</TabsTrigger>
                <TabsTrigger value="tab3">Inativa</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cores por Variant</h2>
        <p className="text-muted-foreground">
          Tokens semanticos usados em cada variant.
        </p>
        <ColorTokenList variants={tabsSpec.variantColors} />
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados (TabsTrigger)</h2>
        <SpecTable
          headers={["Estado", "Comportamento", "Observacao"]}
          rows={[
            ["Default (inativa)", "Texto em muted-foreground (60% opacidade)", "Estado normal"],
            ["Hover", "Texto muda para foreground", "Transicao suave"],
            ["Active", "Default: fundo background + shadow · Line: linha indicadora", "Tab selecionada"],
            ["Focused", "Ring de 3px, cor ring/50", "Acessibilidade — nao remover"],
            ["Disabled", "Opacity 50%, pointer-events none", "Tab nao clicavel"],
          ]}
        />
      </section>

      {/* Notes */}
      {tabsSpec.notes && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Notas Adicionais</h2>
          <div className="rounded-lg border border-border p-4 space-y-2">
            {tabsSpec.notes.map((note, i) => (
              <p key={i} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-foreground shrink-0">•</span>
                {note}
              </p>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function TabsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          A set of layered sections of content, known as tab panels, that are displayed one at a time.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
