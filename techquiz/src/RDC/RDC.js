import rdc from './img/desktop_4254efb0-e5c3-4291-a4ca-c33eb236d7a3.png'
import './RDC.css'

const RDC = () => {
    return ( 
        <div className="content">
            <div className="fraseini1">
            <h2>Conceitos Basicos</h2>
            <a href="#/" className="frase1">Faça agora o quiz de Conceiros Básicos da Informática, para saber o seu nível de conhecimentos relativos a Conceitos Básicos da Informática .</a>
            </div>
            <div className="box1">
                <div className="desc1">
                <h1 className="tittle1">Indice dos conceitos basicos de informatica</h1>
                
                <div class="lr-container1">

                    <div class="left1">
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
                    <div className="container-button1">
                        <a href="#/" className="button1" style={{color:"#1e9bff"}}><span>Comecar Agora</span><i></i></a>
                    </div>
                    </div>
  
                    <div class="rigth">
                        <img className="rdc" alt="CBI" src={rdc}></img>
                    </div>
  
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default RDC;