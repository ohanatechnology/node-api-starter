import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YachtListComponent } from './yacht-list/yacht-list.component';

const routes: Routes = [
  { path:'yacht-list', component:YachtListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
