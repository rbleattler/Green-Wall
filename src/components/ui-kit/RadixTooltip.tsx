import * as Tooltip from '@radix-ui/react-tooltip'

interface RadixTooltipProps {
  label?: React.ReactNode
}

export function RadixTooltip(props: React.PropsWithChildren<RadixTooltipProps>) {
  const { children, label } = props

  return (
    <Tooltip.Provider delayDuration={300}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="inline-flex size-full items-center justify-center">{children}</div>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            className="
            z-50
            select-none rounded bg-white px-4 py-2 text-sm leading-none shadow-tooltip
            radix-side-bottom:animate-slide-up-fade
            radix-side-left:animate-slide-right-fade
            radix-side-right:animate-slide-left-fade
            radix-side-top:animate-slide-down-fade
            "
            sideOffset={5}
          >
            {label}

            <Tooltip.Arrow className="fill-current text-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
