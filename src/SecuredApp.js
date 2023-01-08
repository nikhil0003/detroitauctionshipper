import React from "react";
import App from "./App";
import UnAuthorized from "./Components/Layout/UnAuthorized/UnAuthorized";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authorizing from './Components/Layout/UnAuthorized/Authorizing';
function SecuredApp() {
  const store = useSelector((store) => store.detroitReducer);
  const auth = (store.authenticate || sessionStorage.getItem('authenticate'))
  return !auth ? (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/unauthorize" element={<UnAuthorized />} />
          <Route exact path="/authorized" element={<Authorizing />} />
        </Routes>
      </BrowserRouter>
    </div>
  ) : (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<App />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default SecuredApp;
//export default SecuredApp;
