import { useState } from "react";
import "./App.css";
import Index from "./pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </>
  );
}

export default App;
