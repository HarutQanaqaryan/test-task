import { Route, Routes } from "react-router-dom";
import { BasketPage } from "./BasketPage";
import { ProductsPage } from "./ProductsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="basket" element={<BasketPage />} />
      </Routes>
    </div>
  );
}

export default App;
