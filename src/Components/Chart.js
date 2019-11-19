import React from 'react'
import { Line } from 'react-chartjs-2'

const ChartComponent = ({ a }) => {

    return (

        <Line
            data={{
                labels: a.labels,
                datasets: [{
                    data : a.values,
                    label: 'eh nik ta mere'
                }]
            }}
        >

        </Line>

    )

}

export default ChartComponent