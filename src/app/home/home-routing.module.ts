import { HomeComponent } from './../home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from '@trungk18/project/pages/board/board.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
