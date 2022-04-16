import { Injectable, OnDestroy } from '@angular/core';
import { DialogType } from 'src/app/project/models/auth-dialog-type';
import { AuComponent } from 'src/app/project/au/au.component';
import { User } from '../models/user';
import { MatDialog } from '@angular/material/dialog';
import { map, takeUntil } from 'rxjs/operators';
import { AuthenticationService } from './auth.service';
import { Subscription, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthDialogService implements OnDestroy {
    private unsubscribe$ = new Subject<void>();

    public constructor(private dialog: MatDialog, private authService: AuthenticationService) {}

    public openAuthDialog(type: DialogType) {
        const dialog = this.dialog.open(AuComponent, {
            data: { dialogType: type },
            minWidth: 300,
            autoFocus: true,
            backdropClass: 'dialog-backdrop',
            position: {
                top: '0'
            }
        });

        dialog
            .afterClosed()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((result: User) => {
                if (result) {
                    this.authService.setUser(result);
                }
            });
    }

    public ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
