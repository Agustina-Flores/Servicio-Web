import '../App'
import logo from '../images/logo.png'

function NavBar()
{
 return(
    <div className="topnav d-flex justify-content-center align-items-center">
        <img src={logo} className='logo'></img>
     <h6 className="tittle-nav" style={{textAlign:"center",textTransform: "uppercase", fontFamily: "'Roboto, 'Helvetica Neue', Arial, sans-serif", backgroundImage: "linear-gradient(to left,white, violet, indigo, blue)",WebkitBackgroundClip:"text", MozBackgroundClip:"text", backgroundClip:"text", color:"transparent", fontSize: "50px"}} href="/">Explora el mundo con nosotros</h6>   
  </div>
 );
}

export default NavBar;