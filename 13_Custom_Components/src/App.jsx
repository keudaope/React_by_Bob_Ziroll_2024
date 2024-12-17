import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Page />
    </>
  );
}

function Page() {
  return (
    <>
      <header>
        <img src="/src/assets/react.svg" alt="react-logo" />
        <h1>Reason I'm excited to learn React</h1>
      </header>
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
      <p>@ 2024 Lindroos development. All rights reserved</p>
    </>
  );
}

export default App;
