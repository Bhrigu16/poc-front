import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    console.log("In Dashboard "+sessionStorage.getItem('user'))
  }

  getUser(){
    this.userService.getUser().subscribe(
      user=>{
        console.log(user);
      },
      error=>{
        console.log(error);
        
      }
      
    )
  }
}
