import { Injectable } from '@angular/core';
import { Label } from 'src/app/models/label';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  labels : Label[] = new Array();
  constructor() { }

  public getLabels(){

    return this.labels;
  }

  public insertLabel(label : Label){

    this.labels.push(label);
  }
}
