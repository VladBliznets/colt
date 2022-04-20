import { MatFormFieldModule } from '@angular/material/form-field';

import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogType } from 'src/app/project/models/auth-dialog-type';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/project/services/auth.service';
import { takeUntil } from 'rxjs/operators';
import { SnackBarService } from 'src/app/project/services/snack-bar.service';
import { AuthDialogService } from '../services/auth-dialog.service';


@Component({
    templateUrl: './au.component.html',
    styleUrls: ['./au.component.scss']
})
export class AuComponent implements OnInit, OnDestroy 
{
    public authDialogService: AuthDialogService;
    public dialogType = DialogType;
    public userName: string;
    public password: string;
    public avatar: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public password2:string;
    public hidePass = true;
    public title: string;
    private unsubscribe$ = new Subject<void>();
    public birthDay:Date;
    constructor(
        private dialogRef: MatDialogRef<AuComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private authService: AuthenticationService,
        private snackBarService: SnackBarService
    ) { }

    public ngOnInit() {
        this.avatar = 'https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/orig';
        this.title = this.data.dialogType === DialogType.SignIn ? 'Sign In' : 'Sign Up';
    }
    public openAuthDialog(type: DialogType) {
        this.authDialogService.openAuthDialog(type);
    }
    public ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    public close() {
        this.dialogRef.close(false);
    }

    public signIn() {
        this.authService
            .login({ username: this.userName, password: this.password })
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((response) => this.dialogRef.close(response)
            , (error) => this.snackBarService.showErrorMessage(error)
            );
    }

    public signUp() {
        this.authService
            .register({
                username: this.userName, firstName: this.firstName, lastName: this.lastName, password: this.password, password2: this.password2, email: this.email,
                  birthDay:this.birthDay
            })
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((response) => this.dialogRef.close(response)
            , (error) => this.snackBarService.showErrorMessage(error)
            );
    }
}
