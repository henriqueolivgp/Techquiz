
import '../Home/NavBarH.css'
import User from './Img/user.png'
import Logo from './Img/TechquizBlack.png'

const NavBarH = () => {
    return ( 
        <nav className="navbar">
                <img src={Logo}/>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Register</a>
                <a href="/create">Login</a>
            </div>
            <div className="links1">
                <a href="/create">Register</a>
                <a href="/create">Register</a>
            </div>
            <div className="profile">
                <img src={User}/>
            </div>        
        </nav>
     );
}
 
export default NavBarH