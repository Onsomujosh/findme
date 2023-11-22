import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"> element={<Home />}</Route>
        <Route path="/login"> element={<Login />}</Route>
        <Route path="/register"> element={<Register />}</Route>
      </Routes>

    </div>
  );
}

export default App;
