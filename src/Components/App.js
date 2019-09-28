import React, { useState } from 'react'
import axios from 'axios'

import CurrencyInput from './CurrencyInput' 

// const request = async e => {

// }

const App = () => {

    const [firstCurrency, setFirstCurrency] = useState('')
    const [secondCurrency, setSecondCurrency] = useState('')
    const [resData, setResData] = useState({})

    const request = async (selectedCurrency, selectedCurrency2) => {
        setFirstCurrency(selectedCurrency)
        setSecondCurrency(selectedCurrency2)
        console.log(selectedCurrency, selectedCurrency2);
        

        setResData(
            {
                firstCurrency,
                secondCurrency
            }
        )
        
        //await axios.get(`https://api.exchangeratesapi.io/latest?base='JPY'`)
        //await axios.get(`https://api.exchangeratesapi.io/latest?base=${firstCurrency}`)
    }

    console.log(resData);

    return (
        <div className="ui container">
            <h1 style={{ textAlign: "center" }}>Get some fine exchange rates here</h1>
            <CurrencyInput lol={request} />

            <h1>Exchange rate of {firstCurrency} to {secondCurrency} is : --Request response goes here--</h1>
        </div>
    );
}

export default App