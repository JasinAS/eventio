import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  post(url: string, data: any) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data', 
      Accept: '*/*',
      Connection: 'keep-alive'
    });
    return this.http
      .post(`${environment.baseUrl}${url}`, data, { headers })
      .pipe(
        map((resp: any) => {
          if (resp && resp[0] && resp[0].status === 'error') {
            alert(resp[0].msg);
          }

          return resp;
        })
      );
  }

  login(request: any) {
    return this.post('login/owner', request);
  }
}
