import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/helpers/project.service';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects : Project[];

  constructor(
    private projectServise : ProjectService
  ) { }

  ngOnInit(): void {

    this.projects = this.projectServise.getProjects();
  }

}
