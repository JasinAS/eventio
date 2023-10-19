import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  constructor(private http: HttpClient) {}

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
      .subscribe((res) => {
        console.log(res);
      });
  }
}
