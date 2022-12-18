// All imports images
import { Link } from 'react-router-dom'
import img1 from './Img/teste2.jpg'
import rc from './Img/RedesComputadores.png'
import logo2 from './Img/TechquizWhite.png'
import cb from './Img/ConceitosBasicos.png'
import asi from './Img/AdministracaoSistemasInformaticos.png'
import p from './Img/Programacao.png'
import pi from './Img/interrogacao.png'

// Import css file
import './Home.css'

const HomePage = () => {
    return ( 
        <div className='container'>

            {/* logo, text, banner */}
            <div className="flex-container">
                
                {/* logo and text */}
                <div className="flex-child">
                    <img className='Logo' alt='logo container' src={logo2}/>
                    <p className='intro'>Com o Techquiz pode avaliar o  seu conhecimento e saber </p>
                    <p className='intro'>o seu nível em todas as diversas áreas de informática.</p>
                </div>

                {/* banner image */}
                <div className="flex-child">
                    <img className='banner' alt='banner imag' src={img1}/>
                </div>

            </div>

            {/* contain all items */}
            <div className="grid-container">

            {/* Conceitos Basicos */}
            <div className="grid-child">
                <Link to="/conceitos-basicos"><img className='cb' alt='conceitos basicos ' src={cb}/></Link>
                <p className='titulo'>Conceitos Básicos</p>
            </div>

            {/* Redes de Computadores */}
            <div className="grid-child">
                <Link to="/redes-de-computadores"><img className='rc' alt='redes de computadores' src={rc} /></Link>
                <p className='titulo'>Redes de Computadores</p>
            </div>

            {/* Administracao SistemasInformaticos */}
            <div className="grid-child">
                <Link to="/administracao-de-sistemas-informaticos"><img className='asi' alt='administracao de sistemas informaticos' src={asi}/></Link>
                <p className='titulo'>Administracao Sistemas<br/>Informaticos</p>
            </div>

            {/* Programacao */}
            <div className="grid-child">
                <Link to="/programacao"><img className='p' alt='programacao' src={p}/></Link>
                <p className='titulo'>Programacao</p>
            </div>
            </div>

            {/* Coming Soon */}
            <div className="grid-container">

            <div className="grid-child">
                <img className='cs' alt='conceitos basicos ' src={pi}/>
                <p className='titulo'>Coming Soon</p>
            </div>

            <div className="grid-child">
                <img className='cs' alt='conceitos basicos ' src={pi}/>
                <p className='titulo'>Coming Soon</p>
            </div>

            <div className="grid-child">
                <img className='cs' alt='conceitos basicos ' src={pi}/>
                <p className='titulo'>Coming Soon</p>
            </div>

            <div className ="grid-child">
                <img className='cs' alt='conceitos basicos ' src={pi}/>
                <p className='titulo'>Coming Soon</p>
            </div>
  
            </div>
        </div>
                         
     );
}
 
export default HomePage;