import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $resource } from './constnts';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RequestsService {
    constructor(private http: HttpClient){ }

    fetch(): Observable<any[]>{
        const result = this.http.get<any>($resource['Summary']());
        return result;
   }
}
