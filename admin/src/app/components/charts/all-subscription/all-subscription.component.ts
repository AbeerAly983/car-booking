import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-all-subscription',
  templateUrl: './all-subscription.component.html',
  styleUrls: ['./all-subscription.component.css'],
})
export class AllSubscriptionComponent {
  chart!: Chart;
  allSubscription: any;
  constructor(private service: ChartsService) {}
  ngOnInit() {
    this.subscription();
  }
  subscription() {
    const token = localStorage.getItem('access_token');

    this.service.subscription(token).subscribe({
      next: (res) => {
        this.allSubscription = res;
        this.createCircleChart(this.allSubscription);
      },
    });
  }
  createCircleChart(data: { [key: string]: number }) {
    const labels = Object.keys(data);
    const values = Object.values(data);
    this.chart = new Chart({
      chart: {
        type: 'pie',
        height: 225,
      },
      title: {
        text: 'Num Of All Subscription',
      },
      series: [
        {
          type: 'pie',
          showInLegend: false,
          data: [
            {
              name: labels[1],
              y: values[1],
              color: 'rgba(255, 99, 132, 0.8)',
            },
            {
              name: labels[2],
              y: values[2],
              color: 'rgba(54, 162, 235, 0.8)',
            },
            {
              name: labels[3],
              y: values[3],
              color: 'rgba(255, 206, 86, 0.8)',
            },
          ],
        },
      ],
    });
  }
}
