import { NgModule } from '@angular/core';
import { MatSidenavModule, MatToolbarModule, MatTabsModule, MatListModule, MatGridListModule, MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule } from '@angular/material';
import { InViewportModule } from 'ng-in-viewport';

@NgModule({
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    InViewportModule
  ]
})
export class SharedModule { }
