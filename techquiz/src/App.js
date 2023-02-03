import './App';
import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Support from './Support/Support';
import Home from './Home/HomePage';
import Footer from './Footer/Footer';
import RegisterPage from './Register/RegisterPage';
import NavBar from './NavBar/Navbar';
import AboutUs from './AboutUS/AboutUs'
import Profile from './Profile/Profile';
import Conceitos from './Conceitosbasicos/Conceitosbas'
import RDC from './RDC/RDC';
import Programacao from './Programacao/Programacao'
import './App.css'
import ADSI from './ADSI/ADSI';
import LoginPage from './Login/LoginPage';
import NavbarR from './Register/NavBarR';
import NavBarL from './Login/NavbarL';
import ProgCateg from './Prog-Categ/ProgCateg';
import NavBarLog from './NavBarLog/NavbarLog';
import Questionario from './Questionario/Questionario'
import Admin from'./AdminPage/ADM';
import EditUsers from './EditUsers/EditUsers';
import QuizStatic from './QuizStatic/QuizStatic'
import Testequiz from './testequiz/testequiz'
import EditQuizs from './EditQuizs/Editquizs'
import InsertQuiz from './InsertQuiz/InsertQuiz';

function App() {
  return (
    <Router>
    <div className="App">
      <div className='content'>
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <NavBar />
            <Home />
            <Footer/>
          </Route>
          {/* HomeLoged */}
          <Route path="/home">
            <NavBarLog />
            <Home />
            <Footer />
          </Route>
          {/* HomeLoged */}
          <Route path="/admin">
            <NavBarLog />
            <Admin />
            <Footer />
          </Route>
          <Route path="/admin-edit-users">
          <NavBarLog />
            <EditUsers />
            <Footer />
          </Route>
          {/* Register */}
          <Route path="/register">
            <NavbarR />
            <RegisterPage />
            <Footer />
          </Route>
          {/* Esquecime */}
          <Route path="/esquecime">
            <NavBar />
          </Route>
          {/* Login */}
          <Route path="/login">
            <NavBarL />
            <LoginPage />
          </Route>
          {/* Conceitos Basicos */}
          <Route path="/conceitos-basicos">
            <NavBar />
            <Conceitos />
            <Footer />
          </Route>
          {/* QuizStatic */}
          <Route path="/quiz">
            <NavBar />
            <QuizStatic />
            <Footer />
          </Route>
          {/* Register */}
          <Route path="/testequiz">
            <NavbarR />
            <Testequiz />
            <Footer />
          </Route>
          {/* Register */}
          <Route path="/edit-quizs">
            <NavbarR />
            <EditQuizs />
            <Footer />
          </Route>
          <Route path="/edit-quiz-insert">
            <NavbarR />
            <InsertQuiz />
            <Footer />
          </Route>
          <Route path="/questionario/:id_quiz">
            <NavBar/>
            <Questionario />
          </Route>   
          {/* Support */}
          <Route path="/support">
            <NavBar />
            <Support />
          </Route>
          {/*AboutUs */}
          <Route path="/aboutus">
            <NavBar />
            <AboutUs />
          </Route>
          {/* Profile */}
          <Route path="/profile">
            <NavBarLog />
            <Profile />
          </Route>
          {/* Redes de Computadores */}
          <Route path="/redes-de-computadores">
            <NavBar/>
            <RDC/>
            <Footer />
          </Route>
          {/* Administracao de Sistemas Operativos */}
          <Route path="/administracao-de-sistemas-informaticos">
            <NavBar/>
            <ADSI />
            <Footer />
          </Route>
          {/* Programacao */}
          <Route exact path="/programacao">
            <NavBar/>
            <Programacao/>
            <Footer />
          </Route>
          {/* Programacao Categorias */}
          <Route path="/programacao/categorias">
            <NavBar />
            <ProgCateg />
            <Footer />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
