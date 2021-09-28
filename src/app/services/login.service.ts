import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoignService {
  constructor(private http: HttpClient) {}

  public authorizeAccout(): Observable<any> {
    const params = new HttpParams()
      .set('client_id', '375447730944')
      .set('display', 'popup')
      .set('redirect_uri', 'https://angular.io/guide/http')
      .set('scope', 'audio')
      .set('response_type', 'token')
      .set('state', 'Avtorize');
    return this.http.get<any>(`https://oauth.vk.com/authorize`, { params });
  }
}
