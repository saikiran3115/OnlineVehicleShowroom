import { Component, OnInit } from '@angular/core';
import { vehicle } from 'src/app/models/dealervehicle.model';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-dealermenu',
  templateUrl: './dealermenu.component.html',
  styleUrls: ['./dealermenu.component.css']
})
export class DealermenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  vehicleData:any;
  ngOnInit(): void {
    this.vehicleData = this.service.vehicleDetails;
  }

}
