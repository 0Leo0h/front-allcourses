import { Component, OnInit } from '@angular/core';
import { TutorService } from '../service/tutor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id='EEnKVcyIja0';
  Tutores:any;
  session:boolean;

  constructor(private tutorService: TutorService) {
    let SessionActiva = sessionStorage.getItem('SesionId')
    if (!SessionActiva) {
      this.session = false;
    } else {
      this.session = true;
    }
   }

  ngOnInit(): void {
    this.tutorService.tutorLista().subscribe(
      data => {
        console.log(data)
        this.Tutores = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  Logout(){
    sessionStorage.clear(); 
    location.reload();
  }

}
