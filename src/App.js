import React from "react";
import Layout from "./Components/Layout/Layout";
import "./App.css";
import MainSection from "./Components/Layout/MainSection/MainSection";

const App = () => {
  return (
    <div className="App">
      <Layout>
      <MainSection/>
      </Layout>
    </div>
  );
};

export default App;
