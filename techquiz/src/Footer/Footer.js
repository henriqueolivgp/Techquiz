import logo from './img/TechquizBlack.png'
import emailjs from 'emailjs-com';
import './Footer.css'

const footer = () => {

    const service_id = 'service_avzz5at';
    const template_id = 'template_cp7ot4p';
    const user_id = 'v_qutA3WShDKU9dH7pCOa';

    function sendEmail(e) {
        emailjs.sendForm(service_id, template_id, e.target, user_id)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return ( 
        <div className="content1">
            <div className='foot'>
                <img className='logof' alt='' src={logo}/>
                <h3>Subscribe to our newsletter</h3>
                <div className='footeer'>
                    <input className='input-footer' type="email" name="email" placeholder="Digite seu e-mail" required/>
                    <button className='button-footer' type="submit" onClick={sendEmail}>Submit</button>
                </div>

                <div className='data'>
                    <a href="#/" className='txt'>© 2022 Techquiz, Inc</a><a href="#/"  className='point'> . </a>
                    <a href="#/" className='txt'>Privacy</a><a href="#/" className='point'> . </a>
                    <a href="#/" className='txt'>Terms</a><a href="#/" className='point'> . </a>
                </div>
                
            </div>

        </div>
     );
}
 
export default footer;