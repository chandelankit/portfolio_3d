import { NavLink } from "react-router-dom"
import { signature3d } from "../assets/images"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-20 h-20 rounded-lg pl-22"> 
            <img src={signature3d} alt="logo" className="object-cover" />
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium ">
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500' : 'text-purple-500'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? 'text-blue-500' : 'text-purple-500'}>
                Projects
            </NavLink>

        </nav>
    </header>

  )
}

export default Navbar