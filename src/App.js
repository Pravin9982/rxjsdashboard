//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Users from './pages/Users';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/search" Component={Search}></Route>
          <Route path="/users" Component={Users}></Route>

        </Routes>
          
      </Router>
    </>
  );
}

export default App;
