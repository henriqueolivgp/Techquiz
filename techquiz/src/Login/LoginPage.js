import logoR from './img/TechquizBlack.png'
import './Login.css'
import { useHistory } from 'react-router-dom';

const LoginPage = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
      }

    return ( 
            <div className="Login-content">
                <div class="flex-container-L">
                    
                {/* banner image */}
                <div class="Banner-L">
                    
                </div>
            </div>
                <div className='LoginBox-L'>
                    <div className="TextLogo-L">
                        <img className='logo-Lp' src={logoR} alt="logo3" />
                        <h2>Login your Account</h2>
                    </div>
                    <form>
                        <p><input className='textboxNome-L' placeholder='Nome' required></input></p>
                        <p><input className='textboxEmail-L' type="email" placeholder='Email' required></input></p> 
                        <p><input className='textboxPassword-L' type="password" placeholder='Password' maxLength={6} required></input></p>
                        <p><button className='Sign-In-L' onClick={handleClick}>Sign-In</button></p>
                        <p><h3>I Forgout my Password</h3></p>
                    </form>
                </div>
            </div>
    );
}
 
export default LoginPage;
