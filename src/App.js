import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Myhobbies from "./components/Myhobbies";
import Mylikes from "./components/Mylikes";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Welcome />
        <GeneralInfo />
        <Education />
        <Myhobbies />
        <Mylikes />
        <Footer />
      </div>
    );
  }
}

export default App;
