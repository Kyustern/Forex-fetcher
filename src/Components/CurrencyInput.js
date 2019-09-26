import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Currencies from '../currencyData.js'

console.log(Object.values(Currencies));

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-evenly;
    align-items: center;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 10px;

`

const Dropdown = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('')

    const [selectedCurrencyTheReturn, setSelectedCurrencyTheReturn] = useState('')

    useEffect(() => {
        console.log(selectedCurrency)
        console.log(selectedCurrencyTheReturn)
    }, [selectedCurrency, selectedCurrencyTheReturn])

    const passTheDataMan = () => {
        console.log("passing data to parent...");

    }

    return (

        <>
            <Wrapper>
                <select onChange={e => setSelectedCurrency(e.target.value)} className="ui button">
                    <option>Choose a currency</option>
                    {Object.values(Currencies).map(currency => <option key={currency.name} value={currency.name}>{currency.name}</option>)}
                </select>
                <div>To :</div>
                <select onChange={e => setSelectedCurrencyTheReturn(e.target.value)} className="ui button">
                    <option value='All'>All</option>
                    {Object.values(Currencies).map(currency => <option key={currency.name} value={currency.name}>{currency.name}</option>)}
                </select>
            </Wrapper>

            <Button>Suce</Button>
        </>
    );
}

export default Dropdown