import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import floral_banner from "./Components/Asset/banner_floral.jpg";
import wood_banner from "./Components/Asset/banner_wood.jpg";
import spice_banner from "./Components/Asset/banner_spice.jpg";

function App() {
  return (
    <div>
      <BrowserRouter basename="/la-boutique-x">
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/floral"
            element={<ShopCategory category="floral" banner={floral_banner} />}
          />
          <Route
            path="/wood"
            element={<ShopCategory category="wood" banner={wood_banner} />}
          />
          <Route
            path="/spice"
            element={<ShopCategory category="spice" banner={spice_banner} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
