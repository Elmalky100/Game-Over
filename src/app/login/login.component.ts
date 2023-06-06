import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{5,10}$/)]),
  },)

  apiError: string = ''
  isLodding: boolean = false;
  handleLogin(LoginForm: FormGroup) {
    this.isLodding = true
    if (LoginForm.valid) {
      this._AuthService.Login(LoginForm.value).subscribe({
        next: (response) => {
          console.log(response)
          if (response.message == 'success') {
            this.isLodding = false
            localStorage.setItem('userToken',response.token)
            this._AuthService.decodeUserData()
            this._Router.navigate(['/home'])
          }
        },
        error: (err) => {
          this.isLodding = false
          this.apiError = err.error.message
        }
      })
    }
  }

}
