import './App';
import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Quizs from './Quiz\'s/Quizs';
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

function App() {
  return (
    <Router>
    <div className="App">
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <NavBar />
            <Home />
            <Footer/>
          </Route>
          <Route path="/register">
            <NavBar />
            <RegisterPage />
          </Route>
          <Route path="/esquecime">
            <NavBar />
          </Route>
          <Route path="/login">
            <NavBar />
          </Route>
          <Route path="/conceitos-basicos">
            <NavBar />
            <Conceitos />
            <Footer />
          </Route>
          <Route path="/quizs">
            <NavBar/>
            <Quizs />
          </Route>
          <Route path="/support">
            <NavBar />
            <Support />
          </Route>
          <Route path="/aboutus">
            <NavBar />
            <AboutUs />
          </Route>
          <Route path="/profile">
            <NavBar />
            <Profile />
          </Route>
          <Route path="/redes-de-computadores">
            <NavBar/>
            <RDC/>
          </Route>
          <Route path="/administracao-de-sistemas-informaticos">
            <NavBar/>
            <ADSI />
          </Route>
          <Route path="/programacao">
            <NavBar/>
            <Programacao/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
