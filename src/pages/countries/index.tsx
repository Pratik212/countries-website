import * as C from './styles'
import {Input} from "../../components/input";
import {useEffect, useState} from "react";
import {api} from "../../api";
import {CountryItem} from "../../components/countryItem";
import {CountriesTs} from "../../types/Countries";

export const Countries = () =>{
    const [countries, setCountries] = useState<CountriesTs[]>([])
    const [search, setSearch] = useState('')
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

    const lowerSearch = search.toLowerCase()

    const filterCountries = countries.filter(country => country.name.toLowerCase().includes(lowerSearch) || country.region.toLowerCase().includes(lowerSearch))

    return (
        <C.CountriesArea>
            <Input
                value={search}
                setSearch={setSearch}
            />
            <div className='countries'>
                {loading &&
                    <div className=''>Loading...</div>
                }
                {!loading &&
                filterCountries.map((item) => (
                        <CountryItem
                            name={item.name}
                            capital={item.capital}
                            population={item.population}
                            region={item.region}
                            flag={item.flags.png}
                        />
                    ))
                }
            </div>
        </C.CountriesArea>
    )
}