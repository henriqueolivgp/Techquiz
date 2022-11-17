import Home from './Home/HomePage';
import './App';
import Footer from './Home/Footer';
import NavBarH from './Home/NavbarH';
import RegisterPage from './Register/RegisterPage'
import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <NavBarH />
            <Home />
            <Footer/>
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
