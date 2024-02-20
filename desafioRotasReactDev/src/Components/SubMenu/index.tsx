import { NavLink } from "react-router-dom";
import "./styles.css"

export default function SubMenu(){
    return(
        <header className="menusub container">
            <nav className="submenuNav container">
                <div>
                    <NavLink to="computers" className={({ isActive }) => (isActive ? "active-menu-item" : " ")}
                    >
                        Computadores
                    </NavLink>
                </div>
                <div>
                <NavLink to="eletronics" className={({ isActive }) => (isActive ? "active-menu-item" : " ")}
                    >
                        Eletrônicos
                    </NavLink>
                </div>
                <div>
                <NavLink to="books" className={({ isActive }) => (isActive ? "active-menu-item" : " ")}
                    >
                        Livros
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}