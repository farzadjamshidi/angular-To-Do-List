import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectListComponent } from './pages/project/list/project-list.component';
import { ProjectViewComponent } from './pages/project/view/project-view.component';
import { ProjectCreateComponent } from './pages/project/create/project-create.component';
import { TaskViewComponent } from './pages/task/view/task-view.component';
import { TaskListComponent } from './pages/task/list/task-list.component';
import { TaskCreateComponent } from './pages/task/create/task-create.component';
import { LabelListComponent } from './pages/label/list/label-list.component';
import { LabelViewComponent } from './pages/label/view/label-view.component';
import { LabelCreateComponent } from './pages/label/create/label-create.component';
import { ProjectComponent } from './pages/project/project.component';
import { TimeZoneDatePipe } from './core/pipes/time-zone-date.pipe';
import { TaskEditComponent } from './pages/task/edit/task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectViewComponent,
    ProjectCreateComponent,
    TaskViewComponent,
    TaskListComponent,
    TaskCreateComponent,
    LabelListComponent,
    LabelViewComponent,
    LabelCreateComponent,
    TimeZoneDatePipe,
    TaskEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
