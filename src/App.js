import {BrowserRouter,Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import ProductList from "./ProductList";
import Nopage from "./Pages/Nopage";
import ProductDetail from "./ProductDetail";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/*<Route index element={<Home/>}></Route>*/}
          <Route path="/products" element={<ProductList/>}></Route>
          <Route path="/products/:id" element={<ProductDetail/>}></Route>
          <Route path="*" element={<Nopage/>}></Route>
          {/*<Route path="/admin/" element={<LayoutAdmin/>}></Route>*/}
          {/*<Route path="accounts" element={<Accounts/>}></Route>*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
