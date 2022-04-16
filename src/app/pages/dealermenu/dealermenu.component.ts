import { Component, OnInit } from '@angular/core';
import { vehicle } from 'src/app/models/dealervehicle.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealermenu',
  templateUrl: './dealermenu.component.html',
  styleUrls: ['./dealermenu.component.css']
})
export class DealermenuComponent implements OnInit {
  model = new vehicle();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onaddvehicleclick(){
    this.router.navigateByUrl('/menu');
  }
  availability = ["Yes","No"];

  onSubmit(vehicle: any) {
    if (vehicle.valid) {
      console.log(vehicle.value);
      console.log(vehicle.value.vehicleName);
      alert("registered Successfully" + JSON.stringify(vehicle.value, null, 4));
    }
  }

}
