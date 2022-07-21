import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private httpClient: HttpClient) { }

    URL = 'http://localhost:3000/api/usuario/';

    public detailsUsuario(id:any): Observable<any[]> {
        return this.httpClient.get<any[]>(this.URL + `details/${id}`);
    }

    public peticion(peticion: any): Observable<any> {
        return this.httpClient.post<any>(this.URL + 'peticiones', { peticion });
    }
}