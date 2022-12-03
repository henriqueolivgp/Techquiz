import "./ConseitosBI.css"
import rdc from './img/INFORMÁTICA-BÁSICA-NÍVEL-I.jpg'

const Conceitosbas = () => {
    return ( 
        <div className="content-CB">
            <div className="fraseini">
            <h2>Conceitos Basicos</h2>
            <a href="#/" className="frase">Faça agora o quiz de Conceiros Básicos da Informática, para saber o seu nível de conhecimentos relativos a Conceitos Básicos da Informática .</a>
            </div>
            <div className="box">
                <div className="desc">
                <h1 className="tittle">Indice dos conceitos basicos de informatica</h1>
                
                <div class="lr-container">

                    <div class="left">
                <ul>
                    <li>Sistemas Operativos</li>
                    <li>CPU</li>
                    <li>Disco rígido (HD)</li>
                    <li>Dispositivo de armazenamento de dados portáteis</li>
                    <li>Memória RAM</li>
                    <li>Monitor</li>
                    <li>Navegador</li>
                    <li>Cloud (Núvem)</li>
                    <li>Periféricos</li>
                    <li>Placa-mãe</li>
                </ul>
                    <div className="container-button">
                        <a href="#/" className="button" style={{color:"#1e9bff"}}><span>Comecar Agora</span><i></i></a>
                    </div>
                    </div>
  
                    <div class="rigth">
                        <img className="CB" alt="CBI" src={rdc}></img>
                    </div>
  
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default Conceitosbas;