import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tutor } from '../models/tutor';
import { loginService } from '../service/login.service';
import { login } from '../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  tutors: tutor[] = [];

  constructor(
    private loginservicio: loginService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.definirformulario();
  }

  definirformulario() {
    this.form = this.fb.group({
      Usuario: [null, Validators.required],
      Contraseña: [null, Validators.required]
    })
  }

  get usuario() {
    return this.form.controls['Usuario'];
  }

  get contraseña() {
    return this.form.controls['Contraseña'];
  }

  onlogin() {
    if (this.form.invalid) {
      this.toastr.error('Debes llenar todos los campos(*)')
    } else {
      let user: login = {
        usuario: this.usuario.value,
        contraseña: this.contraseña.value
      }
      console.log(user)
      this.loginservicio.login(user).subscribe(
        (result: any) => {

          if (result.sesion) {
            console.log(result['data'].rol)
            if (result['data'].rol == 'admin') {
              this.router.navigateByUrl('/admin');
            } else {
              if (result['data'].rol == 'tutor') {
                this.router.navigateByUrl('/peticiones');
              } else {
                this.router.navigateByUrl('/');
              }
            }
            sessionStorage.setItem('SesionId', `${result['data'].id_user}`)
            sessionStorage.setItem('SesionRol', `${result['data'].rol}`)
          } else {
            this.toastr.info('Credenciales incorrectas, verifique...')
          }
        }
      )
    }
  }
}
