import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import StreamBasedRoutes from "./routes/StreamBasedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <ToastContainer />
        <StreamBasedRoutes />
      </main>
    </Router>
  );
};

export default App;
