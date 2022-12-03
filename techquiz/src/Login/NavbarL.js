
import './NavBarL.css'
import UserL from './img/user.png'
import Logo from './img/TechquizBlack.png'

const NavBarL = () => {
    return ( 
        <nav className="navbar-L">
            <div className='logo-L'>
                <img src={Logo}/>
            </div>
                
            <div className="links-L">
                <a href="/">Home</a>
                <a href="/create">Support</a>
                <a href="/create">AboutUs</a>
                <a href="/create">Sugestões</a>
            </div>
            <div className="links1-L">
                <a href="/login">Login</a>
            </div>
            <div className="profile-L">
                <img src={UserL}/>
            </div>        
        </nav>
     );
}
 
export default NavBarL;