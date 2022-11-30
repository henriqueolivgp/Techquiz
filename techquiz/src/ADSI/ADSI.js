import adsi from './img/imgbin-computer-icons-system-administrator-avatar-BHuV169Xu9fET8vGWbEACu2EU-removebg-preview.png'
import './ADSI.css'

const ADSI = () => {
    return ( 
        <div className="content-adsi">
            <div className="fraseini-adsi">
            <h2>Administracao de sistemas Informaticos</h2>
            <a href="#/" className="frase-adsi">Faça agora o quiz de Conceiros Básicos da Informática, para saber o seu nível de conhecimentos relativos a Conceitos Básicos da Informática .</a>
            </div>
            <div className="box-adsi">
                <div className="desc-adsi">
                <h1 className="tittle-adsi">Indice dos conceitos basicos de informatica</h1>
                
                <div class="lr-container-adsi">

                    <div class="left-adsi">
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
                    <div className="container-button-adsi">
                        <a href="#/" className="button-adsi" style={{color:"#1e9bff"}}><span>Comecar Agora</span><i></i></a>
                    </div>
                    </div>
  
                    <div class="rigth-adsi">
                        <img className="CB" alt="CBI" src={adsi}></img>
                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default ADSI;