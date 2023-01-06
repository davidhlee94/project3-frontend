import React from 'react'
import './Barchart.css'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

function Barchart(props) {

    const data = {
        labels: [ props.created ],
        datasets: [
            {
                label: 'Price ',
                data: [ props.price],
                backgroundColor: '#2E8EEE',
                borderColor: 'black',
                borderWidth: 1,
            }
        ]
    }
    const options = {

    }
    return (
        <div >
        <Bar
                id='bar'
                data = {data}
                option = {options}
            ></Bar>
        </div>
    )
}

export default Barchart