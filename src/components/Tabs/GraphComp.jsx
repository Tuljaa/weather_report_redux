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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.defaults.borderColor='transparent'
ChartJS.defaults.color='black'

export const options = {
  responsive: true,
  plugins: {

    title: {
      display: true,
      color: 'black',
      text: 'Chart.js Line Chart',
    },
  },
};

export default function GraphComp() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'January', 'February', 'March', 'April', 'January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [2,4,8,2,4,6,7,2,4,8,2,4,6,7,2,4,8,2,4,6,7,2,4,8,2,4,6,7,2,4,8,2,4,6,7],
        borderColor: '#E8AA42',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
