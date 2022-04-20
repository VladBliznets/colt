import { Category } from './../../project/models/category';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CreateProjectDto } from '../../project/models/CreateProjectDto';

@Component({
  selector: 'create-project-dialog',
  templateUrl: './create-project-dialog.component.html',
  styleUrls: ['./create-project-dialog.component.scss']
})
export class CreateProjectDialogComponent implements OnInit {
  public categories = Object.keys(Category).filter(e => isNaN(+e));
  public project: CreateProjectDto = {
    name: "",
    description: "",
    url: "",
    category: Category.Software
  };

  constructor(
    public dialogRef: MatDialogRef<CreateProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}
  
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  create() {
    this.dialogRef.close(this.project);
  }
}
