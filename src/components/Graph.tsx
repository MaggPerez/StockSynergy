import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
  elements
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

interface GraphCharts {
  chart?: any;
}


function salesFloorChart() {
  const data = {
    labels: ['Sales Floor', 'Tees', 'Jeans', 'Jackets', 'Accessories'],
    datasets: [
      {
        label: 'Units',
        backgroundColor: '#68d391',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [10742, 5000, 2200, 1200, 2342],
      },
    ],
  };

  const options = {
    elements: {
      bar: {
        borderRadius: 40,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="lg:h-4/5 flex justify-center">
      <Bar data={data} options={options} />
    </div>
  );
}


function stockroomChart() {
  const data = {
    labels: ['Stockroom', 'Tees', 'Jeans', 'Jackets', 'Accessories'],
    datasets: [
      {
        label: 'Units',
        backgroundColor: '#68d391',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [10742, 5000, 4289, 1200, 2342],
      },
    ],
  };

  const options = {
    elements: {
      bar: {
        borderRadius: 40,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="lg:h-4/5 flex justify-center">
      <Bar data={data} options={options} />
    </div>
  );
}

const Graph = ({ chart }: GraphCharts) => {
  if (chart === "SalesFloor") {
    return salesFloorChart();
  }
  else if (chart === "stockroom") {
    return stockroomChart();
  }




};

export default Graph;