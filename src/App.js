import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterNavbar from './components/FooterNavbar';
import HeaderNavbar from './components/HeaderNavbar';
import Home from './pages/Home'
import Linktree from './pages/Linktree';

function App() {
  return (
    <div>
      <Router>
        <HeaderNavbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/linktree" element={<Linktree/>} />
        </Routes>
        <FooterNavbar/>
      </Router>
        
 
        
    </div>
  );
}

export default App;

