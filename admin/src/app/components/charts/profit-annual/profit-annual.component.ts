import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-profit-annual',
  templateUrl: './profit-annual.component.html',
  styleUrls: ['./profit-annual.component.css'],
})
export class ProfitAnnualComponent {
  chart!: Chart;
  Year: any[] = [];
  Value: any[] = [];
  allSubscription: any;
  constructor(private service: ChartsService) {}
  ngOnInit() {
    this.subscription();
  }
  subscription() {
    const token = localStorage.getItem('access_token');
    this.service.AnnualProfits(token).subscribe({
      next: (res: any) => {
        res.forEach((item: { year: any; value: any }) => {
          this.Year.push(item.year);
          this.Value.push(item.value);
        });
        console.log(this.Year);
        console.log(this.Value);
        this.renderCharts(this.Year, this.Value);
        //console.log(this.renderCharts(this.Year, this.Value));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  renderCharts(year: any, value: any) {
    this.chart = new Chart({
      chart: {
        type: 'pie',
        height: 225,
      },
      title: {
        text: 'Annual Profits',
      },
      series: [
        {
          type: 'pie',
          showInLegend: false,
          data: [
            {
              name: year[0],
              y: value[0],
              color: 'rgba(255, 99, 132, 0.8)',
            },
            {
              name: year[1],
              y: value[1],
              color: 'rgba(54, 162, 235, 0.8)',
            },
          ],
        },
      ],
    });
  }
}
