import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import "./zipCode.css";
import { AppContext } from '../Context';

function ZipCode (props) {
  const { zip, zipData } = useContext(AppContext);

  const [zipVal, setZipVal] = zip
  const [dataVal, setDataVal] = zipData

  const handleChange = (event) => {
      setZipVal(event.target.value)
  }

  useEffect (() => {
    axios.get(`http://ctp-zip-api.herokuapp.com/zip/${zipVal}`)
        .then(response => {
            const newData = response.data;
            setDataVal(newData);
        })
        .catch(err => console.log(err));
  })


  return (
      <>
          <form >
              Enter a Zip Code <br/>
              <input type="text" name="zip" onChange={handleChange}/>
          </form>
          {dataVal.map(data =>
              <div key={data.RecordNumber} className="zip">
                  <ZipCodeCard city={data.City} state={data.State}
                  latitude={data.Lat} longitude={data.Long}
                  population={data.EstimatedPopulation} wages={data.TotalWages}/>
              </div>
          )}
      </>
  );
};

function ZipCodeCard (props) {
  return(
      <div className="zipCard">
          <ul>
              <h3> {props.city}, {props.state}</h3>
              <li> State: {props.state} </li>
              <li> Location: ({props.latitude}, {props.longitude}) </li>
              <li> Population (estimated): {props.population} </li>
              <li> Total Wages: {props.wages} </li>
          </ul>
      </div>
  );
};

export default ZipCode;
