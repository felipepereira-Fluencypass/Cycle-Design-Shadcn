"use client"

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"

export default function AvatarPage() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
          Avatar
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          Representação visual de um usuário com imagem, fallback de iniciais,
          badge de status e suporte a agrupamento.
        </p>
      </div>

      {/* Sizes */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Tamanhos
        </h2>
        <p className="text-sm text-muted-foreground">
          3 sizes: <code className="text-xs bg-muted px-1 py-0.5 rounded">sm</code> (24px),{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">default</code> (32px),{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">lg</code> (40px).
        </p>
        <div className="flex items-end gap-4">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="sm">
              <AvatarImage src="https://i.pravatar.cc/48?img=1" alt="User" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/64?img=2" alt="User" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg">
              <AvatarImage src="https://i.pravatar.cc/80?img=3" alt="User" />
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">lg</span>
          </div>
        </div>
      </section>

      {/* Fallback */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Fallback (iniciais)
        </h2>
        <p className="text-sm text-muted-foreground">
          Quando a imagem não está disponível, exibe as iniciais no{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">AvatarFallback</code>.
        </p>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              PR
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback className="bg-destructive text-destructive-foreground">
              ER
            </AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Themes */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Temas
        </h2>
        <p className="text-sm text-muted-foreground">
          A prop <code className="text-xs bg-muted px-1 py-0.5 rounded">theme</code> aplica
          uma classe <code className="text-xs bg-muted px-1 py-0.5 rounded">.theme-*</code> no
          Avatar. O Fallback automaticamente usa{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">bg-primary</code> /{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">text-primary-foreground</code>{" "}
          do tema.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {[
            { theme: "theme-brand", label: "Brand", initials: "BR" },
            { theme: "theme-class", label: "Class", initials: "CL" },
            { theme: "theme-private", label: "Private", initials: "PV" },
            { theme: "theme-group", label: "Group", initials: "GR" },
            { theme: "theme-impulse", label: "Impulse", initials: "IM" },
            { theme: "theme-positive", label: "Positive", initials: "PO" },
            { theme: "theme-warning", label: "Warning", initials: "WA" },
            { theme: "theme-critical", label: "Critical", initials: "CR" },
          ].map(({ theme, label, initials }) => (
            <div key={theme} className="flex flex-col items-center gap-2">
              <Avatar size="lg" theme={theme}>
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Todos os sizes funcionam com temas:
        </p>
        <div className="flex items-end gap-4">
          <Avatar size="sm" theme="theme-class">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar theme="theme-class">
            <AvatarFallback>DF</AvatarFallback>
          </Avatar>
          <Avatar size="lg" theme="theme-class">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Badge */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Badge de status
        </h2>
        <p className="text-sm text-muted-foreground">
          O <code className="text-xs bg-muted px-1 py-0.5 rounded">AvatarBadge</code> indica
          status online, notificação, etc.
        </p>
        <div className="flex items-center gap-6">
          <Avatar size="lg">
            <AvatarImage src="https://i.pravatar.cc/80?img=5" alt="Online" />
            <AvatarFallback>ON</AvatarFallback>
            <AvatarBadge className="bg-green-500" />
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>OF</AvatarFallback>
            <AvatarBadge className="bg-muted-foreground" />
          </Avatar>
          <Avatar>
            <AvatarImage src="https://i.pravatar.cc/64?img=8" alt="Busy" />
            <AvatarFallback>BU</AvatarFallback>
            <AvatarBadge className="bg-destructive" />
          </Avatar>
        </div>
      </section>

      {/* Group */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Avatar Group
        </h2>
        <p className="text-sm text-muted-foreground">
          Empilha avatares com overlap. Use{" "}
          <code className="text-xs bg-muted px-1 py-0.5 rounded">AvatarGroupCount</code>{" "}
          para indicar quantidade excedente.
        </p>
        <div className="flex flex-col gap-4">
          <AvatarGroup>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/64?img=10" alt="User 1" />
              <AvatarFallback>U1</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/64?img=11" alt="User 2" />
              <AvatarFallback>U2</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/64?img=12" alt="User 3" />
              <AvatarFallback>U3</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>U4</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+5</AvatarGroupCount>
          </AvatarGroup>
        </div>
      </section>

      {/* Props */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Props
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-medium text-foreground">Componente</th>
                <th className="py-2 pr-4 font-medium text-foreground">Prop</th>
                <th className="py-2 pr-4 font-medium text-foreground">Tipo</th>
                <th className="py-2 font-medium text-foreground">Descrição</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">Avatar</td>
                <td className="py-2 pr-4 font-mono text-xs">size</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
                <td className="py-2">Tamanho do avatar (24/32/40px)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">Avatar</td>
                <td className="py-2 pr-4 font-mono text-xs">theme</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2">Classe de tema (.theme-*). Colore o fallback via tokens primary.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">AvatarImage</td>
                <td className="py-2 pr-4 font-mono text-xs">src</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2">URL da imagem</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">AvatarFallback</td>
                <td className="py-2 pr-4 font-mono text-xs">children</td>
                <td className="py-2 pr-4 font-mono text-xs">ReactNode</td>
                <td className="py-2">Iniciais ou conteúdo de fallback</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">AvatarBadge</td>
                <td className="py-2 pr-4 font-mono text-xs">className</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2">Classe para cor do badge (bg-green-500, etc.)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Install */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Como instalar
        </h2>
        <div className="bg-muted border border-border rounded-lg p-4">
          <code className="text-sm text-foreground">
            npx shadcn@latest add &quot;https://cycle-design.vercel.app/r/avatar.json&quot;
          </code>
        </div>
      </section>
    </div>
  )
}
