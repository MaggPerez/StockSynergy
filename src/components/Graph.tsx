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

import { getSalesFloorUnits } from "../productController";
import { useEffect, useState } from "react";

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

interface SalesFloorInterface {
  total: number,
  section: {
    M_Tees: number,
    M_Shorts: number,
    M_Jackets: number,
    M_Belts: number
  }
}



function salesFloorChart() {
  useEffect(() => {
    async function fetchData() {
      const result = await getSalesFloorUnits()

      setSalesFloorUnits({
        total: result.total,
        section: {
          M_Tees: result.sections.M_Tees,
          M_Shorts: result.sections.M_Shorts,
          M_Jackets: result.sections.M_Jackets,
          M_Belts: result.sections.M_Belts,
        }
      })
    }
    fetchData()
  }, [])

  const [salesFloorUnits, setSalesFloorUnits] = useState<SalesFloorInterface>()

  const data = {
    labels: ['Sales Floor', 'Tees', 'Shorts', 'Belts', 'Accessories'],
    datasets: [
      {
        label: 'Units',
        backgroundColor: '#8b5cf6', // violet-500
        borderColor: '#a78bfa', // violet-400
        borderWidth: 1,
        data: [
          salesFloorUnits?.total,
          salesFloorUnits?.section.M_Tees,
          salesFloorUnits?.section.M_Shorts,
          salesFloorUnits?.section.M_Jackets,
          salesFloorUnits?.section.M_Belts],
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