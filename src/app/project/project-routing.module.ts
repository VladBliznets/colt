import { HomeModule } from './../home/home.module';
import { HomeComponent } from './../home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProjectComponent } from './project.component';
import { ProjectConst } from './config/const';
import { FullIssueDetailComponent } from './pages/full-issue-detail/full-issue-detail.component';
import { AuthhComponent } from './authh/authh.component';
import { AuComponent } from './au/au.component';

const routes: Routes = [
  {
    path: '',
    component: AuthhComponent,
    children: [
      {
    path: '',
    component: ProjectComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../../app/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'board',
        component: BoardComponent
      },
      {
        path: `issue/:${ProjectConst.IssueId}`,
        component: FullIssueDetailComponent
      }

      ]}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {}
