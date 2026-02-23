import { use, useEffect,useState } from "react";

function useCurrencyConvert(currency) {
    const [data,setData]=useState({})
    useEffect(()=>{

fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

        .then(res=>res.json())
        .then(res=>setData(res[currency]))
        console.log(data)
        return data;
    },[currency])
}

export default useCurrencyConvert;