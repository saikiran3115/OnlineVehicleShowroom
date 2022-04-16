import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { ShowroomDetailsService } from 'src/app/services/showroom-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService, private service1:ShowroomDetailsService) { }
  vehicleData:any;
  showroomData:any;
  ngOnInit(): void {
    this.vehicleData = this.service.vehicleDetails;
    this.showroomData=this.service1.showroomDetails;
  }

}
