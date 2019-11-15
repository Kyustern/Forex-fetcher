import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

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

    const getDate = (innerHTML) => {

        const now = moment()
        let before = moment()

        switch (innerHTML) {
            case '1 Week':
                before.subtract(7, 'days')
                break
            case '2 Weeks':
                before.subtract(14, 'days')
                break
            case '1 Month':
                before.subtract(1, 'months')
                break
            case '2 Months':
                before.subtract(2, 'months')
                break
        }
        
        onTimePeriodSelect([now.format('YYYY-MM-DD'), before.format('YYYY-MM-DD')])

        //data should be an array of two elements : [theComputedDate, today'sDate]

        //will send the date we are looking for
        //onTimePeriodSelect(aaa)
    }

    return (
        <div>
            <span>Exchange rate of {firstCurrency} to {secondCurrency} is : {rate}</span>
            <GraphEnable onClick={() => displayStuff ? setDisplayStuff(false) : setDisplayStuff(true)}>
                Get rate history
            </GraphEnable>
            {
                displayStuff ?
                    <ButtonRack>
                        <DateSelector onClick={(e) => { getDate(e.target.innerHTML) }}>
                            1 Week
                        </DateSelector >
                        <DateSelector onClick={(e) => { getDate(e.target.innerHTML) }}>
                            2 Weeks
                        </DateSelector>
                        <DateSelector onClick={(e) => { getDate(e.target.innerHTML) }}>
                            1 Month
                        </DateSelector>
                        <DateSelector onClick={(e) => { getDate(e.target.innerHTML) }}>
                            2 Months
                        </DateSelector>
                    </ButtonRack>

                    : null
            }
        </div>
    )
}

export default ResponseHeader