import React, { useState } from "react";
import Layout from './Components/Layout/Layout';
import "./App.css";
import MainSection from './Components/Layout/MainSection/MainSection';

function App() {
  return (
    <div className="App">
     <Layout>
       <MainSection></MainSection>
     </Layout>
    </div>
  );
}

export default App;
