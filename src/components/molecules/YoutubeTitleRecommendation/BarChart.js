import { Bar } from "react-chartjs-2";

const data = {
  labels: ["제목 후보 1", "제목 후보 2", "제목 후보 3"],
  datasets: [
    {
      label: "예상 조회수",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [42768, 63798, 53891],
    },
  ],
};

function App() {
  return (
    <div>
      <h2>제목별 조회수 예측</h2>
      <Bar
        data={data}
        width={100}
        height={30}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
}
export default App;
