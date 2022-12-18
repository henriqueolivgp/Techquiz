import logoR from './img/TechquizBlack.png'
import './Login.css'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    
      });

      const [err, seterror] = useState(null)

      const handleChange =  e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
      };
    
      const handleSubmit = async e =>{
        e.preventDefault()
    
        axios.post("http://localhost:1400/api/utilizadores/login", inputs).then( async (res,err)  => {
          console.log("Login Sucefull");
            if(err){ 
              alert(res.send(err));
            }
            else {
              sessionStorage.setItem("accessToken", res.inputs);
            }
        });
      };

    const history = useHistory();

    const handleClick = () => {
        history.push('/');
      }

    return ( 
            <div className="Login-content">
                <div className="flex-container-L">
                    
                {/* banner image */}
                <div className="Banner-L">
                    
                </div>
            </div>
            
                <div className='LoginBox-L'>
                    <div className="TextLogo-L">
                        <img className='logo-Lp' src={logoR} alt="logo3" />
                        <p><a >Login your Account</a></p>
                    </div>
                    <form >
                        <p><input 
                        className='textboxEmail-L' 
                        type="text" 
                        placeholder='Email' 
                        required 
                        name='email'
                        onChange={handleChange}></input></p> 
                        <p><input 
                        className='textboxPassword-L' 
                        type="password" 
                        placeholder='Password' 
                        required
                        name='password'
                        onChange={handleChange} 
                        ></input></p>
                        <p><button 
                        className='Sign-In-L'
                        onClick={handleSubmit} >Sign-In</button></p>
                        <p><a>I Forgout my Password</a></p>
                    </form>
                </div>
            </div>
    );
}

 
export default LoginPage;
