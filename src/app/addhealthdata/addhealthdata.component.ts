import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IHealthData } from '../Interfaces/ihealth-data';
import { Result, Ok, Err } from '@sniptt/monads';

@Component({
  selector: 'app-addhealthdata',
  templateUrl: './addhealthdata.component.html',
  styleUrls: ['./addhealthdata.component.css'],
})
export class AddhealthdataComponent implements OnInit {
  @Output() onSave = new EventEmitter<IHealthData>();
  addData: IHealthData = {
    text: '',
  };

  constructor() {}

  ngOnInit(): void {}
  saveData() {
    this.addData.id = Math.random().toString();
    this.onSave.emit(this.addData);
  }
}
