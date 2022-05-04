import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "selected" : ""}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "selected" : ""}>Projects (params)</NavLink>
                </li>
                <li>
                    <NavLink to="/mi-perfil" className={({ isActive }) => isActive ? "selected" : ""}>Perfil *</NavLink>
                </li>
                <li>
                    <NavLink to="/resultados?color=rojo&talla=M" className={({ isActive }) => isActive ? "selected" : ""}>Resultados (queries)</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;