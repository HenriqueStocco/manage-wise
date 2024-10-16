import { ChevronsLeft, ChevronsRight } from 'lucide-react'
import * as React from 'react'

type NavigationProps = {
  chidren: React.ReactNode
}

const NavigationContext = React.createContext({ expanded: true })

function Sidebar({ chidren }: NavigationProps) {
  const [expanded, setExpanded] = React.useState<boolean>(true)
  return (
    <aside className='bg-gradient-to-b from-teal-900 from-50% to-teal-700 z-10 h-screen shadow-inner bg-muted hidden md:block'>
      <div className='relative flex h-full flex-col border-r shadow-sm'>
        <div className='flex items-center justify-end p-4 pb-2'>
          <button type='button' onClick={() => setExpanded((curr) => !curr)}
            className='z-10 rounded-lg p-1.5 hover:ng-gray-100'
          >{expanded ? <ChevronsLeft /> : <ChevronsRight />}</button>
        </div>
        <NavigationContext.Provider value={{ expanded }} />
      </div>

    </aside>
  )
}


export { Sidebar }