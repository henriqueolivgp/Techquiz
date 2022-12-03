
import './NavBarR.css'
//import User from './img/user.png'
import Logo from './img/TechquizBlack.png'
import { Link } from 'react-router-dom'


const NavBarR = () => {
    return ( 
        <nav className="navbar-R">
            <div className='logo-R'>
                <Link to="/"><img alt="" src={Logo}/></Link>
            </div>
                
            <div className="links-R">
                <Link to="/">Home</Link>
                <Link to="/support">Support</Link>
                <Link to="/aboutus">AboutUs</Link>
                <Link to="/sugestoes">Sugestões</Link>
            </div>
        </nav>
     );
}
 
export default NavBarR;