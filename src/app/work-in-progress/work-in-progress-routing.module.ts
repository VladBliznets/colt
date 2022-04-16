import { NgModule } from '@angular/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { Routes, RouterModule } from '@angular/router';

import { WorkInProgressComponent } from './work-in-progress.component';

const routes: Routes = [{ path: '', component: WorkInProgressComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkInProgressRoutingModule { }
