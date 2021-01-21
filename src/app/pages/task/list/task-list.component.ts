import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TaskService } from 'src/app/core/helpers/task.service';
import { Task, TaskPriority } from 'src/app/models/task';
import * as _ from 'lodash';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnChanges {

  tasks: Task[] = new Array();
  tasksTitle: string = "";
  taskPriorityEnum;

  @Input() labelId: string;
  @Input() projectId: string;
  @Input() tasksMode: string;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.tasksMode && changes.tasksMode.currentValue !== changes.tasksMode.previousValue) {

      let searchParams;

      if (changes.tasksMode.currentValue) {

        searchParams = { deadline: changes.tasksMode.currentValue };

        if(changes.tasksMode.currentValue ==='today'){
          this.tasks = _.orderBy(this.taskService.getTasks(searchParams), ['priority'], ['asc'])
        }else{

          this.tasks = this.taskService.getTasks(searchParams);
        }

        switch (changes.tasksMode.currentValue) {
          case 'today':

          this.tasksTitle = "(Today)";

            break;
          case 'thisweek':

            this.tasksTitle = "(This Week)";

            break;

          default:
            break;
        }
      }
    }
  }

  ngOnInit(): void {

    this.taskPriorityEnum = _.invert(TaskPriority);

    let searchParams;

    if (this.tasksMode)
      searchParams = { deadline: this.tasksMode };
    if (this.labelId)
      searchParams = { labelId: this.labelId }
    if (this.projectId)
      searchParams = { projectId: this.projectId }

    this.tasks = this.taskService.getTasks(searchParams);

    if(this.tasksMode === 'today'){
      this.tasks = _.orderBy(this.tasks, ['priority'], ['asc'])
    }
  }

}
