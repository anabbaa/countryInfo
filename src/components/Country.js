import React from "react";

const Country = ({ results, getCountry }) => {
  const lands = results.map((obj, i) => {
    console.log(obj);
    const { name, flag, capital, population, borders, languages, currencies } = obj;
    return (
      <div >
       <div className="father" key={i} >
        
        <p>{name}</p>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        
        <div className="border">Border:
          {borders.map((border, i) => (
            <span  key={i} onClick={() => getCountry("name", border)}>
                 &nbsp;&nbsp;{border}
            </span>
          ))}
        </div>
        
        <p className="currency">Currency: {currencies.map((currency)=>(
          <span onClick={()=> getCountry("currency", currency.name)}>{currency.name}</span>
        ))}

        </p>

        <p className="lang">
          language:
          {languages.map((lang) => (
            <span onClick={() => getCountry("lang", lang.iso639_1)}>
              {lang.name}
            </span>
          ))}
        </p>
        <img src={flag} alt={name} className="Flag" />
      </div>
      </div> 
    );
  });

  return <React.Fragment>{lands}</React.Fragment>;
};
export default Country;
