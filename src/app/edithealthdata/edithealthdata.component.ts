import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IHealthData } from '../Interfaces/ihealth-data';
import { Result, Ok, Err } from '@sniptt/monads';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  selectedMaxAgeValue = '';
  selectedMinAgeValue = '';
  ages: Array<number> = [];
  myForm = new FormGroup({
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
    txtAgeMin: new FormControl('', [Validators.required]),
    txtAgeMax: new FormControl('', [Validators.required]),
  });
  ageMaxHasError: boolean = false;
  ageMinHasError: boolean = false;
  positiveCondition: boolean = false;
  negativeCondition: boolean = false;
  constructor() {
    for (var i = 1; i <= 120; i++) {
      this.ages.push(i);
    }
  }

  ngOnInit(): void {
    // console.log(this.healthdata);
    if (
      this.healthdata.text.toLowerCase() == 'Associated symptoms'.toLowerCase()
    ) {
      this.positiveCondition = true;
      this.negativeCondition = true;
    } else {
      this.positiveCondition = false;
      this.negativeCondition = false;
    }
  }
  onSubmit() {
    this.onEdit.emit(this.healthdata);
  }
  onSelectedMinAge(value: string): void {
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
  }
}
