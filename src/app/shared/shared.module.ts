import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDialogModule } from '@angular/material';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { ThemeDialogComponent } from './theme-dialog/theme-dialog.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    MessageDialogComponent,
    ThemeDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule
  ],
  entryComponents:[
    ConfirmDialogComponent,
    MessageDialogComponent,
    ThemeDialogComponent
  ],
  exports: [
    ConfirmDialogComponent,
    MessageDialogComponent,
    ThemeDialogComponent
  ]
})
export class SharedModule { }
