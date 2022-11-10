
import '../Home/NavBarH.css'
import User from './Img/user.png'
import Logo from './Img/TechquizBlack.png'

const NavBarH = () => {
    return ( 
        <nav className="navbar">
            <div className='logo'>
                <img src={Logo}/>
            </div>
                
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Support</a>
                <a href="/create">AboutUs</a>
                <a href="/create">Sugestões</a>
            </div>
            <div className="links1">
                <a href="/login">Login</a>
            </div>
            <div className="profile">
                <img src={User}/>
            </div>        
        </nav>
     );
}
 
export default NavBarH