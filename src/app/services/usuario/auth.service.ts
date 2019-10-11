import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { InfoLogin } from '../../models/infoLogin.model';
import { AlumnoLogin } from '../../models/alumnoLogin.model';
import { ProfesorLogin } from '../../models/profesorLogin.model';
import { Login } from '../../models/login.model';
import { Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  public userToken: string;
  authUrl = `${environment.apiUrl}/users/api-token-auth/`;

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  dataLog: InfoLogin = {
    isAlumno: false,
    dataAlumno: null,
    dataProfesor: null
  };

  constructor(private router: Router, public http: HttpClient) {
    console.log('se llamo el servicio');
  }

  login(usuario: Login): Observable<InfoLogin> {
    console.log(JSON.stringify(usuario));
    return this.http.post(this.authUrl, JSON.stringify(usuario), this.httpOptions)
      .pipe(
        map((response: Response) => {
          this.userToken = response.token;
          if (response.user.codigo_de_estudiante != undefined) {
            this.dataLog.isAlumno = true;
            this.dataLog.dataAlumno = response.user;
          } else {
            this.dataLog.isAlumno = false;
            this.dataLog.dataProfesor = response.user;
          }
          return this.dataLog;
        }),
        retry(1),
        catchError(err => {
          console.log('Error en el login', err);
          return Observable.throw(err);
        }
        )
      );
  }

  getDatos(): InfoLogin {
    return this.dataLog;
  }

  canActivate(): boolean {
    const signedIn = !!this.userToken;
    if (!signedIn) {
      this.router.navigateByUrl('/login');
    }
    return signedIn;
  }
}

interface Response {
  token: string;
  user: AlumnoLogin;
}