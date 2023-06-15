import { Link } from "react-router-dom";


function NavBar()
{
 return(
    <div>
        <h1>Guarda Tu Proximo Viaje</h1>
        <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
        </ul>
    </div>
 )
}

export default NavBar;