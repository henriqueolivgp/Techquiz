import logo from './Img/TechquizBlack.png'
import './Footer.css'

const footer = () => {
    return ( 
        <div className="content">
            <div className='foot'>
                <img className='logof' alt='' src={logo}/>
                <h3>Subscribe to our newsletter</h3>
                <div className='footeer'>
                    <input type="email" name="email" placeholder="Digite seu e-mail" required/>
                    <button></button>
                </div>
                
            </div>

        </div>
     );
}
 
export default footer;