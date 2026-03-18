"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Paintbrush } from "lucide-react"
import { CycleIcon } from "@/components/icons"

export interface DocsTabsProps {
  developerContent: React.ReactNode
  designerContent: React.ReactNode
}

export function DocsTabs({ developerContent, designerContent }: DocsTabsProps) {
  return (
    <Tabs defaultValue="dev" className="w-full">
      <TabsList className="mb-8">
        <TabsTrigger value="dev" className="gap-1.5">
          <CycleIcon icon={Code} size="xs" decorative />
          Desenvolvedor
        </TabsTrigger>
        <TabsTrigger value="design" className="gap-1.5">
          <CycleIcon icon={Paintbrush} size="xs" decorative />
          Designer
        </TabsTrigger>
      </TabsList>

      <TabsContent value="dev" className="space-y-16">
        {developerContent}
      </TabsContent>

      <TabsContent value="design" className="space-y-16">
        {designerContent}
      </TabsContent>
    </Tabs>
  )
}
