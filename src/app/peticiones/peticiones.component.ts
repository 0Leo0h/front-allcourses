import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TutorService } from '../service/tutor.service';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit {

  peticiones: any[] = [];
  idTutor: any

  constructor(private tutorService: TutorService, private toastr: ToastrService) {
    let SessionActiva = sessionStorage.getItem('SesionId')
    console.log(SessionActiva)
    this.tutorService.peticionesPendientes(SessionActiva).subscribe((data) => {
      this.peticiones = data;
      console.log(this.peticiones, data)
    })
    this.idTutor = SessionActiva;
  }

  ngOnInit(): void {
  }

  responderPeticion(id: any, id_user: any, res: any) {
    const respuesta = {
      id: id,
      res: res,
      idTutor: this.idTutor,
      id_user: id_user
    }
    this.tutorService.peticionesRespuesta(respuesta).subscribe(
      data => {
        this.toastr.success('Respuesta enviada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        location.reload();
      },
      err => {
        console.log(err);
      })
  }
}
