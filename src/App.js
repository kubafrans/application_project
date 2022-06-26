import List_of_products from './pages/List_of_products'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FilteredProduct from './pages/FilteredProduct';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navigate to="/1"/>}/>
          <Route exact path="/:id" element={<List_of_products />}/>
          <Route path="/:id/:sort" element={<FilteredProduct />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
