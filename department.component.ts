import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
	names=['IT','Marketing','HR','Accounts'];

  constructor() { }

  ngOnInit() {
  }

}
