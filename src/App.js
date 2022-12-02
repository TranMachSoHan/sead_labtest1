import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/Admin/Admin';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Visitor from './pages/Visitor/Visitor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/visitor' element={<Visitor/>}/>
          <Route path='/admin/*' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
