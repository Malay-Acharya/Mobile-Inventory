import Home from "./components/Home";
import Product from "./components/Product";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
       <Routes>
          <Route path="/product/:id" element = {<Product/>}>
          </Route>
          <Route path="/" element = {<Home/>}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
