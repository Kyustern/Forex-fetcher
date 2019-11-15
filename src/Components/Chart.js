import React from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'

const TheChart = styled.canvas`
    width: 100%;
`

const ChartComponent = ({a}) => {



    if (a !== {}) {
        
        console.log(a)
        console.log(document.getElementById('chart'))

    }

    return (
        <Line
        //data={}
        >
            AAAAAAAAAAAAAA
        </Line>
    )

}

export default ChartComponent