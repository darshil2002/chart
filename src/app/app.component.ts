import { Component, OnInit } from '@angular/core';
import { registerables} from 'node_modules/chart.js'
import Chart from 'chart.js/auto';

Chart.register(...registerables)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'grp';
  ngOnInit(): void {
    this.renderChart();
  }

  renderChart(){
    new Chart('myChart', {
      type: 'pie',
      data: {
        labels: ['adidas', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
