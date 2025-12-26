import "./App.less";
import React from "react";
import Container from "./components/container/Container";

function App() {
  return (
    <React.Fragment>
      <Container>
        <h1>I started my project in Vite + React at 9:56 PM 25/12/2025</h1>
        <img src="/src/assets/cv.jpg" className="logo" alt="CV logo " />
      </Container>
    </React.Fragment>
  );
}

export default App;
