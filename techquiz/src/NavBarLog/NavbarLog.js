import './NavBarLog.css'
import User from './img/user.png'
import Logo from './img/TechquizBlack.png'
import { Link } from 'react-router-dom'



const NavBarLog = () => {
    return (
        
        <nav className="navbar">

            {/* Logo's div */}
            <div className='logo'>
                <Link to="/home"><img alt='' src={Logo}/></Link>
            </div>

            {/* links div */}   
            <div className="links">
                <Link className='Separadores' to="/quiz">Quiz's</Link>
                <Link className='Separadores' to="/support">Suport</Link>
                <Link className='Separadores' to="/aboutus">AboutUs</Link>
                <Link className='Separadores' to="/sugestoes">Sugestions</Link>
            </div>

            {/* search box */}
            <div className='textbox'>
            <input id="phone" type="tel" name="phone" placeholder='Search'/>    
            </div>

            {/* Profile */}
            <div className="profile">
                <Link to="/profile"><img alt='' src={User}/></Link>
            </div>     
            <div className='links-1'>
            <Link className='Separadores' to="/">Logout</Link>
            </div>   

        </nav>
        
     );
}
 
export default NavBarLog;