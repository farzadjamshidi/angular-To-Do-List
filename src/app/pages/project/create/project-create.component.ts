import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/helpers/project.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  
  projectTitle: string;

  constructor(
    private projectService : ProjectService
  ) { }

  ngOnInit(): void {
  }

  saveProject() {

    if(!this.projectTitle){
      alert("Project title is required");
      return;
    }

    let newProject = new Project(this.projectTitle);

    this.projectService.insertProject(newProject);

  }
}
