import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import Carts from './components/Carts';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-50 h-full md:h-screen">
        <Header />
        <Routes>
          <Route path="/carts" element={<Carts />} />
          <Route index element={<Products />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
