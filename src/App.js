import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Nav } from './components/Nav';
import { Articles } from './components/Articles';
import { SingleArt } from './components/SingleArt';
import { useState } from 'react'

function App() {

  const [sortBy, setSortBy] = useState()
  const [sortAscDesc, setSortAscDesc] = useState()

  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    
    <Nav setSortBy={setSortBy} setSortAscDesc={setSortAscDesc}/>
      <Routes>
        <Route path='/' element={<Articles sortBy={sortBy} sortAscDesc={sortAscDesc}/>} />
        
        <Route path='/articles/:article_id' element={<SingleArt  />} />
        <Route path='/articles/topic/' element={<Articles sortBy={sortBy} sortAscDesc={sortAscDesc}/>} />
        <Route path='/articles/topic/:topic' element={<Articles sortBy={sortBy} sortAscDesc={sortAscDesc}/>} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
