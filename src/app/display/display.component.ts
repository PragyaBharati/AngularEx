import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styles: [
  ]
})
export class DisplayComponent implements OnInit {

  constructor(public objs:StudentService) { }

  ngOnInit(): void {
    this.objs.StudentList();
  }

}

