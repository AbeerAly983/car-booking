import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-profit-monthly',
  templateUrl: './profit-monthly.component.html',
  styleUrls: ['./profit-monthly.component.css'],
})
export class ProfitMonthlyComponent {
  chart!: Chart;
  Month: any[] = [];
  Value: any[] = [];

  constructor(private service: ChartsService) {}
  ngOnInit(): void {
    this.getLastYearOrders();
  }

  getLastYearOrders() {
    const token = localStorage.getItem('access_token');
    this.service.MonthlyProfits(token).subscribe({
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
        text: 'Monthly Profit',
      },
      xAxis: {
        categories: month,
      },
      yAxis: {
        title: {
          text: 'Revenue in EGP',
        },
      },

      series: [
        {
          name: 'Profits',
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
