import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitudesService } from '../../services/solicitudes.service';

@Component({
  selector: 'app-solicitud-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './solicitud-form.component.html',
  styleUrls: ['./solicitud-form.component.scss']
})
export class SolicitudFormComponent {
  solicitudForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private solicitudesService: SolicitudesService,
    private router: Router
  ) {
    this.solicitudForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      monto: [0, Validators.required],
      estado: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.solicitudForm.valid) {
      this.solicitudesService.createSolicitud(this.solicitudForm.value).subscribe(() => {
        this.router.navigate(['/solicitudes']);
      });
    }
  }
}