import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useSelector } from 'react-redux';

import { selectWeatherReport } from '../saga+slice+API/weatherData.slice';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// ChartJS.defaults.borderColor='#4B527E'
ChartJS.defaults.color='#4B527E'

export const options = {
  responsive: true,
  plugins: {

    title: {
      display: true,
      color: '#4B527E',
      text: '',
    },
  },
};

export default function GraphComp({ tabSelected }) {
  const weatherData = useSelector(selectWeatherReport)

  const data = {
    labels: (Object.keys(weatherData).map( ( value ) => {
      if (parseInt(value.split(':')[0]) > 0 && parseInt(value.split(':')[0]) < 12) {
        return parseInt(value.split(':')[0]).toString().concat(' am')
      }
      return parseInt(value.split(':')[0]).toString().concat(' pm')
    } )),
    datasets: [
      {
        label: (tabSelected === 'temperature') ? 'TEMPERATURE' : 'WIND',
        data: Object.values(weatherData).map( ({ temp, speed }) => {
          if ( tabSelected === 'temperature' ) return temp
          else if ( tabSelected === 'wind' ) return speed
          return null
        } ),
        borderColor: '#4B527E',
        backgroundColor: '#4B527E',
      },
    ],
  }

  return (
    <div className='graphContainer'>
      <Line
        options={options}
        data={data}
      />
    </div>
  )
}
