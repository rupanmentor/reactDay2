import React from "react";
import Header from "./Components/Landing Page In React/Header";
import Footer from "./Components/Landing Page In React/Footer";
import CompA from "./Components/Props Parent To Child/CompA";


const App = () => {
  let b = 20;
  return (
    <div>
      {/* <Header />
      <Home />
      <Footer /> */}
      <h1>Parent Component B value : {b}</h1>
       <CompA b={b} />
    </div>
  );
};

export default App;
