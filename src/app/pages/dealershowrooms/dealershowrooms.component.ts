import { Component, OnInit } from '@angular/core';
import { ShowroomDetailsService } from 'src/app/services/showroom-details.service';

@Component({
  selector: 'app-dealershowrooms',
  templateUrl: './dealershowrooms.component.html',
  styleUrls: ['./dealershowrooms.component.css']
})
export class DealershowroomsComponent implements OnInit {

  constructor(private service:ShowroomDetailsService) { }
  showroomData:any;

  ngOnInit(): void {
    this.showroomData = this.service.showroomDetails;

  }

}
