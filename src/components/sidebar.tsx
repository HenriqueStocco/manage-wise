import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import * as React from 'react'
import { Input } from './ui/input'

type NavigationProps = {
  children: React.ReactNode
}

const NavigationContext = React.createContext({ expanded: true })

export function Sidebar({ children }: NavigationProps) {
  const [expanded, setExpanded] = React.useState<boolean>(true)
  return (
    <aside className="bg-gradient-to-b from-teal-900 from-50% to-teal-700 z-10 h-screen shadow-inner bg-muted hidden md:block">
      <div className="relative flex h-full flex-col border-r shadow-sm">
        <div className="flex items-center justify-between p-4 pb-2">
          {expanded && <h1 className="text-stone-300 text-xl">Manage Wise</h1>}

          <button
            type="button"
            onClick={() => setExpanded(curr => !curr)}
            className="z-10 rounded-lg p-1.5 hover:ng-gray-100 txet-stone-50"
          >
            {expanded ? (
              <ChevronsLeft className="text-stone-300" />
            ) : (
              <ChevronsRight className="text-stone-300" />
            )}
          </button>
        </div>

        <NavigationContext.Provider value={{ expanded }}>
          <nav className="flex-1 px-3 py-4">{children}</nav>
        </NavigationContext.Provider>
      </div>
    </aside>
  )
}

export function NavigationItem({
  icon,
  text,
  alert,
}: {
  icon: React.ReactNode
  text: string
  active?: boolean
  alert?: boolean
  disabled?: boolean
}) {
  const { expanded } = React.useContext(NavigationContext)

  return (
    <div
      className={`
        group relative my-1 flex items-center
        rounded-md px-3 py-2
        font-medium transition-colors
        text-stone-300 hover:text-stone-400/95
    `}
    >
      {icon}
      <span
        className={`h-5 overflow-hidden text-sm transition-all ${
          expanded ? 'ml-3 w-40 opacity-100' : 'w-0 opacity-30'
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}
        />
      )}

      {!expanded && (
        <div
          className={`
          invisible absolute left-full ml-6 -translate-x-3 rounded-md
          bg-green-50 px-2 py-1
          text-sm text-primary opacity-20 transition-all
          group-hover:visible group-hover:translate-x-0 group-hover:opacity-100
      `}
        >
          {text}
        </div>
      )}
    </div>
  )
}

export function NavigationGroup({ children }: { children: React.ReactNode }) {
  const { expanded } = React.useContext(NavigationContext)

  return (
    <div>
      {expanded ? (
        <Input
          placeholder="Pesquisar items"
          className="p-1 mb-4 w-60 bg-stone-200"
        />
      ) : (
        <div className="mb-4 h-4">
          <hr className="h-[1px]" />
        </div>
      )}
      {children}
    </div>
  )
}
