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
        const myChart = new Chart (document.getElementById("chart"), {
            type: 'line',
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            data: {
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        })
    }

    return (
        <Line
            
        >
            AAAAAAAAAAAAAA
        </Line>
    )

}

export default ChartComponent