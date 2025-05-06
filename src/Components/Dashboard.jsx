import React from "react";
import CreateHeader from '../context/contextHeader';
import { Chart } from 'chart.js/auto';
import { Line } from 'react-chartjs-2'
import Font from './Font.jsx';
import blinder from '../assets/binder.png'
import goal from '../assets/goal.png'
import pic from '../assets/pie-chart.png'
import project from '../assets/project.png'
export default function Dashboard() {
  const { setPage } = React.useContext(CreateHeader);
  const [cards, setCards] = React.useState([]);
  const chartRef = React.useRef(null);

  const labels = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dataValues = [50, 100, 300, 250, 500, 200, 300, 180, 500];

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Sales',
        data: dataValues,
        fill: true,
        borderColor: '#fb6340',
        backgroundColor: (ctx) => {
          const chart = ctx.chart;
          const { ctx: canvasCtx, chartArea } = chart;

          if (!chartArea) return null; // Skip if chart hasn't been drawn yet

          const gradient = canvasCtx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
          gradient.addColorStop(0, 'rgba(251, 99, 64, 0.4)');
          gradient.addColorStop(1, 'rgba(251, 99, 64, 0)');

          return gradient;
        },
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Sales Overview', // Title text
        font: {
          size: 16, // Font size for the title
        },
        color: '#344767', // Title color
        padding: {
          top: 10, // Top padding for the title
          bottom: 30, // Bottom padding for the title
        },
        align:'start', // Left-align the title
      },   
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#666' },
      },
      y: {
        display: false, //Hides the Y-axis
      },
    },
  };
  
  const sales =[
    {
     "per":"+55%",
     "time":"since yesterday",
      "image":blinder
    },
    {
     "per":"+3%",
     "time":"since last week",
     "image":goal
    },
    {
      "per":"+2%",
     "time":"since last quarter",
      "image": pic
    },
    {
      "per":"+5%",
     "time":"than last month",
      "image": project
    }
  ]
  React.useEffect(() => {
    setPage('Dashboard');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
        const filterdata = data.filter((item) => item.id < 5);
        setCards(filterdata);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="mt-9 min-h-screen overflow-auto"> {/* min-h-screen and overflow-auto added */}
      <div className="gap-5 grid grid-cols-12 m-4">
        {cards.length > 0 && cards.map((item, key) => (
          <div className="bg-white col-span-12 md:col-span-6 lg:col-span-3 h-28 lg:h-36 rounded-xl p-4" key={key}>
            <div className="flex justify-between">
              <div>
                <Font className='text-[#67748e]'>{item.address.street}</Font>
                <Font className='font-extrabold text-[18px]'>${item.address.geo.lat}</Font>
              </div>
              <img src={sales[key].image} className="w-10 h-10 text-[#fb6340] bg-[#fb6340] rounded-full" />
            </div>
            <div className="flex lg:flex-col">
              <Font className={`${sales[key].per==='+3%'?'text-red-500':'text-green-500'}`}>{sales[key].per}</Font>
              <Font className='text-[#67748e]'>{sales[key].time}</Font>
            </div>
          </div>
        ))}
      </div>

      <div className='grid lg:grid gap-5 mt-5 grid-cols-12 h-96'>
        <div className="lg:col-span-7 col-span-12 h-full">
          <Line ref={chartRef} data={chartData} options={options} className="bg-white rounded-2xl p-3" />
        </div>
        <Font className="lg:col-span-5 hidden lg:block lg:h-full">Slider</Font>
      </div>

      <Font>sales by country and sales by category</Font>
    </div>
  );
}
