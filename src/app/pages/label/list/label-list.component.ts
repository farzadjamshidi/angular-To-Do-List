import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/core/helpers/label.service';
import { Label } from 'src/app/models/label';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss']
})
export class LabelListComponent implements OnInit {

  labels : Label[];

  constructor(
    private labelService : LabelService
  ) { }

  ngOnInit(): void {

    this.labels = this.labelService.getLabels();

  }

}
