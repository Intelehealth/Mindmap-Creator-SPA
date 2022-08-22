import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IHealthData } from '../Interfaces/ihealth-data';

@Component({
  selector: 'app-modaledithealthdata',
  templateUrl: './modaledithealthdata.component.html',
  styleUrls: ['./modaledithealthdata.component.css'],
})
export class ModaledithealthdataComponent implements OnInit {
  @Input() public healthdata: IHealthData = {
    text: '',
  };
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
  editData(hdata: IHealthData) {
    console.log('health data', hdata);
    this.modal.close(hdata);
  }
}
