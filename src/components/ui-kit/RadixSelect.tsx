import * as Select from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import { SelectButton } from './SelectButton'

type SelectProps = Select.SelectProps & {
  items?: { label: string, value: string, disabled?: boolean }[]
}

export function RadixSelect(props: SelectProps) {
  const { items, ...rest } = props

  return (
    <Select.Root {...rest}>
      <Select.Trigger asChild>
        <SelectButton>
          <Select.Value />
          <Select.Icon className="ml-2">
            <ChevronDownIcon className="size-4" />
          </Select.Icon>
        </SelectButton>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="z-50">
          <Select.ScrollUpButton className="flex items-center justify-center text-main-600">
            <ChevronUpIcon className="size-4" />
          </Select.ScrollUpButton>

          <Select.Viewport className="rounded-lg bg-white p-2 shadow-lg">
            <Select.Group>
              {items?.map((it) => (
                <Select.Item
                  key={it.value}
                  className={`
                  relative flex select-none items-center rounded-md px-1 py-2 pl-8 text-sm font-medium
                  text-main-600 focus:bg-main-100/50 focus:outline-none
                  radix-disabled:opacity-50
                  ${it.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                  `}
                  disabled={it.disabled}
                  value={it.value}
                >
                  <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                    <CheckIcon className="size-4" />
                  </Select.ItemIndicator>
                  <Select.ItemText>{it.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>

          <Select.ScrollDownButton className="flex items-center justify-center text-gray-700">
            <ChevronDownIcon className="size-4" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
