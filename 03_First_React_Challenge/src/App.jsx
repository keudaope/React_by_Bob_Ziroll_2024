import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ul>
        <li>Super popular JS library</li>
        <li>Will help me be even more employable</li>
        <li>React has pretty cool logo</li>
      </ul>
    </>
  );
}

export default App;
