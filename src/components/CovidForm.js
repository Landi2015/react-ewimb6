import React, { useState } from "react";

function CovidForm(props) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [IDNumber, setIDNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Temperature, setTemperature] = useState("");
  const [radio, setRadio] = useState("");
  const [radio2, setRadio2] = useState("");
  const [radio3, setRadio3] = useState("");

  const handleSubmit = (e) => {
    props.handleSubmit(
      FirstName,
      LastName,
      IDNumber,
      Address,
      PhoneNumber,
      Temperature,
      radio,
      radio2,
      radio3
    );
    e.preventDefault();
  };

  const handleChangeFirstName = (e) => {
    e.preventDefault();
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    e.preventDefault();
    setLastName(e.target.value);
  };
  const handleChangeIDNumber= (e) => {
    e.preventDefault();
    setIDNumber(e.target.value);
  };
  const handleChangeAddress = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
  };
  const handleChangePhoneNumber = (e) => {
    e.preventDefault();
    setPhoneNumber(e.target.value);
  };
  const handleChangeTemperature = (e) => {
    e.preventDefault();
    setTemperature(e.target.value);
  };

  return (
    <div className="container bg- mb-2 ml-2">
      <br />
      <br />

      <h2>Covid-19 Screening Form </h2>
      <h6>Checklist for visitors and employees</h6>

      <br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder=" First Name "
          className="form-control w-75 mt-3"
          onChange={handleChangeFirstName}
          required
        />

        <input
          type="text"
          placeholder=" Last Name "
          className="form-control w-75 mt-3"
          onChange={handleChangeLastName}
          required
        />

        <input
          type="text"
          placeholder=" ID Number "
          className="form-control w-75 mt-3"
          onChange={handleChangeIDNumber}
          required
        />

        <input
          type="text"
          placeholder=" Address "
          className="form-control w-75 mt-3"
          onChange={handleChangeAddress}
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="form-control w-75 mt-3"
          onChange={handleChangePhoneNumber}
          required
        />

        <input
          type="text"
          placeholder=" Temperture"
          className="form-control w-75 mt-3"
          onChange={handleChangeTemperature}
          required
        />

        <br />

        <div className="heading mt-3">
          <h2>Answer following questions.</h2>
        </div>

        <div className="form-check mt-5 ">
          <h6>
            <label> Have you been diagnosed with Covid-19?{radio}</label>
          </h6>
          <input
            type="radio"
            value="yes"
            id="grip1"
            checked={radio === "Yes"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />
          Yes
          <br />
          <input
            id="grip1"
            type="radio"
            value="No"
            checked={radio === "No"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />
          No
          <h6>
            <label>
              Have you been incontact with someone tested positive for Covid-19?
              {radio2}
            </label>
          </h6>

          <input
            type="radio"
            value="Yes"
            id="grip2"
            checked={radio2 === "Yes"}
            onChange={(e) => {
              setRadio2(e.target.value);
            }}
          />
          Yes
          <br />

          <input
            type="radio"
            value="No"
            id="grip2"
            checked={radio2 === "No"}
            onChange={(e) => {
              setRadio2(e.target.value);
            }}
          />
          No
          <br />
          <h6>
            <label>Any Covid Symptoms?{radio3}</label>
          </h6>

          <input
            type="radio"
            value="Fever"
            id="grip3"
            checked={radio3 === "Fever"}
            onChange={(e) => {
              setRadio3(e.target.value);
            }}
          />
          Fever
          <br />
          <input
            type="radio"
            value="Cough"
            id="grip3"
            checked={radio3 === "Cough"}
            onChange={(e) => {
              setRadio3(e.target.value);
            }}
          />
          Cough
          <br />
          <input
            type="radio"
            value="shortness of Breath"
            id="grip3"
            checked={radio3 === "shortness of Breath"}
            onChange={(e) => {
              setRadio3(e.target.value);
            }}
          />
          shortness of Breath
          <br />
          <input
            type="radio"
            value="None"
            id="grip3"
            checked={radio3 === "None"}
            onChange={(e) => {
              setRadio3(e.target.value);
            }}
          />
          None
        </div>

        <br />

        <input
          className="btn btn-light mb-1 ml-4"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        />

        <input 
        className="btn btn-success mb-1 ml-3"
         type="reset" />
         
      </form>
    </div>
  );
}

export default CovidForm;
