import { NavLink } from "react-router-dom";
import "../css_modules/navBar.modules.css"
const NavBar = () => {
    return ( 
    <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/GameRules"> Game rules </NavLink>
    </nav> );
}
 
export default NavBar;