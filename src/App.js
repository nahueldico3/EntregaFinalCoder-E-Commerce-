import './app/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartContextProvider } from './components/CartContext';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import ItemDetailContainer from './pages/ItemDetailsContainer';
import ItemListContainer from './pages/ItemListContainer';

const App = () => {
    return (
      <>
        <BrowserRouter>
          <CartContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/product/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
          </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </>
    );
}

export default App;