import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabelListComponent } from './pages/label/list/label-list.component';
import { LabelViewComponent } from './pages/label/view/label-view.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectViewComponent } from './pages/project/view/project-view.component';
import { TaskEditComponent } from './pages/task/edit/task-edit.component';
import { TaskViewComponent } from './pages/task/view/task-view.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"projects", component: ProjectComponent},
  {path:"project/:projectId", component: ProjectViewComponent},
  {path:"project/:projectId/task/:taskId", component: TaskViewComponent},
  {path:"project/:projectId/task/:taskId/edit", component: TaskEditComponent},
  {path:"labels", component: LabelListComponent},
  {path:"label/:labelId", component: LabelViewComponent},
  {path:"**", redirectTo:"home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
