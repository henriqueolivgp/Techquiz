import { Link } from 'react-router-dom'
import img1 from './Img/teste2.jpg'
import rc from './Img/RedesComputadores.png'
import logo2 from './Img/TechquizWhite.png'
import cb from './Img/ConceitosBasicos.png'
import asi from './Img/AdministracaoSistemasInformaticos.png'
import p from './Img/Programacao.png'
import pi from './Img/interrogacao.png'
import './Home.css'

const HomePage = () => {
    return ( 
        <div className='container'>

            {/*  */}
            <div class="flex-container">

                <div class="flex-child">
                    <img className='Logo' alt='logo container' src={logo2}/>
                    <p className='intro'>Com o Techquiz pode avaliar o  seu conhecimento e saber </p>
                    <p className='intro'>o seu nível em todas as diversas áreas de informática.</p>
                </div>
  
                <div class="flex-child">
                    <img className='banner' alt='banner imag' src={img1}/>
                </div>
            </div>

            <div class="grid-container">

            <div class="grid-child">
                <Link to="/conceitos-basicos"><img className='cb' alt='conceitos basicos ' src={cb}/></Link>
                <p className='titulo'>Conceitos Básicos</p>
            </div>

            <div class="grid-child">
                <Link to="/redes-de-computadores"><img className='rc' alt='redes de computadores' src={rc} /></Link>
                <p className='titulo'>Redes de Computadores</p>
            </div>

            <div class="grid-child">
                <Link to="/administracao-de-sistemas-informaticos"><img className='asi' alt='administracao de sistemas informaticos' src={asi}/></Link>
                <p className='titulo'>Administracao Sistemas<br/>Informaticos</p>
            </div>

            <div class="grid-child">
                <Link to="/programacao"><img className='p' alt='programacao' src={p}/></Link>
                <p className='titulo'>Programacao</p>
            </div>
  
            </div>
            <div class="grid-container">

            <div class="grid-child">
                <img className='pi' alt='conceitos basicos ' src={pi}/>
                <p className='titulo'>Coming Soon</p>
            </div>

            <div class="grid-child">
                <img className='pi' alt='conceitos basicos ' src={pi}/>
                <p className='titulo'>Coming Soon</p>
            </div>

            <div class="grid-child">
                <img className='pi' alt='conceitos basicos ' src={pi}/>
                <p className='titulo'>Coming Soon</p>
            </div>

            <div class="grid-child">
                <img className='pi' alt='conceitos basicos ' src={pi}/>
                <p className='titulo'>Coming Soon</p>
            </div>
  
            </div>
        </div>
                         
     );
}
 
export default HomePage;