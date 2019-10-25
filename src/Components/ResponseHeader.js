import React, { useState } from 'react'
import styled from 'styled-components'

const GraphEnable = styled.button`
    margin-top: 10px;
    height: 25px;

    display: flex;
    align-items: center;
    width: 100%;
    border-radius: 3px;
    border: 2px solid grey;
    border-radius: 10px;

    &:hover {
        background-color:grey;
        cursor: pointer
    }
`

const ButtonRack = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`

const DateSelector = styled.button`
    margin-top: 10px;
    height: 25px;

    display: flex;
    align-items: center;
    width: 10%;
    /* border-radius: 3px; */

    justify-content: space-evenly;
    border-left: 2px solid grey;
    border-right: 2px solid grey;
    border-radius: 10px;

    &:hover {
        background-color:grey;
        cursor: pointer
    }

`

const ResponseHeader = ({ firstCurrency, secondCurrency, rate, onTimePeriodSelect }) => {

    const [displayStuff, setDisplayStuff] = useState(false)

    return (
        <div>
            <span>Exchange rate of {firstCurrency} to {secondCurrency} is : {rate}</span>
            <GraphEnable onClick={() => displayStuff ? setDisplayStuff(false) : setDisplayStuff(true)}>
                Get rate history
            </GraphEnable>
            {
                displayStuff ?
                    <ButtonRack>
                        <DateSelector onClick={(e) => onTimePeriodSelect(e.target.innerHTML)}>
                            1 Week
                        </DateSelector>
                        <DateSelector>
                            2 Week
                        </DateSelector>
                        <DateSelector>
                            1 Month
                        </DateSelector>
                        <DateSelector>
                            2 Month
                        </DateSelector>
                    </ButtonRack>
                    : null
            }
        </div>
    )
}

export default ResponseHeader