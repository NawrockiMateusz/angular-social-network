import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  loginUser(userData: Partial<{ username: string; password: string }>) {
    const url = 'http://localhost:3000/auth/signin';
    return this.http.post(url, userData).pipe(
      tap((response: any) => {
        localStorage.setItem('username', response.username);
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }

  logout() {
    this.http.post('http://localhost:3000/auth/logout', {}).subscribe(
      () => {
        localStorage.removeItem('username');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Wystąpił błąd podczas wylogowania', error);
      }
    );
  }
}
