import './App';
import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Quizs from './Quiz\'s/Quizs';
import Support from './Support/Support';
import Home from './Home/HomePage';
import Footer from './Home/Footer';
import RegisterPage from './Register/RegisterPage'
import NavBar from './NavBar/Navbar';

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
          <Route path="/conceitosbasicos">
            <NavBar />
          </Route>
          <Route path="/quizs">
            <NavBar/>
            <Quizs />
          </Route>
          <Route path="/support">
            <NavBar />
            <Support />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
