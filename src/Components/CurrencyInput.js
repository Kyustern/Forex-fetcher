import React, { useState } from 'react'
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
const SubmitButton = styled.button`
    margin-top: 10px;
    height: 25px;

    display: flex;
    align-items: center;
    width: 25%;
    border-radius: 3px;
    justify-content: space-evenly;
    border: 2px solid grey;
    border-radius: 10px;

    &:hover {
        background-color:grey;
        cursor: pointer
    }

`

const CurrencyInput = ({ onCurrencyInput }) => {

    const [selectedCurrencies, setSelectedCurrencies] = useState({ first: 'USD', second: 'USD' })

    return (

        <>
            <Wrapper>
                <select onChange={e => setSelectedCurrencies({ ...selectedCurrencies, first: e.target.value })} valiue={selectedCurrencies.first} className="ui button">
                    
                    {Object.values(Currencies).map(currency => <option key={currency.code} value={currency.code}>{currency.name}</option>)}
                </select>
                <div>To :</div>
                <select onChange={e => setSelectedCurrencies({ ...selectedCurrencies, second: e.target.value })} value={selectedCurrencies.second} className="ui button">
                    {Object.values(Currencies).map(currency => <option key={currency.code} value={currency.code}>{currency.name}</option>)}
                </select>
            </Wrapper>

            <Wrapper>
                <SubmitButton onClick={() => onCurrencyInput(selectedCurrencies)}>
                    Get Exchange Rate
                </SubmitButton>
            </Wrapper>

        </>
    );
}

export default CurrencyInput