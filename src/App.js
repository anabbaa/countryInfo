
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Country from "./components/Country";
const App = () => {
  //here to update and hack user input
  const [userInput, setUserInput] = useState("");
  // here to have infos from api reqzst
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  //we need here staus because thi API is changeable
  const getCountry = (name)=>{
    // this method transfer can understand any input which is in English
    let textToUrl = encodeURIComponent(userInput);
    console.log(textToUrl);
    let endPoint = `https://restcountries.com/v3.1/name/${textToUrl}`;
  
    axios(endPoint)
      .then(( data ) => setResults(data.data))
      .catch((err) => console.log(`Your had an ${err}`));
  }

  function changeHandle(e) {
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    getCountry("name", userInput)
    setUserInput("");
  }
  if (loading) return <Loading />;

  return (
    <React.Fragment>
      <div className="fatherInput">
      <div className="title">Countries Information</div>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          placeholder="Write a country name"
        />
        <button type="submit">Search</button>
      </form>
      </div>
      <Country results={results} getCountry = {getCountry} />
    </React.Fragment>
  );
};
export default App;