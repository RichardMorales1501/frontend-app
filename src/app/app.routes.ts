import { Routes } from '@angular/router';
import { SolicitudesListComponent } from './components/solicitudes-list/solicitudes-list.component';
import { SolicitudFormComponent } from './components/solicitud-form/solicitud-form.component';
import { NewSolicitudFormComponent } from './components/new-solicitud-form/new-solicitud-form.component'; // 📌 Importa el nuevo componente


export const routes: Routes = [
  { path: '', redirectTo: 'solicitudes', pathMatch: 'full' },
  { path: 'solicitudes', component: SolicitudesListComponent },
  { path: 'solicitudes/editar/:id', component: SolicitudFormComponent },
  { path: 'solicitudes/nueva', component: NewSolicitudFormComponent } // ✅ Asegúrate de que esta ruta existe
];