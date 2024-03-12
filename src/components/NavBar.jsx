import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
    <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/GameRules"> Game rules </NavLink>
    </nav> );
}
 
export default NavBar;