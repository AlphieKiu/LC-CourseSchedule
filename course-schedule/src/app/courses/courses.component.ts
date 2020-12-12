import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  allCourses = [];
  availableCourses = [];
  myCourses = [];

  constructor() {}
    
  ngOnInit(): void {
    this.allCourses = [
      new Course('Now you are a developer', 'LC102', ['Mon', 'Wed'], '5:00pm', '6:00pm', 1),
      new Course('So you think you can code?', 'LC103', ['Mon','Wed'], '6:00pm', '7:00pm', 1),
      new Course('What is coding?', 'LC104',['Mon','Wed'], '7:00pm', '8:00pm', 1),
      new Course('Coding upside-down', 'LC105',['Mon','Wed'], '8:00pm', '9:00pm', 1),
      new Course('Code code code', 'LC106',['Mon','Wed'], '9:00pm', '10:00pm', 1),
      new Course('Fine let\'s code', 'LC107',['Tue','Thu'], '5:00pm', '6:00pm', 1),
      new Course('What?? code??', 'LC108',['Tue','Thu'], '6:00pm', '7:00pm', 1),
      new Course('Coding monkey now you are 1', 'LC109',['Tue','Thu'], '7:00pm', '8:00pm', 1),
      new Course('Coding monkey now you are 2', 'LC110',['Tue','Thu'], '8:00pm', '9:00pm', 1),
      new Course('Coding monkey now you are 3', 'LC111',['Tue','Thu'], '9:00pm', '10:00pm', 1),
    ]

    this.availableCourses = this.allCourses.slice(0);

    
  }

}
