import React, { useState } from 'react'
import axios from 'axios'

import CurrencyInput from './CurrencyInput'
import ResponseHeader from './ResponseHeader'
import Footer from './Footer'
import ChartComponent from './Chart'

const App = () => {
    // const [firstCurrency, setFirstCurrency] = useState('USD')
    // const [secondCurrency, setSecondCurrency] = useState('USD')
    const [stateCurrencies, setStateCurrencies] = useState({ stateFirst: 'USD', stateSecond: 'USD' })
    const [currentRate, setCurrentRate] = useState(0)
    const [chartData, setChartData] = useState({})

    const request = async currencies => {
        const { first, second } = currencies
        setStateCurrencies({ first, second })


        if (first === second) {
            setCurrentRate(1)
        } else {
            const url = `https://api.exchangeratesapi.io/latest?base=${first}`
            const { data } = await axios.get(url)
            const rate = data.rates[`${second}`]
            setCurrentRate(rate)
            console.log(stateCurrencies);
        }
    }

    const displayGraph = async timePeriod => {
        const { first, second } = stateCurrencies
        const url = `https://api.exchangeratesapi.io/history?base=${first}&start_at=2018-01-01&end_at=2018-09-01&symbols=${second}`
        const { data } = await axios.get(url)
        // console.log(data)
        // console.log(timePeriod)
        setChartData(data)
    }

    return (
        <div style={{backgroundImage: 'url(./assets/dark-honeycomb.png)'}}>
            <div className="ui container">
                <h1 style={{ textAlign: "center" }}>Get exchange rates here :</h1>
                <CurrencyInput onCurrencyInput={currencies => request(currencies)} />

                {
                    !!currentRate ?
                        <ResponseHeader
                            //displayGraph={() => displayGraph()}
                            rate={currentRate}
                            firstCurrency={stateCurrencies.first}
                            secondCurrency={stateCurrencies.second}
                            onTimePeriodSelect={timePeriod => displayGraph(timePeriod)} />
                        :
                        <span>Enter currencies to receive exchange rates</span>
                }
            </div>
            <ChartComponent a={chartData}></ChartComponent>
            <Footer></Footer>
        </div>
    );
}

export default App