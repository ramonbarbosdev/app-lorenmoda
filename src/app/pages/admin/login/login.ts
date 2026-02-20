import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [InputTextModule,
    ButtonModule,
    CardModule,
    FloatLabelModule, CommonModule, PasswordModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {


  form: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  login() {
    if (this.form.invalid) return;

    this.loading = true;
    this.error = null;

    // Simulação de login
    setTimeout(() => {
      const { email, senha } = this.form.value;

      if (email === 'admin@loren.com' && senha === '123456') {
        localStorage.setItem('adminToken', 'mock-token');
        this.router.navigate(['/admin']);
      } else {
        this.error = 'Credenciais inválidas';
      }

      this.loading = false;
    }, 800);
  }

}
