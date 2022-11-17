import '../Home/NavBarH.css'
import User from './Img/user.png'
import Logo from './Img/TechquizBlack.png'



const NavBarH = () => {
    return ( 
        <nav className="navbar">
            <div className='logo'>
                <img alt='' src={Logo}/>
            </div>   
            <div className="links">
                <a className='Separadores' href="/">Home</a>
                <a className='Separadores' href="/suport">Support</a>
                <a className='Separadores' href="/aboutus">AboutUs</a>
                <a className='Separadores' href="/sugestoes">Sugestões</a>
            </div>
            <div className='textbox'>
            <input id="phone" type="tel" name="phone" placeholder='Search'/>
            </div>
            <div className="links1">
                <a href="/login">Login</a>
            </div>
            <div className="profile">
                <img alt='' src={User}/>
            </div>        
        </nav>
        
     );
}
 
export default NavBarH;