import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newcar } from 'src/app/models/newcar.model';

@Component({
  selector: 'app-addnewcar',
  templateUrl: './addnewcar.component.html',
  styleUrls: ['./addnewcar.component.css']
})
export class AddnewcarComponent implements OnInit {
  model = new newcar();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  availability = ["Yes","No"];
  onaddnewcarclick(){
    this.router.navigateByUrl('/dealermenu');
  }
  onSubmit(vehicle: any) {
    if (vehicle.valid) {
      console.log(vehicle.value);
      console.log(vehicle.value.vehicleName);
      alert("registered Successfully" + JSON.stringify(vehicle.value, null, 4));
    }
  }
}
