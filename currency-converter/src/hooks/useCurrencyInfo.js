import { useEffect,useId,useState } from "react";
import React from 'react'

//this custom hook will return currency data of certain country
function useCurrencyInfo(currency){
    
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json')
        .then((res)=>res.json())
        .then((data)=>setData(res[currency]))
    },[currency])



    return data;
}

export default useCurrencyInfo
