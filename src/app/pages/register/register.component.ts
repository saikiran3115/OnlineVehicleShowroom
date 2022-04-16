import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer.model';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

model = new customer();

constructor(private router: Router) { }

ngOnInit(): void {
}

onregisterclick(){
  this.router.navigateByUrl('/login');
}
gender = ["male","Female"];
states = ["Andhra Pradesh","Jharkhand","Karnataka","Maharashtra"];

onSubmit(customer: any) {
  if (customer.valid) {
    console.log(customer.value);
    console.log(customer.value.customerName);
    alert("registered Successfully" + JSON.stringify(customer.value, null, 4));
  }
}
}
