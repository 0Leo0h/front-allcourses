import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tutor } from '../models/tutor';
import { TutorService } from '../service/tutor.service';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-peticion',
  templateUrl: './peticion.component.html',
  styleUrls: ['./peticion.component.css']
})
export class PeticionComponent implements OnInit {

  form: FormGroup;
  usuario: any;
  idUser: number;
  Tutor:tutor;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, 
    private usuarioService: UsuarioService, private tutorService: TutorService, private activatedRoute: ActivatedRoute,) {
    let SessionActiva = sessionStorage.getItem('SesionId')
    const id = this.activatedRoute.snapshot.params['id'];
    if (!SessionActiva) {
      this.router.navigateByUrl('/')
      this.toastr.info('Debe iniciar sesion para hacer una peticion!', 'Ups!')
    }
    this.usuarioService.detailsUsuario(SessionActiva).subscribe((data) => {
      this.usuario = data[0]
    })
    this.tutorService.detailsTutor(id).subscribe((data)=>{
      this.Tutor = data[0]
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      fecha_deseada: [, [Validators.required]],
      hora: [, [Validators.required]],
      descripcion: [, [Validators.required, Validators.minLength(3)]],
    });
  }

  enviar() {
    const peticion = {
      datos_peticion: this.form.value,
      datos_usuario: this.usuario,
      datos_tutor: this.Tutor
    }
    this.usuarioService.peticion(peticion).subscribe(
      data => {
        this.toastr.success('Peticion enviada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      });
  }
}
