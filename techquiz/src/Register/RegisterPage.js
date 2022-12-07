import logoL from './img/TechquizBlack.png'
import './Register.css'
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
      }

    return ( 
            <div className="Register-content">
                <div class="flex-container">
                {/* banner image */}
                <div class="BannerR">
                    
                </div>
            </div>
                <div className='RegisterBox'>
                    <div className="TextLogo">
                        <img className='logoRg' src={logoL} alt="logo3" />
                        <h2>Create an Account</h2>
                    </div>
                    <form>
                        <p><input className='textboxNome' placeholder='Nome' required id='nome'></input></p>
                        <p><input className='textboxEmail' type="email" placeholder='Email' required id='email'></input></p> 
                        <p><input className='textboxPassword' type="password" placeholder='Password' minLength={6} required id='password'></input></p>
                        <p><button className='Sign-In'>Sign-In</button></p>
                        <p><button className='Create-an-account' onClick={handleClick}>Create-an-account</button></p>
                        <p></p>
                    </form>
                </div>
            </div>
    );
}
 
export default RegisterPage;
