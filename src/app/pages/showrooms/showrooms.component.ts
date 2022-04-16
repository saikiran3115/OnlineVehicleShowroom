import { Component, OnInit } from '@angular/core';
import { ShowroomDetailsService } from 'src/app/services/showroom-details.service';

@Component({
  selector: 'app-showrooms',
  templateUrl: './showrooms.component.html',
  styleUrls: ['./showrooms.component.css']
})
export class ShowroomsComponent implements OnInit {

  constructor(private service:ShowroomDetailsService) { }
  showroomData:any;

  ngOnInit(): void {
    this.showroomData = this.service.showroomDetails;
  }

}
