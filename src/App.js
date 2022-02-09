import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Nav } from './components/Nav';
import { Articles } from './components/Articles';
import { SingleArt } from './components/SingleArt';

function App() {


  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    
    <Nav />
      <Routes>
        <Route path='/' element={<Articles />} />
        
        <Route path='/articles/:article_id' element={<SingleArt />} />
        <Route path='/articles/topic/:topic' element={<Articles />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
