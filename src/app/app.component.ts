import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PromptListComponent } from './prompt-list/prompt-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    HeaderComponent,
    SidebarComponent,
    PromptListComponent
  ],
  template: `
    <app-header></app-header>
    <mat-sidenav-container>
      <mat-sidenav mode="side" opened>
        <app-sidebar></app-sidebar>
      </mat-sidenav>
      <mat-sidenav-content>
        <app-prompt-list></app-prompt-list>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: []
})
export class AppComponent { }
