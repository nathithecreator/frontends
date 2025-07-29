import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(email: string, password: string): Observable<any> {
    // Simulated credentials
    if (email === 'user@example.com' && password === 'password') {
      return of({ name: 'Jane Doe', email }).pipe(delay(1000));
    } else {
      return throwError(() => new Error('Invalid credentials')).pipe(delay(1000));
    }
  }

  register(data: any): Observable<any> {
    if (data.email && data.password) {
      return of({ message: 'Registration successful' }).pipe(delay(1000));
    } else {
      return throwError(() => new Error('Registration failed')).pipe(delay(1000));
    }
  }
}
