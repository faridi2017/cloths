import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothesRoutingModule } from './clothes-routing.module';
import { ListclothComponent } from './listcloth/listcloth.component';
import { AddclothComponent } from './addcloth/addcloth.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddclothComponent,
    ListclothComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClothesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClothesModule { }
