import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import "./zipCode.css";
import { AppContext } from '../Context';

function CitySearch () {
  const { city, cityData } = useContext(AppContext);

  const [cityVal, setCityVal] = city

  const [dataVal, setDataVal] = cityData

  const handleChange = (e) => {
      setCityVal(e.target.value);
    };

  useEffect(() => {
      let newCity = cityVal.toUpperCase()
      axios.get(`http://ctp-zip-api.herokuapp.com/city/${newCity}`)
          .then(response => {
              const newData = response.data;
              setDataVal(newData);
          })
          .catch(err => console.log(err));
  });


        return (
            <div>
                <form>
                    Enter a city name <br/>
                    <input type="text" name="city" onChange={handleChange}/>
                </form>
                {dataVal.map(data =>
                    <div className="zip">
                        <CityCodeCard zipcode={data} />
                    </div>
                )}
            </div>
        );

};

function CityCodeCard (props) {
      return(
          <div className="zipCard">
              <ul>
                  <li> ZipCode: {props.zipcode} </li>
              </ul>
          </div>
      );
};

export default CitySearch;
