import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IHealthData } from '../Interfaces/ihealth-data';
import { Result, Ok, Err } from '@sniptt/monads';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgeCompareValidator } from '../validators/agecomparevalidator';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
  ages: Array<number> = [];

  myForm = new FormGroup(
    {
      txtText: new FormControl(),
      txtDisplay: new FormControl(),
      ddisRequired: new FormControl(),
      ddMultiChoice: new FormControl(),
      txtDisplayOR: new FormControl(),
      txtDisplayHI: new FormControl(),
      txtpopup: new FormControl(),
      txtpopupor: new FormControl(),
      txtpopuphi: new FormControl(),
      txtLanguage: new FormControl(),
      txtInputType: new FormControl(),
      txtGender: new FormControl(),
      txtPosCon: new FormControl(),
      txtNegCon: new FormControl(),
      txtPPE: new FormControl(),
      txtcitation: new FormControl(),
      txtsnomed: new FormControl(),
      txticd: new FormControl(),
      txtloinc: new FormControl(),
      txtjobaidtype: new FormControl(),
      txtjobaidfile: new FormControl(),
      txtassocomplaint: new FormControl(),
      ddExcludeMultiChoice: new FormControl(),
      txtAgeMin: new FormControl('txtAgeMin'),
      txtAgeMax: new FormControl('txtAgeMax'),
    },

    { validators: AgeCompareValidator }
  );

  positiveCondition: boolean = false;
  negativeCondition: boolean = false;
  constructor( public modal: NgbActiveModal) {
    for (var i = 1; i <= 120; i++) {
      this.ages.push(i);
    }
  }

  ngOnInit(): void {
    if(this.healthdata.topic)this.healthdata.text = this.healthdata.topic;
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

  onTextSelection(e: any) {
    if (e.target.value.toLowerCase() == 'Associated symptoms'.toLowerCase()) {
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
}
