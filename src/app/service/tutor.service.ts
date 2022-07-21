import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tutor } from '../models/tutor';

@Injectable({
    providedIn: 'root'
})
export class TutorService {

    constructor(private httpClient: HttpClient) { }

    URL = 'http://localhost:3000/api/tutor/';

    public tutorLista(): Observable<tutor[]> {
        return this.httpClient.get<tutor[]>(this.URL + 'lista');
    }

    public registrarTutor(tutor: tutor): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'crear', { tutor });
    }

    public listaTutorPendiente(): Observable<tutor[]> {
        return this.httpClient.get<tutor[]>(this.URL + 'pendiente');
    }

    public detailsTutor(id: number): Observable<tutor[]> {
        return this.httpClient.get<tutor[]>(this.URL + `details/${id}`);
    }

    public peticionesPendientes(id: any): Observable<tutor[]> {
        return this.httpClient.get<tutor[]>(this.URL + `peticiones/${id}`);
    }

    public peticionesRespuesta(resPeticion: any): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'peticiones', { resPeticion });
    }
}