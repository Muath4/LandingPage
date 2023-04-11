import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { Legend } from 'chart.js';

// @ts-ignore
import { onmessage } from './worker1.js'


import { BarChartConfig } from './ChartConfig'
// @ts-ignore
// import config from './custom.js'


@Component({
  standalone: true,
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})






export class ChartComponent {
  public chart: any;
  public chartPie: any;

  color1 = "#00741a43"
  color2 = "#0174fe33"
  color3 = "#d902e433"
  color4 = "#05fce733"
  color5 = "#14637a73"

  y2020 = "2020";
  y2021 = "2021";
  y2022 = "2022";
  y2023 = "2023";

  visitPortal2020Num = "356610"
  visitPortal2021Num = "2315833"
  visitPortal2022Num = "5218497"
  visitPortal2023Num = "1269780"

  userPortal2020Num = "282834"
  userPortal2021Num = "472829"
  userPortal2022Num = "373438"
  userPortal2023Num = "96303"

  addedDatabaseusers2020Num = 345
  addedDatabaseusers2021Num = 57
  addedDatabaseusers2022Num = 243
  addedDatabaseusers2023Num = 72

  databaseusers2020Num = this.addedDatabaseusers2020Num
  databaseusers2021Num = this.addedDatabaseusers2020Num + this.addedDatabaseusers2021Num
  databaseusers2022Num = this.addedDatabaseusers2020Num + this.addedDatabaseusers2021Num + this.addedDatabaseusers2022Num
  databaseusers2023Num = this.addedDatabaseusers2020Num + this.addedDatabaseusers2021Num + this.addedDatabaseusers2022Num + this.addedDatabaseusers2023Num

  arrayOfNum = (length: number) => [...Array(length).keys()].map(x => { x++; return x.toString() })

  // randomly generated array of length x with numbers from y to z
  RNGArray = (length: number, min: number, max: number) => Array.from({ length: length }, _ => ~~(Math.random() * (max - min + 1)) + min);

  randomVisit30 = this.RNGArray(30, 2000, 3000);
  totalRandomVisit30 = this.randomVisit30.reduce((sum, current) => sum + current, 0)
  randomVisit12 = this.RNGArray(12, 50000, 80000);
  totalRandomVisit12 = this.randomVisit12.reduce((sum, current) => sum + current, 0)

  compare2021With2022Data = () => [
    { label: "2021", data: this.RNGArray(12, 20000, 30000), borderRadius: 20 },
    { label: "2022", data: this.RNGArray(12, 25000, 40000), borderRadius: 20 }
  ]

  databaseUsersOverTime = () => [
    { label: "2020", data: [this.databaseusers2020Num.toString()], borderRadius: 20 },
    { label: "2021", data: [this.databaseusers2021Num.toString()], borderRadius: 20 },
    { label: "2022", data: [this.databaseusers2022Num.toString()], borderRadius: 20 },
    { label: "2023", data: [this.databaseusers2023Num.toString()], borderRadius: 20 }
  ]


  ngOnInit() {
    console.log("reduce: " + [3, 1, 1].reduce((sum, current) => sum + current, 0))

    Chart.defaults.color = "#fff";


    this.createBarChart({ containerId: "user-database-chart", labels: [''], data: this.databaseUsersOverTime(), indexAxis: 'x' });

    this.createBarChart({ containerId: "visit-portal-compare-2021-2022-bar-chart", labels: this.arrayOfNum(12), data: this.compare2021With2022Data(), indexAxis: 'x' });

    this.createPieChart("city-visit-pie-chart", ["الرياض", "جدة", "الدمام", "مكة", "الجوف"], ["760000", "90000", "70000", "50000", "40000"]);
    this.createLineChart("visit-portal-line-chart", [this.y2020, this.y2021, this.y2022], [this.visitPortal2020Num, this.visitPortal2021Num, this.visitPortal2022Num]);
    this.createLineChart("visit-portal-30-line-chart", this.arrayOfNum(30), this.randomVisit30.map(x => x.toString()));
    this.createLineChart("visit-portal-365-line-chart", this.arrayOfNum(12), this.randomVisit12.map(x => x.toString()));
  }


  createBarChart(barConfig: { containerId: string, labels: string[], data: { label: string; data: any; }[], indexAxis: 'x' | 'y' }) {
    let delayed: boolean;
    this.chart = new Chart(barConfig.containerId, {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: barConfig.labels,
        datasets: barConfig.data,
      },
      options: {
        // aspectRatio: 2.5,
        responsive: true,
        indexAxis: barConfig.indexAxis,
        animation: {
          onComplete: () => {
            delayed = true;
          },
          delay: (context) => {
            let delay = 0;
            if (context.type === 'data' && context.mode === 'default' && !delayed) {
              delay = context.dataIndex * 150 + context.datasetIndex * 50;
            }
            return delay;
          },
        },

      }
    });
  }


  createPieChart(containerId: string, labels: string[], data: string[]) {
    this.chartPie = new Chart(containerId, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          //label: 'My First Dataset',
          data: data,
          backgroundColor: [
            this.color1,
            this.color2,
            this.color3,
            this.color4,
            this.color5
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        }
      },
    }
    );
  }

  createLineChart(containerId: string, labels: string[], data: string[]) {
    new Chart(containerId, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          //label: 'My First Dataset',
          data: data,
          backgroundColor: [
            this.color1,
          ],
          tension: 0.3,
          cubicInterpolationMode: 'monotone',
          fill: true
        }]
      },
      options: {
        responsive: true,

        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
        },
        animations: {
          y: {
            duration: 900,
            delay: 350
          },
        },
        interaction: {
          intersect: false,
        }
      },

    }
    );
  }

}
