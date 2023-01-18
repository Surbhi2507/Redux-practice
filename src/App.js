import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
