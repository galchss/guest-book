import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class RestService {

  constructor(private http:Http) { }
    public getComments() {
      return this.http.get('/api/comments').map(res => res.json());
    }
}
