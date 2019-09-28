import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Currencies from '../currencyDataForexOpen.js'

//console.log(Object.values(Currencies));

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 0 5%;
    justify-content: space-evenly;
    align-items: center;
`
// const SubmitButton = styled.button`
//     display: flex;
//     align-items: center;
//     width: 100%;
//     border-radius: 10px;

// `

const CurrencyInput = (props) => {

    const [selectedCurrency, setSelectedCurrency] = useState('')

    const [selectedCurrency2, setSelectedCurrency2] = useState('')

    useEffect(() => {
        //console.log(selectedCurrency)
        //console.log(selectedCurrency2)
    }, [selectedCurrency, selectedCurrency2])

    return (

        <>
            <Wrapper>
                <select onChange={e => setSelectedCurrency(e.target.value)} className="ui button">
                    <option>Choose a currency</option>
                    {Object.values(Currencies).map(currency => <option key={currency.code} value={currency.code}>{currency.name}</option>)}
                </select>
                <div>To :</div>
                <select onChange={e => setSelectedCurrency2(e.target.value)} className="ui button">
                    <option value='All'>All</option>
                    {Object.values(Currencies).map(currency => <option key={currency.code} value={currency.code}>{currency.name}</option>)}
                </select>
            </Wrapper>

            <button onClick={() => props.lol(selectedCurrency, selectedCurrency2)}>
                AAAAAAAAAAAH
                </button>

        </>
    );
}

export default CurrencyInput