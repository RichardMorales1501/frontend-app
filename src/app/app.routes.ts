import { Routes } from '@angular/router';
import { SolicitudesListComponent } from './components/solicitudes-list/solicitudes-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'solicitudes', pathMatch: 'full' },
  { path: 'solicitudes', component: SolicitudesListComponent }
];