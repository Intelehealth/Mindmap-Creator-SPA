import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IHealthData } from '../Interfaces/ihealth-data';
import { Result, Ok, Err } from '@sniptt/monads';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgeCompareValidator } from '../validators/agecomparevalidator';
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
  selectedMaxAgeValue = '';
  selectedMinAgeValue = '';
  ages: Array<number> = [];

  myForm = new FormGroup(
    {
      txtText: new FormControl(),
      txtDisplay: new FormControl(),
      txtDisplayOR: new FormControl(),
      txtDisplayHI: new FormControl(),
      txtLanguage: new FormControl(),
      txtInputType: new FormControl(),
      txtGender: new FormControl(),
      txtPosCon: new FormControl(),
      txtNegCon: new FormControl(),
      txtPPE: new FormControl(),
      txtAgeMin: new FormControl('txtAgeMin', [Validators.required]),
      txtAgeMax: new FormControl('txtAgeMax', [Validators.required]),
    },

    { validators: AgeCompareValidator }
  );

  ageMaxHasError: boolean = false;
  ageMinHasError: boolean = false;
  constructor() {
    for (var i = 1; i <= 120; i++) {
      this.ages.push(i);
    }
  }

  ngOnInit() {}
  onSubmit() {
    this.addData.id = Math.random().toString();
    this.onSave.emit(this.addData);
  }
  /* onSelectedMinAge(value: string): void {
    this.selectedMinAgeValue = value;
    if (this.selectedMaxAgeValue < this.selectedMinAgeValue) {
      this.ageMinHasError = true;
    } else {
      this.ageMinHasError = false;
    }
  }
  onSelected(value: string): void {
    this.selectedMaxAgeValue = value;
    if (this.selectedMaxAgeValue > this.selectedMinAgeValue) {
      this.ageMaxHasError = false;
    } else {
      this.ageMaxHasError = true;
    }
  }*/
}
