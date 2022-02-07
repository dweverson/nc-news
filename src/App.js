import { Header } from './components/Header'
import { Nav } from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { Articles } from './components/Articles';
import { SingleArt } from './components/SingleArt';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Nav />
      <Routes>
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:article_id' element={<SingleArt />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;