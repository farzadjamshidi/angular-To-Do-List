import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  tasksMode : string;
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('home change', changes);
  }

  ngOnInit(): void {

    let defaultTaskMode = "today";

    this.activatedRoute.queryParams.subscribe((res) => {
      if(res && res.mode)
        this.tasksMode = res.mode;
      else
        this.tasksMode = defaultTaskMode;
    });
  }

}
