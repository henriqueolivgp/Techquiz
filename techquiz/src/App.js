import Home from './Home/HomePage';
import './App';
import NavBarH from './Home/NavbarH';

function App() {
  return (
    <div className="App">
      <NavBarH/>
      <Home/>
      <div className='content'>
      </div>
    </div>
  );
}

export default App;
