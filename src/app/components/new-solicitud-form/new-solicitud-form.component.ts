import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudesService, Solicitud } from '../../services/solicitudes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-solicitud-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // 🔹 IMPORTA ESTO
  templateUrl: './new-solicitud-form.component.html',
  styleUrls: ['./new-solicitud-form.component.scss']
})
export class NewSolicitudFormComponent {
  solicitudForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private solicitudesService: SolicitudesService,
    private router: Router
  ) {
    this.solicitudForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      monto: [null, [Validators.required, Validators.min(1)]],
      estado: ['en análisis', Validators.required] // 🔹 Valor por defecto
    });
  }

  onSubmit() {
    if (this.solicitudForm.valid) {
      const nuevaSolicitud: Solicitud = this.solicitudForm.value;
      console.log('📤 Enviando solicitud:', nuevaSolicitud);

      this.solicitudesService.createSolicitud(nuevaSolicitud).subscribe({
        next: (data) => {
          console.log('✅ Solicitud creada:', data);
          alert('✅ Solicitud creada exitosamente');
          this.router.navigate(['/solicitudes']);
        },
        error: (err) => {
          console.error('❌ Error al crear solicitud:', err);
          alert('❌ Error al crear la solicitud');
        }
      });
    } else {
      alert('❌ El formulario no es válido');
    }
  }
}