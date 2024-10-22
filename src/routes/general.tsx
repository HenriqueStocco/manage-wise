import { Building2, StretchHorizontal, SquarePlus, LogOut } from 'lucide-react'
import { NavigationGroup, NavigationItem, Sidebar } from '../components/sidebar'
// import { Link } from 'react-router-dom'

function GeneralPage() {
  return (
    <div className="flex w-full">
      <Sidebar>
        <NavigationGroup>
          {/* <Link to={'/'}; */}
          <NavigationItem
            icon={<StretchHorizontal className="h-5 w-5" />}
            text="Ver Items"
          />
          {/* </Link> */}

          {/* <Link to="/"> */}
          <NavigationItem
            icon={<SquarePlus className="h-5 w-5" />}
            text="Cadastrar Item"
          />
          {/* </Link> */}

          {/* <Link to="/"> */}
          <NavigationItem
            icon={<Building2 className="h-5 w-5" />}
            text="Empresa"
          />
          {/* </Link> */}

          {/* <Link to="/"> */}
          <NavigationItem icon={<LogOut className="h-5 w-5" />} text="Sair" />
          {/* </Link> */}
        </NavigationGroup>
      </Sidebar>
    </div>
  )
}

export { GeneralPage }
