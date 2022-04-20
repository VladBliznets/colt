import { CreateProjectDto } from './../project/models/CreateProjectDto';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateProjectService } from '@trungk18/project/services/create-project.service';
import { CreateProjectDialogComponent } from './create-project-dialog/create-project-dialog.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public projects: CreateProjectDto[] = [];
  constructor(public dialog: MatDialog, public projectService: CreateProjectService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectDialogComponent, {
      width: '350px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.projects.push(result);
      this.projectService.create(result).subscribe(result => console.log(result));
    });
  }
}
