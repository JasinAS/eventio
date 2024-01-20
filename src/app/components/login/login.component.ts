import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log({
      email: this.username,
      password: this.password,
    });

    this.http
      .post('https://ac08-77-77-216-64.ngrok-free.app/api/owner-login', {
        email: this.username,
        password: this.password,
      })
      .subscribe(
        (res: any) => {
          console.log(res);
          const token = localStorage.setItem(AuthService.ACCESS_TOKEN, res);
          this.router.navigate(['/dashboard']);
        },
        (err: any) => {
          const token = localStorage.setItem(
            AuthService.ACCESS_TOKEN,
            'testToken'
          );
          this.router.navigate(['/dashboard']);
        }
      );
  }
}
