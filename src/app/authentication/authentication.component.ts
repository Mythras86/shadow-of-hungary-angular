import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../elements/spinner/spinner.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    public authServ:AuthService,
    private fb: FormBuilder,
    private spinServ: SpinnerService
    ) { }

    userLoginForm!: FormGroup
    userRegForm!: FormGroup;

    prepLoginForm(): void {
      this.userLoginForm = this.fb.group({
        email: ['', Validators.required],
        pass: ['', Validators.required],
      })
    }

    onLogin() {
      var form = this.userLoginForm;
      if (form.invalid) {
        return;
      }
      this.spinServ.toggleSpinner(true);
      this.authServ.loginUser(form.value.email, form.value.pass);
    }

    prepRegForm(): void {
      this.userRegForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        pass: ['', Validators.required],
      });
    }

    onSubmit() {
      var form = this.userRegForm;
      if (form.invalid) {
        return;
      }
      this.spinServ.toggleSpinner(true);
      this.authServ.registerUser(form.value.name, form.value.email, form.value.pass);
    }

    ngOnInit(): void {
      this.spinServ.toggleSpinner(false);
      this.prepLoginForm();
      this.prepRegForm();
    }
}
