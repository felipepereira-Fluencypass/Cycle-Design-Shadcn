import { forwardRef } from 'react'
import type { Ref } from 'react'
import type { LucideIcon } from 'lucide-react'
import { ICON_SIZES } from './sizes'
import type { IconSize } from './sizes'

/**
 * Props base compartilhada.
 */
type BaseProps = {
  icon: LucideIcon
  size?: IconSize
  className?: string
}

/**
 * Ícone semântico — comunica algo para o usuário.
 * @example <CycleIcon icon={Home} size="sm" aria-label="Ir para home" />
 */
type SemanticProps = BaseProps & {
  decorative?: false
  'aria-label': string
}

/**
 * Ícone decorativo — puramente visual.
 * @example <CycleIcon icon={Home} size="sm" decorative />
 */
type DecorativeProps = BaseProps & {
  decorative: true
  'aria-label'?: never
}

export type CycleIconProps = SemanticProps | DecorativeProps

/**
 * CycleIcon — wrapper para ícones Lucide com regras de size/stroke da Cycle.
 *
 * Aplica automaticamente width, height e strokeWidth baseado no size token.
 * Use para todos os ícones Lucide no produto.
 *
 * @example
 * import { Home, Search } from "lucide-react"
 * import { CycleIcon } from "@/components/icons"
 *
 * <CycleIcon icon={Home} size="sm" decorative />
 * <CycleIcon icon={Search} size="lg" aria-label="Buscar" />
 */
export const CycleIcon = forwardRef<SVGSVGElement, CycleIconProps>(
  function CycleIcon(props, ref: Ref<SVGSVGElement>) {
    const { icon: Icon, size = 'sm', decorative, className, ...rest } = props

    const { size: px, stroke } = ICON_SIZES[size]

    const ariaProps = decorative
      ? { 'aria-hidden': true as const, focusable: 'false' as const }
      : { role: 'img' as const }

    return (
      <Icon
        ref={ref}
        width={px}
        height={px}
        strokeWidth={stroke}
        className={className}
        {...ariaProps}
        {...rest}
      />
    )
  }
)
