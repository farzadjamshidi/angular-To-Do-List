import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateService } from 'src/app/core/helpers/date.service';
import { LabelService } from 'src/app/core/helpers/label.service';
import { ProjectService } from 'src/app/core/helpers/project.service';
import { TaskService } from 'src/app/core/helpers/task.service';
import { Label } from 'src/app/models/label';
import { Project } from 'src/app/models/project';
import { Task, TaskPriority } from 'src/app/models/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  // taskTitle: string;
  // taskProject: Project;
  // taskLabels: Label[];
  // taskDeadline: string;
  minTaskDeadline : string;
  // taskPriority: TaskPriority | "";
  taskPriorities;
  projects : Project[];
  labels : Label[];

  // @Input() project : Project;

  task : Task;
  taskPriorityEnum;
  
  constructor(
    private activatedRoute : ActivatedRoute,
    private taskService : TaskService,
    private projectService : ProjectService,
    private labelService : LabelService,
    private dateService : DateService
  ) { }
  

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((res) => {
      if(res && res.taskId)
        this.task = this.taskService.getTaskById(res.taskId)
    });

    this.projects = this.projectService.getProjects();
    this.labels = this.labelService.getLabels();
    this.taskPriorities =  TaskPriority;
    this.minTaskDeadline = this.dateService.toTimeZoneString(new Date());
  }

  public saveTask(){

    if(!this.task.title){
      alert("Task title is required");
      return;
    }

    this.taskService.updateTask(this.task);
  }
}
