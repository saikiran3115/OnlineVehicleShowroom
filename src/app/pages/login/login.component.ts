import { Component, OnInit } from '@angular/core';
import { customer } from 'src/app/models/customer.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new customer();

  constructor(private router: Router) { }

  ngOnInit(): void {

    }
    onloginclick(){
      this.router.navigateByUrl('');
      alert("Login Successful");
  }
  }
