import { Component, OnInit } from '@angular/core';
import { loginService } from 'src/app/service/login.service';
import { TutorService } from 'src/app/service/tutor.service';

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrls: ['./lista-solicitudes.component.css']
})
export class ListaSolicitudesComponent implements OnInit {

  solicitudes: any;
  tutor:any;

  constructor(private tutorService: TutorService, private loginService: loginService) { }

  ngOnInit(): void {
    this.tutorService.listaTutorPendiente().subscribe((data) => {
      this.solicitudes = data;
      console.log(this.solicitudes)
    })
  }

  aceptar(id: any) {
    this.tutorService.detailsTutor(id).subscribe((data) => {
      this.tutor = data[0]
    })

    const tutor = {
      id: this.tutor.id,
      documento: this.tutor.num_doc,
      correo: this.tutor.correo
    }
    this.loginService.saveTutor(tutor).subscribe((data) => {
      console.log(data)
    })
  }
}
