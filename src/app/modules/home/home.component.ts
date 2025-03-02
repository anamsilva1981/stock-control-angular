import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public loginCard = true;

  public loginForm = this.formBuilder.group({
    email: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required),
  })

  public signupForm = this.formBuilder.group({
    name: this.formBuilder.control('', Validators.required),
    email: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required),
  })

  constructor(private formBuilder: FormBuilder) { }

  public onSubmitLoginForm(): void{
    console.log('Dados do formulario de Login enviados com sucess', this.loginForm.value)
  }

  public onSubmitSignupForm(): void{
    console.log('Dados do formulario de Cadastro enviados com sucess', this.signupForm.value)
  }
}
