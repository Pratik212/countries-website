import * as C from './styles'
import {SingleCountryTS} from "../../types/SingleCountry";
import {Link} from "react-router-dom";

export const SingleCountry = ({
                                  name,
                                  nativeName,
                                  population,
                                  region,
                                  subregion,
                                  capital,
                                  topLevelDomain,
                                  currencie,
                                  languages,
                                  flag,
                                  borders
                              }: SingleCountryTS) => {
    return (
        <C.CountryData>
            <img src={flag} alt={`Bandeira do pafs: ${name}`}/>
            <div className="data--area">
                <h1>{name}</h1>
                <div className="date--firstArea">
                    <p><span>Native Name:</span>{nativeName}</p>
                    <p><span>Population:</span>{population}</p>
                    <p><span>Region:</span>{region}</p>
                    <p><span>Subregion:</span>{subregion}</p>
                    {capital &&
                        <p><span>Capital: </span>{capital}</p>
                    }
                    <p className="topLevel"><span>Top Level Domain:</span>{topLevelDomain}</p>
                    {currencie &&
                        <p><span>Currencie: </span>{currencie.map(item =>item.name)}</p>
                    }
                    <p><span>Languages:</span>{languages.map((item,index) =>(<span key={index} className="language">{item.name}</span>))}</p>
                </div>
                {borders &&
                <div className="border--area">
                    <p>Border Countries</p>
                    <div className="borders">
                        {borders.map((item, index) => <Link to={`/code/${item}`} key={index}>{item}</Link>)}
                    </div>
                </div>
                }
            </div>
        </C.CountryData>
    )
}