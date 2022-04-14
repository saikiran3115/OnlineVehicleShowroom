import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  carDetails = [
    {
      id:1,
      carName:"Kia Seltos",
      carDetails:"This midsize SUV effectively combines top-notch features with affordability. It has a sporty, sleek appearance, with Kia’s signature “Tiger Nose'' grille as the focal point.",
      carPrice:1000000,
      carImg:"https://res.cloudinary.com/dp3tjvbat/image/upload/v1649871167/Cars/2021_kia_seltos_4k-2560x1440_ctp2h7.jpg"
    },
    {
      id:2,
      carName:"Mahindra Thar",
      carDetails:"Mahindra Thar, with its iconic design and wide stance, stands out wherever it goes. Its interiors entail sporty front seats, reclinable rear seats, and roof-mounted speakers, making every ride comfortable and fun.",
      carPrice:1500000,
      carImg:"https://res.cloudinary.com/dp3tjvbat/image/upload/v1649872146/Cars/3385679_n0uobv.jpg"
    },
    {
      id:3,
      carName:"Audi RS7",
      carDetails:"The Audi RS7 is one of the fastest four-door sedans on the planet. It packs in almost 600bhp and offers enough performance to shame some lightweight sports cars.",
      carPrice:25000000,
      carImg:"https://res.cloudinary.com/dp3tjvbat/image/upload/v1649872335/Cars/3659131_o0ptan.jpg"
    },
    {
      id:4,
      carName:"Renault Kwid",
      carDetails:"Renault has launched the 2022 Kwid at prices starting from Rs 4.50 lakh. In this update, the base RXE, RXT 0.8L, and RXL AMT variants has been given the axe. ",
      carPrice:400000,
      carImg:"https://res.cloudinary.com/dp3tjvbat/image/upload/v1649873473/Cars/renault-kwid-exterior-9_uvkq1s.jpg"
    },
    {
      id:5,
      carName:"Toyata Innova",
      carDetails:"The Innova legendary capabilities have been enhanced beyond compare with the new Innova Crysta.",
      carPrice:1200000,
      carImg:"https://res.cloudinary.com/dp3tjvbat/image/upload/v1649873820/Cars/wp3119890-innova-wallpapers_fgpdiz.jpg"
    },
  ]




}
