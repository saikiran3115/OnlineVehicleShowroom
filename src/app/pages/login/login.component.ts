import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new customer();

  constructor() { }

  ngOnInit(): void {
  }
    onSubmit(customer: any) {
      if (customer.valid) {
        console.log(customer.value);
        console.log(customer.value.customerName);
        alert("Login Successful" + JSON.stringify(customer.value, null, 4));
      }
  }

}
