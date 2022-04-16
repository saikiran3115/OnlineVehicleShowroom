import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  model = new customer();


  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.vehicleDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');

    }

  }
  onSubmit(customer: any) {
    if (customer.valid) {
      console.log(customer.value);
      console.log(customer.value.customerName);
      alert("registered Successfully" + JSON.stringify(customer.value, null, 4));
    }
}
showrooms = ["Epitome Automobiles","India Garage","Audi Bengaluru Central","Renault Yeshwantpur","Shakti Toyota"];

}

