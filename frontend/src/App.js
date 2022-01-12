import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ScrollToTop from "./common/ScrollToTop/ScrollToTop";
import TopNav from "./components/TopNav/TopNav";
import MaiNav from "./components/MainNav/MaiNav";
import Footer from "./components/Footer/Footer";
import Author from "./components/Author/Author";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <TopNav/>
        <MaiNav/>
        <Route path="/" component={HomePage} exact/>
        <Footer/>
        <Author/>
      </Router>
    </>
  );
};

export default App;
