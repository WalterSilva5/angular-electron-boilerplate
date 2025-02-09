import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { SystemInfoComponent } from './pages/system-info/system-info.component';

const routes: Routes = [
  { path:  '/', component:  AboutComponent },
  { path:  'about', component:  AboutComponent },
  { path:  'info', component:  SystemInfoComponent },
//  { path: '404', component: NotfoundComponent },
//  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
