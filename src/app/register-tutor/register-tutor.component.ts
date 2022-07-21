import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TutorService } from '../service/tutor.service';

@Component({
  selector: 'app-register-tutor',
  templateUrl: './register-tutor.component.html',
  styleUrls: ['./register-tutor.component.css']
})
export class RegisterTutorComponent implements OnInit {

  form: FormGroup;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(private fb: FormBuilder, private tutorService: TutorService, private router: Router, private toastr: ToastrService) {
    this.definirFormulario()
  }

  ngOnInit(): void {
    this.definirFormulario()
  }

  definirFormulario() {
    this.form = this.fb.group({
      nombres: [, [Validators.required, Validators.minLength(3)]],
      apellidos: [, [Validators.required, Validators.minLength(3)]],
      num_doc: [, [Validators.required, Validators.minLength(3)]],
      fecha_nacimiento: [null, [Validators.required]],
      tipo_doc: [null, [Validators.required]],
      celular: [, [Validators.required, Validators.pattern(this.mobNumberPattern)]],
      correo: [, [Validators.required, Validators.pattern(this.emailPattern)]],
      direccion: [, [Validators.required, Validators.minLength(3)]],
      ciudad: [, [Validators.required, Validators.minLength(3)]],
      pais: [, [Validators.required, Validators.minLength(3)]],
      especialidad: [, [Validators.required, Validators.minLength(3)]],
      disponibilidad: [, [Validators.required, Validators.minLength(3)]],
      descripcion: [, [Validators.required, Validators.minLength(3)]],
    });
  }

  guardar() {
    if (this.form.invalid) {
      this.toastr.error('Debes llenar todos los campos(*)')
    } else {
      this.tutorService.registrarTutor(this.form.value).subscribe(
        data => {
          this.toastr.success('Solicitud enviada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/']);
        },
        err => {
          console.log(err);
        }
      );
    }
    console.log(this.form.value)
  }
}
