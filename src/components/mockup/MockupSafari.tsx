import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  LockIcon,
  PlusIcon,
  RotateCwIcon,
  ShareIcon,
} from 'lucide-react'

import { useData } from '~/DataContext'

type MockupSafariProps = React.PropsWithChildren<Pick<React.ComponentProps<'div'>, 'className'>>

export function MockupSafari(props: MockupSafariProps) {
  const { children, className = '' } = props

  const { graphData } = useData()

  return (
    <div className="relative overflow-hidden rounded-3xl p-7">
      <div
        className={`relative z-10 overflow-hidden rounded-[12px] border border-solid border-[var(--theme-border)] ${className}`}
      >
        <div className="rounded-[11px] border border-[var(--theme-border)]">
          <div className="rounded-[10px] border border-[var(--theme-border)]">
            <div className="overflow-hidden rounded-[9px] border border-[var(--theme-border)]">
              <div className="bg-[var(--theme-background)]">
                <div className="relative flex h-14 items-center gap-x-2 px-6">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-[rgb(232,_106,94)]" />
                    <div className="size-3 rounded-full bg-[rgb(241,_190,_80)]" />
                    <div className="size-3 rounded-full bg-[rgb(97,_196,_84)]" />
                  </div>

                  <div className="flex items-center px-4 opacity-70">
                    <ChevronLeftIcon className="size-5" />
                    <ChevronRightIcon className="size-5" />
                  </div>

                  {!!graphData?.login && (
                    <div className="absolute inset-x-0 mx-auto flex w-fit min-w-[290px] items-center justify-between gap-2 rounded-lg border-2 border-[color-mix(in_srgb,_var(--theme-border),_transparent_50%)] bg-[var(--theme-secondary)] p-1 px-2">
                      <LockIcon className="size-3.5 opacity-70" />
                      <div className="text-xs">{`githu.com/${graphData.login}`}</div>
                      <RotateCwIcon className="size-3.5 opacity-70" />
                    </div>
                  )}

                  <div className="ml-auto flex items-center gap-3 opacity-70">
                    <ShareIcon className="size-4" />
                    <PlusIcon className="size-4" />
                    <CopyIcon className="size-4" />
                  </div>
                </div>

                <div className="p-6">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: 'var(--theme-background-container)',
        }}
      />
    </div>
  )
}
