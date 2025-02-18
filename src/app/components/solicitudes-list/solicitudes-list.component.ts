import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudesService, Solicitud } from '../../services/solicitudes.service';

@Component({
  selector: 'app-solicitudes-list',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Lista de Solicitudes</h2>`,
  styleUrls: ['./solicitudes-list.component.scss']

})
export class SolicitudesListComponent implements OnInit {
  solicitudes: Solicitud[] = [];

  constructor(private solicitudesService: SolicitudesService) {}

  ngOnInit(): void {
    this.loadSolicitudes();
  }

  loadSolicitudes(): void {
    this.solicitudesService.getSolicitudes().subscribe({
      next: (data) => this.solicitudes = data,
      error: (err) => console.error(err),
    });
  }

  deleteSolicitud(id: number): void {
    this.solicitudesService.deleteSolicitud(id).subscribe({
      next: () => this.loadSolicitudes(),
      error: (err) => console.error(err),
    });
  }
}