import { Component, OnInit } from '@angular/core';
import { dealer } from 'src/app/models/dealer.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dealerlogin',
  templateUrl: './dealerlogin.component.html',
  styleUrls: ['./dealerlogin.component.css']
})
export class DealerloginComponent implements OnInit {

  model = new dealer();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(dealer: any) {
    if (dealer.valid) {
      console.log(dealer.value);
      console.log(dealer.value.dealerName);
      alert("Login Successful" + JSON.stringify(dealer.value, null, 4));
    }
}

}
