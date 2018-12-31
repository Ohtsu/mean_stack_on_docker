import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsectionListComponent } from './components/gsection-list/gsection-list.component';
import { GsectionCreateComponent } from './components/gsection-create/gsection-create.component';
import { GsectionEditComponent } from './components/gsection-edit/gsection-edit.component';
import { GsectionViewComponent } from './components/gsection-view/gsection-view.component';

const routes: Routes = [
  { path: 'gsectionedit/:id', component: GsectionEditComponent },
  { path: 'gsectioncreate', component: GsectionCreateComponent },
  { path: 'gsectionlist', component: GsectionListComponent },
  { path: 'gsectionview/:id', component: GsectionViewComponent },
  { path: '', redirectTo: 'gsectionlist', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
