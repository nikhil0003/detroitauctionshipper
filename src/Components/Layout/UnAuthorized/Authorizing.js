import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useDispatch} from "react-redux";
import {updateAuth} from '../../../Store/detoritSlice';

const Authorizing = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let url = "http://localhost:9000/oauth2/token";
  const headerConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: "Basic bWVzc2FnaW5nLWNsaWVudDpzZWNyZXQ=",
      "Access-Control-Allow-Origin": "http://127.0.0.1:3000/",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Credentials": "true",
    },
  };
  const bodyData = {
    code: searchParams.get("code"),
    grant_type: "authorization_code",
    redirect_uri: "http://127.0.0.1:3000/authorized",
  };
  
  if (!sessionStorage.getItem("2ndItem")) {
    axios.post(url, bodyData, headerConfig).then(
      (resp) => {
        getUpdateStore(resp);
      },
      (err) => {
        if(err.response.status==='400'){
          console.log('leave');
        }
        else {
          console.log(err);
        }
      }
      
    );
  }
const getUpdateStore = (resp) => {
  sessionStorage.setItem('authenticate',true);
  sessionStorage.setItem('accessToken',resp.data.access_token);
  sessionStorage.setItem('refreshToken',resp.data.id_token);
  sessionStorage.setItem('timeOut',399);
  window.location.href='http://127.0.0.1:3000/home';
};
  return <div>Loading....</div>;
};

export default Authorizing;
