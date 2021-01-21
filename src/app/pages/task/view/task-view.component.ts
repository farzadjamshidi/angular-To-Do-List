import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/core/helpers/task.service';
import { Task, TaskPriority } from 'src/app/models/task';
import * as _ from 'lodash';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  task : Task;
  taskPriorityEnum;

  constructor(
    private activatedRoute : ActivatedRoute,
    private taskService : TaskService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((res) => {
      if(res && res.taskId)
        this.task = this.taskService.getTaskById(res.taskId)
    });

    this.taskPriorityEnum = _.invert(TaskPriority);
  }

}
