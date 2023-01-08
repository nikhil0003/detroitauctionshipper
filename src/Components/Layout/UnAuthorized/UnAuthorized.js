import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAuth } from "../../../Store/detoritSlice";

const UnAuthorized = () => {
  const authenciated = false;
  const generateState = (length) => {
    let stateValue = "";
    let alphaNumericCharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let alphaNumericCharactersLength = alphaNumericCharacters.length;
    for (let i = 0; i < length; i++) {
      stateValue += alphaNumericCharacters.charAt(
        Math.floor(Math.random() * alphaNumericCharactersLength)
      );
    }
    return stateValue;
  };

  const generateCodeVerifier = () => {
    let returnValue = "";
    let randomByteArray = new Uint8Array(32);
    window.crypto.getRandomValues(randomByteArray);
    returnValue = btoa(randomByteArray);
    return returnValue;
  };

  const generateCodeChallenge = async () => {
    let codeVerifier = generateCodeVerifier();
    let textEncoder = new TextEncoder("US-ASCII");
    let encodedValue = textEncoder.encode(codeVerifier);
    let digest = await window.crypto.subtle.digest("SHA-256", encodedValue);
    return btoa(Array.from(new Uint8Array(digest)));
  };

  const logincall =
    "http://localhost:9000/oauth2/authorize?" +
    "response_type=code&client_id=messaging-client&scope=openid&redirect_uri=http://127.0.0.1:3000/authorized";
  sessionStorage.setItem("1stcall", true);
  if (sessionStorage.getItem("1stcall")) {
    window.location.href = logincall;
  }

  //   const dispatch = useDispatch();
  //   dispatch(updateAuth({
  //     authenticate: authenciated,
  //     accessToken : 'hello',
  //     refreshToken : 'k',
  //     timeOut : ''
  //   }));

  // const store = useSelector((store)=> store.detroitReducer);
  return (
    <div>
      <div style={{ margin: "30%" }}>Loading</div>
    </div>
  );
};

export default UnAuthorized;
