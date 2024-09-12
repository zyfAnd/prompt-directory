import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptListComponent } from './prompt-list/prompt-list.component';

const routes: Routes = [
  { path: 'typescript', component: PromptListComponent, data: { category: 'TypeScript' } },
  { path: 'python', component: PromptListComponent, data: { category: 'Python' } },
  { path: 'react', component: PromptListComponent, data: { category: 'React' } },
  { path: 'java', component: PromptListComponent, data: { category: 'Java' } },
  { path: 'web', component: PromptListComponent, data: { category: 'Web' } },
  { path: 'beginner', component: PromptListComponent, data: { category: 'Beginner' } },
  { path: 'angular', component: PromptListComponent, data: { category: 'Angular' } },
  { path: 'uiux-design', component: PromptListComponent, data: { category: 'UIUX-Design' } },
  { path: '', redirectTo: '/typescript', pathMatch: 'full' },
  { path: '**', redirectTo: '/typescript' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
