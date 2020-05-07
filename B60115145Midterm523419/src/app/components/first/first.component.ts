import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  profile: user_profile
  
  constructor() {
    let show = false 
    this.profile = {
      studentid: 'B6015145',
      name: 'Wasan Chatchamnan',
      gender: 'Male',
      birthyear: 1998,
      email: 'wasangg@gmail.com',
      phone: '0123456789',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: '',
    }
  }
  
  ngOnInit(): void {
  }
  showAdd(){
    alert(this.profile.address)
  }
}
