import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-label-view',
  templateUrl: './label-view.component.html',
  styleUrls: ['./label-view.component.scss']
})
export class LabelViewComponent implements OnInit {

  labelId : string;

  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((res) => {
      if(res && res.labelId)
        this.labelId = res.labelId;
    });
  }

}
