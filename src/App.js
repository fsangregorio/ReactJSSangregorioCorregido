
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const saludo = 'Bienvenidos/as a la Tienda de Vizzentino'
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo={saludo} greeting='hello' />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer saludo={saludo} greeting='hello' />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;