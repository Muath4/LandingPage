/// <reference lib="webworker" />
import Chart from 'chart.js/auto';





addEventListener('message', ({ data }) => {

  const { canvas, config } = data;
  const chart = new Chart(canvas, config);
  Chart.defaults.color = "#fff";
  chart.update();
  canvas.width = 400;
  canvas.height = 400;
  chart.resize();

  const response = `worker response to ${data}`;
  postMessage(response);
});
