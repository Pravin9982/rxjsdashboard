//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Users from './pages/Users';
import Todo from './pages/Todo';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact Component={Home}></Route>
          <Route path="/search" Component={Search}></Route>
          <Route path="/users" Component={Users}></Route>
          <Route path='/todo' Component={Todo}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
