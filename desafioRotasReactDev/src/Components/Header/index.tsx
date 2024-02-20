import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./styles.css";
import iconHome from "../../assets/home.svg";

export default function Header(){
    return(
        <header>
            <nav className="container">
                <div className="nav-left">
                    <div>
                        <NavLink to="/home" className={({ isActive}) => isActive ? "active-menu-item" : ""}
                        >
                            Inicio
                        </NavLink>
                    </div>
                    <div>
                        {" "}
                        <NavLink to="/products" className={({ isActive}) => isActive ? "active-menu-item" : ""}
                        >
                            Produtos
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/about" className={({ isActive}) => isActive ? "active-menu-item" : ""}
                        >
                            Sobre nós
                        </NavLink>
                    </div>
                </div>
                <div className="nav-icon">
                        <Link to="/">
                            {" "}
                            <img src={iconHome} alt="Inicio" />
                        </Link>
                    </div>
            </nav>
        </header>
    );
}