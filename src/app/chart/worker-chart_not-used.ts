const color1 = "#00741a43"

const y2020 = "2020";
const y2021 = "2021";
const y2022 = "2022";
const y2023 = "2023";

const visitPortal2020Num = "356610"
const visitPortal2021Num = "2315833"
const visitPortal2022Num = "5218497"
const visitPortal2023Num = "1269780"


const config = {
    type: 'line',
    data: {
        labels: [y2020, y2021, y2022],
        datasets: [{
            data: [visitPortal2020Num, visitPortal2021Num, visitPortal2022Num], backgroundColor: [color1], tension: 0.3, cubicInterpolationMode: 'monotone', fill: true
        }
        ]
    },
    options: {
        responsive: true,
        color: "#FFFFFF",
        scales: { y: { beginAtZero: true } },
        plugins: {
            legend: { display: false, position: 'top', },
        },
        animations: { y: { duration: 900, delay: 350 }, },
        interaction: { intersect: false, }
    },
};



const canvas = document.getElementById("visit-portal-line-chart") as HTMLCanvasElement;
const offscreenCanvas = canvas.transferControlToOffscreen();

if (typeof Worker !== 'undefined') {
    // Create a new
    const worker = new Worker(new URL('./chart.worker', import.meta.url));
    worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
    };


    worker.postMessage({ canvas: offscreenCanvas, config }, [offscreenCanvas]);
} else {
    // Web workers are not supported in this environment.
    // You should add a fallback so that your program still executes correctly.
}
