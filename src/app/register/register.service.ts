import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  registerUser(
    userData: Partial<{ username: string; email: string; password: string }>
  ) {
    const url = 'http://localhost:3000/auth/signup';
    return this.http.post(url, userData);
  }
}
