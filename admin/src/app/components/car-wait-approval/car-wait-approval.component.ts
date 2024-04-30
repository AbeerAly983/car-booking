import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wait_Approval_Car } from 'src/app/interfaces/car';
import { WaitApprovalService } from 'src/app/services/wait-approval.service';

@Component({
  selector: 'app-car-wait-approval',
  templateUrl: './car-wait-approval.component.html',
  styleUrls: ['./car-wait-approval.component.css'],
})
export class CarWaitApprovalComponent {
  waitCarsApproval: Wait_Approval_Car[] = [];
  approve: boolean = false;
  delete: boolean = false;
  idCheckAlert: number | undefined;
  responseMsg: any;
  constructor(private service: WaitApprovalService, private router: Router) {
    if (!localStorage.getItem('access_token')) {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
    this.getWaitCars();
  }

  getWaitCars() {
    const token = localStorage.getItem('access_token');
    this.service.waitApprovalCars(token).subscribe(
      (response: any) => {
        this.waitCarsApproval = response;
        console.log(this.waitCarsApproval);
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }

  approveCar(id: number) {
    this.service.approveCar(id).subscribe(
      (response) => {
        this.responseMsg = response;
        if (this.responseMsg.message == 'Approved completed successfully') {
          this.approve = true;
          setTimeout(() => {
            this.approve = false;
          }, 3500);
          this.getWaitCars();
        }
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
  deleteCar(id: number) {
    this.service.deleteCar(id).subscribe(
      (response) => {
        this.responseMsg = response;
        if (this.responseMsg.message == 'Deleted Successfully') {
          this.delete = false;
          this.getWaitCars();
        }
      },
      (error) => {
        if (error.status == 401) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
}
