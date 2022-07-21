import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { loginService } from 'src/app/service/login.service';
import { TutorService } from 'src/app/service/tutor.service';

@Component({
  selector: 'app-detalles-tutor',
  templateUrl: './detalles-tutor.component.html',
  styleUrls: ['./detalles-tutor.component.css']
})
export class DetallesTutorComponent implements OnInit {

  tutor: any;

  constructor(
    private activatedRoute: ActivatedRoute, private tutorService: TutorService, private loginService: loginService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tutorService.detailsTutor(id).subscribe((data) => {
      this.tutor = data[0]
    })
  }

  Aceptar() {
    const tutor = {
      id: this.tutor.id,
      documento:this.tutor.num_doc,
      correo:this.tutor.correo
    }
    this.loginService.saveTutor(tutor).subscribe((data)=>{
      console.log(data)
    })
  }
}
