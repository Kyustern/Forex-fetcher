import React, { useState } from 'react'
import axios from 'axios'
import Moment from 'moment'
import _ from 'lodash'

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
        //Get the data
        const { first, second } = stateCurrencies
        const url = `https://api.exchangeratesapi.io/history?base=${first}&start_at=${timePeriod[1]}&end_at=${timePeriod[0]}&symbols=${second}`
        const { data } = await axios.get(url)
        
        //Get all dates and put them into an array
        let unsortedDates = []
        for (let key in data.rates) {
            unsortedDates.push(key)
            //console.log(`${key} : ${data.rates[key]}`)
        }

        //Sort the array and return it into "sortedDates"
        const sortedDates = unsortedDates.sort((a, b) => new Moment(a).format('YYYYMMDD') - new Moment(b).format('YYYYMMDD'))
        console.log(sortedDates)
        console.log(sortedDates.length)

      
        //Store the dates and their values into two distinct arrays :
        let labels = []
        let values = []

        for (let i = 0; i < sortedDates.length; i++) {
            labels.push(sortedDates[i])

            values.push(Object.values(data.rates[sortedDates[i]])[0])
        }

        console.log(labels, values)
        //console.log(Object.values(data.rates[sortedDates[0]])[0])

        setChartData({labels, values})
    }

    return (
        <div style={{ backgroundImage: 'url(./assets/dark-honeycomb.png)' }}>
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
                <ChartComponent a={chartData}></ChartComponent>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App