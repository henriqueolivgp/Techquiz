import '../NavBar/NavBar.css'
//import User from './img/user.png'
import Logo from './img/TechquizBlack.png'
import { Link } from 'react-router-dom'



const NavBarH = () => {
    return (
        
        <nav className="navbar">

            {/* Logo's div */}
            <div className='logo'>
                <Link to="/"><img alt='' src={Logo}/></Link>
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

            {/* Links1 */}
            <div className="links1">
                <a href="/register">Register</a>
            </div>

            {/* Profile */}
          {/*   <div className="profile">
                <Link to="/profile"><img alt='' src={User}/></Link>
            </div>        */}

        </nav>
        
     );
}
 
export default NavBarH;