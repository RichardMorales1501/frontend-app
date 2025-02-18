import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Solicitud {
  id?: number;
  nombre: string;
  email: string;
  monto: number;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {
  private apiUrl = 'https://prueba-fullstack-vtil.onrender.com/solicitudes';

  constructor(private http: HttpClient) { }

  getSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(this.apiUrl);
  }

  createSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.post<Solicitud>(this.apiUrl, solicitud);
  }

  getSolicitudById(id: number): Observable<Solicitud> {
    return this.http.get<Solicitud>(`${this.apiUrl}/${id}`);
  }

  updateSolicitud(id: number, solicitud: Solicitud): Observable<Solicitud> {
    return this.http.put<Solicitud>(`${this.apiUrl}/${id}`, solicitud);
  }

  deleteSolicitud(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}