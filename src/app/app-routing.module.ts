import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component'
import { DetailsComponent } from './details/details.component'
import { EditPanelComponent } from './edit-panel/edit-panel.component'


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'details/:title', component: DetailsComponent },
  { path: 'edit', component: EditPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
