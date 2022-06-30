import Home from "./components/Home";
import Product from "./components/Product";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
       <Routes>
          <Route path="/product/:id" element = {<Product/>}>
          </Route>
          <Route path="/" element = {<Home/>}>
          </Route>
        </Routes>
  );
}

export default App;
