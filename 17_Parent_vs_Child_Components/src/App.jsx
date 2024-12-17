import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  );
}

function Page() {
  return (
    <>
      <h1>Reason I'm excited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there!
        </li>
        <li>
          I am more likely to g et a job as a front end developer if I know
          React
        </li>
      </ol>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <img src="/src/assets/react.svg" alt="react-logo" className="nav-logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>@ 2024 Lindroos development. All rights reserved</p>
    </footer>
  );
}
export default App;
