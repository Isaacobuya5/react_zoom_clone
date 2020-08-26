import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <section className="container container__main">
        <SignUp />
      </section>
    </div>
  );
}

export default App;
