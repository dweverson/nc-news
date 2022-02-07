import { Header } from './components/Header'
import { Nav } from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { Articles } from './components/Articles';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Nav />
    <Articles />
    <Routes>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
