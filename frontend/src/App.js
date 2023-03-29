import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import "react-toastify/dist/ReactToastify.css";

// Routing

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/cart" exact element={<Cart/>} />
          <Route path="/not-found" element={<NotFound/>} />
          <Route path="/" exact element={<Home/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route to="/not-found" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
