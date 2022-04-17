import { Component, OnInit } from '@angular/core';
import { vehicle } from 'src/app/models/dealervehicle.model';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealermenu',
  templateUrl: './dealermenu.component.html',
  styleUrls: ['./dealermenu.component.css']
})
export class DealermenuComponent implements OnInit {

  constructor(private service:OrderDetailsService,private router: Router) { }
  vehicleData:any;
  ngOnInit(): void {
    this.vehicleData = this.service.vehicleDetails;
  }
  oneditclick(){
    this.router.navigateByUrl('/dealermenupage');
}
onnewcarclick(){
  this.router.navigateByUrl('/addnewcar');
}

}
