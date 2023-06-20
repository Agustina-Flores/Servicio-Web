import '../App'
import logo from '../images/logo.png'

function NavBar()
{
 return(
    <div className="topnav d-flex justify-content-center align-items-center">
        <img src={logo} className='logo'></img>
    <a className="active" href="/">Travel</a>
  </div>
 );
}

export default NavBar;