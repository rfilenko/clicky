import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
function App({ children }) {
  return (
    <div className="container">
      <div className="grid">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default App;
