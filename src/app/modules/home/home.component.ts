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

  constructor(private formBuilder: FormBuilder) { }

  onSubmitLoginForm(): void{
    console.log('Dados do formulario de Login enviados com sucess', this.loginForm.value)
  }
}
