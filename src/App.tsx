import Bodypage from './Components/bodypage';
import Footer from './Components/footer';
import Navrouter from './Components/navbar';
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Navrouter></Navrouter>
        <Bodypage></Bodypage>
      </Router>
    </div>
  );
}

export default App;
