import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import WebAdmin from "./components/WebAdmin";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <Routes>
          <Route exact path="/" element={<ProductList />}></Route>
          <Route exact path="/webadmin" element={<WebAdmin />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/edit/:id" element={<EditProduct />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
