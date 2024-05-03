/*PERSONAL PAGE COMPONENTS:
* 1. NavigationBar
* 2. HeroSection= */
import React from "react";
import './App.css';
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <NavigationBar/>
          <HeroSection/>
      </header>
        <main></main>
        <footer></footer>
    </div>
  );
}

export default App;
