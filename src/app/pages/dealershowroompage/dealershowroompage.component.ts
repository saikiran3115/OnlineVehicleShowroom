import { Component, OnInit } from '@angular/core';
import { showroom } from 'src/app/models/dealershowroom.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealershowroompage',
  templateUrl: './dealershowroompage.component.html',
  styleUrls: ['./dealershowroompage.component.css']
})
export class DealershowroompageComponent implements OnInit {

  model = new showroom();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  states = ["Andhra Pradesh","Jharkhand","Karnataka","Maharashtra"];
  onaddshowroomclick(){
    this.router.navigateByUrl('/dealermenu');
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
