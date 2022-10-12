import * as C from './styles'
import {Input} from "../../components/input";
import {useEffect, useState} from "react";
import {api} from "../../api";
import {CountryItem} from "../../components/countryItem";
import {CountryItemTS} from "../../types/CountryItem";

export const Countries = () =>{
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
        getAllCountries()
    },[])

    const getAllCountries = async () => {
        setLoading(true)
        let countries = await api.getCountries()
        console.log('countries', countries)
        setCountries(countries)
        setLoading(false)
    }

    return (
        <C.CountriesArea>
            <Input/>
            <div className='countries'>
                {loading &&
                    <div className=''>Loading...</div>
                }
                {!loading &&
                    countries.map((item : CountryItemTS) => (
                        <CountryItem
                            name={item.name}
                            capital={item.capital}
                            population={item.population}
                            region={item.region}
                            flag={item.flag}/>
                    ))
                }
            </div>
        </C.CountriesArea>
    )
}