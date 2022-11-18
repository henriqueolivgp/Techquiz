import logo from './Img/TechquizBlack.png'
import './Footer.css'

const footer = () => {
    return ( 
        <div className="content">
            <div className='foot'>
                <img className='logof' alt='' src={logo}/>
                <h3>Subscribe to our newsletter</h3>
              
            </div>

        </div>
     );
}
 
export default footer;