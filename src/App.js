import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Registration from './Components/Registration';
import Home from './Home';
import Main from './Components/main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/main" element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
