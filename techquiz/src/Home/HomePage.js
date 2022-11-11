import img1 from './Img/containerimg.jpg'
import logo2 from './Img/TechquizBlack.png'
import './Home.css'

const HomePage = () => {
    return ( 
        <div class="flex-container">

        <div class="flex-child">
            <img className='Logo' src={logo2}/>
            <p className='intro'>Com o Techquiz pode avaliar o  seu conhecimento e saber <br/>o seu nível em todas as diversas áreas de informática.</p>
        </div>
  
        <div class="flex-child green">
            <img className='banner' src={img1}/>
        </div>
        </div>
     );
}
 
export default HomePage;