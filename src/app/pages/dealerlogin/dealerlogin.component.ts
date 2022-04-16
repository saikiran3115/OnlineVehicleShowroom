import { Component, OnInit } from '@angular/core';
import { dealer } from 'src/app/models/dealer.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dealerlogin',
  templateUrl: './dealerlogin.component.html',
  styleUrls: ['./dealerlogin.component.css']
})
export class DealerloginComponent implements OnInit {

  model = new dealer();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onloginclick(){
    this.router.navigateByUrl('/dealermenu');
}
  onSubmit(dealer: any) {
    if (dealer.valid) {
      console.log(dealer.value);
      console.log(dealer.value.dealerName);
      alert("Login Successful" + JSON.stringify(dealer.value, null, 4));
    }
}

}
