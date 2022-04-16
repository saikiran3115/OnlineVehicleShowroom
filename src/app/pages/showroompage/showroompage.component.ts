import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowroomDetailsService } from 'src/app/services/showroom-details.service';

@Component({
  selector: 'app-showroompage',
  templateUrl: './showroompage.component.html',
  styleUrls: ['./showroompage.component.css']
})
export class ShowroompageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:ShowroomDetailsService) { }
  getshowroomId:any;
  showroomData:any;

  ngOnInit(): void {
    this.getshowroomId = this.param.snapshot.paramMap.get('id');
    console.log(this.getshowroomId,'getshowroom');
    if(this.getshowroomId)
    {
      this.showroomData =  this.service.showroomDetails.filter((value)=>{
          return value.id == this.getshowroomId;
        });
        console.log(this.showroomData,'showroomdata>>');

    }
  }

}
