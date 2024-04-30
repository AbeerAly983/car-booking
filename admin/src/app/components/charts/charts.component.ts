import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartsService } from 'src/app/services/charts.service';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent {}
//   chart!: Chart;
//   allSubscription: any;
//   constructor(private _ChartsService: ChartsService) {}
//   ngOnInit() {
//     this.subscription();
//   }
//   subscription() {
//     const token = localStorage.getItem('access_token');

//     this._ChartsService.subscription(token).subscribe({
//       next: (res) => {
//         this.allSubscription = res;
//         this.createCircleChart(this.allSubscription);
//       },
//     });
//   }
//   createCircleChart(data: { [key: string]: number }) {
//     const labels = Object.keys(data);
//     const values = Object.values(data);
//     this.chart = new Chart({
//       chart: {
//         type: 'pie',
//         height: 225,
//       },
//       title: {
//         text: 'Num Of All Subscription',
//       },
//       series: [
//         {
//           type: 'pie',
//           showInLegend: false,
//           data: [
//             {
//               name: labels[1],
//               y: values[1],
//               color: 'rgba(255, 99, 132, 0.8)',
//             },
//             {
//               name: labels[2],
//               y: values[2],
//               color: 'rgba(54, 162, 235, 0.8)',
//             },
//             {
//               name: labels[3],
//               y: values[3],
//               color: 'rgba(255, 206, 86, 0.8)',
//             },
//           ],
//         },
//       ],
//     });
//   }
// }
// // ngOnInit(): void {
// //   this.subscription();
// // }
// // subscription() {
// //   const token = localStorage.getItem('access_token');

// //   this._ChartsService.subscription(token).subscribe({
// //     next: (res) => {
// //       this.allSubscription = res;
// //       this.dataArray = Object.entries(this.allSubscription).map(
// //         ([key, value]) => ({ [key]: value })
// //       );
// //       if (this.dataArray != null) {
// //         for (let i = 0; i < this.dataArray.length; i++) {
// //           console.log(this.dataArray);

// //           this.subscriptionName = Object.keys(this.allSubscription[i]);
// //           this.name.push(this.subscriptionName);
// //           console.log(this.name);
// //           this.subscriptionValues.push(Object.values(this.allSubscription));
// //           this.colorValues.push(Object.values(this.colorData));
// //           this.renderCharts(
// //             this.subscriptionName,
// //             this.numberValues,
// //             this.colorValues
// //           );
// //         }
// //       }
// // //this.renderCharts(this.allSubscription);
// // this.subscriptionValues = Object.values(this.allSubscription);
// // this.subscriptionName = Object.keys(this.allSubscription);
// // this.colorValues = Object.values(this.colorData);
// // this.renderCharts(
// //   this.subscriptionName,
// //   this.numberValues,
// //   this.colorValues
// // );
// //     },
// //   });
// // }
// // renderCharts(name: any, value: any, color: any) {
// //   this.chart = new Chart({
// //     chart: {
// //       type: 'bar',
// //       height: 225,
// //     },
// //     title: {
// //       text: 'Top 3 Delivered Orders',
// //     },
// //     xAxis: {
// //       categories: [name[1], name[2], name[3]],
// //     },
// //     yAxis: {
// //       title: {
// //         text: '',
// //       },
// //     },
// //     series: [
// //       {
// //         type: 'bar',
// //         showInLegend: false,
// //         data: [
// //           {
// //             name: name[1],
// //             y: value[1],
// //             color: color[1],
// //           },
// //           {
// //             name: name[2],
// //             y: value[2],
// //             color: color[2],
// //           },
// //           {
// //             name: name[3],
// //             y: value[3],
// //             color: color[3],
// //           },
// //         ],
// //       },
// //     ],
// //     credits: {
// //       enabled: false,
// //     },
// //   });
// // }

// // lineCharts = new Chart({
// //   chart: {
// //     type: 'line',
// //   },
// //   title: {
// //     text: 'Num All Subscription',
// //   },
// //   credits: {
// //     enabled: false,
// //   },
// //   series: [
// //     {
// //       name: 'Line 1',
// //       data: [1, 2, 3],
// //     } as any,
// //   ],
// // });

// // renderCharts(subscribe: any) {
// //   this.chart = new Chart({
// //     chart: {
// //       type: 'pie',
// //       plotShadow: false,
// //     },

// //     credits: {
// //       enabled: false,
// //     },

// //     plotOptions: {
// //       pie: {
// //         innerSize: '99%',
// //         borderWidth: 10,
// //         borderColor: '',
// //         slicedOffset: 10,
// //         dataLabels: {
// //           connectorWidth: 0,
// //         },
// //       },
// //     },

// //     title: {
// //       verticalAlign: 'middle',
// //       floating: true,
// //       text: 'Sum of Subscription',
// //     },

// //     legend: {
// //       enabled: false,
// //     },

// //     series: [
// //       {
// //         type: 'pie',

// //         name: ['Line 1', 'line2', 'line3'],
// //         data: [subscribe[1], subscribe[2], subscribe[3]],
// //       } as any,
// //     ],
// //   });
// // }

// // chart!: Chart;
// // title = 'angular';
// // lineCharts = new Chart({
// //   chart: {
// //     type: 'line',
// //   },
// //   title: {
// //     text: 'Linechart',
// //   },
// //   credits: {
// //     enabled: false,
// //   },
// //   series: [
// //     {
// //       name: 'Line 1',
// //       data: [1, 2, 3],
// //     } as any,
// //   ],
// // });
