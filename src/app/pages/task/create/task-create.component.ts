import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DateService } from 'src/app/core/helpers/date.service';
import { LabelService } from 'src/app/core/helpers/label.service';
import { ProjectService } from 'src/app/core/helpers/project.service';
import { TaskService } from 'src/app/core/helpers/task.service';
import { Label } from 'src/app/models/label';
import { Project } from 'src/app/models/project';
import { Task, TaskPriority } from 'src/app/models/task';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit, OnChanges {

  taskTitle: string;
  taskProject: Project;
  taskLabels: Label[];
  taskDeadline: string;
  minTaskDeadline : string;
  taskPriority: TaskPriority | "";
  taskPriorities;
  projects : Project[];
  labels : Label[];

  @Input() project : Project;

  constructor(
    private taskService : TaskService,
    private projectService : ProjectService,
    private labelService : LabelService,
    private dateService : DateService
  ) { }
  

  ngOnInit(): void {

    this.projects = this.projectService.getProjects();
    this.labels = this.labelService.getLabels();
    this.taskProject = this.projects[0];
    this.taskPriorities =  TaskPriority;
    this.minTaskDeadline = this.dateService.toTimeZoneString(new Date());
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.project && changes.project.currentValue !== changes.project.previousValue) {

      this.project = changes.project.currentValue;
    }
  }

  public saveTask(){

    if(!this.taskTitle){
      alert("Task title is required");
      return;
    }

    if(this.project){

      this.taskProject = this.project;
    }

    let newTask = new Task(
      this.taskTitle,
      this.taskProject,
      this.taskLabels,
      this.taskDeadline,
      this.taskPriority
    );

    this.taskService.insertTask(newTask);
  }

}
