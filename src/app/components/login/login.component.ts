import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {}

  login() {
    console.log({
      email: this.username,
      password: this.password,
    });

    let request = {
      email: this.username,
      password: this.password,
    };

    this.api.login(request).subscribe(
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
