import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'
// import './App.css'
import image1 from "./assets/image1.jpg"


function App() {
 const [amount,setAmount]=useState(0);
 const [from,setFrom]=useState("usd");
 const [to,setTo]=useState("inr");
 const [convetamt,setConvetamt]=useState(0);

 const currencyInfo=useCurrencyinfo(from);
 const options=Object.keys(currencyInfo);

 const swap=()=>{
  setFrom(to);
  setTo(from);
  setConvetamt(amount);
  setAmount(convetamt);
 }

 const convert=()=>{
  setConvetamt(amount*currencyInfo[to]);
 }



 return (
  <div
      className="w-full h-screen flex flex-wrap   justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
  >
  <div className="rounded-lg w-1/3 lg:w-1/4 m-2  p-2">
    <img src={image1} alt="side image" className='rounded-lg shadow-md' />
  </div>

      <div className="w-1/2">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <h2 className='text-white text-xl mb-2'>YOU CAN CONVERT ALL TYPE OF CURRENCY HERE..</h2>
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount={amount}
                          currencyOption={options}
                          OnCurrencyChange={(currency)=>setAmount(currency)}
                          selectCurrency={from}
                          onAmountChange={(amount)=>setAmount(amount)}
                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                          
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="From"
                          amount={convetamt}
                          currencyOption={options}
                          OnCurrencyChange={(currency)=>setTo(currency)}
                          selectCurrency={from}
                          amountDisable
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
