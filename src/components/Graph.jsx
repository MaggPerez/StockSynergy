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

const Graph = () => {
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
    <div className="lg:h-5/6 flex justify-center">
      <Bar data={data} options={options}  />
    </div>
  );
};

export default Graph;