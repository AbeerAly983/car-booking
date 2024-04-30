import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/charts.service';
@Component({
  selector: 'app-added-users',
  templateUrl: './added-users.component.html',
  styleUrls: ['./added-users.component.css'],
})
export class AddedUsersComponent {
  chart!: Chart;
  Month: any[] = [];
  Value: any[] = [];

  constructor(private service: ChartsService) {}
  ngOnInit(): void {
    this.getLastYearOrders();
  }

  getLastYearOrders() {
    const token = localStorage.getItem('access_token');
    this.service.users_added_this_year(token).subscribe({
      next: (res: any) => {
        res.forEach((item: { month: any; value: any }) => {
          this.Month.push(item.month);
          this.Value.push(item.value);
        });
        this.renderCharts(this.Month, this.Value);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  renderCharts(month: any, value: any) {
    this.chart = new Chart({
      chart: {
        type: 'column',
        height: 400,
      },
      title: {
        text: 'User Added This Year',
      },
      xAxis: {
        categories: month,
      },
      yAxis: {
        title: {
          text: 'Number Of Users',
        },
        labels: {
          format: '{value:.0f}', // Display only integer numbers
        },
        allowDecimals: false, // Disable decimal numbers on the yAxis
      },

      series: [
        {
          name: 'Users',
          type: 'column',
          color: '#fac800',
          data: value,
        },
      ],

      credits: {
        enabled: false,
      },
    });
  }
}
