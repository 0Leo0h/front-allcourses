import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { login } from '../../models/login';
import { loginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  constructor(
    private registerservice:loginService,
    private toastr:ToastrService,
    private router:Router,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.definirformulario();
  }

  definirformulario() {
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
        username: [null, Validators.required],
        contraseña: [null, Validators.required]
      });
  }

  onRegister() {
    if (this.form.invalid) {
      this.toastr.error('Debes llenar todos los campos(*)')
    } else {
      this.registerservice.save(this.form.value).subscribe(
        (result: any) => {
          
          if (result.sesion) {
            this.toastr.info('Credenciales incorrectas, verifique...')
          } else {
            this.router.navigateByUrl('auth/login');
            this.toastr.success('Fue registrado','Exito')
          }
        }
      )
    }
  }
}
