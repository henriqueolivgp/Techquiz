import '../NavBar/NavBar.css'
import User from './img/user.png'
import Logo from './img/TechquizBlack.png'
import { Link } from 'react-router-dom'



const NavBarH = () => {
    return ( 
        <nav className="navbar">
            <div className='logo'>
                <Link to="/"><img alt='' src={Logo}/></Link>
            </div>   
            <div className="links">
                <Link className='Separadores' to="/quizs">Quiz's</Link>
                <Link className='Separadores' to="/support">Suporte</Link>
                <Link className='Separadores' to="/aboutus">AboutUs</Link>
                <Link className='Separadores' to="/sugestoes">Sugestões</Link>
            </div>
            <div className='textbox'>
            <input id="phone" type="tel" name="phone" placeholder='Search'/>
            </div>
            <div className="links1">
                <a href="/login">Login</a>
            </div>
            <div className="profile">
                <Link to="/profile"><img alt='' src={User}/></Link>
            </div>        
        </nav>
        
     );
}
 
export default NavBarH;