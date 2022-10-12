import { useParams } from 'react-router-dom';
import * as C from './styles';
import {useEffect, useState} from "react";
import {CountryTS} from "../../types/Country";
import {api} from "../../api";

export const CountryPage = () => {
   const {name} = useParams();
   const [loading, setLoading] = useState(false);
   const [country, setCountry] = useState<CountryTS[]>([])

    useEffect(() => {
        if (name){
            getCountry(name)
        }
    },[name])

    const getCountry = async (param: string) => {
       setLoading(true)
        let country = await api.getCountry(param)
        setCountry(country)
        console.log(country)
        setLoading(false)
    }

    return(
        <C.CountryPage>
        </C.CountryPage>
    )
}