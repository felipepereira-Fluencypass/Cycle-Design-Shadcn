/**
 * Script para gerar os arquivos do registry do shadcn/ui.
 *
 * Le o registry.json (indice) e para cada componente, le o arquivo fonte
 * e gera o JSON individual em public/r/[name].json com o conteudo embutido.
 *
 * Rodar: npx tsx scripts/build-registry.ts
 */

import * as fs from "fs"
import * as path from "path"

const ROOT = path.resolve(__dirname, "..")
const REGISTRY_PATH = path.join(ROOT, "public", "registry.json")
const OUTPUT_DIR = path.join(ROOT, "public", "r")

// Mapeamento de path no registry -> arquivo real no projeto
function resolveFilePath(registryPath: string): string {
  // "registry/button.tsx" -> "src/components/ui/button.tsx"
  const filename = registryPath.replace("registry/", "")
  return path.join(ROOT, "src", "components", "ui", filename)
}

function main() {
  // Ler registry index
  const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf-8"))

  // Garantir que o diretorio de saida existe
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  for (const item of registry.items) {
    const outputFile = path.join(OUTPUT_DIR, `${item.name}.json`)

    // Ler conteudo de cada arquivo do componente
    const files = item.files.map(
      (file: { path: string; type: string; target: string }) => {
        const srcPath = resolveFilePath(file.path)
        const content = fs.readFileSync(srcPath, "utf-8")
        return {
          path: file.target,
          type: file.type,
          content,
        }
      }
    )

    // Gerar JSON do item individual
    const itemJson = {
      $schema: "https://ui.shadcn.com/schema/registry-item.json",
      name: item.name,
      type: item.type,
      title: item.title,
      description: item.description,
      dependencies: item.dependencies || [],
      registryDependencies: item.registryDependencies || [],
      files,
    }

    fs.writeFileSync(outputFile, JSON.stringify(itemJson, null, 2))
    console.log(`✓ ${item.name} -> public/r/${item.name}.json`)
  }

  console.log(`\nRegistry gerado com ${registry.items.length} componente(s).`)
}

main()
