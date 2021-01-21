import { BaseModel } from './baseModel';
import { Project } from './project';
import { Label } from './label';

export class Task extends BaseModel {

    title: string;
    project: Project;
    labels: Label[];
    deadline: string;
    priority: TaskPriority | "";

    constructor(
        title: string,
        project: Project,
        labels?: Label[],
        deadline?: string,
        priority?: TaskPriority | "",

    ) {
        super();

        this.title = title;
        this.project = project;
        this.labels = labels;
        this.deadline = deadline;
        this.priority = priority;


    }
}

export enum TaskPriority {
    Highest = "1",
    High = "2",
    Medium = "3",
    Low = "4",
    Lowest = "5"
  }
// export enum TaskPriority {
//     Highest,
//     High,
//     Medium,
//     Low,
//     Lowest
//   }
// export enum TaskPriority {
//     1 = "Highest",
//   }