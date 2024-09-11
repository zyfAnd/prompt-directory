import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary">
      <span>Prompts</span>
      <span class="spacer"></span>
      <button mat-button>Get latest updates</button>
      <button mat-raised-button color="accent">Subscribe</button>
    </mat-toolbar>
  `,
  styles: ['.spacer { flex: 1 1 auto; }']
})
export class HeaderComponent { }
