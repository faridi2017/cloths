import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddclothComponent } from './addcloth/addcloth.component';
import { HomeComponent } from './home/home.component';
import { ListclothComponent } from './listcloth/listcloth.component';

const routes: Routes = [
      { path: 'add', component: AddclothComponent },
      { path: 'list', component: ListclothComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothesRoutingModule { }
