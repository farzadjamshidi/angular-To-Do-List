import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/core/helpers/project.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

  projectId : string;
  project : Project;

  constructor(
    private activatedRoute : ActivatedRoute,
    private projectService : ProjectService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((res) => {
      if(res && res.projectId){

        this.projectId = res.projectId;
        this.project = this.projectService.getProjectById(res.projectId);
      }
    });
  }

}
