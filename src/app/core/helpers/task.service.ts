import { Injectable } from '@angular/core';
import { Label } from 'src/app/models/label';
import { Task } from 'src/app/models/task';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = new Array();

  constructor(
    private dateService: DateService
  ) { }

  public getTasks(searchParams?: { deadline: string, labelId: string, projectId: string }): Task[] {

    if (!searchParams)
      return this.tasks;

    let filteredTasks: Task[];

    if (searchParams && searchParams.projectId) {


      filteredTasks = this.tasks.filter(item => {

        return item.project.id === searchParams.projectId;
      });

      return filteredTasks;

    }

    if (searchParams && searchParams.labelId) {


      filteredTasks = this.tasks.filter(item => {

        let labelIds = [];

        if (item.labels && item.labels.length > 0) {

          labelIds = item.labels.reduce((labelIds, label) => {

            labelIds.push(label.id);
            return labelIds;
          }, []);

          return labelIds.indexOf(searchParams.labelId) > -1;
        }
        else {

          return false;
        }
      });

      return filteredTasks;

    }

    if (searchParams && searchParams.deadline) {

      let wantedDeadline: Date;

      switch (searchParams.deadline) {
        case 'today':

          wantedDeadline = this.dateService.endOfDate(new Date());

          break;
        case 'thisweek':

          wantedDeadline = this.dateService.endOfDate(new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)));

          break;

        default:
          break;

      }

      filteredTasks = this.tasks.filter(item => {

        const unixItemDeadline = new Date(item.deadline).getTime();
        const unixWantedDeadline = wantedDeadline.getTime();
        const unixStartDate = this.dateService.startOfDate(new Date()).getTime();

        return (unixItemDeadline < unixWantedDeadline && unixItemDeadline > unixStartDate);
      });

      return filteredTasks;
    }
  }

  public insertTask(task: Task) {

    if( (new Date(task.deadline)).getTime() <= task.createAt.getTime() ){
      
      alert("Task deadline Time must be greater than task create time (now)!");
      return;
    }

    this.tasks.push(task);
  }

  getTaskById(taskId: string): Task {

    return this.tasks.find(item => {

      return item.id === taskId;
    });

  }

  updateTask(editedTask: Task) : void {

    let editedTaskIndex = -1;

    this.tasks.forEach((item, index) => {

      if(item.id === editedTask.id)
        editedTaskIndex = index;
      
    });

    if(editedTaskIndex > -1)
      this.tasks[editedTaskIndex] = editedTask;

  }

}
