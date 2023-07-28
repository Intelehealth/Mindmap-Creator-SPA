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

  tooltips = {
    txtText: "Edit Text",
    txtDisplay: "Edit Display English Text",
    ddisRequired: "Update is this question Required?",
    ddMultiChoice: "Update is this Multi Choice question?",
    txtDisplayOR: "Edit Display Odiya Text",
    txtDisplayHI: "Edit Display Hindi Text",
    txtpopup: "Edit Popup English Text",
    txtpopuphi: "Edit Popup Hindi Text",
    txtpopupor: "Edit Popup Odiya Text",
    txtLanguage: "Edit Language to be shown in history note",
    txtInputType: "Update Input Type",
    txtGender: "Update Gender",
    txtPosCon: "Edit Positive Condition",
    txtNegCon: "Edit Negative Condition",
    txtPPE: "Edit Perform Physical Exam",
    txtcitation: "Edit Citation",
    txtsnomed: "Edit Snomed",
    txticd: "Edit ICD-10",
    txtloinc: "Edit LOINC",
    txtjobaidtype: "Edit Job Aid Type",
    txtjobaidfile: "Edit Job Aid File",
    txtassocomplaint: "Edit Associated Complaint",
    ddExcludeMultiChoice: "Update is this Exclude From Multi Choice question?",
    txtAgeMin: "Update Minimum Age",
    txtAgeMax: "Update Maximum Age",
  }

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
