import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <span>Prompts</span>
      <span class="spacer"></span>
      <div class="subscribe-container">
        <mat-form-field appearance="outline" class="input-field">
          <mat-label>Get latest updates</mat-label>
          <input matInput [(ngModel)]="updateInput" />
        </mat-form-field>
        <button mat-raised-button color="accent" class="subscribe-button" (click)="subscribe()">Subscribe</button>
      </div>
    </mat-toolbar>
  `,
  styles: [`
    .toolbar {
      align-items: center; /* 确保工具栏内容垂直居中 */
      padding-top: 8px; /* 添加顶部内边距 */
    }
    .spacer {
      flex: 1 1 auto;
    }
    .subscribe-container {
      display: flex;
      align-items: center; /* 确保输入框和按钮垂直居中 */
      background-color: #f5f5f5;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 4px;
    }
    .input-field {
      margin: 0;
      flex: 1;
      max-width: 200px; /* 设置输入框的最大宽度 */
      margin-top: 4px; /* 向下移动输入框 */
      height: 36px; /* 确保输入框高度与按钮一致 */
    }
    .input-field .mat-form-field-wrapper {
      padding-top: 0; /* 移除顶部内边距 */
      padding-bottom: 0;
    }
    .input-field .mat-form-field-flex {
      align-items: center; /* 确保输入框内容居中 */
      height: 100%; /* 确保输入框内容高度一致 */
    }
    .input-field .mat-form-field-outline {
      top: -4px; /* 调整 outline 的位置，确保不被截断 */
    }
    .input-field .mat-form-field-infix {
      padding: 0; /* 移除 infix 的内边距 */
    }
    .subscribe-button {
      margin-left: 8px;
      background-color: #000 !important; /* 修改按钮背景颜色为黑色 */
      color: #fff !important; /* 修改按钮字体颜色为白色 */
      height: 36px; /* 确保按钮高度与输入框一致 */
      line-height: 36px; /* 确保按钮文本垂直居中 */
    }
  `]
})
export class HeaderComponent {
  updateInput: string = '';

  subscribe() {
    console.log('Subscribed with:', this.updateInput);
    // 在这里添加订阅逻辑
  }
}
