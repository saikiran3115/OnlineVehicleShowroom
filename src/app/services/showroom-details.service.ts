import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowroomDetailsService {

  //showroomDetails

  showroomDetails = [
    {
      id:1,
      showroomName:"Epitome Automobiles",
      showroomDealerID:"101",
      showroomcontact:8954751275,
      showroomAddress:"19/A, Mahadevapura,Vishveshwaraiah, Industrial Area, Bangalore, Karnataka 560048",
      showroomImg:"https://res.cloudinary.com/dp3tjvbat/image/upload/v1649938323/Showrooms/KIA-Motors-Flagship-Showrrom-at-Yelahanka-2_zddhap.jpg"
    },
    {
      id:2,
      showroomName:"India Garage",
      showroomDealerID:"102",
      showroomcontact:7567922453,
      showroomAddress:"Palace Cross Road, No. 1, Bangalore, Karnataka 560010",
      showroomImg:"https://res.cloudinary.com/dp3tjvbat/image/upload/v1649944512/Showrooms/india_garage_Bangalore1_u4ygr5.jpg"
    },
    {
      id:3,
      showroomName:"Audi Bengaluru Central",
      showroomDealerID:"103",
      showroomcontact:8524321465,
      showroomAddress:"Municipal No.1 and 2, UB Plaza, Vittal Mallya Road, Bangalore, Karnataka 560001",
      showroomImg:"https://res.cloudinary.com/dp3tjvbat/image/upload/v1649944780/Showrooms/0_490_735_0_70_http___img.haymarketsac.in_autocarpro_IMG_438_8438_audi-bengaluru-central-1_dao7on.jpg"
    },
    {
      id:4,
      showroomName:"Renault Yeshwantpur",
      showroomDealerID:"104",
      showroomcontact:9564561245,
      showroomAddress:"No 3, Metro Stop 2, Tumkur Rd, next to Goraguntepalya, Industrial Suburb 2nd Stage, Yeswanthpur, Bengaluru, Karnataka 560022",
      showroomImg:"https://res.cloudinary.com/dp3tjvbat/image/upload/v1649945320/Showrooms/SARJAPUR-400X300_b1xxgo.jpg"
    },
    {
      id:5,
      showroomName:"Shakti Toyota",
      showroomDealerID:"105",
      showroomcontact:8547521564,
      showroomAddress:"#125/2, Khata No. 1302,Bypass Road ,Urgadoor Extn.,Shivamogga-577201",
      showroomImg:"https://res.cloudinary.com/dp3tjvbat/image/upload/v1649945511/Showrooms/showroom_qzdgoc.jpg"
    },
  ]


  constructor() { }
}
