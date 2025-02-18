import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesService, Solicitud } from '../../services/solicitudes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitudes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solicitudes-list.component.html',
  styleUrls: ['./solicitudes-list.component.scss']
})
export class SolicitudesListComponent implements OnInit {
  solicitudes: Solicitud[] = [];

  constructor(private solicitudesService: SolicitudesService, private router: Router) {}

  ngOnInit(): void {
    this.loadSolicitudes();
  }

  loadSolicitudes(): void {
    this.solicitudesService.getSolicitudes().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        this.solicitudes = data;
      },
      error: (err) => console.error('Error al cargar solicitudes', err)
    });
  }

  deleteSolicitud(id: number): void {
    this.solicitudesService.deleteSolicitud(id).subscribe({
      next: () => this.loadSolicitudes(),
      error: (err) => console.error('Error al borrar solicitud', err)
    });
  }
  
  irAEditar(id: number): void {
    this.router.navigate(['/solicitudes/editar', id]);
  }
  
  irANuevaSolicitud() {
    this.router.navigate(['/solicitudes/nueva']);
  }
}