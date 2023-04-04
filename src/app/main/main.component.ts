import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component'
@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [ChartComponent]
})
export class MainComponent {

}
