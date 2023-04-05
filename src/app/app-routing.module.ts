import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';


const routes: Routes = [
  { path: 'main', loadComponent: () => import('./main/main.component').then(mod => mod.MainComponent) },
  { path: 'services', loadComponent: () => import('./services/services.component').then(mod => mod.ServicesComponent) },
  { path: 'contact', loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent) },
  { path: 'term-of-use', loadComponent: () => import('./terms-of-use/terms-of-use.component').then(mod => mod.TermsOfUseComponent) },
  { path: 'statistics', loadComponent: () => import('./chart/chart.component').then(mod => mod.ChartComponent) },
  { path: 'FAQ', loadComponent: () => import('./FAQ/FAQ.component').then(mod => mod.FAQComponent) },
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', loadComponent: () => import('./not-found/not-found.component').then(mod => mod.NotFoundComponent) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*
import { MainComponent } from './main/main.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { FAQComponent } from './FAQ/FAQ.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'term-of-use', component: TermsOfUseComponent },
  { path: 'FAQ', component: FAQComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

*/