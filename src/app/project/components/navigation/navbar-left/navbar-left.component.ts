import { Component, OnInit } from '@angular/core';
import { AuthQuery } from '@trungk18/project/auth/auth.query';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { SearchDrawerComponent } from '../../search/search-drawer/search-drawer.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddIssueModalComponent } from '../../add-issue-modal/add-issue-modal.component';
import { DialogType } from '@trungk18/project/models/auth-dialog-type';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {User} from 'src/app/project/models/user';
import { AuthDialogService } from '@trungk18/project/services/auth-dialog.service';
import { AuthenticationService } from 'src/app/project/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.scss']
})
export class NavbarLeftComponent implements OnInit {
  public authorizedUser: User;
  public dialogType = DialogType;
  items: NavItem[];
  constructor(
    public authQuery: AuthQuery,
    private authDialogService: AuthDialogService,
    private authService:AuthenticationService,
    private _drawerService: NzDrawerService,
    private _modalService: NzModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.items = [
     // new NavItem('search', 'Search issues', this.openSearchDrawler.bind(this)),
      new NavItem('plus', 'Додати задачу', this.openCreateIssueModal.bind(this))
    ];
  }

  openCreateIssueModal() {
    this._modalService.create({
      nzContent: AddIssueModalComponent,
      nzClosable: false,
      nzFooter: null,
      nzWidth: 700
    });
  }
  public openAuthDialog(type: DialogType) {
    this.authDialogService.openAuthDialog(type);
}
public logout() {
  this.authService.logout();
  this.authorizedUser = undefined;
  this.router.navigate(['/']);
}
  openSearchDrawler() {
    this._drawerService.create({
      nzContent: SearchDrawerComponent,
      nzTitle: null,
      nzPlacement: 'left',
      nzClosable: false,
      nzWidth: 500
    });
  }
}

class NavItem {
  constructor(public icon: string, public tooltip: string, public handler: Handler) {}
}

type Handler = () => void;
