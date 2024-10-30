import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromptListComponent } from './prompt-list/prompt-list.component';

const routes: Routes = [
  // Programming Languages
  { path: 'typescript', component: PromptListComponent, data: { category: 'TypeScript' } },
  { path: 'python', component: PromptListComponent, data: { category: 'Python' } },
  { path: 'angular', component: PromptListComponent, data: { category: 'Angular' } },
  { path: 'react', component: PromptListComponent, data: { category: 'React' } },
  
  // Acting
  { path: 'web', component: PromptListComponent, data: { category: 'Web' } },
  { path: 'uiux-design', component: PromptListComponent, data: { category: 'UIUX-Design' } },
  { path: 'content-creation', component: PromptListComponent, data: { category: 'Content Creation' } },
  { path: 'software-development', component: PromptListComponent, data: { category: 'Software Development' } },
  { path: 'data-analysis', component: PromptListComponent, data: { category: 'Data Analysis' } },
  { path: 'marketing-strategy', component: PromptListComponent, data: { category: 'Marketing Strategy' } },
  { path: 'web-developer', component: PromptListComponent, data: { category: 'Web Developer' } },
  { path: 'business-analysis', component: PromptListComponent, data: { category: 'Business Analysis' } },
  
  { path: '', redirectTo: '/typescript', pathMatch: 'full' },
  { path: '**', redirectTo: '/typescript' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
