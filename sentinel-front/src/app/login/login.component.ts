import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      matricula: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { matricula, senha } = this.loginForm.value;
      console.log('Matrícula:', matricula);
      console.log('Senha:', senha);

      // Aqui você pode chamar o serviço de autenticação, ex:
      // this.authService.login(matricula, senha).subscribe(...)
    } else {
      console.log('Formulário inválido');
    }
  }
}
