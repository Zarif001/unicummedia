import React from "react";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";
import ReactGA from "react-ga";
import Snowfall from "react-snowfall";

const TRACKING_ID = "G-BQ6CHGCNWK";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname);

// Отслеживание события
ReactGA.event({
  category: "User",
  action: "Logged In",
});

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Snowfall snowflakeCount={400} />
    </div>
  );
}

export default App;
