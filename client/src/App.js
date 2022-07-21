import './App.css';
import {Routes, Route} from "react-router-dom"
import Main from './pages/Main';
import DetailProduct from './pages/DetailProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:product_id" element={<DetailProduct />} />
        <Route path="/:product_id/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
