import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { StoreProvider } from "./context-and-reducer/StoreContex";
//pages
import { Home } from "./Pages/Home";
import { Basket } from "./Pages/Basket";

//component
import { Navbar } from "./components/Navbar";

function App() {
  
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
