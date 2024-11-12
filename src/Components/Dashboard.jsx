import React from "react";
import CreateHeader from '../context/contextHeader';
import { Chart } from 'chart.js/auto';
import Font from './Font.jsx';

export default function Dashboard() {
  const { setPage } = React.useContext(CreateHeader);
  const [cards, setCards] = React.useState([]);

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
      <div className="gap-5 grid grid-cols-12">
        {cards.length > 0 && cards.map((item, key) => (
          <div className="bg-white col-span-12 md:col-span-6 lg:col-span-3 h-28 rounded-xl p-2" key={key}>
            <div className="flex justify-between">
              <div>
                <Font className='text-[#67748e]'>{item.address.street}</Font>
                <Font className='font-medium text-[18px]'>${item.address.geo.lat}</Font>
              </div>
              <div>{item.id}</div>
            </div>
            <div className="flex lg:flex-col">
              <div>{Math.abs(parseInt(item.address.geo.lng))}</div>
              <div>fdhg</div>
            </div>
          </div>
        ))}
      </div>

      <div className='grid gap-5 mt-5 lg:grid-cols-12'>
        <div className="lg:col-span-6">salesoverview</div>
        <div className="lg:col-span-6">Slider</div>
      </div>

      <div>sales by country and sales by category</div>
    </div>
  );
}
