import logoL from './img/TechquizBlack.png'
import './Register.css'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const RegisterPage = () => {

    const [nome, setNome ] = useState([]);
    const [email, setEmail ] = useState([]);
    const [password, setPassword ] = useState([]);

    const apiEndPoint = 'http://localhost:1400/api/utilizadores';

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
      };

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

                    <form onChange={(e) => (e)}>

                        <p>
                        <input 
                            className='textboxNome' 
                            type="text"
                            placeholder='Nome' 
                            id='nome'
                            required
                            onChange={(e) => setNome(e.target.value)}
                            ></input>
                        </p>

                        <p>
                        <input
                        className='textboxEmail' 
                        type="email" 
                        placeholder='Email' 
                        required 
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                        ></input></p> 

                        <p>
                        <input
                        className='textboxPassword' 
                        type="password" 
                        placeholder='Password' 
                        minLength={6} 
                        required 
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        ></input>
                        </p>
                        <p>
                        <button 
                        className='Sign-In'
                        >Sign-In</button>
                        </p>

                        <p>
                        <button 

                        type="submit" 
                        className='Create-an-account' 
                        >Create-an-account</button>
                        </p>
                        <p>

                        </p>

                    </form>
                </div>
            </div>
    );
};
 
export default RegisterPage;
