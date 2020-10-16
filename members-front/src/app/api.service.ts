import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberModel } from './models/member.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/';
  headers = new HttpHeaders({ 'Content-Type': 'application-json' });
  constructor(private http: HttpClient) { }

  getAllMembers(): Observable<MemberModel[]> {
    return this.http.get<MemberModel[]>(`${this.baseUrl}members/`, { headers: this.headers });
  }

  getMember(id: string): Observable<MemberModel> {
    return this.http.get<MemberModel>(`${this.baseUrl}members/${id}/`, { headers: this.headers });
  }
}
