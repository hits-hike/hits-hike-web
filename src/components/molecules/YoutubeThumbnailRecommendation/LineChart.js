import { Line } from "react-chartjs-2";

const data = {
  labels: ["week1", "week2", "week3", "week4", "week5"],
  datasets: [
    {
      label: "예상 조회수",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3789, 7890, 18973, 21756, 24657],
    },
  ],
};
function App() {
  return (
    <div>
      <h2>주별 조회수 예측</h2>
      <Line data={data} />
    </div>
  );
}
export default App;
