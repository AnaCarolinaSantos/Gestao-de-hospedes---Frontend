import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListReservasComponent } from './pages/list-reservas/list-reservas.component';
import { ListHospedesComponent } from './pages/list-hospedes/list-hospedes.component';
import { FormReservaComponent } from './pages/form-reserva/form-reserva.component';
import { FormHospedeComponent } from './pages/form-hospede/form-hospede.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list-reservas', component: ListReservasComponent },
  { path: 'list-hospedes', component: ListHospedesComponent },
  { path: 'form-reserva/:id', component: FormReservaComponent },
  { path: 'form-hospede/:id', component: FormHospedeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
