import React from "react";
const Country = ({ results, getCountry })=>{
  console.log(results);
  const newdata = Object.entries(results).map(([key,value], i)=>{
    console.log(value);
    return(
      <div className="father">
        <div className="flexRow">
        <span >Name:</span><p >{value.name.common}</p> 
        </div>
        <div className="flexRow">

        <span >Capital::</span> <p>{value.capital}</p>
        </div>
        <div className="flexRow">

        <span >Population::</span><p>{value.population}</p>
        </div>
        <div className="flexRow">
          {/* here i want to map because i have object inside object in api */}

        <span >Language:</span><p className="fatherlanguage">{Object.entries(value.languages).map(([ele], i)=>{
          return(
            <div className="father-lang-info">
              <p>{ele}</p>
            </div>
          )
        })}</p>
        </div>
        <div className="flexRow">
                    {/*here i used join to with citeria which is space to make spaces bwtween borders */}
        <span >Borders:</span> <div className="border-father"><p className="borders">	{value.borders.join(" ")}</p></div>
        </div>
              <div className="flexRowCurrency">
        <span>Currency:</span><div className="currency">{Object.entries(value.currencies).map(([key,value], i)=>{
          return(
            <div className="currencyInfo">
            <p>{value.name}</p><p>{value.symbol}</p>
            </div>
          )
        })}</div>
        </div>
      
        <div className="flaFather">
              <img src={value.flags.png}/>
              </div>
      </div>
    )
  })
  return <React.Fragment>
    <p >
      {newdata}   
    </p>
  </React.Fragment>;
}
export default Country;