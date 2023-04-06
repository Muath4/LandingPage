import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./chart/chart.component').then(mod => mod.ChartComponent) },
  { path: 'statistics', loadComponent: () => import('./chart/chart.component').then(mod => mod.ChartComponent) },
  { path: 'main', loadComponent: () => import('./chart/chart.component').then(mod => mod.ChartComponent) },
  { path: '**', loadComponent: () => import('./chart/chart.component').then(mod => mod.ChartComponent) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
