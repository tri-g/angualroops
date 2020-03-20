import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
	names=['triveni','joey','tony','steve'];
	user:Object;

  constructor(private data:DataService) { }

  ngOnInit() {
  	this.data.getusers().subscribe(data=>{this.user=data
  		console.log(this.user)})

  }


fc()
{
	this.data.fc();
}
}
