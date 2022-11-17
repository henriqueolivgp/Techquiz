import logo from './Img/TechquizBlack.png'
import './Footer.css'

const footer = () => {
    return ( 
        <div className="content">
            <div className='foot'>
                <img className='logof' alt='' src={logo}/>
                <h3>Subscribe to our newsletter</h3>
                <input className='mails' type="email" placeholder='input your email'></input>
            </div>

        </div>
     );
}
 
export default footer;