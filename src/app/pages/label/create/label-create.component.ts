import { Component, OnInit } from '@angular/core';
import { LabelService } from 'src/app/core/helpers/label.service';
import { Label } from 'src/app/models/label';

@Component({
  selector: 'app-label-create',
  templateUrl: './label-create.component.html',
  styleUrls: ['./label-create.component.scss']
})
export class LabelCreateComponent implements OnInit {

  labelTitle : string;
  labelColor : string;

  constructor(
    private labelService : LabelService

  ) { }

  ngOnInit(): void {
  }

  public saveLabel() {

    if(!this.labelTitle){
      alert("Label title is required");
      return;
    }

    let newLabel = new Label(this.labelTitle, this.labelColor);

    this.labelService.insertLabel(newLabel);

  }
  
}
