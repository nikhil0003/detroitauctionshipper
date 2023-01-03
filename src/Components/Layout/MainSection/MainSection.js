import React ,{useState}from "react";
import Search from "../../Search/Search";
import UserForm from '../../UserForm/UserForm';

const MainSection = () => {
  const initialState = {
    firstName : '',
    lastName : '',
    username : '',
    email : '',
    phone : '',
    address : '',
    address2 : '',
    state : '',
    country : '',
    zip : '',
    lotno : '',
    lotdescription : '',
    link : '',
    lotvalue : '',
    declaredvalue : '',
    boxsize : '',
    weight : '',
    bubbles : false,
    foam : false,
    foamsheet : false,
    doubleBox : false,
    cardBoardpkg : false,
    penuts : false,
    other : '',
    estimate : '',
    shipvia : ''


  };

  const [userDetails,setUserDetails] =  useState(initialState);
  const handleInput = (event) => {
    console.log(event.target.value);
    const newDeatils = {...userDetails,[event.target.id] : event.target.value};
    setUserDetails(newDeatils);
  };
  const submitHandler = (event) =>{
    event.preventDefault();
    console.log(userDetails);
  };
  return (
    <div className="container">
      <form onSubmit = {submitHandler}>
        <div className="row">
          <div className="col-md-6 mb-3 ml-auto">
            <Search></Search>
          </div>
        </div>
        <hr className="mb-4" />
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder=""
              value= {userDetails.firstName}
              required=""
              onChange= {handleInput}
            
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder=""
              value={userDetails.lastName}
              required=""
              onChange= {handleInput}
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              required={userDetails.username}
              onChange= {handleInput}
            />
            <div className="invalid-feedback">
              Your username is required.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              onChange= {handleInput}
              value = {userDetails.email}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email">
              Phone <span className="text-muted">(Optional)</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="+12345678"
              onChange= {handleInput}
              value = {userDetails.phone}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="1234 Main St"
            required=""
            onChange= {handleInput}
            value = {userDetails.address}
          />
          <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="address2">
            Address 2 <span className="text-muted">(Optional)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Apartment or suite"
            onChange= {handleInput}
            value = {userDetails.address2}
          />
        </div>

        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="country">Country</label>
            <select
              className="custom-select d-block w-100"
              id="country"
              required=""
              onChange= {handleInput}
              value = {userDetails.country}
            >
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <select
              className="custom-select d-block w-100"
              id="state"
              required=""
              onChange= {handleInput}
              value = {userDetails.state}
              
            >
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="zip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder=""
              required=""
              onChange= {handleInput}
              value = {userDetails.zip}
            />
            <div className="invalid-feedback">Zip code required.</div>
          </div>
        </div>
        <hr className="mb-4" />
        <h4 className="mb-3">Auction Details</h4>

        <div className="mb-3">
          <label htmlFor="lotno">Lot No</label>
          <input
            type="text"
            className="form-control"
            id="lotno"
            placeholder="1234"
            required=""
            onChange= {handleInput}
            value = {userDetails.lotno}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lotno">Lot No</label>
          <input
            type="text"
            className="form-control"
            id="lotno"
            placeholder="1234"
            required=""
            onChange= {handleInput}
            value = {userDetails.lotno}
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="lotdescription">Lot Description</label>
            <input
              type="text"
              className="form-control"
              id="lotdescription"
              placeholder=""
              value = {userDetails.lotdescription}
              required=""
              onChange= {handleInput}
            />
           
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="Link">Link</label>
            <input
              type="text"
              className="form-control"
              id="link"
              placeholder=""
              required=""
              onChange= {handleInput}
              value = {userDetails.link}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="lotvalue">Value</label>
          <input
            type="text"
            className="form-control"
            id="lotvalue"
            placeholder="Value"
            required=""
            onChange= {handleInput}
            value = {userDetails.value}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="declaredvalue">Declared Value</label>
          <input
            type="text"
            className="form-control"
            id="declaredvalue"
            placeholder="Declaredvalue"
            required=""
            onChange= {handleInput}
            value = {userDetails.declaredvalue}
          />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="boxsize">Box Size</label>
            <input
              type="text"
              className="form-control"
              id="boxsize"
              placeholder=""
              required=""
              onChange= {handleInput}
              value = {userDetails.boxsize}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              className="form-control"
              id="weight"
              placeholder=""
              required=""
              onChange= {handleInput}
              value = {userDetails.weight}
            />
          </div>
        </div>
        <div>
        </div>
        
        <hr className="mb-4" />
        <h4 className="mb-3">Packaging Details</h4>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="bubbles"
            onChange= {handleInput}
            checked = {userDetails.bubbles}
          />
          <label className="custom-control-label" htmlFor="bubbles">
          Bubbles
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="foam"
            onChange= {handleInput}
            checked = {userDetails.foam}
          />
          <label className="custom-control-label" htmlFor="foam">
          Foam 
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="foamsheet"
            onChange= {handleInput}
            checked = {userDetails.foamsheet}
          />
          <label className="custom-control-label" htmlFor="foamsheet">
          Foam sheet
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="doubleBox"
            onChange= {handleInput}
            checked = {userDetails.doubleBox}
          />
          <label className="custom-control-label" htmlFor="doubleBox">
          Double Box 
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="cardBoardpkg"
            onChange= {handleInput}
            checked = {userDetails.cardBoardpkg}
          />
          <label className="custom-control-label" htmlFor="cardBoardpkg">
            CardBoard Packaging
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="penuts"
            onChange= {handleInput}
            checked = {userDetails.penuts}
          />
          <label className="custom-control-label" htmlFor="penuts">
            Penuts
          </label>
        </div>
        <div className="custom-control">
        <label htmlFor="other">Other Packing Details</label>
          <input
            type="text"
            className="form-control"
            id="other"
            placeholder="Details"
            required=""
            onChange= {handleInput}
            checked = {userDetails.other}
          />
        </div>
        <div className="row mt-3">
          <div className="col-md-6 mb-3">
            <label htmlFor="estimate">Estimate</label>
            <input
              type="text"
              className="form-control"
              id="estimate"
              placeholder="$"
              value={`${userDetails.estimate}`}
              required=""
              onChange= {handleInput}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="shipvia">Shipping Via</label>
            <input
              type="text"
              className="form-control"
              id="shipvia"
              placeholder="Shipping Via"
              value = {userDetails.shipvia}
              required=""
              onChange= {handleInput}
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>
        </div>
        <hr className="mb-4" />
        <button className="btn btn-primary btn-lg btn-block" type="submit">
          Continue to Review
        </button>
      </form>
    </div>
  );
};
export default MainSection;
