import logo from './img/TechquizBlack.png'
import './Footer.css'

const footer = () => {
    return ( 
        <div className="content1">
            <div className='foot'>
                <img className='logof' alt='' src={logo}/>
                <h3>Subscribe to our newsletter</h3>
                <div className='footeer'>
                    <input type="email" name="email" placeholder="Digite seu e-mail" required/>
                    <button>Submit</button>
                </div>

                <div className='data'>
                    <a href="#/" className='txt'>© 2022 Techquiz, Inc<a href="#/"  className='point'> . </a>
                    <a href="#/" className='txt'>Privacy</a><a href="#/" className='point'> . </a>
                    <a href="#/" className='txt'>Terms</a><a href="#/" className='point'> . </a>
                    </a>
                </div>
                
            </div>

        </div>
     );
}
 
export default footer;