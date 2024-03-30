import {useEffect,useState} from "react";

function useCurrencyinfo(currency){

    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json()) //data as reponse lo or json me convert kro
        .then((res)=>setData(res[currency]));   //data hold bhi krna hai to state me hold kro
    },[currency])
    console.log(data);
    return data;

}

export default useCurrencyinfo;