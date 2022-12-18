
import './NavBarL.css'
//import UserL from './img/user.png'
import Logo from './img/TechquizBlack.png'
import { Link } from 'react-router-dom'

const NavBarL = () => {
    return ( 
        <nav className="navbar-L">
            <div className='logo-L'>
                <Link to="/home"><img alt="" src={Logo}/></Link>
            </div>
                
            <div className="links-L">
                <Link to="/">Home</Link>
                <Link to="/support">Support</Link>
                <Link to="/aboutus">AboutUs</Link>
                <Link to="/sugestoes">Sugestões</Link>
            </div>
   
        </nav>
     );
}
 
export default NavBarL;