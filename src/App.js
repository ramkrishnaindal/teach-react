import React, { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { MyContext } from "./context/useProfileContext";
import Home from "./Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

function About() {
  const global = useContext(MyContext);
  return (
    <div>
      <h2>About</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        {"Counter " + global.counter}
        <button onClick={() => global.setCounter(++global.counter)}>
          increment
        </button>
      </nav>
    </div>
  );
}
export default App;
