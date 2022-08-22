import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IHealthData } from '../Interfaces/ihealth-data';
import { Result, Ok, Err } from '@sniptt/monads';

@Component({
  selector: 'app-edithealthdata',
  templateUrl: './edithealthdata.component.html',
  styleUrls: ['./edithealthdata.component.css'],
})
export class EdithealthdataComponent implements OnInit {
  @Output() onEdit = new EventEmitter<IHealthData>();
  @Input() public healthdata: IHealthData = {
    text: '',
  };
  constructor() {}

  ngOnInit(): void {
    //console.log(this.healthdata);
  }
  editData() {
    this.onEdit.emit(this.healthdata);
  }
}
