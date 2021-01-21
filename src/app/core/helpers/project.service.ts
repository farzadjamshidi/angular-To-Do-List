import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  projects : Project[] = new Array();

  constructor() { 
    let defualtProject = new Project("default");
    this.insertProject(defualtProject);
  }

  public getProjects() : Project[]{

    return this.projects;
  }

  public insertProject(project : Project) : void{

    this.projects.push(project);
  }

  public getProjectById(projectId: any): Project {

    return this.projects.find((item) => { return item.id === projectId});
  }
}
