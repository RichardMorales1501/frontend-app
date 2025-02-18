import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudesService, Solicitud } from '../../services/solicitudes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solicitud-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './solicitud-form.component.html',
  styleUrls: ['./solicitud-form.component.scss']
})
export class SolicitudFormComponent implements OnInit {
  solicitudForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private solicitudesService: SolicitudesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.solicitudForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      monto: [0, Validators.required],
      estado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; 
    // Llama al servicio para cargar la solicitud
    this.solicitudesService.getSolicitudById(id).subscribe(solicitud => {
      // Precarga el formulario con los datos de la solicitud
      this.solicitudForm.patchValue(solicitud);
    });
  }

  onSubmit(): void {
    if (this.solicitudForm.valid) {
      const id = +this.route.snapshot.paramMap.get('id')!;
      this.solicitudesService.updateSolicitud(id, this.solicitudForm.value)
        .subscribe(() => {
          this.router.navigate(['/solicitudes']);
        });
    }
  }
}