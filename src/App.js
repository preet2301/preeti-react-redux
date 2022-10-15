import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import ProductDetailPage from './pages/product-detail';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product-detail/:productId" element={<ProductDetailPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
