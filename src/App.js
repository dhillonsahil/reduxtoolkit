import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { BrowserRouter as Router,
Route, Routes
} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
